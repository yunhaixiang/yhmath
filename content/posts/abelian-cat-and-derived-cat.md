---
title: >-
  Abelian Categories and Derived Functors
categories: ["expositions"]
tags: ["category-theory", "math"]
date: 2025-12-08 15:28:14
---

{{< pullquote author="Stefan Banach">}}
A mathematician is a person who can find analogies between theorems; a better mathematician is one who can see analogies between proofs and the best mathematician can notice analogies between theories. One can imagine that the ultimate mathematician is one who can see analogies between analogies.
{{< /pullquote >}}

This is an old post reposted from 2023. I have always been curious about derived categories. I want this post to be the first part in several parts of my notes. In this first part, we will focus on abelian categoires, derived functors, and homotopy category of complexes. We begin by reviewing abelian categories and their properties. In particular, the (co)chain complexes in an abelian category and their related notions. After that, we define derived functors. Eventually, we finish by defining the homotopy category of complexes $K(\mathcal A)$.

<!--more-->

{{< definition >}}
An _additive category_ $\mathcal C$ is a category where for each $A,B\in\mathcal C$, the morphisms $\mathrm{Mor}(A,B)$ carry an additional additive abelian group structure, and satisfies
1. $\mathcal C$ admits zero object,
2. $\mathcal C$ admits finite products and finite coproducts which coincide, and
3. addition is distributive, i.e. $g\circ (f_1+f_2)=g\circ f_1+g\circ f_2$ and $(f_1+f_2)\circ g=f_1\circ g+ f_2\circ g$ 

We use the notation $\mathrm{Hom}(A,B)$ for $\mathrm{Mor}(A,B)$ in additive categories to emphasize that the morphisms have an abelian group structure. An _additive functor_ $\mathcal F:\mathcal C\rightarrow\mathcal D$ between additive categories is a functor such that the associated map $\mathrm{Hom}(A,B)\rightarrow \mathrm{Hom}(\mathcal F(A),\mathcal F(B))$ is a group homomorphism for each $A,B\in\mathcal C$. Moreover, we denote by $0_{A,B}$ (or $0$ if there is no confusion) the identity element of $\mathrm{Hom}(A,B)$.
{{< /definition >}}

Note $0_{A,B}$ is the zero morphism since it's the unique morphism $A\rightarrow B$ which factors through $\mathbf 0$, i.e. $A\rightarrow\mathbf 0\rightarrow B$.  In particular, note that $0_{A,B}\circ f=0_{X,A}$ and $g\circ 0_{A,B}=0_{B,X}$ for any $f:X\rightarrow A$ and $g:B\rightarrow X$, for any object $X$. We note that equivalently, an additive functor maybe defined as a functor that preserves all finite biproducts.

We recall that in a category $\mathcal C$, the equalizer $\mathrm{Eq}(f,g)$ of morphisms $f,g:A\rightarrow B$ is an object $E\in\mathcal C$ and a morphism $e:E\rightarrow A$ s.t. the diagram $E\rightarrow A\rightrightarrows B$ commutes and is universal with respect to this construction. Dually, the coequalizer $\mathrm{Coeq}(f,g)$ is an object $Q\in\mathcal C$ and a morphism $q:B\rightarrow Q$ s.t. the diagram $ A\rightrightarrows B\rightarrow Q$ commutes and is universal with respect to this construction. In an additive category, for a morphism $f:A\rightarrow B$, define its kernel $\mathrm{Ker}(f)=\mathrm{Eq}(f,0_{A,B})$, cokernel $\mathrm{Coker}(f)=\mathrm{Coeq}(f,0_{A,B})$. Spelled out explicitly, a kernel of $f:A\rightarrow B$ is an object $K$ and a morphism $k:K\rightarrow A$ such that $f\circ k=0_{K,B}$, and given any $K^\prime$ and $k^\prime:K^\prime\rightarrow A$ with $f\circ k^\prime=0_{K^\prime,B}$, there exists unique $u:K^\prime\rightarrow K$ s.t. $k\circ u=k^\prime$.
{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMSwwLCJBIl0sWzIsMCwiQiJdLFswLDAsIksiXSxbMCwxLCJLXlxccHJpbWUiXSxbMCwxLCJmIl0sWzIsMCwiayJdLFsyLDEsIjBfe0ssQn0iLDAseyJjdXJ2ZSI6LTN9XSxbMywwLCJrXlxccHJpbWUiLDIseyJsYWJlbF9wb3NpdGlvbiI6NjB9XSxbMywxLCIwX3tLXlxccHJpbWUsQn0iLDIseyJjdXJ2ZSI6Mn1dLFszLDIsInUiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed"
    height="190px"
    radius="8px"
>}}

