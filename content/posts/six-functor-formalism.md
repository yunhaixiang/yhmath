---
title: Six Functor Formalism
date: 2026-06-27 00:00:01 -0400
slug: six-functor-formalism
aliases:
  - /posts/six-functor-formalism/
categories: [expositions]
tags: [math, algebraic-geometry, cohomology]
---

{{< pullquote author="Gian-Carlo Rota">}}
We often hear that mathematics consists mainly of “proving theorems.” Is a writer’s job mainly that of “writing sentences?”
{{< /pullquote >}}

The six functor formalism is one of the organizing languages of modern cohomology theory. Given a reasonable map of spaces or schemes $f:X\rightarrow Y$, it packages the natural operations on derived categories of sheaves into six functors and records the compatibilities between them: adjunctions, base change, projection formulas, and duality. 


## Six Functors

The formalism is as follows. Suppose we work with a category $\mathcal C$ of some kind of “well behaved” geometric objects, for example locally compact topological spaces, smooth manifolds, schemes of finite type over a fixed base scheme, to name a few. We require $\mathcal C$ has fibred products and terminal object $\mathrm{pt}$. The formalism consists of the following data:

1. For each $X\in\mathcal C$, a closed symmetric monoidal triangulated category $D(X)$ with unit object $\mathbf{1}_X$. This means there are functors
$$\begin{aligned}
(-\overset{\mathrm{L}}{\otimes}-)&:D(X)\times D(X)\rightarrow D(X),\\
\mathrm{R}\mathcal{H}om_X(-,-)&:D(X)^{\mathrm{op}}\times D(X)\rightarrow D(X).
\end{aligned}$$
and they satisfy the tensor-Hom adjunction: for each $S\in D(X)$
$$
-\overset{\mathrm{L}}{\otimes}S \dashv \mathrm{R}\mathcal{H}om_X(S,-).
$$
2. For each morphism $f:X\rightarrow Y$, two functors
$$
f^*:D(Y)\rightarrow D(X),\qquad \mathrm{R}f_*:D(X)\rightarrow D(Y),
$$
called the *pullback* and *pushforward*, with an adjunction
$$
f^*\dashv \mathrm{R}f_*.
$$
such that for $X\xrightarrow{f} Y\xrightarrow{g} Z$, there are isomorphisms
$$
(g\circ f)^*\cong (f^*\circ g^*),\qquad \mathrm{R}(g\circ f)_*\cong (\mathrm{R}g_*\circ \mathrm{R}f_*).
$$
and for the identity morphism $\mathrm{id}_X:X\rightarrow X$, there are isomorphisms
$$
(\mathrm{id}_X)^*\cong \mathrm{id}_{D(X)},\qquad \mathrm{R}(\mathrm{id}_X)_*\cong \mathrm{id}_{D(X)}.
$$
and the pullback should respect the symmetric monoidal structure:
$$
f^*(A\overset{\mathrm{L}}{\otimes}B)\cong (f^*A\overset{\mathrm{L}}{\otimes}f^*B),\qquad f^*\mathbf{1}_Y\cong \mathbf{1}_X.
$$
where $\mathbf{1}_X$ is the unit object for each $X$. 
3. For each morphism $f:X\rightarrow Y$, two functors
$$
f^!:D(Y)\rightarrow D(X),\qquad \mathrm{R}f_!:D(X)\rightarrow D(Y),
$$
called the *exceptional pullback* and *exceptional pushforward*, with an adjunction
$$
\mathrm{R}f_!\dashv f^!.
$$
such that for $X\xrightarrow{f} Y\xrightarrow{g} Z$, there are isomorphisms
$$
(g\circ f)^!\cong (f^!\circ g^!),\qquad \mathrm{R}(g\circ f)_!\cong (\mathrm{R}g_!\circ \mathrm{R}f_!).
$$
and for the identity morphism $\mathrm{id}_X:X\rightarrow X$, there are isomorphisms
$$
(\mathrm{id}_X)^!\cong \mathrm{id}_{D(X)},\qquad \mathrm{R}(\mathrm{id}_X)_!\cong \mathrm{id}_{D(X)}.
$$

These are the six functors. 

{{< quiver
    src="https://q.uiver.app/#q=WzAsNCxbMSwwLCJEKFkpIl0sWzAsMSwiRChYKSJdLFsyLDEsIkQoWCkiXSxbMSwyLCJEKFkpIl0sWzAsMSwiZl4hIiwyXSxbMCwyLCJmXioiXSxbMSwzLCJcXG1hdGhybSBSZl8qIiwyXSxbMiwzLCJcXG1hdGhybSBSIGZfISJdLFsxLDIsIigtXFxvdGltZXNeTCBTKSIsMSx7Im9mZnNldCI6LTIsImN1cnZlIjotMX1dLFsyLDEsIlxcbWF0aHJtIFJcXG1hdGhybXtIb219KFMsLSkiLDEseyJvZmZzZXQiOi0yLCJjdXJ2ZSI6LTF9XSxbOCw5LCIiLDEseyJsZXZlbCI6MSwic3R5bGUiOnsibmFtZSI6ImFkanVuY3Rpb24ifX1dXQ==&embed"
    width="100%"
    height="220px"
    scale="1.2"
    radius="0px"
>}}

