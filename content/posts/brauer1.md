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

{{< corollary >}}
For each $r\in\mathbb N$, there is only one $r$-dimensional $L$-vector space with semi-linear $G$-action up to isomorphism.
{{< /corollary >}}

{{< proof >}}
This follows from the fact that there is only one $r$-dimensional $K$-vector space up to isomorphism, and the fact that the base change functor in the equivalence respects dimension, i.e. $\dim_{K}V=\dim_{L}(V\otimes_K L)$.
{{< /proof >}}


## Hilbert’s Theorem 90

We will abuse notation and use $L$ to also denote the additive group structure. Let $n\in\mathbb N$ such that $n$ does not divide $\mathrm{char}(K)$. We denote by $\mathrm H^q(K,A)$ the Galois cohomology group $\mathrm H^q(\mathrm G_K, A(K^{\mathrm{sep}}))$, where $A$ a commutative group scheme. When $A$ is nonabelian $\mathrm H^1$ can still be defined the same way.

{{< remark >}}
We spell out how $\mathrm H^1(K,G)$ is defined when $G$ is not necessarily commutative. 
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
3. Let $\xi:G\rightarrow\mathrm{GL}_r(L)$ be a $1$-cochain, and $W_{\xi}$ be the $L$-vector space $L^r$ with the semilinear $G$-action given by $\sigma\cdot w=\xi_{\sigma}(\sigma w)$
{{< /proof >}}
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
