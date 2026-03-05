---
title: AI for Math
date: 2026-03-02 15:39:07 -0500
categories: [expositions]
tags: [math, ai]
---

{{< pullquote author="Angus K. Rodgers">}}
Mathematics requires a small dose, not of genius, but of an imaginative freedom which, in a larger dose, would be insanity. And if mathematicians tend to burn out early in their careers, it is probably because life has forced them to acquire too much common sense, thereby rendering them too sane to work. But by then they are sane enough to teach, so a use can still be found for them.
{{< /pullquote >}}

Recently, a team of researchers at Deepmind released the paper [_Aletheia tackles FirstProof autonomously_](https://arxiv.org/abs/2602.21201), which has shook the mathematical community. This is a respose to the [FirstProof](https://1stproof.org/), which is a challenge to see if an AI can solve a research level mathematical problem, by highly reputable mathematicians including a fields medalist. Aletheia is a AI model developed by Deepmind based on Gemini. Previously it had autonomously produced the paper [_Eigenweights for Arithmetic Hirzebruch Proportionality_](https://arxiv.org/pdf/2601.23245), calculating some constants called eigenweights. Alethia had successfully solved 6 out of 10 of the problems in First Proof (all of them way above my pay grade). All of this is undeniable evidence that AI will revolutionize how mathematics is done in the next decade and impact mathematics academia sociologically. In this post, I will give a very brief introduction to how AI works, and then discuss the impact of AI. I will be following Tony Feng's notes.

## How does Machine Learn?

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
$$\mathbb R^n\xrightarrow{f_1}\mathbb R^{d_1}\xrightarrow{f_2}\cdots\xrightarrow{f_k}\mathbb R^m$$
where each $f_i$ is a simple function, such as an affine linear function followed by a nonlinear activation function. The parameters $\theta$ of the neural network are the parameters of each $f_i$. 

## AI for Math

## Academic Impact and Existential Crisis

sociological impact on academic
anteater guy