Dually, a cokernel of $f:A\rightarrow B$ is an object $Q$ with a morphism $q:B\rightarrow Q$ with $q\circ f=0_{A,Q}$, such that for any object $Q^\prime$ and morphism $q^\prime:B\rightarrow Q$ with $q^\prime\circ f=0_{A,Q^\prime}$, there exists unique $u:Q\rightarrow Q^\prime$ such that $q^\prime=u\circ q$.
{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJBIl0sWzEsMCwiQiJdLFsyLDAsIlEiXSxbMiwxLCJRXlxccHJpbWUiXSxbMCwxLCJmIl0sWzEsMiwicSJdLFsxLDMsInFeXFxwcmltZSIsMl0sWzIsMywidSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFswLDIsIjBfe0EsUX0iLDAseyJjdXJ2ZSI6LTN9XSxbMCwzLCIwX3tBLFFeXFxwcmltZX0iLDIseyJjdXJ2ZSI6Mn1dXQ==&embed"
    height="190px"
    radius="8px"
>}}

Recall a subobject of an object $X$ is an object $A$ with a monomorphism $A\hookrightarrow X$, and a quotient object of $X$ is an object $Q$ with an epimorphism $X\twoheadrightarrow Q$. We remark that $\mathrm{Ker}(f)$ is a subobject of $A$ and $\mathrm{Coker}(f)$ is a quotient object of $B$, when they exist (it is an easy exercise to show equalizers are monic and coequalizers are epic).

{{< definition >}}
An _abelian category_ is an additive category where
1. every morphism has a kernel and a cokernel,
2. every monomorphism is the kernel of its cokernel, and 
3. every epimorphism is the cokernel of its kernel.

Moreover, in an abelian category, for any morphism $f:A\rightarrow B$, we define its image as the kernel of its cokernel $\mathrm{Im}(f)=\mathrm{Ker}(\mathrm{Coker}(f))$, and coimage as the cokernel of its kernel $\mathrm{Coim}(f)=\mathrm{Coker}(\mathrm{Ker}(f))$.
{{< /definition >}}


