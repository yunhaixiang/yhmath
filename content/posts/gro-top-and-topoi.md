---
title: Grothendieck Topology, Sites, and Topoi
categories: ["expositions"]
date: 2025-12-04 11:15:32
tags: ["math", "algebraic-geometry"]
---

{{< pullquote author="Charles Pugh">}}
Complex analysis is the good twin and real analysis the evil one: beautiful formulas and elegant theorems seem to blossom spontaneously in the complex domain, while toil and pathology rule the reals.
{{< /pullquote >}}

This is an old post from 2022. We start by revisiting étale morphisms and introducing Grothendieck topologies and sites, and we define presheaves and sheaves on sites and show that they work almost the same as the usual presheaves and sheaves we are accostomed to. Then, we will define important sites such as the big and small Zariski sites and étale sites as well as the fppf site. 
<!--more-->


## Étale morphisms of schemes

{{< definition >}}
First, we revisit the definitions and properties of étale morphisms of schemes. 
A morphism of schemes $f:X\rightarrow Y$ is _étale_ if one of these equivalent conditions holds
1. $f$ is smooth and locally quasi-finite,
2. $f$ is smooth and unramified,
3. $f$ is flat and unramified,
4. $f$ is locally of finite presentation and formally étale
5. $f$ is locally of finite presentation and locally a standard étale morphism,
{{< /definition >}}


