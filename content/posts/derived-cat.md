---
title: 'Derived Category'
categories: ["expositions"]
tags: ["math", "category-theory"]
date: 2025-12-09 20:06:49
---
{{< pullquote author="David Mumford">}}
Algebraic geometry seems to have acquired the reputation of being esoteric, exclusive, and very abstract, with adherents who are secretly plotting to take over all the rest of mathematics. In one respect this last point is accurate.
{{< /pullquote >}}

This is an old post from 2023. Continuing last week, we are finally going to define the derived category $D(\mathcal A)$ for an abelian category $\mathcal A$. Before we actually do that, we need to introduce localization of categories, and we will define the derived category in terms of a localization of the homotopy category of complexes. Localization of categories is very analogous to localization of rings or modules. Given any category (with no assumption of abelian, additive, triangulated, etc), we formally invert a class of morphisms. We will give one definition in terms of a localization construction and show that it is unsatisfactory in that it does not have a lot of useful and desirable properties. We will then develop a better description of derived categories in terms of roofs.

<!--more-->

{{< definition >}}
Let $\mathcal A$ be a category and $S$ a class of morphisms of it, then define its localization as a category $\mathcal A[S^{-1}]$ and a functor $Q:\mathcal A\rightarrow A[S^{-1}]$ s.t. $Q(s)$ is an isomorphism for all $s\in S$ and $Q$ is universal w.r.t. this property, i.e. if the functor $F:\mathcal A\rightarrow\mathcal B$ is such that $F(s)$ is an isomorphism for each $s$, then there exists a unique functor $G:\mathcal A[S^{-1}]\rightarrow\mathcal B$ s.t. $F=G\circ Q$.
{{< /definition >}}

The way we obtain a construction that satisfies this universal property is quite convoluted. We define it this way. Let $\mathcal A[S^{-1}]$ have the same objects as $\mathcal A$. For each $X,Y\in\mathcal A[S^{-1}]$, let a directed edge between them be a morphism $f\in\mathrm{Hom}(X,Y)$ or if $s\in S\cap \mathrm{Hom}(X,Y)$, an edge in the opposite direction $s:Y\rightarrow X$. A path between two objects $M,N\in A[S^{-1}]$ is a sequence of directed edges $M=L_0, L_1,\dots,L_n=N$, where the direction does not need to be the same. We define $\mathrm{Hom}(M,N)$ as the equivalence class of paths where two paths are equivalent if they can be transformed to each other via a sequence of the following transformations.

1. for $X\xrightarrow{f}Y\xrightarrow{g}Z$, replace with $X\xrightarrow{gf}Z$,
2. for $X\xrightarrow{s} Y\xleftarrow{s}X$ where $s\in S$, replace with $X\xrightarrow{\mathbf{1}_X} X$,
3. for $Y\xleftarrow{s} X\xrightarrow{s}Y$ where $s\in S$, replace with $Y\xrightarrow{\mathbf{1}_Y} Y$,
4. for $X\xrightarrow{\mathbf{1}_X}X\xleftarrow{s} Y$, replace with $X\xleftarrow{s}Y$

Long story short, this is a well defined equivalence relation, so it forms a category where composition is concatonation. For the localization functor $Q:\mathcal A\rightarrow \mathcal A[S^{-1}]$, it sends objects to themselves, and morphisms to the equivalence class with the path being the single morphism. Here we should give extra care that the arrows can some times mean directed edges, and is $Y\leftarrow X$ can mean a path from $Y$ to $X$, only with the directed edge in the opposite direction. We can verify that this indeed satisfies the universal property of localization. We may also check that by this localization construciton, one can write morphisms in the form $$\left(Q\left(f_1\right) \circ Q\left(s_1\right)^{-1}\right) \circ \cdots \circ\left(Q\left(f_n\right) \circ Q\left(s_n\right)^{-1}\right)$$
where $s_i\in S$. A _localizing class_ $S$ of a category $\mathcal A$ is a class of morphisms such that
1. all identity morphisms are in $S$.
2. if two morphisms in $S$ compose, then their composition in in $S$.
3. for any $f:M\rightarrow N$ and $s:L\rightarrow N$ with $s\in S$, exists $g:K\rightarrow L$ and $t:K\rightarrow M$ with $t\in S$ s.t.

