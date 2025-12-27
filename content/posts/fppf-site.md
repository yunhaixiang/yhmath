---
title: "Fppf Site, Faithfully Flat Descent, and Fibred Categories"
categories: ["expositions"]
date: 2025-12-11 12:24:26
tags: ["math", "algebraic geometry"]
---

{{< pullquote author="Ethan D. Bloch">}}
Serious mathematics (contrary to a popular misconception) is not "about" proofs and logic any more than serious literature is "about" grammar, or music is "about" notes.
{{< /pullquote >}}

This is an old post from 2023 reposted. In this week we discuss fppf sites (recall that we defined $(\mathbf{Sch}/X)_{\mathrm{fppf}}$ in last week) and faithfully flat descent. This will help us to build our way to the definition of a stack. The idea of faifully flat descent is that a certain property of schemes can be descended via a cartesian square with a fppf side. The important result we are building towards is that for any scheme $X$, the functor of points $\mathscr{H}_X$ is a sheaf on the fppf site of $X$. After this, we can talk about fibred categories. Fibred categories plus descents is categorical stacks, plus geometry is algebraic stacks.

<!--more-->

## Fppf site and faithfully flat descent

We recall that a map of schemes is fppf iff it is faithfully flat (i.e. flat and surjective) and locally of finite presentation, and recall that the fppf site $(\mathbf{Sch}/X)_{\mathrm{fppf}}$ consists of the fppf covers, i.e. the jointly surjective, flat and locally of finite presentation families of morphisms. We have the following problem.

{{< theorem >}}
Suppose $X\rightarrow Y$ is a morphism of schemes, the functor of points $\mathscr{H}_X$ is a sheaf on $(\mathbf{Sch}/Y)_{\mathrm{fppf}}$.
{{< /theorem >}}
{{< proof >}}
Proof is very long, see {{< cite key="Ols16" note="Theorem 4.1.2" >}}.
{{< /proof >}}

This theorem has a very long proof and the reason it is important is delayed to later. Another important result is faithfully flat descent. The idea is, if $P$ is some property of morphism of schemes, given morphisms of schemes $f_1:X_1\rightarrow Y_1$ and $f_2:X_2\rightarrow Y_2$ and suppose there is a commutative diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJYXzEiXSxbMSwwLCJZXzEiXSxbMCwxLCJYXzIiXSxbMSwxLCJZXzIiXSxbMCwxLCJmXzEiXSxbMiwzLCJmXzIiXSxbMCwyLCJcXG1hdGhybXtmcHBmfSIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDNdXQ==&embed"
    width="184px"
    height="184px"
    radius="0px"
>}} 

then frequently $f_1$ has property $P$ iff $f_2$ does. We say that $P$ is local on the base (target) for the fppf topology (et al. Zariski, etc.) if $f_1$ has property $P$ implies $f_2$ does. Examples of properties that are local on the base for the fppf topology inlcude: surjective, locally of finite type, locally of finite presentation, universally closed/open, separated, proper, etc. The full proof can be found on {{< cite key="Stacks" note="Tag 02YJ" >}}.

## Fibred categories
For a category $\mathcal C$, a category over $\mathcal C$ is some category $\mathcal F$ equipped with a functor $\mathscr{P}_{\mathcal F}:\mathcal F\rightarrow\mathcal C$. We draw diagrams with the notation $\xi\mapsto U$ to mean $\mathscr{P}_{\mathcal F}(\xi)=U$, and a diagram of the form

{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJcXHhpIl0sWzEsMCwiXFxldGEiXSxbMCwxLCJVIl0sWzEsMSwiViJdLFswLDEsIlxccGhpIl0sWzIsMywiZiJdLFswLDIsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbMSwzLCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV1d&embed"
    width="184px"
    height="184px"
    radius="0px"
>}} 

