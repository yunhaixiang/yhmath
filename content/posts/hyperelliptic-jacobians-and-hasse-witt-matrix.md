---
title: Hyperelliptic Jacobians and Hasse–Witt Matrix
date: 2026-05-15 14:28:09 -0400
slug: e7d7cf9
aliases:
  - /posts/hyperelliptic-jacobians-and-hasse-witt-matrix/
categories: ["expositions"]
tags: ["algebraic-geometry", "number-theory", "math"]
---

{{< pullquote author="André Weil" >}}
God exists since mathematics is consistent, and the Devil exists since we cannot prove it.
{{< /pullquote >}}

Recall that a hyperelliptic curve is a smooth projective curve of genus $g \geq 2$ that admits a degree 2 morphism to the projective line $\mathbb{P}^1$. In this post, we will discuss how to compute the Hasse–Witt matrix of a hyperelliptic curve defined over a finite field, which encodes a lot of information about the curve’s Jacobian. I arrived at this topic by working on a problem related to the $L$-polynomials of hyperelliptic curves over finite fields in high genus. 




## Arithmetic of Hyperelliptic Curves

Recall a hyperelliptic curve $C/\mathbb F_q$ is a smooth projective curve of genus $\ge 2$ with a degree $2$ map to $\mathbb P^1$. Assume the characteristic of $\mathbb F_q$ is odd, it has affine model $y^2=f(x)$, where $f(x)$ is square free. 

{{< definition >}}
The Jacobian $\mathrm{Jac}(C)$ of a smooth projective curve $C$ is a principally polarizaed abelian variety, defined as the identity component the Picard scheme $\mathrm{Pic}^0(C)$, where the Picard functor is the fppf sheafification of the functor $(\mathrm{Sch}^{\mathrm{op}})_{\mathrm{fppf}}\to \mathbf{Ab}$
$$T\mapsto \mathrm{Pic}(C_T)/\pi_*\mathrm{Pic}(T)$$
representable by an abelian variety. A polarization of an abelian variety $A$ is an isogeny $\lambda:A\rightarrow A^{\vee}$, where $A^\vee:=\mathrm{Jac}_{A/k}$ is the dual abelian variety, arising from an ample line bundle in this way: for a line bundle $L$, define 

$$\lambda_L:A\to A^\vee\qquad x\mapsto t^*_xL\otimes L^{-1}$$

where $t_x:A\rightarrow A$ is the translation map by $x$. Moreover it is called principal if it is an isomorphism. 
In the case of a Jacobian $J=\mathrm{Jac}(C)$, there is a principal polarization induced by the ample divisor $\Theta$, defined as the image of $C^{(g-1)}:=C^{g-1}/\mathrm{Sym}_{g-1}\to J$ that sends $D\mapsto \mathcal O_C(D-(g-1)P_0)$, where $P_0$ is a rational point, and $D$ is the divisor representation of an element in $C^{(g-1)}$. 
{{< /definition >}}

In other words, the Jacobian of $C$ is the moduli space of the degree $0$ line bundles on a $C$. The Neron-Severi group of $C$ is defined to be $\mathrm{Pic}(C)/\mathrm{Pic}^0(C)$. There is a canonical exact sequence. 
$$0\to \mathrm{Pic}^0(C)\rightarrow \mathrm{Pic}(C)\rightarrow \mathrm{NS}(C)\rightarrow 0$$
where $\mathrm{NS}(C)=\mathbb Z$ if $k$ is algebraically closed. 

