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



## References

{{< bibliography >}}
  {{< bibitem key="Poo17" authors="Bjorn Poonen" type="book" publisher="American Mathematical Soc." year="2017" >}}
  Rational Points on Varieties
  {{< /bibitem >}}
  {{< bibitem key="GR71" authors="Alexander Grothendieck, Michèle Raynaud" type="book" series="Lecture Notes in Mathematics 224" publisher="Springer" year="1971" >}}
  Revêtements étales et groupe fondamental (SGA I)
  {{< /bibitem >}}
{{< /bibliography >}}