commutes iff $\mathscr{P}_{\mathcal F}\phi=f$. Moreover, we say that a morphism $\phi:\xi\rightarrow\eta$ in $\mathcal F$ is _cartesian_ if for all $\zeta\in\mathcal F$ and morphisms $\psi:\zeta \rightarrow \eta$ and $h:\mathscr{P}_{\mathcal F}(\zeta)\rightarrow \mathscr{P}_{\mathcal F}(\xi)$ such that $\mathscr{P}_{\mathcal F}\phi \circ h=\mathscr{P}_{\mathcal F}\psi$, there exists unique $\theta:\zeta\rightarrow\xi$ such that $\mathscr{P}_{\mathcal F}\theta=h$ and $\psi=\phi\circ\theta$, as indicated in the diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsNixbMSwwLCJcXHhpIl0sWzIsMCwiXFxldGEiXSxbMSwxLCJVIl0sWzIsMSwiViJdLFswLDEsIlciXSxbMCwwLCJcXHpldGEiXSxbMCwxLCJcXHBoaSIsMCx7ImNvbG91ciI6WzI1LDk0LDYwXX0sWzI1LDk0LDYwLDFdXSxbMiwzLCJcXG1hdGhzY3J7UH1fe1xcbWF0aGNhbCBGfVxccGhpIl0sWzAsMiwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFsxLDMsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbNCwyLCJcXGZvcmFsbCBoIl0sWzQsMywiXFxtYXRoc2Nye1B9X3tcXG1hdGhjYWwgRn1cXHBzaSIsMCx7ImN1cnZlIjozfV0sWzUsNCwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFs1LDAsIlxcZXhpc3RzIVxcdGhldGEiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNSwxLCJcXGZvcmFsbCBcXHBzaSIsMCx7ImN1cnZlIjotM31dXQ==&embed"
    width="262px"
    height="184px"
    radius="0px"
>}} 

and when $\phi:\xi\rightarrow\eta$ is cartesian, we say that $\xi$ is a _pullback_ of $\eta$ (to $U$ along $\mathscr{P}_{\mathcal F}\phi$). This diagram is sometimes known as the "universal property" of cartesian morphisms. Note that given two pullbacks $\phi_1:\xi_1\rightarrow\eta$ and $\phi_2:\xi_2\rightarrow\eta$ then substitute $\psi=\xi_i$ for $i=1,2$ will give us an isomorphism $\xi_1\cong\xi_2$. Thus, pullbacks are unique up to a unique isomorphism. Note that in SGA1 the definition of cartesian arrow is different and this definition is sometimes known as strongly cartesian. Next, we introduce the following properties, which is easy to check,

{{< proposition >}}
Let $\mathscr{P}_{\mathcal F}:\mathcal F\rightarrow\mathcal C$ be a category over the category $\mathcal C$.
1. composite of cartesian arrows are cartesian,
2. if $\psi:\eta\rightarrow \zeta$ and $\phi:\xi\rightarrow\eta$ are arrows in $\mathcal F$ with $\psi$ cartesian, then $\phi$ is cartesian iff $\psi\circ\phi$ is,
3. if $\phi:\xi\rightarrow\eta$ is an arrow and $\mathscr{P}_{\mathcal F}\phi$ is an isomorphism, then $\phi$ is cartesian iff it is an isomorphism,
{{< /proposition >}}

With these knowledge, we can introduce fibred categories. Fibred categories are used to provide a general framework for descent theory. They formalize various situations in geometry and algebra where pullbacks of objects are defined. A motivating example is the category of vector bundles on a topological space.

{{< definition >}}
1. A _fibred category_ over a category $\mathcal C$ is a category $\mathcal F$ over $\mathcal C$ such that for each $f:U\rightarrow V$ in $\mathcal C$ where $V=\mathscr{P}_{\mathcal F}(\eta)$ for some $\eta\in \mathcal F$, there exists $\xi\in\mathcal F$ with $U=\mathscr{P}_{\mathcal F}(\xi)$ and cartesian arrow $\phi:\xi\rightarrow\eta$ such that $f=\mathscr{P}_{\mathcal F}\phi$.
2. Suppose $\mathcal F,\mathcal G$ are fibred categories over $\mathcal C$, then a _morphism of fibred categories_ $\mathscr{F}:\mathcal F\rightarrow \mathcal G$ is a functor such that $\mathscr{P}_{\mathcal G}\circ \mathscr{F}=\mathscr{P}_{\mathcal F}$ and $\mathscr{F}$ sends cartesian arrows to cartesian arrows. 
3. Suppose $\mathcal F$ is a category over $\mathcal C$ and $U\in\mathcal C$, write $\mathcal F(U)$ as the subcategory of $\mathcal F$ whose objects are $\xi\in\mathcal F$ such that $\mathscr{P}_{\mathcal F}(\xi)=U$ and morphisms are $\phi:\xi\rightarrow \eta$ where $\mathscr{P}_{\mathcal F}\phi=\mathbf{1}_U$.
4. If $\mathscr{F},\mathscr{G}:\mathcal F\rightarrow \mathcal G$ are morphisms of fibred categories, a _base-preserving natural transformation_ $\alpha:\mathscr{F}\rightarrow \mathscr{G}$ is a natural transformation such that for all $u\in\mathcal F$ we have $\alpha(u):\mathscr{F}(u)\rightarrow \mathscr{G}(u)$ is such that $\mathscr{P}_\mathcal{G}(\mathscr{F}(u))=\mathscr{P}_\mathcal{G}(\mathscr{G}(u))$ and $\mathscr{P}_{\mathcal G}\alpha(u)=\mathbf 1_{\mathscr{P}_\mathcal{G}(\mathscr{F}(u))}$, i.e. $\alpha(u)$ is a morphism in $\mathcal G(\mathscr{P}_\mathcal{G}(\mathscr{F}(u)))$. 
5. Denote by $\mathrm{MOR}_{\mathcal C}(\mathcal F,\mathcal G)$ the category whose objects are morphisms of fibred categories and morphisms are base-preserving natural transformations.
6. For a morphism of fibred categories $\mathscr{F}:\mathcal F\rightarrow\mathcal G$ over $\mathcal C$ and $U\in\mathcal C$, we write $\mathscr{F}_U:\mathcal F(U)\rightarrow \mathcal G(U)$ to denote the functor where $\mathscr{F}_U(\xi)=\mathscr{F}(\xi)$ and $\mathscr{F}_U\phi=\mathscr{F}\phi$.
{{< /definition >}}