{{< lemma >}}For a smooth projective curve $C$ of genus $g$, its Jacobian $J=\mathrm{Jac}(C)$ has dimension $g$.
{{< /lemma >}}
{{< proof >}}
It suffice to show the tangent space $T_0\mathrm{Pic}_{C}=H^1(C, \mathcal O_C)$, then by Serre duality
$$\dim  J=\dim T_0 J=\dim T_0 \mathrm{Pic}_C=\dim H^1(C, \mathcal O_C)=\dim H^0(C,\omega_C):=g$$
Let $C_{\varepsilon}:=C\times_{k}k[\varepsilon]/\varepsilon^2$. There is an exact sequence of sheaves
$$0\rightarrow \mathcal O_C\xrightarrow{f\mapsto 1+\varepsilon f} \mathcal O_{C_{\varepsilon}}^\times\xrightarrow{a+\varepsilon b\mapsto a}\mathcal O_{C}^\times\rightarrow 0$$
This induces long exact sequence
$$H^0\left(C, \mathcal{O}_{C_{\varepsilon}}^{\times}\right) \rightarrow H^0\left(C, \mathcal{O}_C^{\times}\right) \rightarrow H^1\left(C, \mathcal{O}_C\right) \longrightarrow H^1\left(C, \mathcal{O}_{C_{\varepsilon}}^{\times}\right)=\mathrm{Pic}(C_{\varepsilon}) \longrightarrow H^1\left(C, \mathcal{O}_C^{\times}\right)=\mathrm{Pic}(C)$$
which gives $H^1(C,\mathcal O_C)=\mathrm{Ker}(\mathrm{Pic}(C_\varepsilon)\rightarrow \mathrm{Pic}(C))=T_0\mathrm{Pic}_C$
{{< /proof >}}
{{< lemma id="lem-tors">}}
For smooth projective curve $X$ over $\overline{k}$ with $\ell$ an invertible prime, $H^1(X,\mu_{\ell^n})=\mathrm{Pic}(X)[\ell^n]$.
{{< /lemma >}}
{{< proof >}}
Start with Kummer sequence
$$1 \rightarrow \mu_{\ell^n} \rightarrow \mathbf{G}_m \xrightarrow{\ell^n} \mathbf{G}_m \rightarrow 1$$
Deriving cohomology
$$H^0\left(X, \mathbf{G}_m\right) \xrightarrow{\ell^n} H^0\left(X, \mathbf{G}_m\right) \rightarrow H^1\left(X, \mu_{\ell^n}\right) \rightarrow H^1\left(X, \mathbf{G}_m\right) \xrightarrow{\ell^n} H^1\left(X, \mathbf{G}_m\right)$$
Thus $H^1\left(X, \mu_{\ell^n}\right) \cong H^1(X,\mathbf{G}_m)[\ell^n]\cong \operatorname{Pic}(X)\left[\ell^n\right]$. 
{{< /proof >}}
{{< lemma >}}For a smooth projective curve $C$ of genus $g$ and its Jacobian $J=\mathrm{Jac}(C)$, we have an isomorphism of $\mathrm{Gal}_k$-modules
$$\mathrm{AJ}^*:H^1(C_{\overline{k}},\mathbb Q_\ell)\cong H^1(J_{\overline{k}}, \mathbb Q_\ell)$$
induced by the Abel-Jacobi map $\mathrm{AJ}:C\to J$ defined as $P\mapsto [P-P_0]$ with $P_0$ a rational point.
{{< /lemma >}}
{{< proof >}}
We have 
$H^1\left(C, \mu_{\ell^n}\right) \cong \mathrm{Pic}(C)\left[\ell^n\right] \cong\mathrm{Pic}^0(C)\left[\ell^n\right] \cong J\left[\ell^n\right]$. Similarly, $H^1(J,\mu_{\ell^n})=\mathrm{Pic}^0(J)[\ell^n]=J^\vee [\ell^n]$ via canonical principal polarization. By the functoriality of the Kummer sequence, the pullback by Abel-Jacobi map $H^1\left(J, \mu_{\ell^n}\right) \rightarrow H^1\left(C, \mu_{\ell^n}\right)$ and the induced map by Abel-Jacobi map on torsion Picard functors $\mathrm{Pic}(J)[\ell^n]\to \mathrm{Pic}(C)[\ell^n]$ agree, which also agrees with $\mathrm{Pic}^0(J)[\ell^n]\to \mathrm{Pic}^0(C)[\ell^n]$, since torsion points have degree $0$. This map is inverse to the canonical polarization $\lambda_{\Theta}$ since $\mathrm{Jac}(C)=\mathrm{Alb}(C)$ using the Albanese universal property, hence an isomorphism. Therefore we obtain the desired isomorphism by passing to the limit.  
{{< /proof >}}

{{< definition >}}The $L$-polynomial of a smooth algebraic curve $C/\mathbb F_q$ is the polynomial
$$L_C(T)=\mathrm{det}(1-TF|\mathrm{H^1}(C_{\overline{\mathbb F_q}},\mathbb Q_\ell))=\mathrm{det}(1-TF|\mathrm{H^1}(J_{\overline{\mathbb F_q}},\mathbb Q_\ell))$$
where $F=\mathrm{Frob}_q^{-1}$ is the geometric Frobenius, $\ell$ is an invertible prime in $C$, and $J=\mathrm{Jac}(C)$. 
{{< /definition >}}

