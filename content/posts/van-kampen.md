---
title: Grothendieck's Proof of van Kampen Theorem
date: 2025-12-03 11:49:34
categories: ["expositions"]
tags: ["math", "algebraic-topology"]
---

{{< pullquote author="Alexander Grothendieck" >}}
It's to that being inside of you who knows how to be alone, it is to this infant that I wish to speak, and no-one else.
{{< /pullquote >}}

This is an old post from 2024. In this post, we present a proof of van Kampen theorem in algebraic topology that is different from the standard proof in most texts. This is a proof due to Grothendieck and it generalizes better into algebraic geometry, which is an algebraic analogue known as the étale fundamental group. This proof is shorter, more conceptual (uses universal properties without invoking concrete generators and relations), and uses covering spaces. 

<!-- more -->

Let $X$ be a topological space with all the nice connectedness properties, in particular, we assume it has a universal covering $u:\widetilde{X}\rightarrow X$. Let $G$ be a group, $x\in X$, and $\rho:\pi_1(X,x)\rightarrow G$ a homomorphism. We define a based $G$-covering $p_{\rho}:(Y_\rho,y_\rho)\rightarrow (X,x)$. Take the product $\widetilde{X}\times G$ with $G$ having the discrete topology, and $\pi_1(X,x)$ acts on it by $\sigma\cdot(z,g)=(\sigma\cdot z,g\rho(\sigma^{-1}) )$. Take $Y_\rho=(\widetilde{X}\times G)/\pi_1(X,x)$ by this action, and $y_{\rho}$ the image of $(\widetilde{x},1)$. Note that we have $(\sigma\cdot z,g)=(z,g\rho(\sigma))$ in $Y_\rho$. Let $p_\rho:Y_{\rho}\rightarrow X$ be $(z,g)\mapsto u(z)$. The group $G$ acts on $Y_\rho$ by $h\cdot (z,g)=(z,hg)$ evenly, making $Y_{\rho}$ a $G$-covering. Conversely, suppose $p:(Y,y)\rightarrow (X,x)$ is a $G$-covering, we constrct a morphism $\pi_1(X,x)\rightarrow G$. For $\sigma\in \pi_1(X,x)$, we let $\rho(\sigma)$ be the element that acts by $\rho(\sigma)\cdot y=y*\sigma$ where $y*\sigma$ is the end point of the path that lifts $\sigma$. 

{{< theorem >}}
This construction gives a bijection
$$\mathrm{Hom}(\pi_1(X,x),G)\leftrightarrow \{G\textrm{-coverings}\ \textrm{of}\ (X,x)\}$$ up to isomorphisms.
{{< /theorem >}}

Checking this is routine. Let $X=U\cup V$ with $U,V$ path-connected and intersect nontrivially, with base point $x\in U\cap V$. Suppose there are coverings $p:\widetilde{U}\rightarrow U$ and $q:\widetilde{V}\rightarrow V$ and an isomorphism $\nu:p^{-1}(U\cap V)\rightarrow q^{-1}(U\cap V)$, then one can glue them together to a covering of $X$, by taking $\widetilde{X}=\widetilde{U}\times\widetilde{V}/(\nu(y_1)\sim \nu(y_2))$. We can generalize this to the case where $X$ is the union of a family of open sets, in which case we require a cocycle condition to be satisfied in order to be able to glue the covering spaces. 

{{< theorem note="van Kampen">}}
For any $h_1:\pi_1(U,x)\rightarrow G$ and $h_2:\pi_1(V,x)\rightarrow G$ with $h_1\circ i_1=h_2\circ i_2$ where $i_1,i_2$ are induced by inclusions $U\cap V\hookrightarrow U $ and $U\cap V\hookrightarrow V $, there exists a unique morphism $h:\pi_1(X,x)\rightarrow G$ such that $h\circ j_1=h_1$ and $h\circ j_2=h_2$ where $j_1,j_2$ are induced by inclusions $U\hookrightarrow X$ and $V\hookrightarrow X$. 
{{< /theorem >}}

Diagrammically, this is saying $\pi_1(X,x)$ is a fibred coproduct in the category of groups, which is a free product with amalgamation,


{{< quiver
    src="https://q.uiver.app/#q=WzAsNSxbMCwwLCJcXHBpXzEoVVxcY2FwIFYpIl0sWzEsMCwiXFxwaV8xKFUpIl0sWzAsMSwiXFxwaV8xKFYpIl0sWzEsMSwiXFxwaV8xKFgpIl0sWzIsMiwiRyJdLFswLDEsImlfMSJdLFswLDIsImlfMiIsMl0sWzIsMywial8yIiwyXSxbMSwzLCJqXzEiXSxbMSw0LCJoXzEiLDAseyJjdXJ2ZSI6LTJ9XSxbMiw0LCJoXzIiLDAseyJjdXJ2ZSI6Mn1dLFszLDQsImgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed"
    height="180px"
    scale="1.5"
    >}}

The homomorphisms $h_1,h_2$ determine $G$-coverings $Y_1\rightarrow U$ and $Y_2\rightarrow V$. The commutativity of the square means that their restrictions to $U\cap V$ are isomorphic $G$-coverings, thus by previous work, they glue to a covering which restricts to $U,V$. This is given by a $h:\pi_1(X,x)\rightarrow G$ which is precisely the morphism desired. 

{{< corollary >}}
If $U\cap V$ is simply connected then 
$$\mathrm{Hom}(\pi_1(X,x),G)=\mathrm{Hom}(\pi_1(U,x),G)\times \mathrm{Hom}(\pi_1(V,x),G)$$ which implies $\pi_1(X,x)$ is a free product. 
{{< /corollary >}}

It is also worth mentioning that this proof is an example of [descent](https://en.wikipedia.org/wiki/Descent_(mathematics)). 