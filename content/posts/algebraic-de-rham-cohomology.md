---
title: Algebraic de Rham Cohomology and Gauss–Manin Connections
date: 2026-06-05 00:00:01 -0400
categories: [expositions]
tags: [math, algebraic-geometry, cohomology]
---

{{< pullquote author="Marvin Greenberg" >}}
My first impression on seeing him (Grothendieck) lecture was that he had been transported from an advanced alien civilization in some distant solar system to visit ours in order to speed up our intellectual evolution.
{{< /pullquote >}}

In this note, we discuss algebraic de Rham cohomology and related concepts. 
The purpose of this note is not to give a very detailed account of the theorems and concepts, but provide a surface level overview. 
The reason I wanted to write about this is because I want to learn about de Rham–Witt cohomology, for which this is a prerequisite. 
I have not found a reference that I am completely satisfied with, but a lot of my sources come from Dustin Clausen’s [notes](https://sites.google.com/view/algebraicderham/home). 

## Algebraic de Rham Cohomology

The de Rham cohomology originated from smooth manifolds, where $\mathrm H^k_{\mathrm{dR}}(M)$ is the cohomology of the de Rham complex $\Omega^{\bullet}(M)$. 

{{< theorem note="de Rham">}}
There is a canonical isomorphism $\mathrm H^k_{\mathrm{dR}}(M)\cong\mathrm H^k(M,\underline{\mathbb R})$. 
{{< /theorem >}}
{{< proof note="Sketch">}}
This is shown with two facts: 1. $\underline{\mathbb R}\rightarrow \Omega^\bullet $ is an quasi-isomorphism, i.e. $\mathcal H^k_{\mathrm{dR}}$ identifies with $\underline{\mathbb R}$ at $0$ and vanishes otherwise. 2. for $p\ge 0$, $\Omega^p$ is acyclic. Together, $\underline{\mathbb R}\rightarrow \Omega^\bullet$ is an acyclic resolution, hence de Rham’s theorem. Fact 1 is shown by Poincare lemma (every closed $k$-form is locally exact), and fact 2 is due to the fact that $M$ has partitions of unity: the sheaves $\Omega^p$ are fine, and fine sheaves are acyclic, see {{< cite key="BT82" note="Chapter I, Section 2" >}} and {{< cite key="Bre97" note="Chapter II, Section 9" >}}.
{{< /proof >}}

{{< remark >}}
There is a different version where the isomorphism is between de Rham cohomology and singular cohomology $\mathrm H^k_{\mathrm{dR}}(M)\cong\mathrm H^k(M,\underline{\mathbb R})$, for which the map is induced by the chain morphism 
$$\omega\mapsto \left(\sigma\mapsto \int_{\sigma}\omega\right)$$
its well-definedness is exactly the statement of Stokes theorem. 
{{< /remark >}}

We want a version of this for algebraic varieties. 

{{< definition >}}
For any scheme $X/S$, define the hypercohomology 

$$\mathrm{H}_{\mathrm{dR}}^n(X)=\mathbb H^n(X,\Omega^\bullet_X)$$

as the algebraic de Rham cohomology of $X$. 
{{< /definition >}}

For algebraic varieties (or even complex manifolds), we do not have an adequate partitions of unity, so we can have $\Omega^p$ not acyclic. 
Hypercohomology captures the higher sheaf cohomology $\mathrm{H}^q(X,\Omega^p)$ when $\Omega^p$ is not necessarily acyclic. This is captured in

$$E_1^{p,q}=\mathrm{H}^q(X,\Omega^p)\Rightarrow \mathrm{H}^{p+q}_{\mathrm{dR}}(X)$$

which is called the *Hodge-to-de Rham spectral sequence*. For smooth affine $X$, we know that $\Omega_X^p$ is acyclic, so one could compute de Rham cohomology easily with $H^n(\Omega^\bullet_X)$. Grothendieck proved an analogue of de Rham’s theorem for complex algebraic varieties. 

{{< theorem note="Grothendieck">}}
Let $X/\mathbb C$ be a smooth variety, then there is natural isomorphism $\mathrm{H}^n_{\mathrm{dR}}(X)\cong\mathrm H^n(X^{\mathrm{an}},\mathbb C)$. 
{{< /theorem >}}
{{< proof note="Sketch" >}}
For simplicity, assume $X$ is proper. The proof combines a comparison map $\Omega^\bullet_X\rightarrow \Omega^\bullet_{X^{\mathrm{an}}}$ via analytification. By the assumption of properness, GAGA applies and identifies sheaf cohomologies $H^q(X,\Omega^p_X)\cong H^q(X,\Omega^p_{X^\mathrm{an}})$, and hence identifies hyper-cohomologies $\mathbb H^{n}(X,\Omega^\bullet)\cong \mathbb H^{n}(X,\Omega^\bullet_{X^{\mathrm{an}}})$ via Hodge-to-de Rham spectral sequence. Finish by Poincare lemma giving an acyclic resolution $\underline{\mathbb C}\rightarrow \Omega^\bullet_{X^\mathrm{an}}$, and done. 
{{< /proof >}}

{{< remark >}}
If $X$ is non proper, this situation is more difficult. One needs to use log differential forms, which I will not elaborate. 
{{< /remark >}}


## Gauss–Manin Connection

Recall that a connection on a vector bundle $\mathcal E$ on a scheme $X$ is a map $\nabla:\mathcal E\rightarrow \mathcal E\otimes_{\mathcal O_X}\Omega^1_X$ satisfying Leibniz rule

$$\nabla(U)(fe)=e\otimes \mathrm df+f\nabla(U)(e)$$
where $f\in\mathcal O_X$ and $e\in\mathcal E(U)$ and $U\subseteq X$ an open. For each derivation $D\in \mathcal{Der}_k(\mathcal O_X,\mathcal O_X)\cong \mathcal{Hom}_{\mathcal O_X}(\Omega_X^1, \mathcal O_X)$, define $\nabla_D:\mathcal E\rightarrow\mathcal E$ 

$$\nabla_D:\mathcal E\xrightarrow{\nabla}\mathcal E\otimes_{\mathcal O_X}\Omega^1_X\xrightarrow{\mathrm{id}\otimes D}\mathcal E\otimes_{\mathcal O_X} \mathcal O_X\cong \mathcal E$$
which we call the covariant derivative in the direction $D$. We can extend the connection to a map $\nabla:\mathcal E\otimes\Omega^p_X\rightarrow \mathcal E\otimes\Omega^{p+1}_X$ by 

$$\nabla(s\otimes\omega)=\nabla(s)\land\omega+s\otimes \mathrm dw$$

then the curvature is $\nabla^2:\mathcal E\rightarrow\mathcal E\otimes_{\mathcal O_X}\Omega^2_X$. Recall that a connection is called flat or integrable if the curvature $\nabla^2=0$.
{{< definition >}}
Let $f:X\rightarrow S$ be a smooth proper morphism of smooth schemes over field $k$ of characteristic $0$. The *Gauss–Manin connection* is the canonical flat connection on the relative de Rham cohomology sheaves

$$\nabla_{\mathrm{GM}}:\mathcal H^n_{\mathrm{dR}}(X/S)\longrightarrow \mathcal H^n_{\mathrm{dR}}(X/S)\otimes \Omega^1_{S/k}$$

where $\mathcal H^n_{\mathrm{dR}}(X/S)=\mathrm{R}^nf_{*}\Omega_{X/S}^\bullet$. They are constructed in the following way: consider the exact sequence

$$0\to f^*\Omega^1_{S/k}\to\Omega^1_{X/k}\to \Omega^1_{X/S}\to 0$$

which induces a *Gauss–Manin* filtration $\mathrm{Fil}^p\,\Omega^\bullet_X$ defined by 

$$\mathrm{Fil}^p\,\Omega^n_X=\mathrm{Im}\left(f^*\Omega^p_{S/k}\otimes_{\mathcal O_X}\Omega^{n-p}_{X/k}\xrightarrow{\eta\otimes\alpha\mapsto f^*\eta\wedge \alpha}\Omega^n_{X/k}\right)$$

then consider the exact sequence

$$0\to f^*\Omega^1_{S/k}\otimes_{\mathcal O_X}\Omega^\bullet_{X/S}[-1]\to \Omega^\bullet_{X/k}/\mathrm{Fil}^2\,\Omega^\bullet_{X/k}\to \Omega^\bullet_{X/S}\to 0$$

In the derived category we have a connecting morphism

$$\Omega^\bullet_{X/S}\longrightarrow f^*\Omega^1_{S/k}\otimes_{\mathcal O_X}\Omega^\bullet_{X/S}$$

applying derived pushforward

$$\mathrm{R}f_*\Omega^\bullet_{X/S}\longrightarrow \mathrm{R}f_*\left(f^*\Omega^1_{S/k}\otimes_{\mathcal O_X}\Omega^\bullet_{X/S}\right)$$

By the projection formula

$$\mathrm{R}f_*\left(f^*\Omega^1_{S/k}\otimes_{\mathcal O_X}\Omega^\bullet_{X/S}\right)\cong \mathrm{R}f_*\Omega^\bullet_{X/S}\otimes_{\mathcal O_S}\Omega^1_{S/k}$$

Therefore we have a morphism

$$\mathrm{R}f_*\Omega^\bullet_{X/S}\longrightarrow \mathrm{R}f_*\Omega^\bullet_{X/S}\otimes_{\mathcal O_S}\Omega^1_{S/k}$$

taking cohomology sheaves gives us

$$\nabla_{\mathrm{GM}}:\mathcal H^n_{\mathrm{dR}}(X/S)\longrightarrow \mathcal H^n_{\mathrm{dR}}(X/S)\otimes_{\mathcal O_S}\Omega^1_{S/k}$$

which is the Gauss–Manin connection. 
{{< /definition >}}

## References

{{< bibliography >}}
  {{< bibitem key="BT82" author="Raoul Bott and Loring W. Tu" type="book" series="Graduate Texts in Mathematics" volume="82" publisher="Springer-Verlag" address="New York" year="1982" >}}
  Differential Forms in Algebraic Topology
  {{< /bibitem >}}
  {{< bibitem key="Bre97" author="Glen E. Bredon" type="book" series="Graduate Texts in Mathematics" volume="170" publisher="Springer-Verlag" address="New York" year="1997" >}}
  Sheaf Theory
  {{< /bibitem >}}
{{< /bibliography >}}