A quintessential example of an abelian category is the category of $R$-modules. In fact, the [Freyd–Mitchell embedding theorem](https://en.wikipedia.org/wiki/Mitchell%27s_embedding_theorem) states that any abelian category can be embedded to the category of $R$-modules for some $R$ via a fully faithful functor. So we may use element-wise diagram chasing in abelian categories, which may help us derive diagram chasing theorems such as $5$-lemma and snake lemma. In an abelian category, all finite limits and colimits exist, in particular, pullbacks exist and they preserve monomorphisms and epimorphisms. 


{{< lemma >}}
In an abelian category,
1. a morphism $f:A\rightarrow B$ is monic iff $\mathrm{Ker}(f)=\mathbf 0$, and epic iff $\mathrm{Coker}(f)=\mathbf 0$,
2. a morphism $f:A\rightarrow B$ is an isomorphism iff it is monic and epic,
3. each morphism $f:X\rightarrow Y$ factorizes canonically as $X\twoheadrightarrow \mathrm{Im}(f)\hookrightarrow Y$ and $X\twoheadrightarrow \mathrm{Coim}(f)\hookrightarrow Y$
4. for a morphism $f:A\rightarrow B$, if it factorizes as $A\twoheadrightarrow X\rightarrow B$ then $\mathrm{Coker}(f)=\mathrm{Coker}(X\rightarrow B)$, and if it factorizes as $A\rightarrow X\hookrightarrow B$, then $\mathrm{Ker}(f)=\mathrm{Ker}(A\rightarrow X)$.
{{< /lemma >}}
{{< proof >}}
1. Left as an exercise.
2. Left as an exercise.
3. We will only prove the factorization $X\twoheadrightarrow \mathrm{Coim}(f)\hookrightarrow Y$, and the other one can be proved dually. First, we have $\mathrm{Ker}(f)\hookrightarrow X\rightarrow Y$ is zero and $\mathrm{Ker}(f)\hookrightarrow X\twoheadrightarrow \mathrm{Coim}(f)$ is zero, so we have a factorization $X\twoheadrightarrow \mathrm{Coim}(f)\rightarrow Y$ by the universal property of cokernels. It remains to show that $\beta:\mathrm{Coim}(f)\rightarrow Y$ is a monomorphism. Suppose $\varphi_1,\varphi_2:Z\rightarrow \mathrm{Coim}(f)$ with $\beta\circ \varphi_1=\beta\circ \varphi_2$, therefore $\beta\circ \sigma=0$ where $\sigma=\varphi_1-\varphi_2$. Consider the pullback $W=X\times_{\mathrm{Coim}(f)}Z$ with $\tau:W\rightarrow Z$ and $\pi:W\rightarrow X$ of the maps $\mathrm{Coim}(f)$ and $\sigma$. We note that $f\circ\pi=\beta\circ\mathrm{Coim}(f)\circ \pi=\beta\circ\sigma\circ\tau=0$, so $\pi$ factors through $\mathrm{Ker}(f)$ by $W\rightarrow \mathrm{Ker}(f)\hookrightarrow X$ say $w:W\rightarrow \mathrm{Ker}(f)$. Therefore, $\sigma\circ\tau=\mathrm{Coim}(f)\circ \mathrm{Ker}(f)\circ w=0\circ w=0$. Since pullbacks preserve epimorphisms, $\tau$ is epic. Thus $\sigma\circ\tau=0$ implies $\sigma=0$, so $\varphi_1=\varphi_2$.
4. Left as an exercise.
{{< /proof >}}


For a morphism $f:A\rightarrow B$ in an abelian category, we factor $f:A\rightarrow B$ canonically as $A\twoheadrightarrow \mathrm{Coim}(f)\hookrightarrow B$, and since $A\twoheadrightarrow \mathrm{Coim}(f)\hookrightarrow B\rightarrow \mathrm{Coker}(f)$ is zero and $A\twoheadrightarrow \mathrm{Coim}(f)$ is epic, $\mathrm{Coim}(f)\hookrightarrow B\rightarrow \mathrm{Coker}(f)$ is zero, so we can factor $\mathrm{Coim}(f)\hookrightarrow B$ as $\mathrm{Coim}(f)\rightarrow \mathrm{Im}(f)\hookrightarrow B$. We denote by $\overline{f}:\mathrm{Coim}(f)\rightarrow \mathrm{Im}(f)$ the map induced by this factorization, and say $f$ is _strict_ if $\overline{f}$ is an isomorphism. 

<!-- -->

{{< theorem note="First isomorphism theorem" >}}
In an abelian category, all morphisms are strict.
{{< /theorem >}}
{{< proof >}}
Suppose $f:A\rightarrow B$ is a morphism in an abelian category, and factorize as $A\twoheadrightarrow\mathrm{Coim}(f)\hookrightarrow B$. By Lemma 3, $\mathrm{Coker}(f)=\mathrm{Coker}(\mathrm{Coim}(f)\hookrightarrow B)$. Since $\mathrm{Coim}(f)\hookrightarrow B$ is monic, it is the kernel of its cokernel, so it is the kernel of $\mathrm{Coker}(f)$. Since $\mathrm{Im}(f)\hookrightarrow B$ in our construction is also the kernel of $\mathrm{Coker}(f)$, the induced map $\overline{f}$ is an isomorphism by the universal property of kernels.
{{< /proof >}}

In an abelian category, suppose $f:A\rightarrow B$ and $g:B\rightarrow C$ are such that $g\circ f=0$. We factor $A\twoheadrightarrow \mathrm{Im}(f)\hookrightarrow B$, and since $A\twoheadrightarrow \mathrm{Im}(f)\hookrightarrow B\rightarrow C$ is zero and $A\twoheadrightarrow\mathrm{Im}(f)$ is epic, we have $\mathrm{Im}(f)\hookrightarrow B\rightarrow C$ is zero. Thus, we can factor $\mathrm{Im}(f)\hookrightarrow B$ as $\mathrm{Im}(f)\rightarrow \mathrm{Ker}(g)\hookrightarrow B$, and the map $\mathrm{Im}(f)\rightarrow \mathrm{Ker}(g)$ is the _canonical map_. We say such sequence $A\rightarrow B\rightarrow C$ is _exact_ if the canonical map is an isomorphism. More generally, a sequence $d_A^i:A^i\rightarrow A^{i+1}$
$$\cdots\longrightarrow A^{i-1}\xrightarrow{\ d^{i-1}_A\ } A^i\xrightarrow{\ \ d^{i}_A\ \ }  A^{i+1}\longrightarrow\cdots$$
is called a _(co)chain complex_ if each three term subsequence compose to zero, and exact or acyclic if each three term subsequence is exact. A _chain map_ $f^\bullet:A^\bullet\rightarrow B^\bullet$ is a commutative diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsMTAsWzEsMCwiQV57aS0xfSJdLFsyLDAsIkFee2l9Il0sWzMsMCwiQV57aSsxfSJdLFs0LDAsIlxcY2RvdHMiXSxbMCwwLCJcXGNkb3RzIl0sWzAsMSwiXFxjZG90cyJdLFsxLDEsIkJee2ktMX0iXSxbMiwxLCJCXntpfSJdLFszLDEsIkJee2krMX0iXSxbNCwxLCJcXGNkb3RzIl0sWzAsMV0sWzEsMl0sWzIsM10sWzQsMF0sWzUsNl0sWzYsN10sWzcsOF0sWzgsOV0sWzAsNiwiZl57aS0xfSIsMl0sWzEsNywiZl57aX0iLDJdLFsyLDgsImZee2krMX0iLDJdXQ==&embed"
    width="375px"
    height="180px"
    radius="8px"
>}}