This polynomial appears in the numerator of the Weil zeta function

$$Z(C,T)=\mathrm{exp}\left(\sum_{n}\frac{|C(\mathbb F_{q^n})|}{n}T^n\right)=\frac{L_C(T)}{(1-T)(1-qT)}$$

by Weil's conjecture. Additionally, the $L$-polynomial (Weil polynomial) of an abelian variety determines it up to $\mathbb F_q$-isogeny. This is a very deep result of Honda-Tate theory. 

{{< proposition >}}
Same setting as above, then
$$L_C(T)\equiv \det (1-T\mathrm{Frob}_q|J[\ell])\pmod{\ell}$$
{{< /proposition>}}
{{< proof >}}
Write $J[\ell]$ in terms of the Tate module $T_\ell J=\varprojlim J[\ell^n]$, as $J[\ell]\cong T_\ell J/\ell T_\ell J $, which is a $\mathrm{Gal}_k$-module isomorphism. Therefore
$$\det (1-T\mathrm{Frob}_q|J[\ell])\equiv \det (1-T\mathrm{Frob}_q|T_\ell J/\ell T_\ell J )\equiv \det (1-T\mathrm{Frob}_q|T_\ell J )\pmod{\ell}$$
We show that $T_\ell J$ is the dual representation to $H^1(C_{\overline{\mathbb F_q}}, \mathbb Z_\ell)$ by showing $T_\ell J\cong H^1(C_{\overline{\mathbb F_q}}, \mathbb Z_\ell(1))$ and using Poincare duality, where we recall $\mathbb Z_\ell(1)=\varprojlim \mu_{\ell^n}$ is the Tate twist. By {{< refer "lem-tors" >}}, we have $J[\ell^n]=\mathrm{Pic}(C)[\ell^n]=H^1(C,\mu_{\ell^n})=H^1(C,(\mathbb Z/\ell^n)(1))$, and passing to the limit we have $T_\ell J\cong H^1(C,\mathbb Z_\ell (1))\cong H^1(C,\mathbb Z_\ell)^\vee$. Therefore a matrix over $T_\ell J$ can be identified as its inverse transpose over $H^1(C,\mathbb Z_\ell)^\vee$. Transpose does not change characteristic polynomial, so 
$\det(1-TF|H^1(C,\mathbb Z_\ell))=\det(1-T\mathrm{Frob}_q|T_\ell J)$, done. 
{{< /proof >}}

Specifically, it turns out that it is very fruitful to consider the $L$-polynomial mod $2$ (recall we are assuming odd characteristics), as demonstrated by a paper by Costa–Donepudi–Fernando–Karemaker–Springer–West {{< cite key="CDFKSW22" >}}. We present their main theorem.

{{< theorem id="thm-hyp">}}
Let $C/\mathbb F_q$ be a hyperelliptic curve with $q$ odd and genus $g$. Let the partition $(d_1,...,d_r)$ of $2g+2$ be the cycle type of the permutation of Frobenius on the $2g+2$ geometric branch points of $C\to \mathbb P^1$, then we have
$$L_C(T)\equiv \frac{\prod_{i=1}^r(1-T^{d_i})}{(1-T)^2}\pmod{2}$$
{{< /theorem >}}
{{< proof note="Sketch">}}
We have the standard result that $J[2]$ is $2g$-dimensional over $\mathbb F_2$. Let $W$ be the $2g+2$ geometric branch points, then we have a vector space $\mathbb F_2^W=\mathbb F_2^{2g+2}$ with a Frobenius action. Straightforwardly, the Frobenius can be represented as a block diagonal matrix over $\mathbb F_2^W$ with blocks of sizes $d_1,...,d_r$, each one a cyclic permutation matrix. One easily finds the characteristic polynomial to be $\prod_{i=1}^r(1-T^{d_i})\in\mathbb F_2[T]$. A standard result of Mumford {{< cite key="Mum07" >}} says: if $e\in J[2]$, then as a divisor either $e=\sum_{P\in U}P-|U|(\infty)$ (if $\infty$ is ramified) or $e=\sum_{P\in U}P-\frac{|U|}{2}(\infty_1+\infty_2)$ (if $\infty$ splits in two), for some subset $U\subseteq W$ of even size, where two such representations agree iff $U_1=U_2$ or $U_1=W\setminus U_2$. Let $Z=\langle (1,\dots,1) \rangle$ and $Z^\perp$ be the orthogonal space then it is the subspace of vectors of an even number of nonzero entries. Frobenius acts stably and also invertibly on the quotient $\mathbb F_2^W/Z^{\perp}$, so one finds the characteristic polynomial of the Frobenius on $Z^{\perp}$ to be $(1-T)^{-1}\prod_{i=1}^r(1-T^{d_i})$ via the exact sequence. Similarly by considering $Z^{\perp}/Z$, one finds the characteristic polynomial $(1-T)^{-2}\prod_{i=1}^r(1-T^{d_i})$, and voila. 
{{< /proof >}}

