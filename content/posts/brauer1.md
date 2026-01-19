---
layout: post
title: Brauer Groups Part I
date: 2025-12-19 00:00:00 +0000
tags: [math, algebra, algebraic-geometry, number-theory]
categories: [expositions]
---


{{< pullquote author="Alexander Grothendieck">}}
The introduction of cohomology is a *technique* for making the invisible visible.
{{< /pullquote >}}

Today we study the Brauer group of a field, which classifies central simple algebras (or Azumaya algebras) over the field. They eventually generalize to schemes and control rational points on a variety. I will mostly follow {{< cite "Poo17" >}} with possibly some other sources as supplements. My eventual goal is to understand Brauer-Manin obstructions to rational points, and how Brauer groups of schemes is related. 

We begin by fixing some notation and terminology common in algebraic number theory. We fix a field $K$ with algebraic closure $\overline{K}$, separable closure $K^{\mathrm{sep}}$, and perfect closure $K^{\mathrm{perf}}$. Denote the absolute Galois group as $\mathrm{G}_K=\mathrm{Gal}(K^{\mathrm{sep}}/K)$. If $K$ is a global field, Let $\Omega_K$ be the set of its places, $S_{\infty}\subset L$ the set of archimedean places. And $S\subseteq \Omega_K$ is said to be an *admissible* set of places of $K$ if it contains $S_\infty$. For an admissible set of places $S$ of $K$, denote by $\mathbb Z_{K, S}$ the $S$-integers of $K$ with $\mathbb Z_K=\mathbb Z_{K,S_{\infty}}$ the usual ring of integers. For $S\subseteq \Omega_K$ a finite set of places, denote the ring of $S$-adeles $\mathbb A_{K,S}$ and the usual adeles $\mathbb A_K$. Denote $\mathbb I_{K,S}$ the $S$-ideles and $\mathbb I_K$ the usual ideles.

## Galois Theory of Étale Algebras

The problem with field extensions $L \mid K$ is that if one has an extension $M\mid K$ then the base change $L\otimes_K M$ is not a field but a $M$-algebra. To solve this issue, we introduce the notion of étale algebras in {{< refer "def-etale" >}}, which comes from étale maps i.e. local homeomorphisms in topology, indeed the notion of étale morphism $\mathrm{Spec}(L)\rightarrow \mathrm{Spec}(K)$ is thought of as an analogy for that.
{{< definition id="def-etale" >}}
A $K$-algebra $L$ is said to be *étale* if any of the following equivalent conditions are satisfied

1. $L\otimes_K K^{\mathrm{sep}}\cong (K^{\mathrm{sep}})^n$ for some $n$,
1. $L$ is a direct product of finite separable extensions of $K$,
1. the induced map $\mathrm{Spec}(L)\rightarrow \mathrm{Spec}(K)$ is finite and étale.

{{< /definition >}}

Étaleness is stable under base change. For $M\mid K$ a field extension and $L$ an étale $K$-algebra, we have $L\otimes_K M$ is an étale $M$-algebra. With étale algebras, the following is Grothendieck's generalization of Galois theory. 

{{< theorem note="Grothendieck" >}}
There is an equivalence of categories between $\{\textrm{finite }\mathrm G_K\textrm{-sets}\}^{\mathrm{op}}$ and $\{\textrm{étale }K\textrm{-algebras}\}$ given by the functors that take $S$, a finite $\mathrm G_K$-set, to the étale $K$-algebra $\mathrm{Hom}_{\mathrm G_K\textrm{-sets}}(S,K^{\mathrm{sep}})$, and conversely take an étale $K$-algebra $L$ to the finite $\mathrm G_K$-set $\mathrm{Hom}_{K\textrm{-Alg}}(L,K^{\mathrm{sep}})$. 
{{< /theorem >}}
{{< proof>}}
See {{< cite key="GR71" note="V.7 and Proposition V.8.1" >}}. 
{{< /proof >}}


{{< example >}}
Suppose $S$ is a transitive $\mathrm G_K$-set, then $S=\mathrm G_K/H$ for some open subgroup $H$, so the corresponding étale algebra is $\mathrm{Hom}_{\mathrm G_K\textrm{-sets}}(\mathrm G_K/H, {K}^{\mathrm{sep}})=(K^\mathrm{sep})^H$ the fixed field in classical Galois theory. In general, a finite $\mathrm G_K$-set is the finite disjoint union of transitive ones $\coprod S_i$, so $S$ corresponds to the étale algebra $\prod L_i$ where $L_i$ is the finite separable extension corresponding to $S_i$. 
{{< /example >}}