A chain homotopy is a collection of maps $h^i:A^i\rightarrow B^{i-1}$ s.t. $f^i-g^i=d^{i-1}_B\circ h^i+h^{i+1}\circ d^i_A$ for all $i$, illustrated by

{{< quiver
    src="https://q.uiver.app/?q=WzAsMTAsWzAsMCwiXFxjZG90cyJdLFsxLDAsIkFee2ktMX0iXSxbMiwwLCJBXmkiXSxbMywwLCJBXntpKzF9Il0sWzQsMCwiXFxjZG90cyJdLFswLDEsIlxcY2RvdHMiXSxbMSwxLCJCXntpLTF9Il0sWzIsMSwiQl5pIl0sWzMsMSwiQl57aSsxfSJdLFs0LDEsIlxcY2RvdHMiXSxbMCwxXSxbMSwyXSxbMiwzXSxbMyw0XSxbNSw2XSxbNiw3XSxbNyw4XSxbOCw5XSxbMSw2LCIiLDAseyJjdXJ2ZSI6MX1dLFsyLDcsIiIsMCx7ImN1cnZlIjoxfV0sWzMsOCwiIiwwLHsiY3VydmUiOjF9XSxbMiw2LCIiLDEseyJjb2xvdXIiOlswLDYwLDYwXX1dLFszLDcsIiIsMSx7ImNvbG91ciI6WzAsNjAsNjBdfV0sWzEsNiwiIiwwLHsiY3VydmUiOi0xfV0sWzIsNywiIiwwLHsiY3VydmUiOi0xfV0sWzMsOCwiIiwwLHsiY3VydmUiOi0xfV1d&embed"
    width="375px"
    height="180px"
    radius="8px"
>}}

which typically does NOT commute. We write $f^\bullet\simeq g^\bullet$ if they are _chain homotopic_, and we say $A^\bullet$ and $B^\bullet$ are _chain homotopy equivalent_ if there are chain maps $f^\bullet:A\rightarrow B$ and $g^\bullet:B\rightarrow A$ s.t. $f^\bullet\circ g^\bullet \simeq \mathbf{1}_{B^\bullet}$ and $g^\bullet\circ f^\bullet \simeq \mathbf{1}_{A^\bullet}$, in which case $f^\bullet$ are $g^\bullet$ called _homotopy pseudo-inverses_. If $A$ is a category, let $C(\mathcal A)$ be the category of chain complexes in $\mathcal A$ with chain maps are morphisms. If $\mathcal A$ is additive, then $C(\mathcal A)$ inherits an obvious group structure on its morphisms, and they make it an additive category as well. Also, if $\mathcal A$ is abelian then so is $C(\mathcal A)$. Let $C^+(\mathcal A)$ be the full subcategory of $C(\mathcal A)$ where the complexes are bounded below (exists $N\in\mathbb Z$ s.t. $A^i=\mathbb 0$ for $i < N $), and similarly $C^-(\mathcal A)$ is the full subcategory $C(\mathcal A)$ where the complexes are bounded above. Let $C^b(\mathcal A)$ be the full subcategory of $C(\mathcal A)$ where the complexes are bounded below and above.

