---
layout: post
title: Brauer Groups Part II
date: 2026-01-18 23:38:19 -0500
tags: [math, algebra, algebraic-geometry, number-theory]
categories: [expositions]
---

{{< pullquote author="Thomas Hill" >}}
The mathematics are usually considered as being the very antipodes of Poesy. Yet Mathesis and Poesy are of the closest kindred, for they are both works of the imagination.
{{< /pullquote >}}

Continuing from [Part I](/posts/brauer1), we delve deeper into Brauer groups. In this post, we'll compute examples of Brauer groups of fields, relate them to cohomology, discuss period-index, and prove several relevant theorems including Skolem–Noether theorem and Wedderburn's theorem. We will also generalize the Brauer group construction to schemes. These will correspond generally to {{< cite key="Poo17" >}} from chapters 2 and 3, but I will not follow them precisely, and will add some additional details and proofs. We follow previous notation, and fix $K$ a field.


## Cohomological Interpretation of the Brauer Group

{{< proposition >}}
For each $r\ge 1$, there is injection
$$\frac{\{\textrm{Azumaya }K\textrm{-algebras of dimension }r^2\}}{\textrm{isomorphism}}\hookrightarrow \mathrm{H}^1(K,\mathrm{PGL}_r)$$
{{< /proposition >}}
{{< proof >}}
Let $A$ be an Azumaya $K$-algebra of dimension $r^2$. Choose an isomorphism of $K$-algebras $\varphi:\mathrm{M}_r(K^{\mathrm{sep}})\xrightarrow{\sim} A\otimes_K K^{\mathrm{sep}}$. For each $\sigma\in \mathrm{Gal}(K^{\mathrm{sep}}/K)$, define $\xi_{\sigma}=\varphi^{-1}\circ {}^{\sigma}\!\varphi\in\mathrm{Aut}_{K^{\mathrm{sep}}}(\mathrm{M}_r(K^{\mathrm{sep}}))\cong\mathrm{PGL}_r(K^{\mathrm{sep}})$ where the last isomorphism follows from Skolem–Noether theorem. It is not hard to verify $\xi_{\sigma\tau}=\xi_{\sigma}\cdot \sigma(\xi_{\tau})$, i.e. $\xi$ is a $1$-cocycle. This defines a cohomology class since changing $\varphi$ is equivalent to composing it with an automorphism of $\mathrm{M}_r(K^{\mathrm{sep}})$, which changes $\xi_{\sigma}$ by a coboundary. Thus we have defined a map from the set of isomorphism classes of Azumaya $K$-algebras of dimension $r^2$ to $\mathrm{H}^1(K,\mathrm{PGL}_r)$. It is straightforward to check that this map is injective via descent.
{{< /proof >}}

{{< remark >}}
The aforementioned injection is actually a bijection, but we will not prove this here. Indeed, one can show that an Azumaya algebra of dimension $r^2$ is the same as a Galois twist of the matrix algebra $\mathrm{M}_r(K)$.
{{< /remark >}}

## Examples of Brauer Groups of Fields

## References

{{< bibliography >}}
  {{< bibitem key="Poo17" author="Bjorn Poonen" type="book" publisher="American Mathematical Society" year="2017" >}}
  Rational Points on Varieties
  {{< /bibitem >}}
{{< /bibliography >}}
