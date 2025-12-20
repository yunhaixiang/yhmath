---
layout: post
title: Brauer Groups Part I
date: 2025-12-19 00:00:00 +0000
tags: [math, algebra, algebraic-geometry, number-theory]
categories: [expositions]

---

Today we study the Brauer group of a field, which classifies central simple algebras over the field. They eventually generalize to schemes and control rational points on a variety. I will mostly follow {{< cite "Poo17" >}} with some other sources as supplements.

We fix some notation and terminology. We fix a field $K$ with algebraic closure $\overline{K}$, separable closure $K^{\mathrm{sep}}$, and perfect closure $K^{\mathrm{perf}}$. Denote the absolute Galois group as $\mathrm{G}\_K=\mathrm{Gal}(K^{\mathrm{sep}}/K)$. If $K$ is a global field, Let $\Omega\_K$ be the set of its places, $S\_{\infty}\subset L$ the set of archimedean places. And $S\subseteq \Omega\_K$ is said to be an *admissible* set of places of $K$ if it contains $S\_\infty$. For an admissible set of places $S$ of $K$, the $S$-integers of $K$ is the ring 
$$
\mathbb Z\_{K,S}=\\{a\in K:|a|\_{\mathfrak p}\le 1 \textrm{ for all }\mathfrak p\in\Omega\_K\setminus S\\}
$$
with $\mathbb Z\_K=\mathbb Z\_{K,S\_{\infty}}$ the usual ring of integers. Let the ring of $S$-adeles be the restricted direct product
$$
\mathbb A\_{K,S}=
$$

## Central Simple Algebras

{{< definition >}}
This is a definition
{{< /definition >}}

## References

{{< bibliography >}}
  {{< bibitem key="Poo17" >}}
  Bjorn Poonen, *Rational Points on Varieties*, American Mathematical Soc., 2017.
  {{< /bibitem >}}
{{< /bibliography >}}