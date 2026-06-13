---
title: Riemann-Hilbert Correspondence and Lisse ell-adic Sheaves
date: 2026-06-13 00:00:01 -0400
categories: [expositions]
draft: true
tags: [math, algebraic-geometry, etale-cohomology]
---

In this note I want to compare two slogans:

$$
\left\{
\begin{array}{c}
\text{flat vector bundles} \\
\text{on } X^{\mathrm{an}}
\end{array}
\right\}
\simeq
\left\{
\begin{array}{c}
\text{local systems} \\
\text{on } X^{\mathrm{an}}
\end{array}
\right\}
$$

and

$$
\left\{
\begin{array}{c}
\text{lisse } \overline{\mathbb Q}_{\ell}\text{-sheaves} \\
\text{on } X_{\mathrm{et}}
\end{array}
\right\}
\simeq
\left\{
\begin{array}{c}
\text{continuous } \overline{\mathbb Q}_{\ell}\text{-representations} \\
\text{of } \pi_1^{\mathrm{et}}(X,\overline{x})
\end{array}
\right\}.
$$

The first slogan is the entry point to the Riemann-Hilbert correspondence. The second is the basic dictionary for lisse $\ell$-adic sheaves. They are not the same theorem, but they play parallel roles: both turn locally constant sheaf-theoretic data into linear representations of a fundamental group.

<!-- more -->

## Questions

- What is the classical Riemann-Hilbert correspondence for a complex manifold?
- Where do regular singularities and regular holonomic $\mathcal D$-modules enter?
- What is the precise meaning of a lisse $\ell$-adic sheaf?
- How does a lisse $\ell$-adic sheaf give a representation of the etale fundamental group?
- In what sense is the lisse $\ell$-adic story an arithmetic analogue of local systems?
- Where does the analogy break?

## Classical Local Systems

Let $X$ be a connected complex manifold and let $x\in X$ be a base point.

{{< definition >}}
A complex local system on $X$ is a sheaf $\mathcal L$ of finite-dimensional $\mathbb C$-vector spaces which is locally constant on $X$.
{{< /definition >}}

The basic classification is

$$
\left\{
\begin{array}{c}
\text{complex local systems} \\
\text{on } X
\end{array}
\right\}
\simeq
\operatorname{Rep}_{\mathbb C}\bigl(\pi_1(X,x)\bigr),
$$

where a local system $\mathcal L$ is sent to its monodromy action on the fiber $\mathcal L_x$.

{{< remark >}}
This statement is already a Riemann-Hilbert-type dictionary in its simplest form: topology is converted into linear algebra through monodromy.
{{< /remark >}}

## Flat Connections

Let $\mathcal E$ be a holomorphic vector bundle on $X$. A connection is a map

$$
\nabla:\mathcal E\longrightarrow \mathcal E\otimes_{\mathcal O_X}\Omega_X^1
$$

satisfying the Leibniz rule. It is flat, or integrable, if $\nabla^2=0$.

{{< theorem note="Local system from a flat connection" >}}
If $(\mathcal E,\nabla)$ is a holomorphic vector bundle with flat connection, then

$$
\mathcal E^{\nabla=0}(U)
=
\{s\in \mathcal E(U):\nabla s=0\}
$$

defines a complex local system on $X$.
{{< /theorem >}}

Conversely, a complex local system $\mathcal L$ gives a flat vector bundle

$$
\mathcal E=\mathcal L\otimes_{\mathbb C}\mathcal O_X
$$

with the connection $1\otimes d$.

{{< theorem note="Riemann-Hilbert, smooth form" >}}
For a complex manifold $X$, taking horizontal sections gives an equivalence

$$
\left\{
\begin{array}{c}
\text{holomorphic vector bundles} \\
\text{with flat connection}
\end{array}
\right\}
\simeq
\left\{
\begin{array}{c}
\text{complex local systems} \\
\text{on } X
\end{array}
\right\}.
$$
{{< /theorem >}}

## The Algebraic Riemann-Hilbert Correspondence

For a smooth complex algebraic variety $X$, the algebraic statement has to remember singularities at infinity. If $j:X\hookrightarrow \overline X$ is a compactification, then algebraic flat connections on $X$ correspond to local systems on $X^{\mathrm{an}}$ only after imposing a regular singularity condition along $\overline X\setminus X$.

{{< theorem note="Deligne" >}}
Let $X$ be a smooth complex algebraic variety. The analytification functor induces an equivalence between algebraic vector bundles with integrable connection and regular singularities, and complex local systems on $X^{\mathrm{an}}$.
{{< /theorem >}}

A more robust version is formulated using $\mathcal D$-modules:

$$
\operatorname{DR}:
D^b_{\mathrm{rh}}(\mathcal D_X)
\longrightarrow
D^b_c(X^{\mathrm{an}},\mathbb C),
$$

where $D^b_{\mathrm{rh}}(\mathcal D_X)$ is the derived category of regular holonomic $\mathcal D_X$-modules and $D^b_c(X^{\mathrm{an}},\mathbb C)$ is the constructible derived category.

{{< caveat >}}
This is the actual Riemann-Hilbert correspondence in its standard modern form. Local systems appear as the smooth, non-singular part of a broader correspondence involving constructible sheaves and regular holonomic $\mathcal D$-modules.
{{< /caveat >}}

## Lisse Sheaves