{{< definition id="def-galois-etale" >}}
Let $L$ be an étale $K$-algebra with action by a finite group $G$. Let $M\mid K$ be a field extension then $L\otimes_K M$ is an étale $M$-algebra with action by $G$, and so is $\prod_{g\in G}M=\mathrm{Hom}_{\mathbf{Set}}(G,M)$ via right translation $G$-action. We say $L$ is a *Galois étale algebra* with Galois group $G$ if $L\otimes_K M\cong \prod_{g\in G}M$ as étale $M$-algebras with $G$-action, for some field extension $M\mid K$.
{{< /definition >}}

{{< caveat >}}
The group $\mathrm{Aut}(L \mid K)$ can be larger than $G$, for example $L=K^4$, which can be eqipped with actions by $G=\mathrm{C}_4$ or $G=\mathrm{C}_2\times\mathrm{C}_2$ but $\mathrm{Aut}(L \mid K)=\mathrm S_4$. Hence the Galois group is part of the data of a Galois étale algebra.
{{< /caveat >}}

{{< remark >}}
If one such $M$ in {{< refer "def-galois-etale" >}} exists, then one can take $M=K^{\mathrm{sep}}$. 
{{< /remark >}}

## Galois Descent

If $V$ is any $K$-vector space, $L\mid K$ Galois, then $V\otimes_K L$ is a $L$-vector space with a semilinear $G=\mathrm{Gal}(L \mid K)$-action. Recall that:
{{< definition id="semi-linear-action" >}}
Let $L\mid K$ be a finite Galois extension with Galois group $G$. A *semi-linear action* of $G$ on an $L$-vector space $V$ is an action such that $\sigma(\ell w)=\sigma(\ell)\sigma(w)$ for all $\sigma\in G$, $\ell\in L$, and $w\in V$. 
{{< /definition >}}

Let $W^G$ be the fixed vector space for any vector space $W$ with $G$-action.

{{< lemma id="lem-gal-des-1" >}}
Let $V$ be a $K$-vector space, then the $K$-linear map $V\rightarrow (V\otimes_K L)^G$ sending $v\mapsto v\otimes 1$ is an isomorphism.
{{< /lemma >}}

{{< proof >}}
The case $V=K$ is standard Galois theory fact. For higher dimensions, note that the construction of the map is compatible with direct sums, so the result follows.
{{< /proof >}}

{{< lemma id="lem-gal-des-2" >}}
Suppose $L$ is a Galois étale $K$-algebra with Galois group $G$. Let $W$ be a $L$-vector space with a semi-linear $G$-action, then the natural map $W^G\otimes_K L\rightarrow W$ sending $w\otimes \ell\mapsto \ell w$ is an isomorphism of $L$-vector spaces with semi-linear $G$-action.
{{< /lemma >}}

{{< proof >}}
Suppose $M\mid K$ is a field extension. Taking $G$-invariants is preserved under base change, and a field extension is faithfully flat, so it suffice to check after base change to a choice of $M$ which makes $L\otimes_K M=\prod_{g\in G}M$ split. Rename $M$ to $K$, we reduce to split case $L=\prod_{g\in G}K$. Let $e_g\in L$ be the idempotent corresponding to the $g$-th factor, then $W=\bigoplus_{g\in G} e_g W$ as $K$-vector spaces, and $W_1\cong W_g$ for all $g$ by isomorphism induced by multiplication. Thus $W^G$ is the diagonal image $W_1\rightarrow \bigoplus_{g\in G} e_g W$. Since the natural map $W^G\otimes_K L\rightarrow W$ sending $w\otimes \ell\mapsto \ell w$ restricts to isomorphisms $W^G\otimes_K K e_g\rightarrow e_g W$ for each $g$, the result follows.
{{< /proof >}}

{{< theorem >}}The functors $(-)\otimes_K L$ and $(-)^G$ are mutually inverse equivalences of categories between the category of $K$-vector spaces and the category of $L$-vector spaces with semi-linear $G$-action.
{{< /theorem >}}
{{< proof >}}
The two compositions are identities by {{< refer id="lem-gal-des-1" >}} and {{< refer id="lem-gal-des-2" >}}.
{{< /proof >}}

{{< corollary id="cor-unique-semi-linear" >}}
For each $r\in\mathbb N$, there is only one $r$-dimensional $L$-vector space with semi-linear $G$-action up to isomorphism.
{{< /corollary >}}

{{< proof >}}
This follows from the fact that there is only one $r$-dimensional $K$-vector space up to isomorphism, and the fact that the base change functor in the equivalence respects dimension, i.e. $\dim_{K}V=\dim_{L}(V\otimes_K L)$.
{{< /proof >}}