{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwxLCJNIl0sWzAsMCwiSyJdLFsxLDAsIkwiXSxbMSwxLCJOIl0sWzEsMCwidCIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFswLDMsImYiLDJdLFsyLDMsInMiXSxbMSwyLCJnIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d&embed"
    width="180px"
    height="180px"
    radius="8px"
>}}

commutes.
4. for any $f:N\rightarrow M$ and $s:N\rightarrow L$ with $s\in S$, exists $g:L\rightarrow K$ and $t:M\rightarrow K$ with $t\in S$ s.t.

{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwxLCJNIl0sWzAsMCwiSyJdLFsxLDAsIkwiXSxbMSwxLCJOIl0sWzAsMSwidCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFszLDAsImYiXSxbMywyLCJzIiwyXSxbMiwxLCJnIiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d&embed"
    width="180px"
    height="180px"
    radius="0px"
>}}

commutes.
5. for any morphisms $f,g:M\rightarrow N$, we have $\exists s\in S, sf=sg \Longleftrightarrow \exists t\in S, ft=gt$

This is the categorification of the notion of denominator set when localizing non-commutative rings, see [Ore condition](https://en.wikipedia.org/wiki/Ore_condition). In fact a ring can be viewed as an additive category (by delooping). The localizing classes are classes of "nice" morphisms to localize at for which we could develop a description of roofs.

For a category $\mathcal A$ and a localizing class $S$. A morphism $Q(f)\circ Q(s)^{-1}$ in $\mathcal A[S^{-1}]$ is represented by a left roof, which is a diagram $M\xleftarrow{s}L\xrightarrow{f}N$, and a morphism $Q(t)^{-1}\circ Q(g)$ with $t\in S$ is represented by a right roof which is a diagram $M\xrightarrow{g}L\xleftarrow{t}N$. We say that the two left roofs $M\xleftarrow{s}L\xrightarrow{f}N$ and $M\xleftarrow{t}K\xrightarrow{g}N$ are equivalent if there exists $p:H\rightarrow L$ and $q:H\rightarrow K$ such that $sp,tq\in S$ and the diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsNSxbMiwwLCJIIl0sWzEsMSwiTCJdLFszLDEsIksiXSxbMCwyLCJNIl0sWzQsMiwiTiJdLFswLDEsInAiLDJdLFswLDIsInEiXSxbMSwzLCJzIiwyXSxbMiw0LCJnIl0sWzIsMywidCJdLFsxLDQsImYiLDJdXQ==&embed"
    width="350px"
    height="250px"
    radius="8px"
>}}

commutes. We can show that this is an equivalence relation. The only difficult part is transitivity. This can be done using a diagram chasing argument. We can also define composition of roofs. The composition of the previous two roofs is defined as a composition of the diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsNixbMiwwLCJVIl0sWzEsMSwiTCJdLFszLDEsIksiXSxbMCwyLCJNIl0sWzIsMiwiTiJdLFs0LDIsIlAiXSxbMCwxLCJsIiwyXSxbMCwyLCJrIl0sWzEsMywicyIsMl0sWzEsNCwiZiJdLFsyLDQsInQiLDJdLFsyLDUsImciXV0=&embed"
    width="350px"
    height="250px"
    radius="8px"
>}}

where $U$ and the associated maps are induced from the fact that $S$ is a localizing class. We could check that these satisfies all the desirable properties of a composition. Composition respects equivalence of roofs, is associative, and has an identity given by $M\xleftarrow{\mathbf{1}_M} M\xrightarrow{\mathbf{1}_M} M$. One can check that the category of (equivalence classes of) left roofs $\mathcal A_S$ is equivalent to right roofs, so we might as well just work with left roofs. We define a functor $Q:\mathcal A\rightarrow \mathcal A_S$ by letting it be identity on objects and for each morphism $f:M\rightarrow N$, let $Q(f)$ be the equivalence class of roofs $M\xleftarrow{\mathbf 1_M}M\xrightarrow{f} N$. This satisfies the universal property of localization, hence isomorphic to $\mathcal A[S^{-1}]$.