Notably, this explains a numerical phenomenon when I was producing large amount of data. Still assuming odd characteristics:

{{< proposition >}}
Let $C/\mathbb F_q$ be a hyperelliptic curve of genus $g>2$ such that $L_C(T)=1+a_gT^g+q^gT^{2g}$, then $a_g$ is even. 
{{< /proposition >}}
{{< proof >}}
Since $q^n$ is odd $L_C(T)\equiv 1+T^g+T^{2g}\pmod{2}$. By {{< refer id="thm-hyp" >}} we have in $\mathbb F_2[T]$
$$(1+T)^2(1+T^g+T^{2g})=\prod_{i=1}^r(1+T^{d_i})$$
swapping negative signs with positive ones. The LHS has exactly two linear factors, and the RHS $1+T^{d_i}$ contributes one linear factor if $d_i$ is odd and two if $d_i$ is even. Thus, the number of Frobenius cycles $r$ can only be $1$ or $2$. For $g>2$, the LHS would need to have $6$ terms, contradiction.  
{{< /proof >}}

The above analysis helps us understand the $L$-polynomial mod $\ell$, where $\ell\ne p$. However it does not help us understand it mod $p$. The Hasse-Witt matrix helps us understand the $L$-polynomial mod $p$. 

## Semilinear Algebra and Hasse–Witt Matrix


Let $\varepsilon$ be an automorphism of the field $K$, and write $a^{\varepsilon}:=\varepsilon(a)$ for all $a \in K$. A map $T: V \to W$ between two $K$-vector spaces is called $\varepsilon$-semilinear if it satisfies the following properties for all $v, w \in V$ and $a \in K$: $T(v + w) = T(v) + T(w)$ and $T(av) = a^{\varepsilon} T(v)$. Let $E=(e_1, \ldots, e_n)$ and $F=(f_1,\dots,f_n)$ be an ordered basis for $V$, we represent a $\varepsilon$-semilinear map $T$ by a matrix $[T]_{E}^{F}$. Unlike in linear algebra, we have $[Tv]_{F} = [T]_{E}^{F} [v]_{E}^{\varepsilon}$, where $[v]_{E}^{\varepsilon}$ is obtained by applying $\varepsilon$ to each entry of $[v]_{E}$, and change of basis is: $[T]_{F}^{F} = [\mathrm{id}]_{E}^{F} [T]_E^E([\mathrm{id}]_{E}^{F})^{\varepsilon}$. Iteration is given by $[T^n]_{E}^{E} = [T]_E^E ([T]_E^E)^{\varepsilon} \cdots ([T]_E^E)^{\varepsilon^{n-1}}$.

Let $V^*$ be the dual of $V$ and $E^*=(e^1, \ldots, e^n)$ be the corresponding dual basis. If $T: V \to W$ is a $\varepsilon$-semilinear map, then its adjoint $T^*: W^* \to V^*$ is a $\varepsilon^{-1}$-semilinear map and is characterized by the property that $\langle Tv, w \rangle = \langle v, T^* w \rangle^{\varepsilon^{-1}}$ for all $v \in V$ and $w \in W^*$. In terms of matrices, we have $[T^*]_{F^*}^{E^*} = ([T]_E^F)^{t,\varepsilon^{-1}}$, where $t$ denotes the transpose.

