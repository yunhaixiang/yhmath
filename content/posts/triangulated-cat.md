---
title: 'Triangulated Categories'
date: 2025-12-10 20:00:36
categories: ["expositions"]
tags: ["math", "category-theory"]
---
{{< pullquote author="Sofia Kovalevskaya">}}
It is impossible to be a mathematician without being a poet in soul.
{{< /pullquote >}}

This is an old post from 2023. Continuing last week where we defined the homotopy category of complexes, we will take a look at triangulated categories. This will help us build towards the definition of derived categories. In some sense, triangulated categories are approximations of abelian categories. They are not strictly speaking a weaker version of abelian categories, and they don't really imply each other. Triangulated categories takes a different approach to abelian categories. Instead of kernels, cokernels, and strict morphisms, triangulated categories bypass these notions and start out with "distinguished triangles", which are similar to exact sequences.

<!--more-->

A translation functor on an additive category $\mathcal C$ is an automorphism $T:\mathcal C\rightarrow\mathcal C$ where we denote $T^n(X)=X[n]$ and $T^nf=f[n]$ for $n\in\mathbb Z$. A _triangle_ is a diagram $X\rightarrow Y\rightarrow Z\rightarrow X[1]$, and a morphism of triangles is a diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsOCxbMCwwLCJYIl0sWzEsMCwiWSJdLFsyLDAsIloiXSxbMywwLCJYWzFdIl0sWzAsMSwiWF5cXHByaW1lIl0sWzEsMSwiWV5cXHByaW1lIl0sWzIsMSwiWl5cXHByaW1lIl0sWzMsMSwiWF5cXHByaW1lWzFdIl0sWzAsMV0sWzEsMl0sWzIsM10sWzQsNV0sWzUsNl0sWzYsN10sWzAsNCwidSJdLFsxLDUsInYiXSxbMiw2LCJ3Il0sWzMsNywidVsxXSJdXQ==&embed"
    width="300px"
    height="180px"
    radius="0px"
>}}

which commutes. A triangulated category is an additive category $\mathcal C$ with a translation functor and a family of triangles called _distinguished triangles_ such that the following axioms are satisfied.

1. For any $X\in\mathcal C$, the triangle $X\xrightarrow{\mathbf 1_X} X\rightarrow \mathbf 0\rightarrow X[1]$ is distinguished.
2. Any triangle isomorphic to a distinguished triangle is distinguished.
3. Any morphism $X\rightarrow Y$ can be completed to a distinguished triangle $X\rightarrow Y\rightarrow Z\rightarrow X[1]$.
4. (Rotation axiom) A triangle $X\xrightarrow{u} Y\rightarrow Z\rightarrow X[1]$ is distinguished iff $Y\rightarrow Z\rightarrow X[1]\xrightarrow{-u[1]}Y[1]$ is.
5. Suppose the rows in the diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsOCxbMCwwLCJYIl0sWzEsMCwiWSJdLFsyLDAsIloiXSxbMywwLCJYWzFdIl0sWzAsMSwiWF5cXHByaW1lIl0sWzEsMSwiWV5cXHByaW1lIl0sWzIsMSwiWl5cXHByaW1lIl0sWzMsMSwiWF5cXHByaW1lWzFdIl0sWzAsMV0sWzEsMl0sWzIsM10sWzQsNV0sWzUsNl0sWzYsN10sWzAsNCwidSJdLFsxLDUsInYiXSxbMiw2LCJ3IiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzMsNywidVsxXSJdXQ==&embed"
    width="300px"
    height="180px"
    radius="8px"
>}}

are distinguished, and the left square commutes, then there exists a morphism $w:Z\rightarrow Z^\prime$ (not necessarily unique) completing the diagram into a morphism of triangles. 
6. (Octahedral axiom) Suppose the first three rows are distinguished and the left two squares commute, then there exists morphisms $u,v,w$ completing the diagram into two morphisms of triangles and the whole diagram commutes and the last row is also distinguished

