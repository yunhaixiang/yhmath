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

Let $X=\mathbb P^1_{\mathbb C}$, $S\subset X(\mathbb C)$ a finite set of size $m\ge1$, $U=X\setminus S$, and $j:U\hookrightarrow X$ be the open immersion inducing $j^{\mathrm{an}}:U^{\mathrm{an}}\hookrightarrow X^{\mathrm{an}}$. Let $\mathcal F$ be an irreducible $\mathbb C$-local system on $U^{\mathrm{an}}$ of rank $n\ge1$. We know that $\mathcal F$ is physically rigid iff $\chi(X^{\mathrm{an}},(j^{\mathrm{an}})_*\mathrm{End}(\mathcal F))=2$.

{{< definition >}}
Define the *index of rigidity* of $\mathcal F$ on $U^{\mathrm{an}}$ to be $\mathrm{rig}(\mathcal F,U^{\mathrm{an}})=\chi(X^{\mathrm{an}},(j^{\mathrm{an}})_*\mathrm{End}(\mathcal F))$.
{{< /definition >}}

The index of rigidity is preserved under tensoring with rank-one local systems and removing finitely many points. Namely, let $\mathcal L$ be a rank-one local system on $U^{\mathrm{an}}$, and let $i:V\hookrightarrow U$ be a nonempty Zariski open subset with finite complement. Then
$$\mathrm{rig}(\mathcal F\otimes\mathcal L,U^{\mathrm{an}})=\mathrm{rig}(\mathcal F,U^{\mathrm{an}})=\mathrm{rig}((i^{\mathrm{an}})^*\mathcal F,V^{\mathrm{an}}).$$
The first equality follows from
$$\mathrm{End}(\mathcal F\otimes\mathcal L)\cong(\mathcal F\otimes\mathcal L)^\vee\otimes(\mathcal F\otimes\mathcal L)\cong\mathrm{End}(\mathcal F)\otimes(\mathcal L^\vee\otimes\mathcal L)\cong\mathrm{End}(\mathcal F).$$
For the second, $\mathcal G\cong(i^{\mathrm{an}})_*(i^{\mathrm{an}})^*\mathcal G$ for every local system $\mathcal G$ on $U^{\mathrm{an}}$, so
$$\begin{aligned}
(j^{\mathrm{an}})_*\mathrm{End}(\mathcal F)
&\cong(j^{\mathrm{an}})_*(i^{\mathrm{an}})_*(i^{\mathrm{an}})^*\mathrm{End}(\mathcal F)\\
&\cong(j^{\mathrm{an}})_*(i^{\mathrm{an}})_*\mathrm{End}((i^{\mathrm{an}})^*\mathcal F)\\
&\cong((j\circ i)^{\mathrm{an}})_*\mathrm{End}((i^{\mathrm{an}})^*\mathcal F).
\end{aligned}$$
Taking Euler characteristics on $X^{\mathrm{an}}$ gives the second equality.

{{< definition >}}
On a smooth connected algebraic curve $U/\mathbb C$, a sheaf of $\mathbb C$-vector spaces $\mathcal F$ on $U^{\mathrm{an}}$ is called a *middle extension sheaf* if it is algebraically constructible and, for some (equivalently, every) nonempty Zariski open subset $i:V\hookrightarrow U$ such that $(i^{\mathrm{an}})^*\mathcal F$ is a local system on $V^{\mathrm{an}}$, the natural restriction morphism
$$\mathcal F\longrightarrow(i^{\mathrm{an}})_*(i^{\mathrm{an}})^*\mathcal F$$
is an isomorphism. Here *algebraically constructible* means that there is a finite partition $|U|=\bigsqcup_\alpha|U_\alpha|$ into the underlying sets of smooth connected locally closed algebraic subvarieties $U_\alpha\hookrightarrow U$ such that each $\mathcal F|_{U_\alpha^{\mathrm{an}}}$ is a finite-rank local system. The partition includes all scheme points, closed and non-closed; it is not a coproduct decomposition of schemes. On a curve, this simply means that there is a finite set $T\subset U(\mathbb C)$ such that $\mathcal F|_{(U\setminus T)^{\mathrm{an}}}$ is a finite-rank local system and stalks $\mathcal F_t$ for $t\in T$ are finite-dimensional. 
{{< /definition >}}

{{< definition >}}

{{< /definition >}}

## References

{{< bibliography >}}
  {{< bibitem key="Kat96" author="Nicholas M. Katz" type="book" series="Annals of Mathematics Studies" volume="139" publisher="Princeton University Press" year="1996" >}}
  Rigid Local Systems
  {{< /bibitem >}}
{{< /bibliography >}}