Let $k$ be a perfect field of characteristic $p > 0$, and let $C$ be a smooth projective curve over $k$. Let $F: C \to C$ be the absolute Frobenius morphism, which raises functions to their $p$-th power. Let $\sigma:k\rightarrow k$ be the Frobenius automorphism of $k$ with inverse $\tau$. The absolute Frobenius $F:C \to C$ is defined to be the identity on the underlying topological space of $C$ and sends $f\mapsto f^p$ on sections. Recall that the coherent cohomology $H^i(C,\mathcal O_C)$ is a $k$-vector space via the following process: the structure map $C\rightarrow \mathrm{Spec}(k)$ induces $k=H^0(\mathrm{Spec}(k),\mathcal O_{\mathrm{Spec}(k)})\rightarrow H^0(C,\mathcal O_C)$, and for each $f\in H^0(C,\mathcal O_C)$, the multiplication map $m_f:\mathcal O_C \to \mathcal O_C$ by $f$ induces $m_f^i: H^i(C,\mathcal O_C) \to H^i(C,\mathcal O_C)$, and $f\cdot \alpha := m_f^i(\alpha)$ for $\alpha \in H^i(C,\mathcal O_C)$ makes $H^i(C,\mathcal O_C)$ a $H^0(C,\mathcal O_C)$-module, and hence by composition also a $k$-vector space. The absolute Frobenius $F$ induces a $\sigma$-semilinear map $F^*: H^1(C,\mathcal O_C) \to H^1(C,\mathcal O_C)$. 

{{< definition >}}
Let $B$ be a basis of $H^1(C,\mathcal O_C)$, the Hasse–Witt matrix of $C$ with respect to $B$ is defined to be the matrix representation of the $\sigma$-semilinear map $F^*$ with respect to $B$, i.e. $[F^*]_B^B$. 
{{< /definition >}}

{{< theorem >}}
Let $C/\mathbb F_q$ be a smooth projective curve. If $H$ is the Hasse-Witt matrix of $C$, then
$$L_C(T)\equiv \det(1-TH)\pmod p.$$
In other words, the characteristic polynomial computes the $L$-polynomial mod $p$. 
{{< /theorem >}}
{{< proof >}}
Either one uses the coherent Lefschetz trace formula or comparison with de Rham and crystalline cohomology, both are difficult. See Manin's original congruence {{< cite key="Man61" note="Theorem 1" >}}.
{{< /proof >}}

