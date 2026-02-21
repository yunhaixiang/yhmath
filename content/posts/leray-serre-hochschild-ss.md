---
layout: post
title: Leray and Serre–Hochschild Spectral Sequences
date: 2026-02-02 01:07:48 -0500
tags: [algebraic-topology, algebraic-geometry]
categories: [expositions]
---


{{< pullquote author="Alfred North Whitehead">}}
The pursuit of mathematics is a divine madness of the human spirit.
{{< /pullquote >}}

Today, I am writing about Leray spectral sequence and Serre–Hochschild spectral sequence. Those are important spectral sequences in arithmetic geometry and number theory, in particular, I care about their uses in the study of Galois cohomology and other cohomology theories. I will use the text of {{< cite key="NSW08" >}}, along with many other sources here and there on general spectral sequences. 

<!-- more -->

## Serre–Hochschild Spectral Sequence

{{< theorem note="Serre–Hochschild">}}
Let $G$ be a profinite group and $H$ a closed normal subgroup, and $A$ a $G$-module, then we have a spectral sequence
$$
\mathrm{E}_2^{p,q}=\mathrm{H}^{p}(G/H, \mathrm{H}^q(H,A))\Rightarrow \mathrm{H}^{p+q}(G,A)
$$
which converges.
{{< /theorem >}}

The above spectral sequence is called the *Serre–Hochschild spectral sequence*. These are obtained from the double complex $\mathrm{C}^p(G/H, \mathrm{C}^q(H,A))$ where $\mathrm{C}^p(G/H, -)$ is the standard complex for computing the cohomology of $G/H$ and $\mathrm{C}^q(H,A)$ is the standard complex for computing the cohomology of $H$. The differentials are given by the usual differentials in these complexes, and the spectral sequence arises from the filtration of the total complex $$\mathrm{Tot}^n = \bigoplus_{p+q=n} \mathrm{C}^p(G/H, \mathrm{C}^q(H,A))$$ by the $p$-degree. 

{{< example >}}
Let $K$ be a field and set $G=\mathrm{G}_K=\mathrm{Gal}(K^{\mathrm{sep}}/ K)$ the absolute Galois group. If $K/k$ is Galois with $\Gamma=\mathrm{Gal}(K/k)$, then there is exact sequence 
\[1\to \mathrm{G}_K\to \mathrm{G}_k\to \Gamma\to 1\]
and we can apply the Serre–Hochschild spectral sequence to get
$$\mathrm{E}_2^{p,q}=\mathrm{H}^{p}(\Gamma, \mathrm{H}^q(\mathrm{G}_K,A))\Rightarrow \mathrm{H}^{p+q}(\mathrm{G}_k,A)$$
and this further implies the $5$-term exact sequence:
$$0\to \mathrm{H}^1(\Gamma, A^{\mathrm{G}_K})\to \mathrm{H}^1(\mathrm{G}_k, A)\to \mathrm{H}^1(\mathrm{G}_K, A)^{\Gamma}\to \mathrm{H}^2(\Gamma, A^{\mathrm{G}_K})\to \mathrm{H}^2(\mathrm{G}_k, A)$$
{{< /example >}}

## Leray Spectral Sequence

{{< theorem note="Leray">}}
Let $f:X\rightarrow Y$ a morphism of schemes and $\mathcal F$ a sheaf of abelian groups on any site over $X$, then there is a spectral sequence
$$\mathrm{E}_2^{p,q}=\mathrm{H}^p(Y, \mathrm{R}^qf_*\mathcal F)\Rightarrow \mathrm{H}^{p+q}(X, \mathcal F)$$
which converges.
{{< /theorem >}}

{{< example >}}
Let $X$ be a smooth proper curve over a field $K$ with structure map $f:X\to \mathrm{Spec}(K)$, then we have the Leray spectral sequence
$$\mathrm{E}_2^{p,q}=\mathrm{H}^p(K, \mathrm{R}^qf_*\mathbf Q_{\ell})\Rightarrow \mathrm{H}_{\mathrm{ét}}^{p+q}(X, \mathbf Q_{\ell})$$

