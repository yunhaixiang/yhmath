---
title: AI for Math
date: 2026-03-02 15:39:07 -0500
slug: 85ac599
aliases:
  - /posts/ai-for-math/
categories: [expositions]
tags: [math, ai]
---

{{< pullquote author="T. S. Eliot">}}
This is the way the world ends. Not with a bang but a whimper.
{{< /pullquote >}}

Recently, a team of researchers at Deepmind released the paper [_Aletheia tackles FirstProof autonomously_](https://arxiv.org/abs/2602.21201), which has shook the mathematical community. This is a respose to the [FirstProof](https://1stproof.org/), which is a challenge to see if an AI can solve a research level mathematical problem, by highly reputable mathematicians including a fields medalist. Aletheia is a AI model developed by Deepmind based on Gemini. Previously it had autonomously produced the paper [_Eigenweights for Arithmetic Hirzebruch Proportionality_](https://arxiv.org/pdf/2601.23245), calculating some constants called eigenweights. Alethia had successfully solved 6 out of 10 of the problems in First Proof (all of them way above my pay grade). All of this is undeniable evidence that AI will revolutionize how mathematics is done in the next decade and impact mathematics academia sociologically. In this post, I will give a very brief introduction to how AI works, and then discuss the impact of AI. I will be following Tony Feng's notes {{< cite key="Fen25" >}}.

## How do Machines Learn?

In _supervised learning_, we are given a set of data $\mathcal D=\{(x_i,y_i):i\in I\}$ where $x_i\in\mathbb R^n$ and $y_i\in \mathbb R^m$, where $n$ is called the number of features, and $m$ is called the dimension of outputs. We want to find a function $f:\mathbb R^n\rightarrow\mathbb R^m$ that approximates this data set. This is often done by setting up a family of hypothetical $f_\theta:\mathbb R^n\rightarrow\mathbb R^m$ where $\theta$ is a parameter with which it varies, and then optimize $\theta$ with respect to a loss function $\mathcal L_{\mathcal D}(\theta)$ which measures the error of $f_\theta$ in $\mathcal D$. 

{{< example >}}
Suppose $m=1$, and we set up $f_{\theta}:\mathbb R^n\rightarrow\mathbb R$ affine linear 
$$f_{\theta}(x)=xW+b$$
where $\theta=(W,b)$ for $W\in \mathrm{M}_{1,n}(\mathbb R)$ and $b\in\mathbb R$. For the loss function we use the mean square error
$$\mathcal L_{\mathcal D}(\theta)=\frac{1}{|\mathcal D|}\sum_{i\in I}(f_\theta(x_i)-y_i)^2$$
Let $X=(x_i)_{i\in I}$ and $Y=(y_i)_{i\in I}$. We can always augment $W$ by $b$ and add $1$ to the end of each $x_i$ to get rid of the bias term, so we can assume $b=0$. Then we can rewrite the loss function as
$$\mathcal L_{\mathcal D}(\theta)=\frac{1}{|\mathcal D|}\|XW-Y\|^2=\frac{1}{|\mathcal D|}(XW-Y)^T(XW-Y)$$
Differentiating with respct to $W$ we get
$$
\begin{aligned}
\frac{\partial}{\partial W} \mathcal L_{\mathcal D}(\theta)= & \frac{1}{n}\left[\frac{\partial}{\partial W}\left((Y-X W)^{\top}\right)(Y-X W)\right] 
 +\frac{1}{n}\left[(Y-X W)^{\top} \frac{\partial}{\partial W}((Y-X W))\right] \\
= & \frac{1}{n}\left[-X^{\top}(Y-X W)\right]-\left[(Y-X W)^{\top} X\right] \\
= & -2 \frac{1}{n} X^{\top}(Y-X W)
\end{aligned}$$
If $X^TX$ is invertible, then setting this to $0$ we get the optimal solution
$$W=(X^TX)^{-1}X^TY$$
When is $X^TX$ invertible? It is invertible if and only if the columns of $X$ are linearly independent. This happens when the number of samples $|\mathcal D|$ is at least the number of features $n$, and the matrix $X$ has full column rank.
{{< /example >}}

Contrary to supervized learning, _unsupervized learning_ does not require labeled data. Instead, it tries to find patterns or structures in the input data. For example, in _clustering_, we want to group the data points into clusters based on their similarity, for example the $K$-means clustering algorithm. In _dimensionality reduction_, we want to find a lower-dimensional representation of the data that preserves as much information as possible. In _reinforcement learning_, an agent learns to make decisions by interacting with an environment and receiving feedback in the form of rewards or penalties. There's lots others, such as generative modeling, self-supervised learning, representation learning, etc. 

_Neural networks_ are essentially generalizations where we allow $f_\theta$ to be a composition of many simple functions, such as affine linear functions and nonlinear activation functions. The optimization process is usually done by a method called _stochastic gradient descent_, which iteratively updates the parameters in the direction of the negative gradient of the loss function. _Deep learning_ refers to the use of neural networks with many layers, which can learn complex representations of data.

Formally, a neural network is a chain of functions

$$\mathbb R^n\xrightarrow{f^{(1)}_{\theta^{(1)}}}\mathbb R^{d_1}\xrightarrow{\sigma}\mathbb R^{d_1}\xrightarrow{f^{(2)}_{\theta^{(2)}}}\mathbb R^{d_2}\xrightarrow{\sigma}\mathbb R^{d_2}\xrightarrow{f^{(3)}_{\theta^{(3)}}}\cdots\xrightarrow{f^{(k)}_{\theta^{(k)}}}\mathbb R^m$$
where each $f^{(i)}_{\theta^{(i)}}$ is an affine linear function, and $\sigma$ is a nonlinear activation function, such as the ReLU function $\sigma(x)=\max\{0,x\}$, for each entry. The parameters $\theta$ consist of the weights and biases of each layer. The output of the neural network is given by the composition of these functions. The depth of the network is the number of layers $k$, and the width of a layer is the dimension of layer. _Deep learning_ refers to the use of neural networks with many layers. The [Universal Approximation Theorem](https://en.wikipedia.org/wiki/Universal_approximation_theorem) states that neural networks can approximate any continuous function on compact subsets, under mild assumptions on the activation function. 

Given a loss function $\mathcal L$, Taylor approximation to the first order gives
$$\mathcal L(\theta+\xi)\approx \mathcal L(\theta)+\mathrm d\mathcal L(\xi)\approx \mathcal L(\theta)+\langle\nabla_{\theta}\mathcal L,\xi\rangle$$

By Cauchy-Schwarz inequality, the inner product is maximized when $\xi$ is in the direction of the negative gradient. This gives the "steepest descent", so we update $\theta$ by the formula
$$\theta\mapsto \theta-\eta\nabla_{\theta}\mathcal L$$
where $\eta$ is called the learning rate, which controls how much we update the parameters in each step.

An efficient algorithm to implement gradient descent for neural networks is called _backpropagation_, which uses the chain rule of calculus to compute the gradient of the loss function with respect to each parameter in the network. This allows us to efficiently update all the parameters in the network during training.

## AI for Math

Large Language Models (LLMs) are a type of neural network that are trained on a large corpus of text data to learn the statistical properties of language. LLMs recently have become really good at mathematical reasoning, and can solve complex mathematical problems, such as those in the FirstProof challenge. On the other hand, there are people who are working on formalization of mathematics such in software like Lean, which turns proofs into type theoretic formalisms. LLMs combined with formalization seems to be the promising direction for AI for Math. As I was writing this post, researchers have autoformalized the proof of Viazovska's solution to the sphere packing problem in 8 and 24 dimensions, and Donald Knuth has announced an open problem he was working on was [solved by an AI](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf). Even before AI, lean has seen success in formalizing difficult results, such as Liquid Tensor Experiment, a project that formalized a theorem in condensed mathematics developed by Scholze and Clausen. For my next post, I will write about formalizations in Lean. 

## Academic Impact and Existential Crisis

There is no doubt that AI will revolutionize how mathematics is done in the next decade. It will change the way we do research, the way we teach, and the way we communicate mathematics. Some of its impact I speculate are:

1. Autoformalization will become standard. How mathematicians collaborate in the future might be similar to how programmers collaborate on GitHub, with the help of AI to formalize details and verify correctness of their proofs. One can also forsee this would shorten the time for peer review, and allow massive collaborations like in other sicences. 

2. The academic job market will be extra competitive. With recent funding cuts in academia, the academic job market is already extremely competitive. Now with AI being able to solve highly difficult problems, the quality of ideas in paper will need to be higher. There will be little low hanging fruits for young mathematicians to work on, as they will mostly be picked by AI. 

3. Much of teaching will be delegated to AI such as grading, giving feedback, and tutoring. This will influence how the new generations of mathematicians learn and think about mathematics. We also need to step up our game in teaching, and focus more on the creative and intuitive aspects of mathematics, which are harder for AI to replicate.

4. Emotionally, this will be a existential crisis for many mathematicians. We have thought of ourselves as unique in our ability to do math, and now we are facing the reality that machines can do math as well. For many, math is more like an art. Doing math makes us feel alive. AI will force us to rethink our identity and our existence in the world.

5. If AI use becomes widespread, we might see a shift in the culture of mathematics, with more emphasis on creativity and conceptual depth and less on technical details and computations, as they could be handled reliably by AI. 

6. Currently, Zermelo--Fraenkel set theory with axiom of choice (ZFC) is the standard foundation of mathematics, but it is not a foundation that works very well with computers. As AI and formalization progress, we might see a shift in the foundations of mathematics, perhaps in the direction of type theory or even something completely new that's more amenable to computers. 

It still remains uncertain how strong AI will be in the future. It is not known, for example, whether AI is able to build grand theories like Grothendieck's theory of schemes on its own, or solve open problems at the highest level, or perform visual reasoning as good as mathematicians in fields where that is prominent. If it still falls short of that, then there will still be a place for human mathematicians to do creative work. However, if AI can do that, then we might be in a post-mathematical world, where human mathematicians are no longer needed. And for myself personally, I would not want to be a mathematician if the creative aspects of the job is stripped away, and all I do is querying AI all day and verifying if it is correct. In that case, we need to find new ways to find meaning and purpose in our lives, and to contribute to the world in other ways.

I realize this is not just happening to mathematicians. Artists, programmers, writers, and many other professions are also facing similar challenges with the rise of AI, and similar existential dread. It is a societal issue that we need to address together. I believe art is something that is truely unique to human, even if AI can be much more technically proficient than us. Art is not just about the final product, but also about the process, the intention, the experience, and the emotion behind it. AI can mimic the style of an artist, but it cannot replicate the human experience that gives art its meaning. If AI replaces me as a mathematician, I will probably devote myself to artistic pursuits like music, writing, and other things. 

## References

{{< bibliography >}}
  {{< bibitem author="Tony Feng" type="online" url="https://math.berkeley.edu/~fengt/2025F_270_notes.pdf" year="2025">}}
  A Survey of Deep Learning for Mathematicians
  {{< /bibitem >}}
{{< /bibliography >}}