Let $X$ be a connected scheme, let $\ell$ be a prime invertible on $X$, and fix a geometric point $\overline{x}\to X$.

{{< definition >}}
A sheaf $\mathcal F$ of $\mathbb Z/\ell^n\mathbb Z$-modules on $X_{\mathrm{et}}$ is lisse if it is locally constant and constructible for the etale topology.
{{< /definition >}}

For coefficients in $\mathbb Z_{\ell}$, $\mathbb Q_{\ell}$, or $\overline{\mathbb Q}_{\ell}$, one usually packages compatible systems of torsion sheaves and then inverts $\ell$.

{{< definition >}}
A lisse $\mathbb Q_{\ell}$-sheaf is a $\mathbb Q_{\ell}$-local system on the etale site. Equivalently, it is a finite-dimensional $\mathbb Q_{\ell}$-vector space varying locally constantly in the etale topology.
{{< /definition >}}

## Etale Monodromy

The etale fundamental group $\pi_1^{\mathrm{et}}(X,\overline{x})$ classifies finite etale covers of $X$. A lisse sheaf has monodromy around such covers.

{{< theorem >}}
There is an equivalence of categories

$$
\left\{
\begin{array}{c}
\text{lisse } \mathbb Q_{\ell}\text{-sheaves} \\
\text{on } X
\end{array}
\right\}
\simeq
\left\{
\begin{array}{c}
\text{continuous finite-dimensional} \\
\mathbb Q_{\ell}\text{-representations of }
\pi_1^{\mathrm{et}}(X,\overline{x})
\end{array}
\right\}.
$$
{{< /theorem >}}

Here continuity matters: $\pi_1^{\mathrm{et}}(X,\overline{x})$ is profinite, while $\operatorname{GL}(V)$ is given its $\ell$-adic topology.

## Comparison With the Classical Picture

When $X$ is a complex algebraic variety, there is a comparison between finite etale covers of $X$ and finite topological covers of $X^{\mathrm{an}}$. In particular,

$$
\pi_1^{\mathrm{et}}(X,\overline{x})
\cong
\widehat{\pi_1(X^{\mathrm{an}},x)}
$$

under suitable connectedness and local noetherian hypotheses, where the right-hand side is the profinite completion.

This explains the analogy:

$$
\begin{array}{ccc}
\text{complex local systems} & \longleftrightarrow &
\pi_1(X^{\mathrm{an}},x)\text{-representations} \\
\text{lisse } \ell\text{-adic sheaves} & \longleftrightarrow &
\pi_1^{\mathrm{et}}(X,\overline{x})\text{-representations}.
\end{array}
$$

But the $\ell$-adic side is not a literal Riemann-Hilbert correspondence: there is no sheaf of differential operators on $X$ whose regular holonomic modules are simply lisse $\ell$-adic sheaves. The arithmetic replacement for differential equations is often the study of Galois and etale monodromy representations.

## Examples To Add

{{< example note="Constant sheaf" >}}
The constant sheaf $\mathbb Q_{\ell}$ corresponds to the trivial representation of $\pi_1^{\mathrm{et}}(X,\overline{x})$.
{{< /example >}}

{{< example note="Kummer sheaves" >}}
On $\mathbb G_m$, Kummer covers

$$
t\longmapsto t^n
$$

produce rank-one lisse sheaves whose monodromy is controlled by roots of unity.
{{< /example >}}

{{< example note="Tate module of an abelian scheme" >}}
If $f:A\to S$ is an abelian scheme, then

$$
T_{\ell}(A)=\varprojlim_n A[\ell^n]
$$

gives a lisse $\mathbb Z_{\ell}$-sheaf on $S$.
{{< /example >}}

## Possible Roadmap

1. State the topological classification of local systems by monodromy.
2. Explain horizontal sections of flat connections.
3. State the Riemann-Hilbert correspondence first for flat bundles, then for regular holonomic $\mathcal D$-modules.
4. Define lisse torsion sheaves and lisse $\ell$-adic sheaves.
5. Classify lisse $\ell$-adic sheaves by continuous representations of $\pi_1^{\mathrm{et}}$.
6. Compare $\pi_1^{\mathrm{et}}(X)$ with the profinite completion of $\pi_1(X^{\mathrm{an}})$ over $\mathbb C$.
7. End with the warning that the analogy is about monodromy, not about differential equations.

## References

{{< bibliography >}}
  {{< bibitem key="Del70" author="Pierre Deligne" type="book" series="Lecture Notes in Mathematics" volume="163" publisher="Springer-Verlag" year="1970" >}}
  Equations differentielles a points singuliers reguliers
  {{< /bibitem >}}
  {{< bibitem key="SGA1" author="Alexander Grothendieck" type="book" series="Lecture Notes in Mathematics" volume="224" publisher="Springer-Verlag" year="1971" >}}
  Revetements etales et groupe fondamental
  {{< /bibitem >}}
  {{< bibitem key="HTT08" author="Ryoshi Hotta, Kiyoshi Takeuchi, and Toshiyuki Tanisaki" type="book" publisher="Birkhauser" year="2008" >}}
  D-Modules, Perverse Sheaves, and Representation Theory
  {{< /bibitem >}}
  {{< bibitem key="Mil80" author="James S. Milne" type="book" publisher="Princeton University Press" year="1980" >}}
  Etale Cohomology
  {{< /bibitem >}}
{{< /bibliography >}}
