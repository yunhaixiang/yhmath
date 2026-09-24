---
title: Middle Extension and Middle Convolution
date: 2026-09-16 00:00:01 -0400
slug: 1b64c0e
aliases:
  - /posts/middle-extension-and-middle-convolution/
categories: [expositions]
tags: [math, algebraic-geometry, cohomology]
---

{{< pullquote author="Nicholas M. Katz" >}}
Even a cursory glance … leaves one with the impression that there is a fascinating bestiary waiting to be compiled.
{{< /pullquote >}}

In the last post, I wrote about rigid local systems à la Katz, in particular the notion of rigidity. Continuing from our previous post, we now read Chapter 2 of Katz's book {{< cite key="Kat96" >}}. This chapter introduces middle convolution and middle extension, which can be used to build rigid local systems. 

## Middle Extension Sheaves

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
Let $X$ be a separated $\mathbb C$-scheme locally of finite type. A *partition* of $X$ is a family of locally closed immersions $i_\alpha:Y_\alpha\hookrightarrow X_{\mathrm{red}}$, indexed by a set $A$, with each $Y_\alpha$ nonempty, smooth, and connected, such that:

1. $Y_\alpha\times_{X_{\mathrm{red}}}Y_\beta=\varnothing$ whenever $\alpha\ne\beta$;
2. the induced morphism $\coprod_\alpha Y_\alpha\longrightarrow X_{\mathrm{red}}$ is surjective.


The schemes $Y_\alpha$ are called the *pieces* of the partition. The partition is *finite* if $A$ is finite.

{{< /definition >}}


{{< definition >}}
Let $X$ be a separated $\mathbb C$-scheme of finite type. A sheaf $\mathcal F$ of $\mathbb C$-vector spaces on $X^{\mathrm{an}}$ is *algebraically constructible* if there exists a finite partition $\{i_\alpha:Y_\alpha\hookrightarrow X_{\mathrm{red}}\}$ such that $(a_\alpha^{\mathrm{an}})^*\mathcal F$ is a finite-rank local system on each $Y_\alpha^{\mathrm{an}}$, where $a_\alpha:Y_\alpha\hookrightarrow X$ is the composite of $i_\alpha$ with $X_{\mathrm{red}}\hookrightarrow X$. This is an equivalent formulation of Katz's definition {{< cite key="Kat96" note="§2.1.1" >}}.
{{< /definition >}}

When $X$ is a smooth connected curve, constructibility equivalently means that there is a finite set $T\subset X(\mathbb C)$ such that $\mathcal F|_{(X\setminus T)^{\mathrm{an}}}$ is a finite-rank local system and the stalks $\mathcal F_t$ for $t\in T$ are finite-dimensional.

{{< definition >}}
On a smooth connected algebraic curve $U/\mathbb C$, a sheaf of $\mathbb C$-vector spaces $\mathcal F$ on $U^{\mathrm{an}}$ is called a *middle extension sheaf* if it is algebraically constructible and, for some (equivalently, every) nonempty Zariski open subset $i:V\hookrightarrow U$ such that $(i^{\mathrm{an}})^*\mathcal F$ is a local system on $V^{\mathrm{an}}$, the natural restriction morphism
$$\mathcal F\longrightarrow(i^{\mathrm{an}})_*(i^{\mathrm{an}})^*\mathcal F$$
is an isomorphism. 
A middle extension sheaf $\mathcal F$ is called *irreducible* if, for some (equivalently, every) nonempty Zariski open subset $i:V\hookrightarrow U$ on which $(i^{\mathrm{an}})^*\mathcal F$ is a local system, that local system is irreducible.
{{< /definition >}}


{{< definition >}}
Let $j:U\hookrightarrow\mathbb P^1_{\mathbb C}$ be a nonempty Zariski open subset, and let $\mathcal F$ be an irreducible middle extension sheaf on $U^{\mathrm{an}}$. Choose a nonempty Zariski open subset $i:V\hookrightarrow U$ such that $(i^{\mathrm{an}})^*\mathcal F$ is an irreducible local system on $V^{\mathrm{an}}$. Define the *index of rigidity* of $\mathcal F$ as
$$\begin{aligned}
\mathrm{rig}_{U^{\mathrm{an}}}(\mathcal F)
&:=\mathrm{rig}((i^{\mathrm{an}})^*\mathcal F,V^{\mathrm{an}})\\
&=\chi\!\left((\mathbb P^1_{\mathbb C})^{\mathrm{an}},(j^{\mathrm{an}})_*(i^{\mathrm{an}})_*\mathrm{End}((i^{\mathrm{an}})^*\mathcal F)\right).
\end{aligned}$$
{{< /definition >}}

This is independent of the choice of $V$: given two choices $V_1,V_2$, restrict both local systems to $(V_1\cap V_2)^{\mathrm{an}}$. Each restriction removes only finitely many points, so the invariance proved above shows that both choices give the same index. 

For any nonempty open $U\subseteq\mathbb P^1$, we have the category $\mathrm{ME}^{\mathrm{irr}}(U)$ of irreducible middle extension sheaves. Whenever $i:V\hookrightarrow U$ is an open inclusion the functors $(i^{\mathrm{an}})_*$ and $(i^{\mathrm{an}})^*$ are inverse equivalences between $\mathrm{ME}^{\mathrm{irr}}(U)$ and $\mathrm{ME}^{\mathrm{irr}}(V)$. Given two nonempty Zariski opens $U_1,U_2$ and pick any nonempty $V\subseteq U_1\cap U_2$ (exists by irreducibility) with inclusions $i_1:V\hookrightarrow U_1$ and $i_2:V\hookrightarrow U_2$. We get equivalences $\varphi_{1,2}=(i_2^{\mathrm{an}})_*(i_1^{\mathrm{an}})^*$ between $\mathrm{ME}^{\mathrm{irr}}(U_1)$ and $\mathrm{ME}^{\mathrm{irr}}(U_2)$. Moreover, given three such opens then $\varphi_{1,3}=\varphi_{2,3}\circ \varphi_{1,2}$. Hence all these categories can be identified canonically.

## Review of Perverse Sheaves

## Review of Convolution

## Middle Convolution

## References

{{< bibliography >}}
  {{< bibitem key="Kat96" author="Nicholas M. Katz" type="book" series="Annals of Mathematics Studies" volume="139" publisher="Princeton University Press" year="1996" >}}
  Rigid Local Systems
  {{< /bibitem >}}
{{< /bibliography >}}
