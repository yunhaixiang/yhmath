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

{{< proposition id="prop-azumaya-to-pglr" >}}
For each $r\ge 1$, there is injection
$$\frac{\{\textrm{Azumaya }K\textrm{-algebras of dimension }r^2\}}{\textrm{isomorphism}}\hookrightarrow \mathrm{H}^1(K,\mathrm{PGL}_r)$$
{{< /proposition >}}
{{< proof >}}
Let $A$ be an Azumaya $K$-algebra of dimension $r^2$. Choose an isomorphism of $K$-algebras $\varphi:\mathrm{M}_r(K^{\mathrm{sep}})\xrightarrow{\sim} A\otimes_K K^{\mathrm{sep}}$. For each $\sigma\in \mathrm{Gal}(K^{\mathrm{sep}}/K)$, define $\xi_{\sigma}=\varphi^{-1}\circ {}^{\sigma}\!\varphi\in\mathrm{Aut}_{K^{\mathrm{sep}}}(\mathrm{M}_r(K^{\mathrm{sep}}))\cong\mathrm{PGL}_r(K^{\mathrm{sep}})$ where the last isomorphism follows from Skolem–Noether theorem. It is not hard to verify $\xi_{\sigma\tau}=\xi_{\sigma}\cdot \sigma(\xi_{\tau})$, i.e. $\xi$ is a $1$-cocycle. This defines a cohomology class since changing $\varphi$ is equivalent to composing it with an automorphism of $\mathrm{M}_r(K^{\mathrm{sep}})$, which changes $\xi_{\sigma}$ by a coboundary. Thus we have defined a map from the set of isomorphism classes of Azumaya $K$-algebras of dimension $r^2$ to $\mathrm{H}^1(K,\mathrm{PGL}_r)$. It is straightforward to check that this map is injective via descent.
{{< /proof >}}

{{< remark >}}
The aforementioned injection is actually a bijection, but we will not prove this here. Indeed, one can show that an Azumaya algebra of dimension $r^2$ is the same as a Galois twist of the matrix algebra $\mathrm{M}_r(K)$.
{{< /remark >}}

{{< theorem >}}
There is an isomorphism of abelian groups
$$\mathrm{Br}(K)\xrightarrow{\sim} \mathrm{H}^2(K,\mathbb{G}_m)$$
{{< /theorem >}}
{{< proof >}}
Taking cohomology of the short exact sequence of algebraic groups over $K^{\mathrm{sep}}$
$$1\to \mathbb{G}_m\to \mathrm{GL}_r\to \mathrm{PGL}_r\to 1$$
gives a long exact sequence
$$\cdots \to \mathrm{H}^1(K,\mathrm{GL}_r)\to \mathrm{H}^1(K,\mathrm{PGL}_r)\to \mathrm{H}^2(K,\mathbb{G}_m)\to \mathrm{H}^2(K,\mathrm{GL}_r)\to \cdots$$
Composing the injection from {{< refer id="prop-azumaya-to-pglr" >}} with the map $\mathrm{H}^1(K,\mathrm{PGL}_r)\to \mathrm{H}^2(K,\mathbb{G}_m)$, we get a map $\mathrm{Br}(K)\rightarrow \mathrm{H}^2(K,\mathbb{G}_m)$. To see that this map is injective note that by Hilbert's Theorem 90, $\mathrm{H}^1(K,\mathrm{GL}_r)=0$. To see that it is surjective, given a cohomology class $\alpha\in \mathrm{H}^2(K,\mathbb{G}_m)$, we construct an Azumaya algebra $A$ such that its image in $\mathrm{H}^2(K,\mathbb{G}_m)$ is $\alpha$. First note that we can reduce to the case of a finite Galois extension $L\mid K$, where we only need to consider a class in $\mathrm{H}^2(\mathrm{Gal}(L\mid K),L^\times)$ that inflates to $\alpha$. Choose a representative $2$-cocycle $c:\mathrm{Gal}(L\mid K)^2\to L^\times$, i.e. $c(\sigma, \tau) c(\sigma \tau, \rho)=\sigma(c(\tau, \rho)) c(\sigma, \tau \rho)$ for all $\sigma, \tau, \rho\in \mathrm{Gal}(L\mid K)$, we define the crossed product algebra $A=\bigoplus_{\sigma\in \mathrm{Gal}(L\mid K)}Lu_{\sigma}$ with multiplication defined by $u_{\sigma}\ell=\sigma(\ell)u_{\sigma}$ and $u_{\sigma}u_{\tau}=c(\sigma,\tau)u_{\sigma\tau}$, which one checks is a central simple algebra over $K$ that splits over $L$. One can check that the image of $A$ in $\mathrm{H}^2(K,\mathbb{G}_m)$ is precisely $\alpha$. The map is additive by routine check.