{{< definition >}}
Let $A^\bullet$ be a cochain complex in $\mathcal A$ with canonical morphisms $\mathrm{Im}(d^{n-1})\rightarrow\mathrm{Ker}(d^{n})$, define
{{< /definition >}}
$$H^n(A^\bullet)=\mathrm{Coker}(\mathrm{Im}(d^{n-1})\rightarrow\mathrm{Ker}(d^{n}))$$
as the $n$-th cohomology object. In fact, for a chain map $f^\bullet: A^\bullet\rightarrow B^\bullet$, we associate an induced morphism $H^nf^\bullet:H^n(A^\bullet)\rightarrow H^n(B^\bullet)$, which makes $H^n$ an additive functor $C(\mathcal A)\rightarrow\mathcal A$. Moreover, $f^\bullet$ is said to be a _quasi-isomorphism_ if $H^nf^\bullet$ is an isomorphism for all $n\in\mathbb Z$.

Let $\mathcal A$ be an abelian category. The _translation functor_ $T:C(\mathcal A)\rightarrow C(\mathcal A)$ sends a complex $A^\bullet =(A^i,d^i)$ to the complex $T(A^\bullet) =(A^{i+1},-d^{i+1})$, and $T(f^\bullet):T(A^\bullet)\rightarrow T(B^\bullet)$ for $f^\bullet:A^\bullet\rightarrow B^\bullet$ is given by $T(f^\bullet)^i=f^{i+1}$. The functor essentially shifts the complex left by one, where the negative sign of the differential is a convention useful later. We denote by $A^\bullet[n]=T^n(A^\bullet)$ for $n\in\mathbb Z$ (negative integers correspond to right translations). The right truncation functor $\tau_{\le n}:C(\mathcal A)\rightarrow C^-(\mathcal A)$ sends a complex in the following way

{{< quiver
    src="https://q.uiver.app/?q=WzAsMTAsWzIsMCwiQV5uIl0sWzIsMSwiXFxtYXRocm17S2VyfShkXntufSkiXSxbMSwwLCJBXntuLTF9Il0sWzMsMCwiQV57bisxfSJdLFsxLDEsIkFee24tMX0iXSxbMywxLCJcXG1hdGhiZnswfSJdLFs0LDAsIlxcY2RvdHMiXSxbMCwwLCJcXGNkb3RzIl0sWzAsMSwiXFxjZG90cyJdLFs0LDEsIlxcY2RvdHMiXSxbMCwxLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV0sWzIsMF0sWzAsM10sWzQsMSwiIiwyLHsiY29sb3VyIjpbMCw2MCw2MF19XSxbMSw1XSxbMyw2XSxbNywyXSxbOCw0XSxbNSw5XV0=&embed"
    width="375px"
    height="180px"
    radius="8px"
>}}

where the red arrow is induced via universal property. The functor $\tau_{\le n}:C(\mathcal A)\rightarrow \mathcal A$ sends the morphisms in the obvious way. Moreover, we have a canonical monomorphism $\tau_{\le n}(A^\bullet)\rightarrow A^\bullet$ which induces isomorphisms on their cohomology objects. The left truncation functor $\tau_{\ge n}:C(\mathcal A)\rightarrow C^+(\mathcal A)$ is defined dually. 

{{< definition >}}
Suppose $f^\bullet:A^\bullet\rightarrow B^\bullet$ is a morphism in $C(\mathcal A)$ for some abelian category $\mathcal A$. The _cone_ of $f^\bullet$ is $\mathrm{Cone}(f^\bullet)=A^\bullet[1]\oplus B^\bullet$. Spelled out explicitly, the cochain complex consists of objects $A^{n+1}\oplus B^n$, and the differential $d^n:A^{n+1}\oplus B^n\rightarrow A^{n+2}\oplus B^{n+1}$ is given by
{{< /definition >}}
$$d^n=\begin{pmatrix}-d_{A^\bullet}^{n+1}&0\\\ f^{n+1}& d_{B^\bullet}^n\end{pmatrix}$$
acting as though on column vectors.

