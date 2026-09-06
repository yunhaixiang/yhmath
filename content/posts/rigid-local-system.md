---
title: Rigid Local System
date: 2026-09-03 00:00:01 -0400
slug: 07bd743
aliases:
  - /posts/rigid-local-system/
categories: [expositions]
tags: [math, algebraic-geometry, number-theory]
draft: true
---

{{< pullquote author="Alexander Grothendieck" >}}
The art of doing mathematics consists in finding that special case which contains all the germs of generality.
{{< /pullquote >}}


I am reading Katz’s *Rigid Local Systems* {{< cite key="Kat96" >}}. Here are my notes. One starts complex analytically with $U=\mathbb P^1-\{m\ \textrm{pts}\}$. Riemann introduced *local systems* on $U$, i.e. a locally constant sheaf of complex vector spaces, to study the solutions to $n$-th order linear differential equations with singularities at $\mathbb P^1-U$ {{< cite key="Rie57" >}}. If there are no “accessory parameters”, we say this local system is *rigid*, i.e. determiend by its local monodromies. 


## Generalities Concerning Rigid Local Systems over $\mathbb C$

Let $X$ be a smooth projective connected curve over $\mathbb C$ of genus $g$. Let $S\subseteq X(\mathbb C)$ a nonempty finite subset and set $U:=X-S$ the open complement. For each base point $u$ on the complex manifold $U^{\mathrm{an}}$, there is an equivalence of symmetric monoidal categories induced by the fibre functor $\mathcal F\mapsto \mathcal F_u$ where $\mathcal F$ is a local system on $U$.

$$\mathrm{LocSys}_{\mathbb C}(U)\simeq^{\otimes} \mathrm{Rep}_{\mathbb C}(\pi_1(U,u))$$

All vector spaces and representations here are assumed finite dimensional. We say the local system is *irreducible* if the corresponding representation is. For every singular point $s\in S$, the punctured neighborhood $$D^*(s)=U^{\mathrm{an}}\cap (\textrm{small disc around }s\textrm{ in }X^{\mathrm{an}})$$

has fundamental group $I(s)=\pi_1(D^*(s),u)=\mathbb Z$, where $u$ is any base point. 

{{< definition >}}
We say a local system $\mathcal F$ on $U^{\mathrm{an}}$ is *physically rigid* if for every local system $\mathcal G$ on $U^{\mathrm{an}}$ with isomorphic local monodromy, i.e. there is isomorphism of local systems 
$\mathcal F|_{D^*(s)}\cong \mathcal G|_{D^*(s)}$
for each $s\in S$, there is $\mathcal F\cong \mathcal G$. 
{{< /definition >}}

However, physically rigid is a notion that only works for genus $0$. If $g(X)\ge 1$, then no local system on $U^{\mathrm{an}}$ is physically rigid. Let $\mathcal L$ be a rank $1$ local system on $X^{\mathrm{an}}$ (they correspond to characters of $\pi_1(X^{\mathrm{an}})^{\mathrm{ab}}\cong \mathbb Z^{2g}$) no tensor power of which is trivial. 

## References

{{< bibliography >}}
  {{< bibitem key="Kat96" author="Nicholas M. Katz" type="book" series="Annals of Mathematics Studies" volume="139" publisher="Princeton University Press" year="1996" >}}
  Rigid Local Systems
  {{< /bibitem >}}
  {{< bibitem key="Rie57" author="Bernhard Riemann" type="article" journal="Journal für die reine und angewandte Mathematik" volume="54" pages="115--155" year="1857" doi="10.1515/crll.1857.54.115" >}}
  Theorie der Abel’schen Functionen
  {{< /bibitem >}}
{{< /bibliography >}}
