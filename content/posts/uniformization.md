---
title: Uniformization Theorem for Elliptic Curves
abbrlink: abffc691
date: 2025-12-01 00:10:11
categories: ["expositions"]
tags: ["math", "number-theory"]
---

{{< pullquote author="Alfred North Whitehead" >}}
The pursuit of mathematics is a divine madness of the human spirit.
{{< /pullquote >}}

This is an old post from 2024. In this post, we prove the uniformization theorem for elliptic curves. The theorem states that every elliptic curve over the complex numbers arose from the complex plane modulo a lattice, and vice versa. In fact there is an isomorphism between them which is both complex analytic and algebraic. This shows that elliptic curves over complex numbers is a torus. 

<!-- more -->

A lattice $L=[\omega_1,\omega_2]\subseteq \mathbb C$ is an additive subgroup $\omega_1\mathbb Z+\omega_2\mathbb Z\subseteq \mathbb C$ with $\omega_1,\omega_2$ linearly independent. For example, if $\mathcal O=\mathbb Z[\tau]$ is an imaginary quadratic order, the it gives rise to lattice $[1,\tau]$. An elliptic function for a lattice $L$ is a meromorphic function $f:D\subseteq \mathbb C\rightarrow\mathbb C$ that is doubly-periodic w.r.t. $L$, i.e. $f(z+\omega)=f(z)$ for all $\omega\in L$. Elliptic functions form a field $\mathbb C(L)$. We recall Cauchy's principle argument. 

{{< theorem note="Cauchy">}}
Let $\gamma$ be a simply closed positively oriented curve with interior $\Gamma$. Let $f$ be a function meromorphic on an open set $\Omega$ containing $\Gamma$ and $\gamma$ that has no zero or pole on $\gamma$, and $g$ a nonzero function holomorphic on $\Omega$, then for $z_0\in\Gamma$ $$\frac{1}{2\pi i}\oint_{\gamma}g(z)\frac{f^\prime(z)}{f(z)}\mathrm dz=\sum_{\omega\in \Gamma}g(z_0)\mathrm{ord}_{w}(f)$$ when $g(z)=1$, the rhs is the difference between the number of zeros and poles in $\Omega$. 
{{< /theorem >}}

This theorem is proved by writing $f,g$ in terms of their Laurent series about $z_0$ and using Residue theorem. A corollary from this is that in any fundamental paralellogram $F_{\alpha}=\alpha+\{t_1\omega_1+t_2\omega_2:0\le t_1,t_2<1\}$, the number of poles is equal to the number of zeros. 

{{< definition >}}
Let $L$ be a lattice and $k>2$ an integer. The Einsenstein series of weight $k$ is $$G_{k}(L)=\sum_{\omega\in L\setminus\{0\}}\frac{1}{\omega^k}$$ Consider lattices $[1,\tau]$ for $\tau\in\mathbb H$ where $\mathbb H=\{z\in\mathbb C:\mathrm{Im}(z)>0\}$ is the upper-half plane, we define $G_{k}(\tau)=G_{k}([1,\tau])$, so that $G_k$ is a funciton on the upper-half plane $\mathbb H$. 
{{< /definition >}}

If $k$ is odd then the term $\frac{1}{\omega^k}$ cancels with $\frac{1}{(-\omega)^k}$, so the only interesting Einsenstein series are those of even weight. The Einsenstein series converges absolutely. 

{{< definition >}}
A Weierstrass $\wp$-function of a lattice $L$ is $$\wp(z ; L)=\frac{1}{z^2}+\sum_{\omega \in L^*}\left(\frac{1}{(z-\omega)^2}-\frac{1}{\omega^2}\right)$$ we write $\wp(z)$ when there is no confusion of the lattice. 
{{< /definition >}}

The $\wp$-function has a pole of order $w$ at each lattice point, and these are all the poles. Its derivative is

$$\wp^\prime(z)=-2\sum_{\omega\in L}\frac{1}{(z-\omega)^3}$$

It follows that $\wp, \wp^\prime$ are elliptic functions. We will now derive a differential equation that reveals its link to elliptic curves. By expanding the $\wp$-function into series, we can write it in terms of Einsenstein series. $$\wp(z)=\frac{1}{z^2}+\sum_{n=1}^{\infty}(2 n+1) G_{2 n+2}(L) z^{2 n}$$

The critical observation is that $\wp $ satisfies the following differential equations. 

{{< theorem >}}
Let $L$ be a lattice, then $$\wp^{\prime}(z)^2=4 \wp(z)^3-g_2(L) \wp(z)-g_3(L),$$ where $g_2(L)=60G_4(L)$ and $g_3(L)=140 G_6(L)$
{{< /theorem >}}

This corresponds to an elliptic curve by letting $y=\wp^\prime(z)$ and $x=\wp(z)$, so we have an elliptic curve $y^2=4 x^3-g_2(L) x-g_3(L)$, iff the discriminant $\Delta(L)=g_2(L)^3-27g_3(L)^2$ is nonzero, and this is always nonzero. We now have a map that gives an elliptic curve for each lattice

$$\Phi:\mathbb C/L\rightarrow E(\mathbb C)\quad z\mapsto (\wp(z),\wp^\prime(z))$$

This is an isomorphism of groups and complex manifolds. Moreover, all elliptic curves arise this way. For a proof, consult [here](https://math.mit.edu/classes/18.783/2015/LectureNotes16.pdf), becuase I'm too lazy to prove the rest. 