There are many more equivalent definitions of étale morphisms listed on [wikipedia](https://en.wikipedia.org/wiki/Étale_morphism). Intuitively, I think of étale morphisms analogous to covering maps. We need this notion to define the étale topology which we will need to use later. As a side note, there is also something called the étale fundamental group, which also uses the notion of étale morphisms. We recall these properties of étale morphisms.

{{< proposition >}}
1. compotision of étale maps are étale,
2. if $f:Y\rightarrow X$ is étale then its base change $Y\times_XZ\rightarrow Z$ is étale,
3. if $f:Y\rightarrow X$ and $g:Z\rightarrow X$ are étale and $g=f\circ h$ where $h:Z\rightarrow Y$, then $h$ is étale
4. given algebraically closed field $k$ and $k$-algebra $A$, then the morphism $\mathrm{Spec}(A)\rightarrow\mathrm{Spec}(k)$ is étale iff it is the disjoint union of spectra of finite separable field extensions of $k$.
{{< /proposition >}}

Now, we are ready to define Grothendieck topology and sites.

## Grothendieck topology, sites, and topoi

Recall that a presheaf (of sets) on a topological space $X$ is a contravariant functor $\mathscr{F}:\mathrm{Op}(X)\rightarrow\mathbf{Set}$, and a presheaf is a sheaf when $\mathscr{F}(U)\rightarrow\prod_{i}\mathscr{F}(U_i)\rightrightarrows\prod_{i,j}\mathscr{F}(U_i\cap U_j)$ is an equalizer for every open cover $\{U_{i}\}$ of any open $U\subseteq X$, which is equivalent to the identity and gluability axioms. We want to extend this from $\mathrm{Op}(X)$ to any category $\mathcal C$. To do this, we need to add some additional structure on the category $\mathcal C$ so that its objects can be viewed as "open sets" and morphisms can be viewed as "inclusions". Grothendieck's insight is that we don't need the full strength of a topology to define sheaves, we only need intersections and a notion of when a collection of an open set forms an open cover of it. 

{{< definition >}}
A _Grothendieck topology_ on a category $\mathcal C$ is the data of a set of _coverings_ of $U$, written as $\mathrm{Cov}(U)$, for each object $U\in \mathcal C$, where each covering $S\in\mathrm{Cov}(U)$ is a set of morphisms of $\mathcal C$ with $U$ as targets, such that for all $U\in\mathcal C$
1. for each isomorphism $\varphi:V\rightarrow U$, we have $\{\varphi\}\in \mathrm{Cov}(U)$
2. if $\{V_i\rightarrow U\}\in\mathrm{Cov}(U)$ and $\{W_{i,j}\rightarrow V_i\}\in\mathrm{Cov}(V_i)$ for each $i$, then $\{W_{i,j}\rightarrow U\}\in\mathrm{Cov}(U)$
3. for $\{V_i\rightarrow U\}\in\mathrm{Cov}(U)$ and $W\rightarrow U$, all $W\times_UV_i$ exists and $\{W\times_UV_i\rightarrow W\}\in\mathrm{Cov}(W)$

A category $\mathcal C$ equipped with a choice of Grothendieck topology, also denoted $\mathcal C$, is a _site_. A continuous functor between sites $f:\mathcal C\rightarrow\mathcal D$ is a functor between their underlying categories such that for all $\{X_i\rightarrow X\}\in \mathrm{Cov}_{\mathcal C}(X)$ we have $\{f(X_i)\rightarrow f(X)\}\in \mathrm{Cov}_{\mathcal D}(f(X))$, and it commutes with finite fibred products if they exist.
{{< /definition >}}

For example, $\mathrm{Op}(X)$ for a topological space $X$ can be made into a site using the usual notion of covering. We note that in $\mathrm{Op}(X)$ we have the fibered product $U\times_X V=U\cap V$ for all open $U,V\subseteq X$, which agrees with the usual notion of intersection. For a category $\mathcal C$ with $X\in\mathcal C$, the category of objects over $X$, denoted $\mathcal C/X$ is the category where objects are morphisms $Y\rightarrow X$ in $\mathcal C$ and morphisms between $Y_1\rightarrow X$ and $Y_2\rightarrow X$ are all morphisms $Y_1\rightarrow Y_2$ in $\mathcal C$ such that the obvious triangle commutes, i.e. $(Y_1\rightarrow Y_2\rightarrow X)=Y_1\rightarrow X$. If $\mathcal C$ is a site, then $\mathcal C/X$ can be given a site structure, by letting $\mathrm{Cov}(U\rightarrow X)$ in $\mathcal C/X$ be $\mathrm{Cov}(U)$ in $\mathcal C$. The site $\mathcal C/X$ is called the _localization_ of the site $\mathcal C$ at $X$. Suppose $X$ is a scheme, then we say that the _big Zariski (resp. big étale, resp. fppf) site_, denoted $(\mathbf{Sch}/X)_{\mathrm{Zar}}$ (resp. $(\mathbf{Sch}/X)_{\mathrm{ét}}$, resp. $(\mathbf{Sch}/X)_{\mathrm{fppf}}$) of $X$, is the site with the category $\mathbf{Sch}/X$ and $\{Y_i\rightarrow Y\}\in\mathrm{Cov}(U)$ iff each $Y_i\rightarrow Y$ is an open immersion with $Y=\bigcup_i Y_i$ (resp. each $Y_i\rightarrow Y$ is étale with $\coprod_i Y_i\rightarrow Y$ surjective, resp. each $Y_i\rightarrow Y$ is flat and locally of finite presentation with $\coprod_i Y_i\rightarrow Y$ surjective). An element of $\mathrm{Cov}(U\rightarrow X)$ is called a _Zariski cover_ (resp. _étale cover_, resp. _fppf cover_) of $U$. The small Zariski site (resp. small étale site) of $X$, denoted $X_{\mathrm{Zar}}$ (resp. $X_{\mathrm{ét}}$) is the site whose category is the full subcategory of $\mathrm{Sch}/X$ where each object $U\rightarrow X$ is an open immersion (resp. étale), and the coverings are the same as the big Zariski (resp. big étale) site. The small Zariski site of $X$ is equivalent to the site $\mathrm{Op}(X)$. Moreover, we have the following inclusions
$$\{\mathrm{Zariski\ cover}\}\hookrightarrow\{\mathrm{étale\ cover}\}\hookrightarrow\{\mathrm{fppf\ cover}\}$$Next, we discuss presheaves and sheaves on a site. This whole business is to get new cohomology theories such as étale cohomology, because basic sheaf cohomology is insufficient for our needs.

{{< definition >}}
A _presheaf_ (of sets) on a site $\mathcal C$ is a contravariant functor $\mathscr{F}:\mathcal C\rightarrow\mathbf{Set}$, and a presheaf is a _sheaf_ iff $\mathscr{F}(U)\rightarrow\prod_{i}\mathscr{F}(U_i)\rightrightarrows\prod_{i,j}\mathscr{F}(U_i\times_U U_j)$ is an equalizer for all $U\in\mathcal C$ and $\{U_i\rightarrow U\}\in\mathrm{Cov}(U)$. A presheaf is called _separated_ if for all $U\in\mathcal C$ and $\{U_i\rightarrow U\}\in\mathrm{Cov}(U)$, the map $\mathscr{F}(U)\rightarrow \prod_i\mathscr{F}(U_i)$ is injective. We write $\mathrm{Sh}(\mathcal C)$ (resp. $\mathrm{PSh}(\mathcal C)$) for the category of sheaves (resp. presheaves) of the site $\mathcal C$.
{{< /definition >}}

Note that a separated presheaf can be viewed as a presheaf that only satisfies one of the axioms of a sheaf, the identity axiom, but not necessaily the gluability axiom, therefore we have the obvious inclusions
$$\{\mathrm{sheaves}\}\hookrightarrow\{\mathrm{separated\ presheaves}\}\hookrightarrow\{\mathrm{presheaves}\}$$all of which admits left adjoints, the composition of them being sheafification. Usually, we can formulate sheafification in terms of compatible germs, but since we are working over sites, it does not make sense to take a point in an object and take the product of stalks. The way we construct the adjoint from presheaves to separated presheaves is to map a presheaf $\mathscr{F}$ to $\mathscr{F}^{\mathrm s}(U)=\mathscr{F}(U)/\sim$ where $a\sim b$ iff exists $\{U_i\rightarrow U\}\in\mathrm{Cov}(U)$ such that $a,b$ are mapped to the same element by the map $\mathscr{F}(U)\rightarrow \prod_i\mathscr{F}(U_i)$. We can check that this is in fact a separated presheaf. All of the above works for (pre)sheaves of rings, abelian groups, etc.

{{< definition >}}
A _topos_ is a category equivalent to $\mathrm{Sh}(\mathcal C)$ for a site $\mathcal C$. A morphism of topoi $f:\mathcal{T}_1\rightarrow \mathcal{T}_2$ is an adjoint pair $f^*\dashv f_*$ of functors $f^*:\mathcal{T}_1\rightarrow \mathcal{T}_2$ and $f_*:\mathcal{T}_2\rightarrow \mathcal{T}_1$ with a choice of natural isomorphism
$$\Phi:\mathrm{Mor}_{\mathcal T_1}(f^*(-),-)\rightarrow \mathrm{Mor}_{\mathcal T_2}(-,f_*(-))$$where each naturality here means $\Phi$ is natural in each of the two dashes, and $f^*$ commutes with finite limits when they exist. Define composition in the obvious way.
{{< /definition >}}


We remark that in the above definition, commuting with finite limits is equivalent to checking that $f^*$ commutes with finite products and preserve equalizers. In many cases, though not always, a continuous functor between sites $f:\mathcal C\rightarrow \mathcal D$ induces a functor $f_*:\mathrm{Sh}(\mathcal D)\rightarrow \mathrm{Sh}(\mathcal C)$ by $f_*(\mathscr{F})(X)=\mathscr{F}(f(X))$, where the well-definedness follows from $\mathscr{F}(f(U_i\times_U U_j))=\mathscr{F}(f(U_i)\times_{f(U)} f(U_j))$ for any $\{U_i\rightarrow U\}\in\mathrm{Cov}(U)$, as illustrated by the diagram 

{{< quiver
	src="https://q.uiver.app/#q=WzAsNixbMCwxLCJcXG1hdGhzY3J7Rn0oZihVKSkiXSxbMSwxLCJcXHByb2RfaVxcbWF0aHNjcntGfShmKFVfaSkpIl0sWzIsMSwiXFxwcm9kX3tpLGp9XFxtYXRoc2Nye0Z9KGYoVV9pKVxcdGltZXNfe2YoVSl9ZihVX2opKSJdLFswLDAsImZfKihcXG1hdGhzY3J7Rn0pKFUpIl0sWzEsMCwiXFxwcm9kX2lmXyooXFxtYXRoc2Nye0Z9KShVX2kpIl0sWzIsMCwiXFxwcm9kX3tpLGp9Zl8qKFxcbWF0aHNjcntGfSkoVV9pXFx0aW1lc19VIFVfaikiXSxbMCwxXSxbMSwyLCIiLDAseyJvZmZzZXQiOjF9XSxbMyw0XSxbMywwLCJcXGNvbmciXSxbNCwxLCJcXGNvbmciXSxbNSwyLCJcXGNvbmciXSxbNCw1LCIiLDAseyJvZmZzZXQiOi0xfV0sWzQsNSwiIiwwLHsib2Zmc2V0IjoxfV0sWzEsMiwiIiwwLHsib2Zmc2V0IjotMX1dXQ==&embed"
	height="125px"
	scale="1.7"
	>}}


This induced functor does not always admit a left adjoint. However, we have the following theorem

{{< proposition >}}

If $\mathcal C,\mathcal D$ are sites with small underlying categories, then the functor $f_*:\mathrm{Sh}(\mathcal D)\rightarrow \mathrm{Sh}(\mathcal C)$ induced by a continuous functor $f:\mathcal C\rightarrow \mathcal D$ admits a left adjoint $f^*:\mathrm{Sh}(\mathcal C)\rightarrow \mathrm{Sh}(\mathcal D)$. If, further, that finite limits in $\mathcal C$ are representable and $f$ commutes with them, then $f^*$ commutes with finite limits. 
{{< /proposition >}}

{{< proof >}}We construct this functor concretely. For each $U\in\mathcal D$, let $\mathcal I_U$ be the category where objects are pairs $\langle V,\rho\rangle$ where $V\in\mathcal C$ and $\rho\in \mathrm{Mor}_\mathcal{D}(U,f(V))$, and a morphism $g:\langle V_1,\rho_1\rangle \rightarrow \langle V_2,\rho_2\rangle$ is a morphism $g:V_1\rightarrow V_2$ in $\mathcal C$ such that $(fg)\circ\rho_1=\rho_2$. We define
$$f^* (\mathscr{F})(U)=\lim_{\stackrel{\longrightarrow}{\langle V,\rho\rangle\in\mathcal I_{U}^\mathrm{op}}}\mathscr{F}(V)$$
and for each $h:U_1\rightarrow U_2$ in $\mathcal C$, there is functor $\mathcal I_{U_2}\rightarrow \mathcal I_{U_1}$ given by $\langle V,\rho\rangle\mapsto \langle V,\rho\circ h\rangle$ which induces a morphism $f^*(\mathscr{F})(U_2)\rightarrow f^*(\mathscr{F})(U_1)$. We can check that this is well-defined.
{{< /proof >}}