{{< quiver
    src="https://q.uiver.app/?q=WzAsMTYsWzAsMCwiWCJdLFsxLDAsIlkiXSxbMiwwLCJaXlxccHJpbWUiXSxbMywwLCJYWzFdIl0sWzAsMSwiWCJdLFsxLDEsIloiXSxbMiwxLCJZXlxccHJpbWUiXSxbMywxLCJYWzFdIl0sWzAsMiwiWSJdLFsxLDIsIloiXSxbMiwyLCJYXlxccHJpbWUiXSxbMywyLCJZWzFdIl0sWzAsMywiWl5cXHByaW1lIl0sWzEsMywiWV5cXHByaW1lIl0sWzIsMywiWF5cXHByaW1lIl0sWzMsMywiWl5cXHByaW1lWzFdIl0sWzAsNCwiXFxtYXRoYmYgMV9YIl0sWzEsNSwiZyJdLFs0LDgsImciXSxbNSw5LCJcXG1hdGhiZiAxX1oiXSxbMCwxLCJmIl0sWzEsMiwiYSJdLFsyLDNdLFs0LDVdLFs1LDYsImIiXSxbNiw3XSxbOCw5LCJnIl0sWzksMTAsImMiXSxbMTAsMTFdLFszLDcsIlxcbWF0aGJmIDFfe1hbMV19Il0sWzcsMTEsImZbMV0iXSxbMiw2LCJ1IiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzYsMTAsInYiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMTAsMTQsIlxcbWF0aGJmIDFfe1heXFxwcmltZX0iXSxbMTIsMTMsInUiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMTMsMTQsInYiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMTQsMTUsInciLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMTEsMTUsImFbMV0iXSxbOCwxMiwiYSJdLFs5LDEzLCJiIl1d&embed"
    width="300px"
    height="300px"
    radius="8px"
>}} 

If all but the last axiom is satisfied, then it is known as a _pre-triangulated category_. It is conjectured that pre-triangulated categories are triangulated, i.e. the last axiom is redundant. The general concensus seems to be that this is not true. 

An additive functor between triangulated categories $F:\mathcal C\rightarrow\mathcal D$ is said to _commute with translation_ if there is a natural isomorphism $FT_{\mathcal C}\cong T_{\mathcal D} F$, and $F$ is said to be _exact_ or _triangulated_ if it commutes with translation and takes distinguished triangles to distinguished triangles. Let $F,G:\mathcal C\rightarrow\mathcal D$ be exact functors, and $\eta_{F}:FT_{\mathcal C}\rightarrow T_{\mathcal D}F$ and $\eta_{G}:GT_{\mathcal C}\rightarrow T_{\mathcal D}G$ be natural isomorphisms, then a natural transformation $w:F\rightarrow G$ is _graded_ if for $X\in\mathcal C$

{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJGVF97XFxtYXRoY2FsIEN9WCJdLFsxLDAsIlRfe1xcbWF0aGNhbCBEfUZYIl0sWzAsMSwiR1RfXFxtYXRoY2Fse0N9WCJdLFsxLDEsIlRfXFxtYXRoY2FsIERGWCJdLFswLDEsIlxcZXRhX3tGLFh9Il0sWzAsMiwid197VF9cXG1hdGhjYWwgQ1h9IiwyXSxbMSwzLCJUX1xcbWF0aGNhbCBEd19YIl0sWzIsMywiXFxldGFfe0csWH0iLDJdXQ==&embed"
    width="180px"
    height="180px"
    radius="8px"
>}}

commutes. 

{{< theorem >}}
In a (pre)triangulated category $\mathcal C$, if $X\xrightarrow{u} Y\xrightarrow{v} Z\xrightarrow{w} X[1]$ is distinguished, then
1. $vu=0$ and $wv=0$
2. any change of sign of exactly two of $u,v,w$ is distinguished,
3. if $U\in\mathcal C$, then there exists long exact sequences of abelian groups $$\begin{aligned}&\cdots\rightarrow\mathrm{Hom}(U,X[i])\xrightarrow{u[i]_*}\mathrm{Hom}(U,Y[i])\xrightarrow{v[i]_*} \mathrm{Hom}(U,Z[i])\xrightarrow{w[i]_*}\mathrm{Hom}(U,X[i+1])\rightarrow\cdots\\\ &\cdots\leftarrow\mathrm{Hom}(X[i],U)\xleftarrow{u[i]^*}\mathrm{Hom}(Y[i],U)\xleftarrow{v[i]^*} \mathrm{Hom}(Z[i],U)\xleftarrow{w[i]^*}\mathrm{Hom}(X[i+1],U)\leftarrow\cdots\end{aligned}$$
where $f^*,f_*$ for some $f$ represents maps induced by Hom-functors.
4. (triangulated 5-lemma) Consider a morphism of distinguished triangles, and let its components be $f:X\rightarrow X^\prime,g:Y\rightarrow Y^\prime,h:Z\rightarrow Z^\prime$, then if any two of them are isomorphisms, so is the third.
5. $u$ is an isomorphism iff $Z\cong\mathbf{0}$
{{< /theorem >}}
{{< proof >}}
1. It suffice to show $vu=0$, and $wv=0$ can be obtained from the rotation axiom. To show this, we first note that $Z\rightarrow Z\rightarrow \mathbf 0\rightarrow Z[1]$ is distinguished. The triangle $Y\rightarrow Z\rightarrow X[1]\rightarrow Y[1]$ is distinguished by axiom 4, and we construct a morphism between them via axiom 5, and then we can obtain $vu=0$ from the commutativity of a square in the diagram.
2. Straightforwardly, the triangle obtained by changing exactly two signs is isomorphic to the original triangle by an obvious morphism of triangles, so it is still distinguished.
3. We will only prove the first one, and the second one is proved dually. Since $vu=0$, we have $(v[i])(u[i])=0$, so $\mathrm{Im}(u[i]_*)\subseteq \mathrm{Ker}(v[i]_*)$. Conversely, suppose $f\in \mathrm{Ker}(v[i]_*)$, so $f(v[i])=0$. Consider the diagram as follows