We remark that a short exact sequence of complexes induces a long exact sequence of cohomology. Say we have
$$\mathbf 0\longrightarrow A^{\bullet}\xrightarrow{\ f^{\bullet}\ } B^\bullet\xrightarrow{\ g^\bullet\ }  C^\bullet\longrightarrow\mathbf 0$$
a short exact sequence of complexes, then for each $n$, exists $\delta^n:H^n(C^\bullet)\rightarrow H^{n+1}(A^\bullet)$ making
$$\cdots\rightarrow H^n(A^\bullet)\rightarrow H^n(B^\bullet)\rightarrow H^n(C^\bullet)\xrightarrow{\delta^n} H^{n+1}(A^\bullet)\rightarrow H^{n+1}(B^\bullet)\rightarrow H^{n+1}(C^\bullet)\rightarrow\cdots$$
exact. This is a very common construction in homological algebra, and the way we construct these connecting morphisms is by applying the snake lemma twice. Suppose $f^\bullet:A^\bullet\rightarrow B^\bullet$ is a chain map with cone $C^\bullet=\mathrm{Cone}(f^\bullet)$, then the map $\iota^{n}=0 \oplus \operatorname{Id}_{B^{n}}: B^{n} \rightarrow C^{n}$ and the canonical projection $\rho^n:C^n\rightarrow A^{n+1}$ gives chain maps $\iota^\bullet:B^\bullet\rightarrow C^\bullet$ and $\rho^\bullet:C^\bullet \rightarrow A^\bullet [1]$ which fits into a short exact sequence $$\mathbf 0\longrightarrow B^{\bullet}\xrightarrow{\ \iota^{\bullet}\ } C^\bullet\xrightarrow{\ \rho^\bullet\ }  A^\bullet[1]\longrightarrow\mathbf 0$$
Hence this induces a long exact sequence on cohomology objects. Working out the connecting morphism, we find out that the connecting morphisms are nothing more than the induced morphisms $\delta^n=H^{n+1}f^\bullet$. From this fact, we deduce that $f^\bullet$ is a quasi-isomorphism iff the cone $\mathrm{Cone}(f^\bullet)$ is acyclic. 

{{< definition >}}
Suppose $\mathcal A$ is an abelian category. An object $X$ in $\mathcal A$ is _injective_ (resp. _projective_) if the contravariant (resp. covariant) left exact (resp. right exact) hom-functor $\mathrm{Hom}(-,X):\mathcal A\rightarrow\mathbf{Ab}$ (resp. $\mathrm{Hom}(X,-):\mathcal A\rightarrow\mathbf{Ab}$) is exact. Moreover, we say $\mathcal A$ has _enough injectives_ (resp. _enough projectives_) if for any object $Y$ there is an injective object (resp. projective object) $X$ and a monomorphism $Y\rightarrow X$ (resp. epimorphism $X\rightarrow Y$). An _injective resolution_ of an object $X$ is a complex $I^\bullet$ bounded below $0$ and a quasi-isomorphism $X\rightarrow I^\bullet$, or equivalently, an exact sequence
{{< /definition >}}
$$\mathbf 0\rightarrow X\rightarrow I^0\rightarrow I^1\rightarrow \cdots$$
where each $I^i$ is injective. Dually, a _projective resolution_ of an object $X$ is a complex $P_\bullet$ bounded above $0$ and a quasi-isomorphism $P_\bullet\rightarrow X$, or equivalently, an exact sequence
$$\cdots\rightarrow P_1\rightarrow P_0\rightarrow X\rightarrow \mathbf 0$$
where each $P_i$ is projective.

It is a familiar result in homological algebra that if an abelian category has enough injectives (resp. enough projectives) then every object has an injective resolution (resp. projective resolution). Moreover, given a long exact sequence $\mathbf 0\rightarrow X\rightarrow M^\bullet$ and an injective resolution of $I^\bullet$ of $Y$, then every $f:X\rightarrow Y$ extends to a chain map

