---
title: Simplicial Sets and Infinity-Categories
date: 2025-09-25 20:14:47
slug: 0c3e076
aliases:
  - /posts/simplicial-sets-and-infinity-categories/
categories: [expositions]
tags: [math, category-theory, homotopy-theory]
---

{{< pullquote author="Anonymous Friend" >}}
I am not saying that I believe in the law of the excluded middle, I am just saying that it isn't not true.
{{< /pullquote >}}

Recently, I've been reading Cisinski's _Higher Categories and Homotopical Algebra_. I wanted to write down some of the things I've learned. In this post, we start from a review of presheaves of sets and simplicial sets, and then build towards the definition of an $\infty$-category. Let $A$ be a category. Recall that a presheaf on $A$ is a contravariant functor $X:A^{\mathrm{op}}\rightarrow \mathbf{Set}$, where we denote $X_a=X(a)$ and $u^*:X_b\rightarrow X_a$ the induced map for each $u:a\rightarrow b$. The category of presheaves on $A$ is denoted by $\widehat{A}$. The category of elements $\int_A X$ (or $\int X$) is the category where objects are pairs $(a,s)$ with $a\in A$ and $s\in X_a$, and a morphism $u:(a,s)\rightarrow (b,t)$ is a morphism $u:a\rightarrow b$ such that $u^*(t)=s$. It comes equipped with a faithful functor $\varphi_X:\int_A X\rightarrow \widehat{A}$ given by $(a,s)\mapsto \mathscr{H}_a$ on objects and $u\mapsto \mathscr{H}(u)$ on morphisms, where $\mathscr{H}:A\rightarrow \widehat{A}$ is the Yoneda embedding. In this post, we ignore all set-theoretic size issues.

<!--more-->

## Presheaves

First, we prove a variation of the Yoneda lemma, in the style of coend calculus.

{{< theorem >}}
The cocone defined by the collection of maps $s:\mathscr{H}_a\rightarrow X$ for $(a,s)\in \int_A X$ (identifying via the Yoneda lemma) exhibits $X$ as a colimit of $\varphi_X$ viewed as a diagram, that is,

$$X=\mathrm{colim}\ \varphi_X.$$

{{< /theorem >}}

{{< proof >}}
Let $Y$ be a presheaf on $A$. By the Yoneda lemma, $\mathrm{Hom}_{\widehat{A}}(\mathscr{H}_a,Y)\cong Y_a$, so a cocone from $\varphi_X$ to $Y$ can be viewed as a collection of sections $f_s\in Y_a$ for $(a,s)\in \int_A X$ such that $u^*(f_t)=f_s$ for all $u:(a,s)\rightarrow (b,t)$. This means the collection of maps $X_a\rightarrow Y_a$ given by $s\mapsto f_s$ is a morphism of presheaves. Hence the map

$$\Phi:\mathrm{Hom}(X,Y)\rightarrow (\varphi_X\downarrow Y)$$

given by composition with $s:\mathscr{H}_a\rightarrow X$ for $(a,s)\in \int_A X$ has a two-sided inverse. Therefore $X=\mathrm{colim}\varphi_X$.
{{< /proof >}}

Let $C$ be a category with limits. For $u:A\rightarrow C$, we can define a _functor of evaluation_

$$u^*:C\rightarrow \widehat{A},\qquad Y\mapsto \left[a\mapsto \mathrm{Hom}_{C}(u(a),Y)\right],$$

that is, $u^*(Y)=\mathrm{Hom}_C(-,Y)\circ u$. By this version of the Yoneda lemma, we have the following consequence.

{{< theorem >}}
The functor $u^*:C\rightarrow \widehat{A}$ has a left adjoint $u_!:\widehat{A}\rightarrow C$. Moreover, there exists a natural isomorphism $u(a)\xrightarrow{\sim} u_!(\mathscr{H}_a)$ for $a\in A$ such that for any $Y\in C$, the induced bijection

$$\mathrm{Hom}_C(u(a),Y)\xrightarrow{\sim} \mathrm{Hom}_C(u_!(\mathscr{H}_a),Y)$$

is the inverse of the composition

$$\mathrm{Hom}_C(u(a),Y)=u^*(Y)_a\xrightarrow{\sim} \mathrm{Hom}_{\widehat{A}}(\mathscr{H}_a,u^*(Y))\xrightarrow{\sim} \mathrm{Hom}_C(u_!(\mathscr{H}_a),Y),$$

where the first isomorphism is Yoneda and the second is the adjunction formula.
{{< /theorem >}}

## Simplicial Sets

Let $\Delta$ be the category where the objects are finite sets $[n]=\{0,\dots,n\}$ for $n\in\mathbb N$, and the morphisms are order-preserving functions. This is called the _simplex category_. A _simplicial set_ is a presheaf on $\Delta$, and we denote the category of simplicial sets by $\mathbf{SSet}=\widehat{\Delta}$. For $n\in\mathbb N$, denote $\Delta^n=\mathscr{H}_n$ as the _standard $n$-simplex_. For a simplicial set $X$, we write

$$X_n=X([n])=\mathrm{Hom}(\Delta^n,X)$$