{{< quiver
    src="https://q.uiver.app/?q=WzAsOCxbMCwwLCJVWy1pXSJdLFsxLDAsIlxcbWF0aGJmezB9Il0sWzIsMCwiVVstaSsxXSJdLFszLDAsIlVbLWkrMV0iXSxbMCwxLCJZIl0sWzEsMSwiWiJdLFsyLDEsIlhbMV0iXSxbMywxLCJZWzFdIl0sWzAsMV0sWzEsMl0sWzIsMywiLVxcbWF0aGJmezF9Il0sWzQsNSwidiJdLFs1LDYsInciXSxbNiw3LCItdVsxXSJdLFswLDQsImZbLWldIl0sWzEsNV0sWzMsNywiZlstaSsxXSJdXQ==&embed"
    width="360px"
    height="200px"
    radius="8px"
>}}
which we can complete to a morphism of triangles with some $h:U[-i+1]\rightarrow X[1]$. By the commutativity of the rightmost square, $-f[-i+1]=-(u[i])h$ so $f=(u[i])(h[-i+1])$, so $f\in \mathrm{Im}(u[i]_*)$. By the rotation axiom, since we proved a short exact sequence, we have the exactness of the long exact sequence.
4. By the rotation axiom, it suffice to show the case where the first two are isomorphisms. By using (3), we have a long exact sequence, and we can obtain the isomorphism using the usual 5-lemma, details ommited.
5. A striaghtforward corollary.
{{< /proof >}}

Let $\mathcal C$ be a triangulated category and $\mathcal A$ an abelian category, then an additive functor $H:\mathcal C\rightarrow\mathcal A$ is called _cohomological_ if for every distinguished triangle $X\rightarrow Y\rightarrow Z\rightarrow X[1]$, the sequence $H(X)\rightarrow H(Y)\rightarrow H(Z)$ is exact. It is then a straightforward consequence by the rotation axiom that for every distinguished triangle $X\rightarrow Y\rightarrow Z\rightarrow X[1]$, we have the following long exact sequence
$$\cdots\rightarrow H(X[i])\xrightarrow{H(u[i])} H(Y[i])\xrightarrow{H(v[i])}H(Z[i])\xrightarrow{H(w[i])}H(X[i+1])\rightarrow\cdots$$
What we just proved in part 3 of the previous theorem is that the Hom-functor is cohomological. 

{{< definition >}}
An object in an abelian category is _simple_ if the only subobjects are zero and the object itself, and semisimple if it is a coproduct of simple objects. An abelian category is semisimple if every short exact sequence splits.
{{< /definition >}}

Caution: some authors call a category semisimple if all objects are semisimple, which is a stronger definition and is NOT equivalent to our definition. Every semisimple abelian category has a triangulated structure. To do this, we let the translation functor be the identity functor, and we declare a triangle $X\xrightarrow{u} Y\xrightarrow{v} Z\xrightarrow{w} X$ distinguished if it is "exact" at $X$, i.e. $\mathrm{Ker}(u)=\mathrm{Im}(w)$. Verifying this is a triangulated category is a tedious, and we will not do it here. Moreover, all abelian triangulated categories are semisimple. We will not prove this either. In fact, the homotopy category of complexes $K(\mathcal A)$ is triangulated. To see this, we set the distinguished triangles to be the ones isomorphic to a standard triangle of the form $$X^\bullet\xrightarrow{f^\bullet} Y^\bullet \xrightarrow{i_f^\bullet} \mathrm{Cone}(f^\bullet)\xrightarrow{p_f^\bullet} X^\bullet[1]$$
and as expected, the cohomology functor $H^n:K(\mathcal A)\rightarrow\mathcal A$ is cohomological.