{{< quiver
    src="https://q.uiver.app/?q=WzAsMTAsWzAsMCwiXFxtYXRoYmZ7MH0iXSxbMSwwLCJYIl0sWzIsMCwiTV4wIl0sWzMsMCwiTV4xIl0sWzQsMCwiXFxjZG90cyJdLFswLDEsIlxcbWF0aGJmezB9Il0sWzEsMSwiWSJdLFsyLDEsIkleMCJdLFszLDEsIkleMSJdLFs0LDEsIlxcY2RvdHMiXSxbMCwxXSxbMSwyXSxbMiwzXSxbMyw0XSxbNSw2XSxbNiw3XSxbNyw4XSxbOCw5XSxbMSw2LCJmIiwyXSxbMiw3LCIiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMyw4LCIiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=&embed"
    width="375px"
    height="180px"
    radius="8px"
>}}

and two such construction of chain maps are homotopic. The dual can be said about projective resolutions. I should also mention the Horseshoe lemma or the simultaneous resolution theorem, which states that if we have a short exact sequence $\mathbf 0\rightarrow X\rightarrow Y\rightarrow Z\rightarrow\mathbf 0$ and injective resolutions $I^\bullet$ for $Y$ and $K^\bullet$ for $Z$, then there is an injective resolution $J^\bullet$ of $Y$ that and a short exact sequence of complexes $\mathbf 0\rightarrow I^\bullet\rightarrow J^\bullet \rightarrow K^\bullet\rightarrow\mathbf 0$ which splits.

{{< quiver
    src="https://q.uiver.app/?q=WzAsMjEsWzEsMSwiWCJdLFsyLDEsIkleMCJdLFszLDEsIkleMSJdLFs0LDEsIlxcY2RvdHMiXSxbMCwxLCJcXG1hdGhiZiAwIl0sWzAsMiwiXFxtYXRoYmYgMCJdLFsxLDIsIlkiXSxbMiwyLCJKXjAiXSxbMywyLCJKXjEiXSxbNCwyLCJcXGNkb3RzIl0sWzAsMywiXFxtYXRoYmYgMCJdLFsxLDMsIloiXSxbMiwzLCJLXjAiXSxbMywzLCJLXjEiXSxbNCwzLCJcXGNkb3RzIl0sWzEsNCwiXFxtYXRoYmYgMCJdLFsxLDAsIlxcbWF0aGJmIDAiXSxbMiwwLCJcXG1hdGhiZiAwIl0sWzIsNCwiXFxtYXRoYmYgMCJdLFszLDAsIlxcbWF0aGJmIDAiXSxbMyw0LCJcXG1hdGhiZiAwIl0sWzAsMV0sWzEsMl0sWzIsM10sWzQsMF0sWzUsNl0sWzYsNywiIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzcsOCwiIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzgsOSwiIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzEwLDExXSxbMTEsMTJdLFsxMiwxM10sWzEzLDE0XSxbMCw2XSxbNiwxMV0sWzE2LDBdLFsxMSwxNV0sWzE3LDFdLFsxLDcsIiIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs3LDEyLCIiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMTIsMThdLFsxOSwyXSxbMiw4LCIiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbOCwxMywiIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzEzLDIwXV0=&embed"
    width="375px"
    height="375px"
    radius="8px"
>}}

This does NOT commute. This implies that additive functors take split exact sequences to split exact sequences.
Suppose $\mathscr{F}:\mathcal A\rightarrow\mathcal B$ is a left exact functor betweeen abelian categories, then applying $\mathscr{F}$ to a short exact sequence $\mathbf 0\rightarrow A\rightarrow B\rightarrow C$ gives a short exact sequence $\mathbf 0\rightarrow \mathscr{F}(A)\rightarrow \mathscr{F}(B)\rightarrow \mathscr{F}(C)$. A natural question to ask is whether we could continue this exact sequence to the right. It turns out that there is a canonical way of doing so, by defining the right derived functors $R^i\mathscr{F}:\mathcal A\rightarrow \mathcal B$, we may continue the exact sequence
$$\mathbf 0\rightarrow \mathscr{F}(A)\rightarrow\mathscr{F}(B)\rightarrow\mathscr{F}(C)\rightarrow R^1\mathscr{F}(A)\rightarrow R^1\mathscr{F}(B)\rightarrow R^1\mathscr{F}(C)\rightarrow\cdots$$
Note that $\mathscr{F}$ is exact iff $R^1\mathscr{F}=0$, so in a sense the right derived functors measures how far $\mathscr{F}$ is from exact.
{{< definition >}}
Let $\mathcal A,\mathcal B$ be abelian categories and $\mathcal A$ has enough injectives. Suppose $\mathscr{F}:\mathcal A\rightarrow\mathcal B$ is a left-exact functor. Let $X\in\mathcal A$ and suppose $I^\bullet$ is an injective resolution, then we obtain a complex
{{< /definition >}}
$$\mathbf 0\rightarrow \mathscr{F}(I^0)\rightarrow\mathscr{F}(I^1)\rightarrow\mathscr{F}(I^2)\rightarrow\cdots$$
Define the right derived functors as the additive functors $R^i\mathscr{F};\mathcal A\rightarrow\mathcal B$
$$R^i\mathscr{F}(X)=H^i(\mathscr{F}I^\bullet)$$
for $i\ge 0$. Left derived functors $L_i\mathscr{F}$ are defined dually via projective resolution.