{{< theorem >}}
For $S$ a localizing class of category $\mathcal A$, the category $\mathcal A_S$ and functor $Q:\mathcal A\rightarrow \mathcal A_S$ satisfies the universal property of localization, i.e. $Q(s)$ is an isomorphism for each $s\in S$ and is universal w.r.t. it.
{{< /theorem >}}
{{< proof >}}
For the first property, $M\xleftarrow{\mathbf{1}_M}M\xrightarrow{s}N$ has an inverse $N\xleftarrow{s}M\xrightarrow{\mathbf{1}_M}M$. Next, suppose $F:\mathcal A\rightarrow \mathcal B$ is such that $F(s)$ is an isomorphism for all $s\in S$, define functor $G:\mathcal A_S\rightarrow \mathcal B$ as identity on objects, and for morphisms, the following. If $\phi:M\rightarrow N$ in $\mathcal A_S$, choose a representing roof $M\xleftarrow{s}L\xrightarrow{f}N$, and define $G(\phi)=F(f)\circ F(s)^{-1}$. It's not immediately obvious that this is well defined on equivalence classes, but we omit the verification. This obviously satisfies $F=G\circ Q$. It is left to the reader to verify that $G$ respects composition, which is the last piece of verification necessary.
{{< /proof >}}

If $\mathcal A$ is an additive category, then localizing it would also have an additive structure. In fact if $\mathcal A$ is additive, we may restate the last axiom of localizing class as: for $f:M\rightarrow N$ exists $\exists s\in S, sf=0\Longleftrightarrow \exists t\in S, tf=0$. And the inherited additive structure is the obvious one. It is not trivial to check that it is well defined, but again we ommit the verification. Again everything works out as we expected, biproducts, zero objects are preserved, and localization functor is additive. We can also check that $f=0$ in the localization iff exists $t\in S$ with $tf=0$ iff exists $t\in S$ with $ft=0$, and $M=\mathbf 0$ in the localization iff exists $N\in\mathcal A$ with $(N\xrightarrow{0}M)\in S$ iff exists $N\in\mathcal A$ with $(M\xrightarrow{0}N)\in S$. These are easy to prove and left as an exercise. Similarly, one can show the localization of abelian categories is abelian. 

Given a triangulated category, a natural question to ask is: when is a localization of it also triangulated? In other words, when is the localizing class compatible with triangulation? For a localizing class $S$ in the triangulated category $\mathcal C$, the localization is compatible with triangulation if the following conditions hold

1. for each morphism $f$, we have $f\in S$ iff $f[1]$ in $S$.
2. a diagram with $s,t\in S$ and distinguished rows

{{< quiver
    src="https://q.uiver.app/?q=WzAsOCxbMCwwLCJYIl0sWzEsMCwiWSJdLFsyLDAsIloiXSxbMywwLCJYWzFdIl0sWzAsMSwiWF5cXHByaW1lIl0sWzEsMSwiWV5cXHByaW1lIl0sWzIsMSwiWl5cXHByaW1lIl0sWzMsMSwiWF5cXHByaW1lWzFdIl0sWzAsNCwicyJdLFsxLDUsInQiXSxbMiw2LCJ1IiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzMsNywic1sxXSJdLFswLDFdLFsxLDJdLFsyLDNdLFs0LDVdLFs1LDZdLFs2LDddXQ==&embed"
    width="300px"
    height="180px"
    radius="8px"
>}}

can be completed to a morphism of distinguished triangles. 

We can show that if these conditions hold then the localization $\mathcal C[S^{-1}]$ inherits the triangulated structure $QT_{\mathcal C}$, and a triangle is distinguished if it is isomorphic to an image of a distinguished triangle. One can show that a cohomological functor on $\mathcal C$ induces a corresponding cohomological functor on $\mathcal C[S^{-1}]$.

{{< definition >}}
The derived category $D(\mathcal A)$ of an abelian categroy $\mathcal A$ is the localization $K(\mathcal A)[S^{-1}]$ where $S$ is the class of quasi-isomorphisms. Let $D^{+}(\mathcal A),D^{-}(\mathcal A),D^{b}(\mathcal A)$ be the full subcategory of $D(\mathcal A)$ to the bounded below, bounded above, and bounded complexes.
{{< /definition >}}

It is an arduous process to verify that the class of quasi-isomorphisms is a localizing class compatible with triangulation, which the readers can do in their own time.

{{< theorem >}}
For an abelian category $\mathcal A$, the functor $\mathcal A\rightarrow D(\mathcal A)$ by $X\mapsto X$ is fully faithful.
{{< /theorem >}}
{{< proof >}}
I will prove this later.
{{< /proof >}}