{{< /proof >}}

## Examples of Brauer Groups of Fields

{{< proposition >}}
Let $K$ be a field, then 

1. If $\mathrm{char}(K)\nmid n$, then $\mathrm H^1(K, \mu_n)=K^\times/K^{\times n}$. 
2. If $\mathrm{char}(K)\nmid n$, then $\mathrm H^2(K, \mu_n)\cong \mathrm{Br}(K)\left[n\right]$.
3. For any Galois extension $L\mid K$, we have $\mathrm H^2(\mathrm{Gal}(L\mid K), L^\times)=\mathrm{Ker}(\mathrm{Br}(K)\rightarrow\mathrm{Br}(L))$. 
{.enum-i .surround-paren}

{{< /proposition >}}
{{< proof >}}
1. Take short exact sequence 
$$1\to \mu_n\to \mathbb{G}_m\xrightarrow{(\cdot)^n} \mathbb{G}_m\to 1$$
and take cohomology to get long exact sequence
$$\cdots \to \mathrm H^0(K, \mathbb{G}_m)\xrightarrow{(\cdot)^n} \mathrm H^0(K, \mathbb{G}_m)\to \mathrm H^1(K, \mu_n)\to \mathrm H^1(K, \mathbb{G}_m)\to \cdots$$ then use Hilbert's Theorem 90 to conclude.
2. Same idea as above, taking the same short exact sequence and taking cohomology to get long exact sequence
$$\cdots \to \mathrm H^1(K, \mathbb{G}_m)\xrightarrow{(\cdot)^n} \mathrm H^1(K, \mathbb{G}_m)\to \mathrm H^2(K, \mu_n)\to \mathrm H^2(K, \mathbb{G}_m)\xrightarrow{(\cdot)^n} \mathrm H^2(K, \mathbb{G}_m) \to \cdots$$ then use Hilbert's Theorem 90 to conclude.
3. Skipped
{.enum-i .surround-paren}
{{< /proof >}}

{{< proposition >}}
Here are some examples of Brauer groups of fields:
1. If $K$ is algebraically closed, $\mathrm{Br}(K)=0$,
2. If $K$ is finite, then $\mathrm{Br}(K)=0$,
3. If $K=\mathbb{R}$, then $\mathrm{Br}(\mathbb{R})\cong \mathbb{Z}/2\mathbb{Z}$,
4. If $K$ is a non-archimedean local field, then $\mathrm{Br}(K)\cong \mathbb{Q}/\mathbb{Z}$,
5. (Albert–Brauer–Hasse–Noether Theorem) If $K$ is a global field, then there is an exact sequence
$$0\to \mathrm{Br}(K)\to \bigoplus_v \mathrm{Br}(K_v)\xrightarrow{\sum \mathrm{inv}_v} \mathbb{Q}/\mathbb{Z}\to 0$$
where the sum is over all places $v$ of $K$.
{.enum-i .surround-paren}
{{< /proposition >}}
{{< proof >}}
{{< /proof >}}

cohomological dimension.

## Period and Index

## References

{{< bibliography >}}
  {{< bibitem key="Poo17" author="Bjorn Poonen" type="book" publisher="American Mathematical Society" year="2017" >}}
  Rational Points on Varieties
  {{< /bibitem >}}
{{< /bibliography >}}
