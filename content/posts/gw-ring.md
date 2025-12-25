---
title: Grothendieck-Witt Ring
tags: ["math", "algebraic-geometry", "number-theory"]
categories: ["expositions"]
date: 2025-12-06 
---

{{< pullquote author="Shakuntala Devi">}}
What is mathematics? It is only a systematic effort of solving puzzles posed by nature.
{{< /pullquote >}}

This is an old post from 2024. Recently I've been learning about Grothendieck-Witt rings because I want to know about $\mathbb A^1$-enumerative geometry. The Grothendieck-Witt ring of a field (of characteristic different from $2$) is formed using quadratic forms over it. Let $k$ be a field of characteristic not $2$. A quadratic form is a degree $2$ homogeneous polynomial over $k$, say $f=\sum_{1\le i,j\le n}a_{i,j}x_{i}x_{j}$. Of course $x_{i}x_{j}=x_{j}x_{i}$, so we can rewrite $f=\sum_{1\le i,j\le n}a^\prime_{i,j}x_{i}x_{j}$ where $a^\prime_{i,j}=\frac{1}{2}(a_{i,j}+a_{j,i})$, we can then associate to it a symmetric matrix $M_f=(a^\prime_{i,j})_{1\le i,j\le n}$. We see that $f=\mathbf{x}^{\mathrm T}M_f\mathbf{x}$ where $\mathbf{x}=(x_i)_{1\le i\le n}$. Two $n$-ary quadratic forms $f,g$ are said to be equivalent if there is $A\in \mathrm{GL}_n(k)$ such that $f(\mathbf{x})=g(A\mathbf{x})$. Equivalently their associated symmetric matrix are equivalent iff $M_f=A^{\mathrm T}M_g A$ for some $A\in \mathrm{GL}_n(k)$, i.e. congruence of matrices. 

<!--more-->

{{< example >}}
$f(x,y)=xy$ and $g(x,y)=x^2-y^2$ are equivalent by change of variables $x\mapsto x+y$ and $y\mapsto x-y$. Their associated matrices are 
$$M_f=\begin{pmatrix}0 & 1/2\\\ 1/2 & 0\end{pmatrix}\quad M_g=\begin{pmatrix}1 & 0\\\ 0 & -1\end{pmatrix}$$ and the change of variable matrix $A=\begin{pmatrix}1 & 1\\\ 1 & -1\end{pmatrix}$. 
{{< /example >}}

In all following, all vector spaces are finite-dimensional. A quadratic space $(V,q)$ over $k$ is a vector space $V$ over $k$ and a function $q:V\rightarrow k$ called a quadratic map satisfying $q(ax)=a^2q(x)$ for all $a\in k$ and $x\in V$, and such that $(u,v)\mapsto q(u+v)-q(u)-q(v)$ is bilinear. An equivalence of quadratic spaces $(V_1,q_1),(V_2,q_2)$ is an isomorphism $\varphi:V_1\rightarrow V_2$ such that $q_1(x)=q_2(\varphi(x))$ for all $x\in V_1$. Obviously an $n$-ary quadratic form $f$ gives rise to a quadratic space $(k^n,f)$ where $f$ is the map of evaluating $f$. In the other direction, for a quadratic space $(V,q)$, choose a basis $e_i$, then this corresponds to a quadratic form $f=\sum_{1\le i,j\le n}a_{i,j} x_ix_j$ where $a_{i,j}=\frac{1}{2}(q(e_i+e_j)-q(e_i)-q(e_j))$, and in particular $a_{i,i}=q(e_i)$. We see that a quadratic space is equivalent to a quadratic form. Another equivalent structure is $(V,B)$, a vector space $V$ over $k$ with a symmetric bilinear form $B:V^2\rightarrow k$. Each $(V,B)$ determines a quadratic space $(V,q)$ where $q(x)=B(x,x)$. In the other direction, for a quadratic space $(V,q)$ we have a symmetric bilinear form $B(v,w)=\frac{1}{2}(q(v+w)-q(v)-q(w))$, called its polarization. An equivalence or isometry between $(V_1,B_1),(V_2,B_2)$ is a linear isomorphism $\varphi:V_1\rightarrow V_2$ such that $B_1(v,w)=B_2(\varphi(v),\varphi(w))$. We say a quadratic form is nondegenerate if the associated symmetric bilinear form is nondegenerate, or equivalently the associated symmetric matrix is invertible. A diagonal quadratic form is a quadratic form with a diagonal symmetric matrix. Every quadratic form is equivalent to a diagonal form. 

{{< definition >}}
A quadratic form $f$ represents some $d\in k^\times$ if there exists $\lambda\in k^n$ with $f(\lambda)=d$. Let $D(f)$ be the subset of $k^\times$ represented by $f$. 
{{< /definition >}}

For quadratic forms $f,g$, their orthogonal sum $f\oplus g$ is $f(x)+g(y)$, equivalent to taking block diagonal of their matrices, equivalent to direct sum of quadratic space (with sum of quadratic map), and equivalent to direct sum of symmetric bilinear space (with sum of symmetric bilinear form). 

{{< theorem >}}
For a quadratic form $f$ on $V$, some $d\in k^\times$ is representable iff $V\cong \langle d\rangle\otimes W$ for $W$ another quadratic space. As a result, $V\cong \langle a_1,\dots,a_n\rangle $ for some $a_i$. 
{{< /theorem >}}

Define the determinant of a quadratic form $f$ to be the image of $\det M_f$ in $k^\times/(k^\times)^2$. Define $\mathbb H=\langle 1, -1\rangle$ the hyperbolic plane, and its arbitrary orthogonal sum is hyperbolic space (including zero space). A quadratic space is isotropic if there is a nonzero vector $x$ such that $q(x)=0$ (an isotropic vector), and totally isotropic if every nonzero vector is isotropic, and anisotrpic if not isotropic. 

{{< theorem note="Witt Decomposition" >}}
Each quadratic space is a orthogonal sum of a totally isotropic space, a hyperbolic space, and an anisotropic space, all unique up to equivalence. 
{{< /theorem >}}

{{< theorem note="Witt Cancellation" >}}
If $q\oplus q_1\cong q\oplus q_2$ then $q_1\cong q_2$. 
{{< /theorem >}}

We can define tensors of quadratic spaces by tensoring their underlying space and multiplying the quadratic map. Then orthogonal sum and tensor define a semiring on the set $M$ of equivalence classes of quadratic spaces. Define inverse formally on $M^2$ by $(x,y)\sim (s,t)$ iff $x+t=s+y$. Multiplication is defined in the obvious way. The resulting ring is the Grothendieck-Witt ring $\mathrm{GW}(k)$. The integer multiples of hyperbolic space $(\mathbb H)$ is an ideal in the GW ring, the quotient $\mathrm{W}(k)=\mathrm{GW}(k)/(\mathbb H)$ is the Witt ring. For more read [here](https://kyleormsby.github.io/files/quadratic_TNR.pdf). 