{{< remark >}}The Hasse–Witt matrix contains a lot more information than just the $L$-polynomial mod $p$. In particular, the $p$-rank $f$ of $J$ (defined as $\# J[p](\overline{k})=p^f$) can be computed by $f=\mathrm{rank}(HH^{(p)}\cdots H^{(p^{g-1})})$, which implies that $J$ is ordinary iff $H$ is invertible. 
{{< /remark >}}

Let $\omega_C$ be the sheaf of regular Kähler differentials on $C$. To compute Hasse-Witt matrices, we introduce another matrix which is closely related to the Hasse-Witt matrix called the Cartier-Manin matrix, to which end we need to define the Cartier operator, which is the Serre dual to Hasse-Witt. 
Recall that Serre duality gives a perfect pairing $H^0(C,\omega_C) \times H^1(C,\mathcal O_C) \to k$ defined by $(\omega, \alpha) \mapsto \mathrm{Tr}(\alpha \smile \omega)$, where $\smile$ is the cup product and $\mathrm{Tr}: H^1(C,\omega_C) \to k$ is the trace map. However, in service of our purposes, we shall use here a residue version of Serre duality: $(\omega, \alpha)\mapsto \sum_{P\in |C|}\mathrm{Res}(\alpha_P \omega)$, where $\alpha_P$ is the _local principal part_ of $\alpha$ at $P$. 

Fix $C$ a smooth projective geometrically integral curve over a field $k$, with function field $K=k(C)$. For each closed point $P\in |C|$, let $K_P=\mathrm{Frac}(\widehat{\mathcal O}_{C,P})$ be the fractional field of the completion of the local ring of $C$ at $P$. Let $t_P$ be the uniformizer in $\mathcal O_{C,P}$, then non-canonically, we have $\widehat{\mathcal O}_{C,P}=k(P)[[t_P]]$ and $K_P=k(P)((t_P))$. 

{{< definition >}}
With the setting above, define the _adele ring_ of $C$ as the topological ring
$$\mathbb A_C=\prod_{P\in |C|}(K_P,\widehat{\mathcal O}_{C,P})$$
In other words it is a collection of $(f_P)_{P\in |C|}$ where only finitely many are allowed to have poles. For a divisor $D=\sum_{P}n_P P$, define 
$$\mathbb A_C(D)=\prod_{P\in |C|}\widehat{\mathcal O_C(D)_P}=\{(f_P)_{P\in |C|}:\forall P\in |C|,\mathrm{ord}_P(f_P)+n_P\ge 0\}\subseteq\mathbb A_C$$
When $D=0$, we have $\mathbb A_C(0)=\prod_{P\in |C|}\widehat{\mathcal O}_{C,P}$ the integral adeles. The rational functions $K\to \mathbb A_C$ embeds diagonally into the adeles. 
{{< /definition >}}

{{< lemma >}}
For each divisor $D=\sum_{P}n_P P$, there is a isomorphism of $k$-vector spaces $H^1(C,\mathcal O_C(D))\cong \mathbb{A}_C/(\mathbb{A}_C(D)+K)$. 
{{< /lemma >}}
{{< proof >}}
See {{< cite key="Ser88" note="Chapter II.8, Duality theorem" >}}.
{{< /proof >}}

{{< theorem note="Serre Duality">}}The Serre pairing below is perfect
$$\begin{aligned}H^1(C,\mathcal O_C(D))\times H^0(C,\omega_C(-D))&\rightarrow k\\
((f_P)_P,\omega) &\mapsto\sum_{P\in |C|}\mathrm{Res}_{P}(f_P\omega)\end{aligned}$$
where for a local meromorphic differential $f_P\mathrm{d}t_P=(a_{-m}t_P^{-m}+a_{-m+1}t_P^{-m+1}+\cdots)\mathrm{d}t_P$, the residue is $\mathrm{Res}_P(f_P\mathrm{d}t_P):=\mathrm{Tr}_{k(P)/k}(a_{-1})$.
{{< /theorem >}}
{{< proof >}}
See {{< cite key="Ser88" note="Chapter II.8, Duality theorem" >}}.
{{< /proof >}}


{{< definition >}}
The _Cartier operator_ $M:H^0(C,\omega_C) \to H^0(C,\omega_C)$ is defined as the semilinear adjoint of the induced map by the absolute Frobenius morphism $F^*: H^1(C,\mathcal O_C) \to H^1(C,\mathcal O_C)$ with respect to the Serre duality pairing, i.e. $\langle F^* \alpha, \omega \rangle = \langle \alpha, M\omega \rangle^{\tau}$ for all $\alpha \in H^1(C,\mathcal O_C)$ and $\omega \in H^0(C,\omega_C)$. The Cartier–Manin matrix with respect to a basis $B$ of $H^0(C,\omega_C)$ is the matrix of the Cartier operator with respct to $B$. 
{{< /definition >}}

Concretely, we can derive a formula for the Cartier operator as follows. 

{{< theorem id="thm-local" >}}
Let $C/\mathbb F_q$ be a hyperelliptic curve with $q$ odd and genus $g$. For each closed point $P\in |C|$ with local parameter $t_P$, and some local meromorphic differential $\omega=(a_{-m}t^m_P+a_{-m+1}t^{m+1}_P+\cdots)\mathrm dt_P\in \widehat{\omega}_{C,P}\otimes_{\widehat{O}_{C,P}}k(P)((t_P))$, we have
$$M\omega=\sum_{j}a^{1/p}_{pj-1}t^{j-1}_P\mathrm dt_P$$
{{< /theorem >}}
{{< proof >}}
By adjointness on an adeles supported only at one point with $f_P=f$, we have 
$$\mathrm{Res}_P(f^p\omega)=\left(\mathrm{Res}_P(fM\omega)\right)^p$$
Suppose $M\omega=\left(\sum_{m}b_mt^m_P\right)\mathrm dt_P$, and take $f=t^r$, then $\mathrm{Res}_P(\left(\sum_{n}a_nt^{n+pr}_P\right)\mathrm dt_P)=\left(\mathrm{Res}_P(\left(\sum_{m}b_mt^{m+r}_P\right)\mathrm dt_P)\right)^p$. Computing both sides, we have $a_{-pr-1}=b^p_{-r-1}$ so $b_{-r-1}=a_{-pr-1}^{1/p}$ by perfect ground field assumption. I’m ignoring the complications with trace, but this is a technicality one can solve using nondegeneracy of trace pairing. Renaming indices $j:=-r$, then done.  
{{< /proof >}}

{{< theorem >}}
Same setting as above. Let $y^2=f(x)$ be an affine model of $C$. Suppose $f(x)^{\frac{p-1}{2}}=\sum_{m}c_m x^m$, then with respect to the standard basis $\omega_i=x^{i-1}\frac{\mathrm dx}{y}$ for $i=1,\dots,g$, the Cartier–Manin matrix is $(c_{pi-j}^{1/p})_{1\le i,j\le g}$.
{{< /theorem >}}
{{< proof >}}
Using {{< refer "thm-local" >}}, since $y^{p-1}=f(x)^{\frac{p-1}{2}}$
$$M\omega_i=M\left(x^{i-1}\frac{\mathrm dx}{y}\right)=M\left(x^{i-1}f(x)^{\frac{p-1}{2}}\frac{\mathrm dx}{y^p}\right)=\frac{1}{y}M(x^{i-1}f(x)^{\frac{p-1}{2}}\mathrm dx)=\frac{1}{y}M\left(\sum_{m}c_mx^{m+i-1}\mathrm dx\right)=\frac{1}{y}\sum_{j=1}^g c_{pj-i}^{1/p}x^{j-1}\mathrm dx=\sum_{j=1}^g c_{pj-i}^{1/p}\omega_j$$
and we are done. 
{{< /proof >}}

{{< corollary >}}
Same setting as above. The dual basis of $H^1(C,\mathcal O_C)$ to the standard basis $H^0(C,\omega_C)$ is given by $\eta_i=-\frac{y}{2x^i}$ for $i=1,\dots,g$, with respect to which the Hasse-Witt matrix of $C$ is $(c_{pj-i})_{1\le i,j\le g}$. 
{{< /corollary >}}
{{< proof >}}
Straightforward by the semilinar adjunction between Hasse–Witt and Cartier–Manin matrices. 
{{< /proof >}}


## References

{{< bibliography >}}
  {{< bibitem key="Man61" author="Yuri I. Manin" type="article" journal="Izvestiya Akademii Nauk SSSR. Seriya Matematicheskaya" volume="25" number="1" pages="153--172" year="1961" note="English translation in American Mathematical Society Translations, Series 2, Volume 45, pages 245--264, 1965" url="https://www.mathnet.ru/eng/im3370" >}}
  The Hasse-Witt matrix of an algebraic curve
  {{< /bibitem >}}
  {{< bibitem key="AH19" author="Jeffrey D. Achter and Everett W. Howe" type="incollection" booktitle="Arithmetic Geometry: Computation and Applications" series="Contemporary Mathematics" volume="722" publisher="American Mathematical Society" pages="1--18" year="2019" doi="10.1090/conm/722/14534" eprint="1710.10726" >}}
  Hasse-Witt and Cartier-Manin matrices: A warning and a request
  {{< /bibitem >}}
  {{< bibitem key="Ser88" author="Jean-Pierre Serre" type="book" series="Graduate Texts in Mathematics" volume="117" publisher="Springer-Verlag" address="New York" year="1988" >}}
  Algebraic Groups and Class Fields
  {{< /bibitem >}}
  {{< bibitem key="Mum07" author="David Mumford" type="book" series="Modern Birkhäuser Classics" publisher="Birkhäuser Boston" year="2007" >}}
  Tata Lectures on Theta II: Jacobian Theta Functions and Differential Equations
  {{< /bibitem >}}
  {{< bibitem key="CDFKSW22" author="Edgar Costa, Ravi Donepudi, Ravi Fernando, Valentijn Karemaker, Caleb Springer, and Mckenzie West" type="incollection" booktitle="Arithmetic Geometry, Number Theory, and Computation" series="Simons Symposia" publisher="Springer" pages="259--276" year="2022" doi="10.1007/978-3-030-80914-0_7" eprint="2002.02067" >}}
  Restrictions on Weil polynomials of Jacobians of hyperelliptic curves
  {{< /bibitem >}}
{{< /bibliography >}}