## Hilbert’s Theorem 90

We will abuse notation and use $L$ to also denote the additive group structure. Let $n\in\mathbb N$ such that $n$ does not divide $\mathrm{char}(K)$. We denote by $\mathrm H^q(K,A)$ the Galois cohomology group $\mathrm H^q(\mathrm G_K, A(K^{\mathrm{sep}}))$, where $A$ a commutative group scheme. 

{{< remark >}}
We spell out how $\mathrm H^1(G,A)$ is defined when $A$ is not necessarily commutative. A 1-cocycle is a map $\xi:G\rightarrow A$ such that $\xi_{\sigma\tau}=\xi_{\sigma}\cdot \sigma(\xi_{\tau})$ for all $\sigma,\tau\in G$. Two 1-cocycles $\xi$ and $\xi'$ are said to be cohomologous if there exists $a\in A$ such that $\xi'_{\sigma}=a^{-1}\cdot \xi_{\sigma}\cdot \sigma(a)$ for all $\sigma\in G$. Then $\mathrm H^1(G,A)$ is defined as the set of 1-cocycles modulo this equivalence relation. When $A$ is abelian, this coincides with the usual definition via derived functors.
{{< /remark>}}

{{< lemma id="thm-normal-basis" note="Normal Basis Theorem" >}}
Suppose $L\mid K$ finite Galois, then $K[G]\cong L$ as $K[G]$-modules, where $G=\mathrm{Gal}(L \mid K)$.
{{< /lemma>}}
{{< proof >}}
See {{< cite key="Mil22" note="Theorem 5.18" >}}.
{{< /proof >}}


{{< proposition id="prop-hilbert-90" note="Hilbert’s Theorem 90" >}}
Suppose $L\mid K$ Galois, we have
1. $\mathrm H^q(\mathrm{Gal}(L \mid K), L)=0$ for all $q\ge 1$, and in particular, $\mathrm H^q(K,\mathbb G_a)=0$ for all $q\ge 1$.
2. $\mathrm H^1(\mathrm{Gal}(L \mid K), L^{\times})=0$, and in particular, $\mathrm H^1(K,\mathbb G_m)=0$.
3. $\mathrm H^1(\mathrm{Gal}(L \mid K), \mathrm{GL}_r(L))=0$ for each $r\in\mathbb N$, and in particular, $\mathrm H^1(K,\mathrm{GL}_r)=0$.
{{< /proposition >}}

