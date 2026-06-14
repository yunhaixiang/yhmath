---
title: AI and the Game of Go
date: 2026-06-07 17:38:48 -0400
categories: [projects]
tags: [coding, games, go]
---

{{< pullquote author="Edward Lasker" >}}
The rules of Go are so elegant, organic, and rigorously logical that if intelligent life forms exist elsewhere in the universe, they almost certainly play Go.
{{< /pullquote >}}

It was 10 years ago when AlphaGo vs Lee Seedol happened. At the time I remember it was huge news in China. Now it seems much easier to make DIY Go AIs. Recently, I’ve decided to train my own Go AI as a side project. Unrelated to this, but something I have been thinking about is neurosymbolic machine learning and I wonder if Go would be a good testing ground for these ideas. 

## ResNet + MCTS

My first attempt is on a 9x9 board with Tromp–Taylor rules, recreating the KataGo/AlphaGo architecture of a ResNet (Residual Neural Network) and a MCTS (Monte Carlo Tree Search), which trains on self play. ResNet involves several layers. 
The first layer is the stem layer. It does a convolution, normalizes results, and applies ReLU activation. 

```python
class GoResNet(nn.Module):
    """Small AlphaZero/KataGo-style network for fixed-size Go boards."""

    self.stem = nn.Sequential(
        nn.Conv2d(input_channels, channels, kernel_size=3, padding=1, bias=False),
        nn.BatchNorm2d(channels),
        nn.ReLU(),
    )
```

Then there is the trunk layer, which has 4 residue blocks, each one convolves, normalizes, adds back the original data, and then ReLU activation. The step that adds back the original data is the main motif of ResNet, that one only needs to learn the additional data. 

```python
class ResidualBlock(nn.Module):
    """Two-convolution residual block."""

    def __init__(self, channels: int) -> None:
        super().__init__()
        self.conv1 = nn.Conv2d(channels, channels, kernel_size=3, padding=1, bias=False)
        self.norm1 = nn.BatchNorm2d(channels)
        self.conv2 = nn.Conv2d(channels, channels, kernel_size=3, padding=1, bias=False)
        self.norm2 = nn.BatchNorm2d(channels)

    def forward(self, x: "torch.Tensor") -> "torch.Tensor":
        residual = x
        x = F.relu(self.norm1(self.conv1(x)))
        x = self.norm2(self.conv2(x))
        return F.relu(x + residual)
```

There is also a value, policy, score, and ownership (influence) heads, which converts the results to desired data. 

```python
self.policy_head = nn.Sequential(
    nn.Conv2d(channels, 2, kernel_size=1, bias=False),
    nn.BatchNorm2d(2),
    nn.ReLU(),
    nn.Flatten(),
    nn.Linear(2 * points, self.move_count),
)
self.value_head = nn.Sequential(
    nn.Conv2d(channels, 1, kernel_size=1, bias=False),
    nn.BatchNorm2d(1),
    nn.ReLU(),
    nn.Flatten(),
    nn.Linear(points, 64),
    nn.ReLU(),
    nn.Linear(64, 1),
    nn.Tanh(),
)
self.score_head = nn.Sequential(
    nn.Conv2d(channels, 1, kernel_size=1, bias=False),
    nn.BatchNorm2d(1),
    nn.ReLU(),
    nn.Flatten(),
    nn.Linear(points, 64),
    nn.ReLU(),
    nn.Linear(64, 1),
)
self.ownership_head = nn.Conv2d(channels, 1, kernel_size=1)
```

For the monte carlo tree search, there are four elements: selection, expansion, simulation, and backpropagation. For a game position, it visits the most valuable positions determined by ResNet, and updates the value according to ResNet, and eventually decide on the most visited position. 


## Training

I submitted it to train on the Trillium supercomputer for 12 hours on a H100 with 10 core CPU. GitHub link is [here](https://github.com/yunhaixiang/sygo/tree/main). I decided to call it Sygo. Training consist of alternating ResNet training and self play. The ResNet improves upon itself by the self play results by minimizing the cross entropy loss between its own results and that of the self play. One immediate bug I encountered during my first few training is that the AI will overwhelmingly prefer passing, so the game ends very early. I dont know why this happens. Initially I tried to fix it by not allowing it to pass in the first N steps, but immediately after it tries to pass again. My solution was to force it to play till the end, until there are very vew legal moves. The downside to this strategy is I expect it to learn bad habits like filling its own eyes. Here is a game I (black) played with my AI (white) after a few hours of training on my own laptop. 

{{< figure
  src="/img/game.jpg"
  alt="A game played against Sygo"
  caption="A game played against Sygo"
  width="30%">}}



## Neurosymbolic Methods

One thing I want to experiment with is neurosymbolic methods. Intuitively, there are many concepts in go that are quite mathematical: groups, liberties, ko, ladders, life and death, influence, etc. The features in the ResNet are supposed to capture these intuition in weights. However, I think it would be good if the AI really tries to reason symbolically too. There are, for example, connections to surreal numbers and combinatorial game theory ideas, which I wonder if it could rediscover. The problem is how does one reason formally and probabalistically (heuristically) at the same time. I found very few papers about neurosymbolic learning online, much less for Go. I dont think this is something that has been tried a lot. One benefit of neurosymbolic methods here I would imagine is the interpretability: we can know how the model thinks. Another is potentially by being much more algorithmic, it will save compute. This is something I will think more about. 