## Base Change Formula

Given a Cartesian diagram
$$
\begin{array}{ccc}
X' & \xrightarrow{g'} & X \\
{\scriptstyle f'}\downarrow & & \downarrow{\scriptstyle f} \\
Y' & \xrightarrow{g} & Y,
\end{array}
$$

From the adjunctions one gets a map
$$
g^*\circ \mathrm{R}f_*\longrightarrow \mathrm{R}f'_*\circ {g'}^*.
$$
To construct it, let $A\in D(X)$. By the adjunction $f'^*\dashv \mathrm{R}f'_*$, it is enough to construct a morphism
$$
f'^*g^*\mathrm{R}f_*A\longrightarrow {g'}^*A.
$$
Since the square is Cartesian, the pullbacks satisfy a canonical identification
$$
f'^*g^*\cong {g'}^*f^*.
$$
Thus the left hand side identifies with
$$
{g'}^*f^*\mathrm{R}f_*A.
$$
Now apply ${g'}^*$ to the counit of the adjunction $f^*\dashv \mathrm{R}f_*$,
$$
f^*\mathrm{R}f_*A\longrightarrow A,
$$
to obtain
$$
{g'}^*f^*\mathrm{R}f_*A\longrightarrow {g'}^*A.
$$
The base change morphism is the adjoint of this composite.
Similarly, for compactly supported pushforward one has the base change morphism
$$
g^*\circ \mathrm{R}f_!\longrightarrow \mathrm{R}f'_!\circ {g'}^*,
$$
constructed in the same way using the adjunction $\mathrm{R}f_!\dashv f^!$. These base change morphisms are required to be isomorphisms under the hypotheses of the chosen six functor formalism.


## Projection Formula

For a morphism $f:X\rightarrow Y$, $A\in D(X)$, and $B\in D(Y)$, the projection formula compares pushing forward after tensoring by a pullback with tensoring after pushing forward. There is a natural morphism
$$
(\mathrm{R}f_*A)\overset{\mathrm{L}}{\otimes}B\longrightarrow \mathrm{R}f_*(A\overset{\mathrm{L}}{\otimes}f^*B).
$$
This map is constructed from the adjunction $f^*\dashv \mathrm{R}f_*$. By adjunction, it is enough to give a morphism after applying $f^*$:
$$
f^*((\mathrm{R}f_*A)\overset{\mathrm{L}}{\otimes}B)\longrightarrow A\overset{\mathrm{L}}{\otimes}f^*B.
$$
Since $f^*$ is symmetric monoidal, the left hand side identifies with
$$
f^*\mathrm{R}f_*A\overset{\mathrm{L}}{\otimes}f^*B.
$$
Now use the counit of the adjunction, $f^*\mathrm{R}f_*A\rightarrow A$, tensor it with $\mathrm{id}_{f^*B}$, and obtain
$$
f^*\mathrm{R}f_*A\overset{\mathrm{L}}{\otimes}f^*B\longrightarrow A\overset{\mathrm{L}}{\otimes}f^*B.
$$
The projection morphism is the adjoint of this composite.
Equivalently, depending on conventions, one writes the projection formula as the isomorphism
$$
\mathrm{R}f_*(A\overset{\mathrm{L}}{\otimes}f^*B)\cong ((\mathrm{R}f_*A)\overset{\mathrm{L}}{\otimes}B).
$$
For the exceptional pushforward, the corresponding formula is
$$
\mathrm{R}f_!(A\overset{\mathrm{L}}{\otimes}f^*B)\cong ((\mathrm{R}f_!A)\overset{\mathrm{L}}{\otimes}B).
$$
This compatibility says that objects pulled back from $Y$ can be moved through the pushforward along $f$.


## Localization

Let $i:Z\hookrightarrow X$ be a closed immersion and let $j:U\hookrightarrow X$ be its open complement. Localization says that $D(X)$ is assembled from the categories $D(Z)$ and $D(U)$. The basic functors are
$$
i^*,\quad \mathrm{R}i_*,\quad i^!,\qquad j^*,\quad \mathrm{R}j_*,\quad \mathrm{R}j_!.
$$
Here $i_*=i_!$ for a closed immersion, so one usually writes just $\mathrm{R}i_*$. The formalism requires the standard vanishing relations
$$
j^*\mathrm{R}i_*=0,\qquad i^*\mathrm{R}j_!=0,\qquad i^!\mathrm{R}j_*=0.
$$
It also requires the localization triangles. For every $A\in D(X)$, there are distinguished triangles
$$
\mathrm{R}j_!j^*A\longrightarrow A\longrightarrow \mathrm{R}i_*i^*A\overset{+1}{\longrightarrow}
$$
and
$$
\mathrm{R}i_*i^!A\longrightarrow A\longrightarrow \mathrm{R}j_*j^*A\overset{+1}{\longrightarrow}.
$$
The maps in these triangles come from adjunctions. In the first triangle, the map
$$
\mathrm{R}j_!j^*A\longrightarrow A
$$
is the counit of the adjunction $\mathrm{R}j_!\dashv j^*$, applied to $A$. The map
$$
A\longrightarrow \mathrm{R}i_*i^*A
$$
is the unit of the adjunction $i^*\dashv \mathrm{R}i_*$. The composite is zero because after applying $j^*$ it becomes the map
$$
j^*A\longrightarrow j^*\mathrm{R}i_*i^*A=0,
$$
and after applying $i^*$ it becomes the map
$$
i^*\mathrm{R}j_!j^*A=0\longrightarrow i^*A.
$$
The first localization triangle says that this pair of adjunction maps completes to a distinguished triangle.

Similarly, in the second triangle, the map
$$
\mathrm{R}i_*i^!A\longrightarrow A
$$
is the counit of the adjunction $\mathrm{R}i_*\dashv i^!$, and the map
$$
A\longrightarrow \mathrm{R}j_*j^*A
$$
is the unit of the adjunction $j^*\dashv \mathrm{R}j_*$. Again the composite is zero by the vanishing relations $i^!\mathrm{R}j_*=0$ and $j^*\mathrm{R}i_*=0$.
The first triangle decomposes $A$ into the part supported on the open subset $U$ and the quotient supported on $Z$. The second triangle is the dual version, replacing $i^*$ and $j_!$ by $i^!$ and $j_*$.


## Grothendieck–Verdier Duality

Let $p_X:X\rightarrow \mathrm{pt}$ be the structure morphism to the terminal object of $\mathcal C$. The *dualizing object* of $X$ is
$$
\omega_X:=p_X^!\mathbf{1}_{\mathrm{pt}}.
$$
More generally, for a morphism $f:X\rightarrow Y$, the *relative dualizing object* is
$$
\omega_f:=f^!\mathbf{1}_Y.
$$
Using the closed monoidal structure on $D(X)$, the dualizing object defines the Verdier duality functor
$$
\mathbb{D}_X(-):=\mathrm{R}\mathcal{H}om_X(-,\omega_X).
$$
Grothendieck–Verdier duality says that, under suitable finiteness hypotheses, this duality exchanges compactly supported pushforward with ordinary pushforward:
$$
\mathbb{D}_Y\circ \mathrm{R}f_!\cong \mathrm{R}f_*\circ \mathbb{D}_X.
$$
Equivalently, one has a natural duality isomorphism
$$
\mathrm{R}f_*\mathrm{R}\mathcal{H}om_X(A,f^!B)\cong \mathrm{R}\mathcal{H}om_Y(\mathrm{R}f_!A,B),
$$
for $A\in D(X)$ and $B\in D(Y)$. In particular, exceptional pullback is the operation adjoint to compactly supported pushforward and compatible with Verdier duality.


## Purity

Purity is the principle that, for sufficiently good morphisms, the exceptional pullback $f^!$ is ordinary pullback up to explicit geometric corrections. These corrections are shifts and twists. Here $[n]$ denotes the cohomological shift in the category $D(X)$. In theories with Tate twists, $\mathbf{1}_X(1)$ denotes the Tate object on $X$, and for $m\in\mathbb Z$ one writes
$$
\mathbf{1}_X(m):=\mathbf{1}_X(1)^{\overset{\mathrm{L}}{\otimes}m}.
$$
For any $A\in D(X)$, we write
$$
A(m):=A\overset{\mathrm{L}}{\otimes}\mathbf{1}_X(m).
$$

There are two basic forms of purity. First, if $f:X\rightarrow Y$ is smooth of relative dimension $d$, then smooth purity says
$$
f^!A\cong f^*A(d)[2d]
$$
for $A\in D(Y)$. Equivalently,
$$
\omega_f:=f^!\mathbf{1}_Y\cong \mathbf{1}_X(d)[2d].
$$
Second, if $i:Z\hookrightarrow X$ is a regular closed immersion of codimension $c$, then absolute purity says
$$
i^!\mathbf{1}_X\cong \mathbf{1}_Z(-c)[-2c].
$$
Consequently, for $A\in D(X)$,
$$
i^!A\cong i^*A(-c)[-2c].
$$

## Gysin Map and Trace Map

The Gysin and trace maps are concrete maps obtained from the abstract adjunctions once purity identifies $f^!$ with a shifted and twisted version of $f^*$. Let $f:X\rightarrow Y$ be a morphism for which a purity isomorphism is available. The counit of the adjunction
$$
\mathrm{R}f_!\dashv f^!
$$
is a natural map
$$
\mathrm{R}f_!f^!B\longrightarrow B
$$
for $B\in D(Y)$. Taking $B=\mathbf{1}_Y$ gives
$$
\mathrm{R}f_!\omega_f\longrightarrow \mathbf{1}_Y,
$$
where $\omega_f=f^!\mathbf{1}_Y$ is the relative dualizing object. This is the abstract trace map.

For example, if $f:X\rightarrow Y$ is smooth of relative dimension $d$ and the theory has Tate twists, purity gives
$$
f^!\mathbf{1}_Y\cong \mathbf{1}_X(d)[2d].
$$
Therefore the trace map becomes
$$
\mathrm{R}f_!\mathbf{1}_X(d)[2d]\longrightarrow \mathbf{1}_Y.
$$
After applying cohomology, this gives the usual integration-along-the-fibers map
$$
\mathrm{H}^{n+2d}_c(X,\mathbf{1}_X(d))\longrightarrow \mathrm{H}^n(Y,\mathbf{1}_Y).
$$
If $f$ is proper, then $\mathrm{R}f_!=\mathrm{R}f_*$, so the same map is written
$$
\mathrm{R}f_*\mathbf{1}_X(d)[2d]\longrightarrow \mathbf{1}_Y.
$$

For a regular closed immersion $i:Z\hookrightarrow X$ of codimension $c$, absolute purity gives
$$
i^!\mathbf{1}_X\cong \mathbf{1}_Z(-c)[-2c].
$$
Twisting the counit $\mathrm{R}i_*i^!\mathbf{1}_X\rightarrow \mathbf{1}_X$ by $(c)[2c]$ and using purity gives a map
$$
\mathrm{R}i_*\mathbf{1}_Z\longrightarrow \mathbf{1}_X(c)[2c].
$$
Equivalently, by the adjunction $\mathrm{R}i_*\dashv i^!$, this corresponds to the fundamental class, or Gysin class,
$$
\mathbf{1}_Z\longrightarrow i^!\mathbf{1}_X(c)[2c]\cong \mathbf{1}_Z.
$$
This produces the Gysin pushforward on cohomology
$$
i_*:\mathrm{H}^n(Z,\mathbf{1}_Z)\longrightarrow \mathrm{H}^{n+2c}(X,\mathbf{1}_X(c)).
$$


## References

{{< bibliography >}}
  {{< bibitem key="Har66" author="Robin Hartshorne" type="book" series="Lecture Notes in Mathematics" volume="20" publisher="Springer-Verlag" year="1966" >}}
  Residues and Duality
  {{< /bibitem >}}
  {{< bibitem key="KS90" author="Masaki Kashiwara and Pierre Schapira" type="book" series="Grundlehren der mathematischen Wissenschaften" volume="292" publisher="Springer-Verlag" year="1990" >}}
  Sheaves on Manifolds
  {{< /bibitem >}}
  {{< bibitem key="Ive86" author="Birger Iversen" type="book" series="Universitext" publisher="Springer-Verlag" year="1986" >}}
  Cohomology of Sheaves
  {{< /bibitem >}}
  {{< bibitem key="Mil80" author="James S. Milne" type="book" publisher="Princeton University Press" year="1980" >}}
  Étale Cohomology
  {{< /bibitem >}}
  {{< bibitem key="Del77" author="Pierre Deligne" type="book" series="Lecture Notes in Mathematics" volume="569" publisher="Springer-Verlag" year="1977" >}}
  Cohomologie étale
  {{< /bibitem >}}
  {{< bibitem key="Ayo07" author="Joseph Ayoub" type="book" series="Astérisque" volume="314--315" publisher="Société Mathématique de France" year="2007" >}}
  Les six opérations de Grothendieck et le formalisme des cycles évanescents dans le monde motivique
  {{< /bibitem >}}
  {{< bibitem key="CD19" author="Denis-Charles Cisinski and Frédéric Déglise" type="book" series="Springer Monographs in Mathematics" publisher="Springer" year="2019" >}}
  Triangulated Categories of Mixed Motives
  {{< /bibitem >}}
{{< /bibliography >}}