Thus in a fibred category we can pullback objects along any arrow. For example, for a category $\mathcal C$ with $X\in\mathcal C$, we have $\mathcal C/X$ is fibred over $\mathcal C$ via $\mathscr{P}_{\mathcal C/X}:\mathcal C/X\rightarrow \mathcal C$ given by $(Y\rightarrow X)\mapsto Y$ and morphisms are mapped to themsleves. It should be easy to check that this is well-defined.

Why do we need fibred categories? Suppose $f:X\rightarrow Y$ is a morphism of schemes. For any morphism of schemes $t:T\rightarrow Y$ we can form a fibred product $T\times_Y X$ which is only unique up to a unique isomorphism. Thus implicitly there is a choice being made. This becomes a technical obstacle in developing the theory of stacks, and fibred categories are used to address this problem. For more detail, see {{< cite key="Ols16" note="Example 3.1.5" >}}.

The collection of categories fibred over a fixed category is an example of a $2$-category. Roughly speaking, a $2$-category is a category where the morphisms between two objects form a category. However, we will not use higher categorical language. 

{{< lemma >}}
Let $\mathscr{F}:\mathcal F\rightarrow\mathcal G$ be a morphism of fibred categories over $\mathcal C$,
1. $\mathscr{F}$ is fully faithful (as a functor) iff $\mathscr{F}_U:\mathcal F(U)\rightarrow \mathcal G(U)$ is fully faithful for all $U\in\mathcal C$,
2. $\mathscr{F}$ is an equivalence (of categories) iff $\mathscr{F}_U:\mathcal F(U)\rightarrow \mathcal G(U)$ is an equivalence for all $U\in\mathcal C$.
{{< /lemma >}}
{{< proof >}}
{{< cite key="Ols16" note="Lemma 3.1.8" >}}.
{{< /proof >}}

Recall the classical Yoneda lemma: for each object $A\in\mathcal C$ we have a natural isomorphism between the collection of natural transformations $\mathrm{Nat}(\mathscr{F},\mathscr{H}^A)$, and the set $\mathscr{F}(A)$. This point of view is crucial for the development of algebraic spaces, and also for fibred categories we need a variant of this lemma.

{{< theorem note="2-Yoneda lemma" >}}
Suppose $\mathcal F$ is fibred over $\mathcal C$, there is an equivalence $$\mathrm{MOR}_{\mathcal C}(\mathcal C/X,\mathcal F)\cong \mathcal F(X)$$
given by $\mathscr{F}\mapsto \mathscr{F}(\mathbf 1_{X})$.
{{< /theorem >}}


{{< proof >}}
{{< cite key="Ols16" note="Proposition 3.2.2" >}}.
{{< /proof >}}

It is often useful to think of a fibred category as the collection of categories $\mathcal{F}(U)$ with a pullback functor. Thus, we introduce split fibred categories. We will not go over the details of the rigorous definition, but the reader can check {{< cite key="Ols16" note="3.3.1" >}}.

## References

{{< bibliography >}}
  {{< bibitem key="Ols16" author="Martin Olsson" type="book" publisher="American Mathematical Society" year="2016" >}}
  Algebraic Spaces and Stacks
  {{< /bibitem >}}
  {{< bibitem key="Stacks" type="online" url="https://stacks.math.columbia.edu" >}}
  The Stacks Project
  {{< /bibitem >}}
{{< /bibliography >}}