{{< proof >}}
Assume $[L:K]<\infty$, let $G=\mathrm{Gal}(L\mid K)$. Take direct limit for the general case.
1. By {{< refer id="thm-normal-basis" >}}, we have $L\cong K[G]$ as $K[G]$-modules, which is an induced module. By Shapiro's lemma c.f. {{< cite "Wei13" "Shapiro's Lemma 6.3.2">}}, we have $\mathrm H^q(G,L)\cong \mathrm H^q(\{1\},K)=0$ for all $q\ge 1$.
2. This is a consequence of the next proof.
3. Let $\xi:G\rightarrow\mathrm{GL}_r(L)$ be a $1$-cochain, and $W_{\xi}$ be the $L$-vector space $L^r$ with with $\sigma\cdot w=\xi_{\sigma}(\sigma w)$. We claim this is a semilinear $G$-action iff $\xi$ is a $1$-cocycle. The action is automatically semilinear,
$$\sigma \cdot(a w)=\xi_\sigma(\sigma(a) \sigma(w))=\sigma(a) \xi_\sigma(\sigma(w))=\sigma(a)(\sigma \cdot w)$$
Thus it suffice to check the cocycle condition. On LHS we have $(\sigma\tau)\cdot w=\xi_{\sigma\tau}((\sigma\tau) w)$, and on RHS we have
$$\sigma \cdot(\tau \cdot w)=\sigma \cdot\left(\xi_\tau(\tau(w))\right)=\xi_\sigma\left(\sigma\left(\xi_\tau(\tau(w))\right)\right)=\xi_\sigma\left(\sigma\left(\xi_\tau\right)(\sigma \tau)(w)\right)=\left(\xi_\sigma \cdot \sigma\left(\xi_\tau\right)\right)(\sigma \tau)(w) .$$
so equality is equivalent to the cocycle condition. We check that two cocycles $\xi$ and $\xi'$ are cohomologous iff $W_{\xi}\cong W_{\xi'}$ as $L$-vector spaces with semilinear $G$-action. Suppose there exists $A\in \mathrm{GL}_r(L)$ such that $\xi'_{\sigma}=A^{-1}\cdot \xi_{\sigma}\cdot \sigma(A)$ for all $\sigma\in G$, then the map $W_{\xi}\rightarrow W_{\xi'}$ sending $w\mapsto A(w)$ is an isomorphism of $L$-vector spaces with semilinear $G$-action. Conversely, suppose $\phi:W_{\xi}\rightarrow W_{\xi'}$ is such an isomorphism, let $A\in \mathrm{GL}_r(L)$ be the matrix representing $\phi$, then for all $\sigma\in G$ and $w\in W_{\xi}$, we have
$$\xi'_{\sigma}(\sigma(A(w)))=\sigma \cdot \phi(w)=\phi(\sigma \cdot w)=A(\xi_{\sigma}(\sigma(w))) .$$
Thus $\xi'_{\sigma}\cdot \sigma(A)=A\cdot \xi_{\sigma}$ for all $\sigma\in G$, i.e. $\xi$ and $\xi'$ are cohomologous. By {{< refer id="cor-unique-semi-linear" >}}, there is only one $r$-dimensional $L$-vector space with semilinear $G$-action up to isomorphism, so $\mathrm H^1(G,\mathrm{GL}_r(L))=0$.
{{< /proof >}}

## Brauer Groups of Fields

{{< definition id="def-azumaya">}}
An *Azumaya algebra* over a field $K$ is a unital, associative, but not necessarily commutative $K$-algebra $A$ such that such that $A\otimes_K K^{\mathrm{sep}}\cong \mathrm{M}_n(K^{\mathrm{sep}})$ the matrix algebra as $K^{\mathrm{sep}}$-algebras for some $n\ge 1$. 
{{< /definition >}}

Recall that we say a $K$-algebra $A$ is central if its center is exactly $K$, simple if it has no two-sided ideals except for $(0)$ and $A$, and division if every nonzero element has a two-sided inverse. A division algebra is always simple. 

{{< proposition id="prop-equiv-azumaya" >}}
The following are equivalent for a $K$-algebra $A$:
1. $A$ is an Azumaya algebra over $K$,
2. there exists a finite separable extension $L\mid K$ such that $A\otimes_K L\cong \mathrm{M}_n(L)$ as $L$-algebras for some $n\ge 1$,
3. there exists a finite extension $L\mid K$ such that $A\otimes_K L\cong \mathrm{M}_n(L)$ as $L$-algebras for some $n\ge 1$,
4. $A$ is a finite-dimensional central simple algebra over $K$.
5. there is a $K$-algebra isomorphism $A\cong \mathrm{M}_r(D)$ for some $r\ge 1$ and some finite-dimensional central division algebra $D$ over $K$.
{{< /proposition >}}
{{< proof >}}
See {{< cite key="Poo17" note="Proposition 1.5.2" >}}.
{{< /proof >}}

Let $\mathbf{Az}_K$ denote the category of Azumaya algebras over $K$ with morphisms being $K$-algebra homomorphisms. The tensor product $\otimes_K$ endows $\mathbf{Az}_K$ with a monoidal structure with unit object $K$. A base change of Azumaya algebras is also Azumaya, and the opposite algebra $A^{\mathrm{opp}}$ of an Azumaya algebra, defined by reversing multiplication $a\cdot b=ba$, is Azumaya. The isomorphism classes of Azumaya algebras form a set, since for each $n\ge 1$, the size of the isomorphism class of Azuyama algebras of rank $n$ is determined by the size of all bilinear maps $\mathrm{Hom}_K(A\otimes A,A)\cong (K^{n})^3$, which is a set. 

{{< example >}}
A *quaternion algebra* over a field $K$ of characteristic other than $2$ is an Azumaya algebra of dimension $4$, e.g. the $K$-algebra generated by symbols $i,j$ with relations $i^2=j^2=-1$ and $ij=-ji$ is the *Hamiltonian quaternions* $\mathbb  H$, and if $i^2=j^2=1$ it is the *split quaternion algebra*, isomorphic to $\mathrm{M}_2(K)$.
{{< /example >}}

{{< definition >}}Let $A$ be an Azumaya algebra over $K$, a splitting field of $A$ is a field extension $L\mid K$ such that $A\otimes_K L\cong \mathrm{M}_n(L)$ as $L$-algebras for some $n\ge 1$. If $L$ is a splitting field of $A$ we say $L$ splits $A$.
{{< /definition >}}
{{< proposition >}}
Let $A$ be an Azumaya algebra over $K$, and $L\mid K$ a field extension such that $K\subseteq L\subseteq A$, then $[L:K]^2\le [A:K]$, and if equality holds, then $L$ is a splitting field of $A$.
{{< /proposition >}}
{{< proof >}}
Let $n=[L:K]$. View $A$ as a $L$-vector space of dimension $r$. Any $a\in A$ defines an endomorphism $A\rightarrow A$ by multiplication, so there is $K$-algebra morphism $A\otimes_K L\rightarrow \mathrm{End}_L(A)$, since $A\otimes_K L$ is simple, this morphism is injective. Since base change is faithfully flat, we have the inequality 
$$rn=[A:L][L:K]=[A:K]=[A\otimes_K L:L]\le [\mathrm{M}_r(L):L]=r^2$$
Thus $n\le r$. If equality holds, then the morphism $A\otimes_K L\rightarrow \mathrm{End}_L(A)$ is an isomorphism, so $L$ splits $A$.
{{< /proof >}}

Suppose $A$ is an Azumaya algebra over $K$, the composition of an isomorphism $A\otimes_K K^{\mathrm{sep}}\cong \mathrm M_r(K^{\mathrm{sep}})$ with the determinant map is independent of the choice of isomorphism, by a theorem we will talk about in the next post (Skolem-Noether). Thus we have a well-defined reduced norm map $\mathrm{N}^{\mathrm{rd}}_{A\mid K}:A\rightarrow K$, where the codomain is $K$ by Galois invariance: an element $\sigma\in \mathrm{Gal}(K^{\mathrm{sep}}/K)$ acts on $A\otimes_K K^{\mathrm{sep}}$ via the second factor, and acts on $\mathrm{M}_r(K^{\mathrm{sep}})$ entry-wise; let $\iota$ be a splitting isomorphism and ${}^\sigma\!\iota=\sigma\circ \iota\circ \sigma^{-1}$, then $\sigma(\mathrm{N}^{\mathrm{rd}}_{\iota}(x))=\sigma(\mathrm{det}(\iota(x)))=\mathrm{det}(\sigma(\iota(x)))=\mathrm{det}({}^\sigma\!\iota(\sigma(x)))=\mathrm{N}_{{}^\sigma\!\iota}^{\mathrm{rd}}(\sigma(x))$, but since reduced norm does not depend on $\iota$,  $\sigma(\mathrm{N}^{\mathrm{rd}}(x))=\mathrm{N}^{\mathrm{rd}}(\sigma(x))$. The same can be used to define the reduced trace map $\mathrm{Tr}^{\mathrm{rd}}_{A \mid K}:A\rightarrow K$.

{{< definition id="def-brauer-group" >}}

The *Brauer group* of a field $K$, denoted $\mathrm{Br}(K)$ is the group of equivalence classes of Azumaya algebras over $K$ under the equivalence relation $A\sim B$ iff one of the following equivalent conditions hold:

1. there exists $m,n\ge 1$ and a central division algebra $D$ over $K$ such that $A\cong \mathrm{M}_m(D)$ and $B\cong \mathrm{M}_n(D)$ as $K$-algebras,
2. there exists $m,n\ge 1$ such that $\mathrm M_n(A)\cong \mathrm M_m(B)$ as $K$-algebras.  

The group operation is induced by the tensor product $\otimes_K$, the identity element is the class of $K$, and the inverse of the class of $A$ is the class of the opposite algebra $A^{\mathrm{opp}}$. If $R\rightarrow S$ is a ring map then there is a group homomorphism $\mathrm{Br}(R)\rightarrow \mathrm{Br}(S)$ sending the class of $A$ to the class of $A\otimes_R S$, so $\mathrm{Br}:\mathbf{CRing}\rightarrow\mathbf{Ab}$ is functorial in rings.

{{< /definition >}}


## References

{{< bibliography >}}
  {{< bibitem key="Poo17" author="Bjorn Poonen" type="book" publisher="American Mathematical Society" year="2017" >}}
  Rational Points on Varieties
  {{< /bibitem >}}
  {{< bibitem key="GR71" author="Alexander Grothendieck, Michèle Raynaud" type="book" series="Lecture Notes in Mathematics 224" publisher="Springer" year="1971" >}}
  Revêtements étales et groupe fondamental (SGA I)
  {{< /bibitem >}}
  {{< bibitem key="Mil22" author="James S. Milne" type="book" year="2022" publisher="Kea Books" >}}
  Fields and Galois Theory
  {{< /bibitem >}}
  {{< bibitem key="Wei13" author="Charles A. Weibel" type="book" year="2013" publisher="American Mathematical Society" >}}
  An Introduction to Homological Algebra
  {{< /bibitem >}}
{{< /bibliography >}}