Here $\mathrm{R}^qf_*\mathbf Q_{\ell}$ corresponds to the Galois module $\mathrm{H}_{\mathrm{ét}}^q(X_{\overline K}, \mathbf Q_{\ell})$ where $\overline K$ is a separable closure of $K$. In particular, the Leray spectral sequence allows us to compute the étale cohomology of $X$ in terms of the Galois cohomology of $K$ with coefficients in the étale cohomology of the geometric fiber $X_{\overline K}$.
{{< /example >}}

{{< theorem note="Grothendieck" >}}
Let $\mathcal A,\mathcal B, \mathcal C$ be abelian categories with enough injectives, and $F:\mathcal A\to \mathcal B$ and $G:\mathcal B\to \mathcal C$ be left exact functors, which satisfies the condition that $F$ sends injective objects to $G$-acyclic objects (i.e. $\mathrm{R}^iG(F(I))=0$ for all $i>0$ and all injective objects $I\in \mathcal A$), then we have the Grothendieck spectral sequence
$$\mathrm{E}_2^{p,q}=\mathrm{R}^pG(\mathrm{R}^qF(A))\Rightarrow \mathrm{R}^{p+q}(G\circ F)(A)$$
for any object $A\in \mathcal A$. In derived language, $\mathbf{R}(G\circ F)(A)\simeq \mathbf{R}G(\mathbf{R}F(A))$.
{{< /theorem >}}

Grothendieck spectral sequence subsumes Leray spectral sequence as a special case. In fact, if we take $\mathcal A$ to be the category of sheaves of abelian groups on $X$, $\mathcal B$ to be the category of sheaves of abelian groups on $Y$, and $\mathcal C$ to be the category of abelian groups, then we can take $F=f_*$ and $G=\Gamma(Y,-)$, the global sections functor. The condition that $F$ sends injective objects to $G$-acyclic objects is satisfied because $f_*$ is an exact functor and injective sheaves are acyclic for the global sections functor. Therefore, we get the Leray spectral sequence as a special case of the Grothendieck spectral sequence.

## Čech to Derived Spectral Sequence

{{< theorem >}}
Let $X$ be a scheme and $\mathcal F$ a sheaf of abelian groups on any site of $X$, and $\mathfrak U=\{U_i\}$ an open cover of $X$, then we have the spectral sequence
$$\mathrm{E}_2^{p,q}=\check{\mathrm{H}}^p(\mathfrak U, \mathcal H^q(\mathcal F))\Rightarrow \mathrm{H}^{p+q}(X, \mathcal F)$$
which converges. Here $\check{\mathrm{H}}^p(\mathfrak U, -)$ is the Čech cohomology with respect to the open cover $\mathfrak U$, and $\mathcal H^q(\mathcal F)$ is the presheaf defined by $\mathcal H^q(\mathcal F)(U)=\mathrm{H}^q(U, \mathcal F)$ for any open subset $U\subseteq X$.
{{< /theorem >}}

{{< example >}}
The above spectral sequence allows us to compute the cohomology of $X$ with coefficients in $\mathcal F$ in terms of the Čech cohomology of the open cover $\mathfrak U$ with coefficients in the presheaf $\mathcal H^q(\mathcal F)$. In particular, if the open cover $\mathfrak U$ is such that the higher cohomology groups $\mathrm{H}^q(U_i, \mathcal F)$ vanish for all $q>0$ and all $i$, then the spectral sequence degenerates at the $E_2$-page and we have an isomorphism
$$\mathrm{H}^n(X, \mathcal F)\cong \check{\mathrm{H}}^n(\mathfrak U, \mathcal F)$$
induced by the Čech to derived spectral sequence. This is a useful tool for computing cohomology groups in practice, especially when we have a good open cover of $X$ that allows us to compute the Čech cohomology easily.
{{< /example >}}

## References

{{< bibliography >}}
  {{< bibitem key="NSW08" author="Juergen Neukirch, Alexander Schmidt, Kay Wingberg" type="book" publisher="Springer" year="2008" >}}
  Cohomology of Number Fields
  {{< /bibitem >}}
{{< /bibliography >}}
