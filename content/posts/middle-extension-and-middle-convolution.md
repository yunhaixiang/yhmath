---
title: Middle Extension and Middle Convolution
date: 2026-09-16 00:00:01 -0400
slug: 1b64c0e
aliases:
  - /posts/middle-extension-and-middle-convolution/
categories: [expositions]
tags: [math, algebraic-geometry, cohomology]
draft: true
---

{{< pullquote author="Nicholas M. Katz" >}}
Even a cursory glance … leaves one with the impression that there is a fascinating bestiary waiting to be compiled.
{{< /pullquote >}}

In the last post, I wrote about rigid local systems à la Katz, in particular the notion of rigidity. Continuing from our previous post, we now read Chapter 2 of Katz's book {{< cite key="Kat96" >}}. This chapter introduces middle convolution and middle extension, which can be used to build rigid local systems. 

## Middle Extension

Let $S$ be a finite subset of $X=\mathbb P^1(\mathbb C)$ of size $m\ge 1$, let $U=\mathbb P^1- S$ with inclusion $j:U\rightarrow X$, and let $\mathcal F$ be an irreducible $\mathbb C$-local system on $U$ of rank $n\ge 1$. We know that $\mathcal F$ is physically rigid iff $\chi(X,j_*\mathrm{End}(\mathcal F))=2$. 

{{< definition >}}
Define the *index of rigidity* of $\mathcal F$ on $U$ to be $\mathrm{rig}(\mathcal F,U)=\chi(X,j_*\mathrm{End}(\mathcal F))$. 
{{< /definition >}}

Rigidity index is preserved under tensoring with rank $1$ local systems and removing finite sets, i.e. $$\chi(\mathcal F\otimes \mathcal L, U)=\chi(\mathcal F, U)=\chi(i^*\mathcal F, T)$$ for any rank $1$ local system $\mathcal L$ and any $i:T\hookrightarrow S$ where $S\setminus T$ is finite.  The first equality because $$\mathrm{End}(\mathcal F\otimes \mathcal L)\cong (\mathcal F\otimes \mathcal L)^\vee \otimes (\mathcal F\otimes \mathcal L)\cong \mathcal F\otimes\underline{\mathbb C}\cong\mathcal F$$ The second equality because $i_*i^*\mathcal G\cong \mathcal G$ for any local system $\mathcal G$, so 
$$j_*\mathrm{End}(\mathcal F)=j_*i_*i^*\mathrm{End}(\mathcal F)=j_*i_*\mathrm{End}(i^*\mathcal F)=(j\circ i)_*\mathrm{End}(i^*\mathcal F)$$
and the rest is easy. 

{{< definition >}}
On a smooth connected curve $U/\mathbb C$, a sheaf of $\mathbb C$-vector spaces $\mathcal F$ on $U$ is called a *middle extension sheaf* if it is algebraically constructible (i.e. ) and 
{{< /definition >}}

## References

{{< bibliography >}}
  {{< bibitem key="Kat96" author="Nicholas M. Katz" type="book" series="Annals of Mathematics Studies" volume="139" publisher="Princeton University Press" year="1996" >}}
  Rigid Local Systems
  {{< /bibitem >}}
{{< /bibliography >}}