The most important examples of derived functors are the Ext and Tor functors. The Ext functor is the right derived functor of the hom-functor, and the Tor functor is the left derived functor of tensor product. Recall that there is a tensor-Hom adjunction $\mathrm{Hom}(Y\otimes X,Z)\cong \mathrm{Hom}(Y,\mathrm{Hom}(X,Z))$, so these functors are related very closely.

{{< definition >}}
For $A,B\in \mathbf{Mod}_R$, define the Ext functors$$\begin{aligned}\mathrm{Ext}_R^i(A,B)&=(R^i\mathrm{Hom}_R(A,-))(B)\\\ &\cong (R^i\mathrm{Hom}_R(-,B))(A)\end{aligned} $$ and the Tor functors $$\begin{aligned}\mathrm{Tor}_i^R(A,B)&= (L_i(A\otimes_R -))(B)\\\ &\cong (L_i(-\otimes_R B))(A)\end{aligned}$$
for all $i\ge 0$.
{{< /definition >}}

<!--- -->

{{< example >}}
Derived functors can help us defined many (co)homology theory.
1. _Sheaf cohomology._ Let $X$ be a topological space, then the global section functor $\Gamma:\mathrm{Sh}(X)\rightarrow \mathbf{Ab}$ which sends $\mathscr{F} \mapsto \mathscr{F}(X)$ is left exact, its right derived functor $H^i(X,-):\mathrm{Sh}(X)\rightarrow \mathbf{Ab}$ is the _sheaf cohomology_ $H^i(X,\mathscr{F})$. Its special cases include the de Rham cohomology. 
2. _Group cohomology._ Let $k$ be an algebraically closed field and $G$ a group, then the invariant functor $(-)^G:\mathbf{Mod}_{k[G]}\rightarrow\mathbf{Mod}_{k[G]}$, which is the same as $\mathrm{Hom}_{k[G]}(k,-)$, is left exact, its right derived functor $H^i(G;-):\mathbf{Mod}_{k[G]}\rightarrow\mathbf{Mod}_{k[G]}$ gives the group cohomology $H^i(G;M)=\mathrm{Ext}^i_{k[G]}(k,M)$.
3. _Hochschild cohomology._ This one I'm not really familiar, so I will not write about it in detail.
{{< /example >}}

The derived functors are natural in the sense that if we have a morphism of two short exact sequence in $\mathcal A$, then the induced morphisms of the long exact sequences in $\mathcal B$ commutes with the long exact sequences. Finally, I'd like to finish with the definition of the homotopy category of complexes. We say that a chain map is _nullhomotopic_ if it is homotopic to the zero chain.

{{< definition >}}
Let $\mathcal A$ be an abelian category, the _homotopy category of complexes_ $ K(\mathcal A)$ is the category where objects are (co)chain complexes in $\mathcal A$ and morphisms are chain maps up to homotopy, i.e. $$\mathrm{Hom}_{K(\mathcal A)}(A^\bullet,B^\bullet)=\mathrm{Hom}_{C(\mathcal A)}(A^\bullet,B^\bullet)/G$$
where $G$ is the subgroup of nullhomotopic chain maps.
{{< /definition >}}

There are many things that needs to be checked here for it to be well defined, which we omit. We will see that this category is not typically abelian, but it is triangulated. A triangulated category is an approximation of an abelian category.