for the set of $n$-simplices of $X$.

For integers $n\ge 1$ and $0\le i\le n$, the map $\partial^n_i:\Delta^{n-1}\rightarrow \Delta^n$ corresponds to the map $[n-1]\rightarrow [n]$ whose image omits $i$. For $n\ge 0$, the map $\sigma^n_i:\Delta^{n+1}\rightarrow \Delta^n$ corresponds to the map $[n+1]\rightarrow [n]$ that takes the value $i$ twice. We also write

$$d^i_n=(\partial_i^n)^*:X_n\rightarrow X_{n-1},\qquad s^i_n=(\sigma_i^n)^*:X_n\rightarrow X_{n+1}.$$

The category $\Delta$ is uniquely captured by a set of identities involving these operations.

There is a geometric realization functor $|\cdot|:\mathbf{SSet}\rightarrow \mathbf{Top}$, where $\mathbf{Top}$ is the category of compactly generated Hausdorff topological spaces, given by

$$|\Delta^n|=\left\{(x_j)_{0\le j\le n}\in\mathbb R^{n+1}_{\ge 0}: \sum_{j=0}^n x_j=1\right\}$$

and

$$|X|=\mathrm{colim}_{\Delta^n\rightarrow X}|\Delta^n|$$

for a simplicial set $X$. For each $f:[m]\rightarrow [n]$, we get an associated continuous map $|f|:|\Delta^m|\rightarrow |\Delta^n|$, defined by $|f|(x_0,\dots,x_m)=(y_0,\dots,y_n)$ where $y_j=\sum_{f(i)=j}x_i$. By virtue of the preceding theorem, we have a singular complex functor $\mathrm{Sing}:\mathbf{Top}\rightarrow\mathbf{SSet}$, given by

$$Y\mapsto \left[[n]\mapsto \mathrm{Hom}(|\Delta^n|,Y)\right],$$

which is right adjoint to the geometric realization functor, i.e. $|\cdot|\dashv \mathrm{Sing}$.

{{< definition >}}
An _Eilenberg-Zilber category_ is a quadruple $(A,A_+,A_-,d)$ where $A$ is a category, $A_+,A_-$ are subcategories, and $d:A\rightarrow\mathbb N$ is a set-function, such that:

1. An isomorphism of $A$ is an isomorphism of $A_+$ and $A_-$.
2. If a morphism $a\rightarrow b$ in $A_+$ (resp. $A_-$) is not the identity, then $d(a) < d(b)$ (resp. $d(b) < d(a)$).
3. Any morphism $u:a\rightarrow b$ in $A$ factors uniquely as $u=ip$, where $p:a\rightarrow c$ is in $A_-$ and $i:c\rightarrow b$ is in $A_+$.
4. For a morphism $\pi:a\rightarrow b$ in $A_-$, there exists $\sigma:b\rightarrow a$ in $A$ such that $\pi\sigma=\mathbf{1}_b$.
5. For $\pi,\tau:a\rightarrow b$ in $A_-$, if $\pi$ and $\tau$ have the same set of sections, then $\pi=\tau$.

We say an object $a\in A$ has dimension $n$ if $d(a)=n$.
{{< /definition >}}

The category $\Delta$ is Eilenberg-Zilber with $\Delta_+$ (resp. $\Delta_-$) the subcategory of monomorphisms (resp. epimorphisms), and $d([n])=n$. Let $X$ be a presheaf on an Eilenberg-Zilber category $A$. For $a\in A$, we say $x\in X_a$ is *degenerate* if there is a map $\sigma:a\rightarrow b$ in $A$ with $d(b) < d(a)$, and $y\in X_b$ such that $\sigma^*(y)=x$. The pair $(\sigma,y)$ is called a decomposition of $x$. Moreover, there is a unique decomposition such that $\sigma\in A_-$ and $y$ is non-degenerate. For $n\ge 0$, we define $\mathrm{Sk}_n(X)$ to be the maximal subpresheaf of $X$ such that for any $m > n$, any section of $\mathrm{Sk}_n(X)$ over an object $a$ of dimension $m$ is degenerate. In other words, $\mathrm{Sk}_n(X)$ restricts the sections to dimensions $\le n$. We can easily make the construction $\mathrm{Sk}_n$ functorial, so it can be viewed as a functor.

## Nerves

Every poset $E$ can be viewed as a category where objects are elements, and there is a unique morphism $x\rightarrow y$ if $x\le y$, and none otherwise. Let $i:\Delta\rightarrow\mathbf{Cat}$ be the inclusion functor. The _nerve functor_

$$N=i^*:\mathbf{Cat}\rightarrow\mathbf{SSet}$$

is given by

$$C\mapsto \left[[n]\mapsto \mathrm{Hom}_{\mathbf{Cat}}([n],C)\right].$$

Thus the $n$-simplices of $N(C)$ are strings of arrows of length $n$ in $C$. By the preceding theorem, the nerve functor has a left adjoint $\tau=i_!:\mathbf{SSet}\rightarrow\mathbf{Cat}$. We'll stop here and continue more in Part II.
