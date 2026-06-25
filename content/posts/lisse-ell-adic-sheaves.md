---
title: Riemann–Hilbert Correspondence and Lisse $\ell$-adic Sheaves 
date: 2026-06-19 00:00:01 -0400
slug: 06d0bcc
aliases:
  - /posts/lisse-ell-adic-sheaves/
categories: [expositions]
tags: [math, algebraic-geometry, algebra]
---

{{< pullquote author="Georg Cantor" >}}
In mathematics the art of proposing a question must be held of higher value than solving it.
{{< /pullquote >}}

For today’s post, I want to write about the correspondence between “local systems” i.e. locally constant sheaves, and representations of the fundamental group i.e. monodromy representations, in both the topological and arithmetic contexts. The most important context for me is the $\ell$-adic étale version but we start first with the topological version for the sake of motivation. 

## Monodromy Representations

Let $X$ be a topological space with base point $x\in X$ admitting a universal cover. Let $k$ be one of the fields $\mathbb R$ or $\mathbb C$.  

{{< definition >}}
A *local system* of $k$-vector spaces on $X$ is a locally constant sheaf $\mathcal L$ of $k$-vector spaces on $X$. 
{{< /definition >}}

We will use $\mathrm{LocSys}_k(X)$ to denote the category of local systems of $k$-vector spaces on $X$. 
{{< theorem id="thm-loc">}}
There is an equivalence of categories 

$$\mathrm{LocSys}_k(X)\cong \mathrm{Rep}_k(\pi_1(X,x))$$


{{< /theorem >}}

{{< proof >}}
Given a local system $\mathcal L$. Given a loop $\gamma:I\rightarrow X$, choose a sequence $\{U_i\}$ of small open sets that cover it where on each $U_i$, we have $\mathcal L|_{U_i}$ constant, therefore we can construct isomorphisms $\mathcal L_{a_i}\cong \mathcal L_{a_{i+1}}$ for a sequence of points $\{a_i\}$ which eventually loops back to the base point. Composing them we get an automorphism of $\mathcal L_{x}\cong k^n$. One can show that this construction only depends on the homotopy class of $\gamma$. Thus, we constructed  $\rho:\pi_1(X,x)\rightarrow \mathrm{Aut}(\mathcal L_x)$. Conversely, given $\rho:\pi_1(X,x)\rightarrow\mathrm{Aut}_k(V)$ for some finite dimensional $k$-vector space $V$. Choose universal cover $\widetilde{X}$ and form the vector bundle 
$$E_\rho=(\widetilde{X}\times V)/\pi_1(X,x)\longrightarrow X$$
where one mods out by diagonal action by $\pi_1$. We then can define the local system $$\mathcal L(U)=\{\mathrm{locally\ constant\ sections\ }U\rightarrow E_\rho\}$$
i.e. sections that locally of the form $U\xrightarrow{u\mapsto (u,v)}E_\rho|_{U}=U\times V$ for some $v$. It is not hard to check that this is a local system which is mutually inverse to the previous construction. 
{{< /proof >}}

Let $X$ be a connected scheme with $\ell$ an invertible prime, and choose a geometric point $\overline{x}\rightarrow X$. 

{{< definition >}}
For $n\geq 1$, a *lisse* $\mathbb Z/\ell^n\mathbb Z$-*sheaf* on $X_{\mathrm{\acute et}}$ is a etale locally constant sheaf of $\mathbb Z/\ell^n\mathbb Z$-modules with finite stalks. It has *rank* $r$ if locally it is isomorphic to $(\mathbb Z/\ell^n\mathbb Z)^r$. 

A *lisse* $\mathbb Z_\ell$-*sheaf* is an inverse system $\mathcal F=(\mathcal F_n,\varphi_{n+1,n})_{n\geq 1}$, where each $\mathcal F_n$ is a lisse $\mathbb Z/\ell^n\mathbb Z$-sheaf and each transition map $\varphi_{n+1,n}:\mathcal F_{n+1}\rightarrow\mathcal F_n$ is $\mathbb Z/\ell^{n+1}\mathbb Z$-linear via the quotient map $\mathbb Z/\ell^{n+1}\mathbb Z\rightarrow\mathbb Z/\ell^n\mathbb Z$. We require that the induced map
$$
\mathcal F_{n+1}\otimes_{\mathbb Z/\ell^{n+1}\mathbb Z}\mathbb Z/\ell^n\mathbb Z\longrightarrow \mathcal F_n,\qquad s\otimes a\longmapsto a\varphi_{n+1,n}(s)
$$
be an isomorphism for all $n$. Equivalently, $\varphi_{n+1,n}$ identifies the quotient $\mathcal F_{n+1}/\ell^n\mathcal F_{n+1}$ with $\mathcal F_n$.

A *lisse* $\mathbb Q_\ell$-*sheaf* is obtained by tensoring a lisse $\mathbb Z_\ell$-sheaf with $\mathbb Q_\ell$, i.e. it is of the form $\mathcal F\otimes_{\mathbb Z_\ell}\mathbb Q_\ell$ for a lisse $\mathbb Z_\ell$-sheaf $\mathcal F$.

For $n\geq 1$, a $\mathbb Z/\ell^n\mathbb Z$-sheaf $\mathcal F$ is *constructible* if there exists a finite stratification $X=\coprod_i X_i$ by locally closed subsets such that $\mathcal F|_{X_i}$ is lisse for every $i$. A constructible $\mathbb Z_\ell$-sheaf is a compatible inverse system $(\mathcal F_n)_{n\geq 1}$ as above, with each $\mathcal F_n$ constructible. A constructible $\mathbb Q_\ell$-sheaf is obtained from a constructible $\mathbb Z_\ell$-sheaf by tensoring with $\mathbb Q_\ell$.
{{< /definition >}}

Recall that the étale fundamental group is an inverse limit
$$
\pi_1^{\mathrm{\acute et}}(X,\overline{x})=\varprojlim_{(Y,\overline{y})}\mathrm{Aut}_X(Y),
$$
where the limit runs over connected finite etale covers $Y\rightarrow X$ equipped with a geometric point $\overline{y}\rightarrow Y$ above $\overline{x}$. Recall that the *fiber functor* at $\overline{x}$ sends a lisse sheaf $\mathcal F$ on $X_{\mathrm{\acute et}}$ to its stalk $\mathcal F_{\overline{x}}$ at the geometric point $\overline{x}$. We state an analogue of {{< refer id="thm-loc" >}}. 

{{< notation >}}
For $\Lambda=\mathbb Z/\ell^n\mathbb Z,\mathbb Z_\ell,$ or $\mathbb Q_\ell$, write $\mathrm{Lisse}_\Lambda(X)$ for the category of lisse $\Lambda$-sheaves on $X_{\mathrm{\acute et}}$, and write $\mathrm{Rep}^{\mathrm{cont}}_\Lambda(\pi_1^{\mathrm{\acute et}}(X,\overline{x}))$ for the category of continuous representations of $\pi_1^{\mathrm{\acute et}}(X,\overline{x})$ on finite $\Lambda$-modules.
{{< /notation >}}

{{< definition >}}
For a lisse $\mathbb Z/\ell^n\mathbb Z$-sheaf $\mathcal F$, its *étalé space* $\mathrm{Et}(\mathcal F)$ is the finite étale $X$-scheme representing $\mathcal F$ as a sheaf of sets. 
{{< /definition >}}
Étale locally on $X$, the sheaf $\mathcal F$ is isomorphic to the constant sheaf associated to a finite $\mathbb Z/\ell^n\mathbb Z$-module $M$, which is represented by the finite etale cover $\coprod_{m\in M}U\rightarrow U$. Since being finite etale descends along etale covers, the representing scheme  is finite etale.

{{< theorem >}}
For $\Lambda=\mathbb Z/\ell^n\mathbb Z,\mathbb Z_\ell,$ or $\mathbb Q_\ell$, the fiber functor $\mathcal F\mapsto\mathcal F_{\overline{x}}$ gives an equivalence
$$
\mathrm{Lisse}_\Lambda(X)\cong \mathrm{Rep}^{\mathrm{cont}}_\Lambda(\pi_1^{\mathrm{\acute et}}(X,\overline{x})).
$$
{{< /theorem >}}
{{< proof >}}
We will show it for $\Lambda=\mathbb Z/\ell^n\mathbb Z$, and the rest can be obtained from taking inverse limits and tensoring. Let $\mathcal F$ be a lisse $\mathbb Z/\ell^n\mathbb Z$-sheaf, and let $\mathrm{Et}(\mathcal F)\rightarrow X$ be its etale space. The fiber $\mathcal F_{\overline{x}}$ is the fiber of this finite etale cover above $\overline{x}$, so the functorial action of $\pi_1^{\mathrm{\acute et}}(X,\overline{x})$ on fibers gives a continuous representation
$$
\rho_{\mathcal F}:\pi_1^{\mathrm{\acute et}}(X,\overline{x})\rightarrow \mathrm{Aut}_{\mathbb Z/\ell^n\mathbb Z}(\mathcal F_{\overline{x}}).
$$
Conversely, suppose $\rho:\pi_1^{\mathrm{\acute et}}(X,\overline{x})\rightarrow\mathrm{Aut}_{\mathbb Z/\ell^n\mathbb Z}(M)$ is a continuous representation on a finite $\mathbb Z/\ell^n\mathbb Z$-module $M$.  For each etale $U\rightarrow X$, define the (etale) sheaf of $\mathbb Z/\ell^n$-modules associated to $\rho$
$$\mathcal F_{\rho}(U)=\mathrm{Hom}_{\pi_1^{\mathrm{\acute et}}(X,\overline{x})\textrm{-Set}}(U_{\overline{x}},M)$$
with $\mathbb Z/\ell^n$-module structure inherited from $M$ pointwise. 
We claim that $\mathcal F_\rho$ is lisse. Since $M$ is finite and $\rho$ is continuous, $\ker(\rho)\subseteq \pi_1^{\mathrm{\acute et}}(X,\overline{x})$ is open. Choose a connected finite etale cover $Y\rightarrow X$ corresponding to an open subgroup $H\subseteq\ker(\rho)$, and choose a geometric point $\overline{y}\rightarrow Y$ above $\overline{x}$. Then
$
\pi_1^{\mathrm{\acute et}}(Y,\overline{y})=H
$
acts trivially on $M$. Hence the pullback of $\mathcal F_\rho$ to $Y_{\mathrm{\acute et}}$ is the sheaf associated to the trivial representation of $\pi_1^{\mathrm{\acute et}}(Y,\overline{y})$ on $M$, which is the constant sheaf $\underline{M}_Y$. Thus $\mathcal F_\rho$ becomes constant after the finite etale cover $Y\rightarrow X$. Since $M$ is finite, $\mathcal F_\rho$ is locally constant with finite stalks, hence lisse.

The two constructions are mutually inverse. Starting with $\rho$ on $M$, the stalk of $\mathcal F_\rho$ at $\overline{x}$ is
$$
(\mathcal F_\rho)_{\overline{x}}\cong M,
$$
because the geometric fiber of the object $\overline{x}\rightarrow X$ is the one-point $\pi_1^{\mathrm{\acute et}}(X,\overline{x})$-set, so evaluating an equivariant map on that point recovers an element of $M$. Under this identification, the monodromy action on $(\mathcal F_\rho)_{\overline{x}}$ is exactly the original action $\rho$, since the action on the fiber is the action used in the equivariance condition defining $\mathcal F_\rho$.
Conversely, start with a lisse sheaf $\mathcal F$ and let $M=\mathcal F_{\overline{x}}$ with its monodromy representation $\rho_{\mathcal F}$. For every etale $U\rightarrow X$, a section $s\in\mathcal F(U)$ determines a map on geometric fibers
$$
U_{\overline{x}}\longrightarrow M
$$
sending a geometric point $\overline{u}\rightarrow U$ above $\overline{x}$ to the value of $s$ in the stalk $\mathcal F_{\overline{u}}\cong \mathcal F_{\overline{x}}$, where the identification is given by monodromy. This map is $\pi_1^{\mathrm{\acute et}}(X,\overline{x})$-equivariant. Hence we get a natural map
$$
\mathcal F(U)\longrightarrow \mathrm{Hom}_{\pi_1^{\mathrm{\acute et}}(X,\overline{x})\textrm{-Set}}(U_{\overline{x}},\mathcal F_{\overline{x}}).
$$
After pulling back to an etale cover on which $\mathcal F$ is constant, this map is visibly an isomorphism: both sides are locally constant functions to the same finite module $M$. Therefore it is an isomorphism after etale descent, and hence for all $U$. Thus the sheaf reconstructed from $\rho_{\mathcal F}$ is canonically isomorphic to $\mathcal F$.
{{< /proof >}}

For a cartesian square of schemes

{{< quiver
    src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJYXlxccHJpbWUiXSxbMSwwLCJYIl0sWzAsMSwiU15cXHByaW1lIl0sWzEsMSwiUyJdLFswLDEsImdeXFxwcmltZSJdLFswLDIsImZeXFxwcmltZSIsMl0sWzEsMywiZiJdLFsyLDMsImciXV0=&embed"
    width="125px"
    height="125px"
    scale="1.75"
    radius="0px"
>}}

if $\mathcal F$ is a constructible $\Lambda$-sheaf on $X$ and $\Lambda=\mathbb Z/\ell^n\mathbb Z,\mathbb Z_\ell,$ or $\mathbb Q_\ell$, there is a map for each $i\ge 0$, 
$$
\varepsilon:g^*\mathrm R^if_*\mathcal F\longrightarrow \mathrm R^if'_*g'^*\mathcal F.
$$
This map is constructed as follows. For a morphism of schemes $h:A\rightarrow B$, the inverse image functor $h^*$ on sheaves is exact, while $h_*$ is left exact. The usual adjunction $h^*\dashv h_*$ therefore derives to an adjunction
$$
h^*:\mathrm D^+(B,\Lambda)\rightleftarrows \mathrm D^+(A,\Lambda):\mathrm Rh_*.
$$
Thus, for $h=g'$ we have $g'^*\dashv \mathrm Rg'_*$, and its unit gives a natural map
$$
\mathcal F\longrightarrow \mathrm Rg'_*g'^*\mathcal F.
$$
Applying $\mathrm Rf_*$ gives
$$
\mathrm Rf_*\mathcal F\longrightarrow \mathrm Rf_*\mathrm Rg'_*g'^*\mathcal F.
$$
Since the square is cartesian, we have $f\circ g'=g\circ f'$, hence $\mathrm Rf_*\mathrm Rg'_*=\mathrm Rg_*\mathrm Rf'_*$. Therefore the previous arrow becomes
$$
\mathrm Rf_*\mathcal F\longrightarrow \mathrm Rg_*\mathrm Rf'_*g'^*\mathcal F.
$$
Now use the adjunction $g^*\dashv \mathrm Rg_*$. Under the bijection
$$
\mathrm{Hom}(\mathrm Rf_*\mathcal F,\mathrm Rg_*\mathrm Rf'_*g'^*\mathcal F)
\cong
\mathrm{Hom}(g^*\mathrm Rf_*\mathcal F,\mathrm Rf'_*g'^*\mathcal F),
$$
the preceding morphism corresponds to
$$
g^*\mathrm Rf_*\mathcal F\longrightarrow \mathrm Rf'_*g'^*\mathcal F.
$$
Since $g^*$ is exact on sheaves, it commutes with cohomology sheaves:
$$
\mathcal H^i(g^*\mathrm Rf_*\mathcal F)\cong g^*\mathcal H^i(\mathrm Rf_*\mathcal F)=g^*\mathrm R^if_*\mathcal F.
$$
Thus taking the $i$-th cohomology sheaf of the derived morphism above gives
$$
\varepsilon:g^*\mathrm R^if_*\mathcal F\longrightarrow \mathrm R^if'_*g'^*\mathcal F.
$$

{{< theorem note="Base Change Theorems">}}
Let $\Lambda=\mathbb Z/\ell^n\mathbb Z,\mathbb Z_\ell,$ or $\mathbb Q_\ell$. For each cartesian square as above, the map
$$
\varepsilon:g^*\mathrm R^if_*\mathcal F\longrightarrow \mathrm R^if'_*g'^*\mathcal F.
$$
is an isomorphism for all $i\ge 0$ if one of the following is true

1. (Proper Base Change Theorem) $f:X\rightarrow S$ is proper and $\mathcal F$ is a constructible $\Lambda$-sheaf on $X$

2. (Smooth Base Change Theorem) $g:S'\rightarrow S$ is smooth and $\mathcal F$ is a constructible $\Lambda$-sheaf on $X$

{{< /theorem >}}
{{< proof >}}
See {{< cite key="Mil80" note="Chapter VI, Theorems 2.1 and 4.1" >}}.
{{< /proof >}}

{{< corollary id="cor-smooth-proper-lisse" >}}
Let $f:X\rightarrow S$ be smooth and proper, and let $\mathcal F$ be a lisse $\Lambda$-sheaf on $X$. Then $\mathrm R^if_*\mathcal F$ is a lisse $\Lambda$-sheaf on $S$ for every $i\ge 0$. Moreover, for every geometric point $\overline{s}\rightarrow S$, proper base change identifies the stalk with the cohomology of the geometric fiber:
$$
(\mathrm R^if_*\mathcal F)_{\overline{s}}\cong \mathrm H^i(X_{\overline{s}},\mathcal F|_{X_{\overline{s}}}).
$$
{{< /corollary >}}
{{< proof >}}
Apply proper base change to the pullback square obtained from a geometric point $g:\overline{s}\rightarrow S$. Then $X'=X_{\overline{s}}$, and the base change isomorphism gives
$$
g^*\mathrm R^if_*\mathcal F\cong \mathrm R^if'_*g'^*\mathcal F.
$$
This is an isomorphism of sheaves on $\overline{s}_{\mathrm{\acute et}}$. Since $\overline{s}$ is the spectrum of a separably closed field, a sheaf on $\overline{s}_{\mathrm{\acute et}}$ is determined by its value at $\overline{s}$. Evaluating the left side gives
$$
(g^*\mathrm R^if_*\mathcal F)(\overline{s})=(\mathrm R^if_*\mathcal F)_{\overline{s}},
$$
by the definition of stalk at a geometric point. Evaluating the right side gives
$$
(\mathrm R^if'_*g'^*\mathcal F)(\overline{s})=\mathrm H^i(X_{\overline{s}},\mathcal F|_{X_{\overline{s}}}),
$$
because $f':X_{\overline{s}}\rightarrow \overline{s}$ is the structure map. This proves the stalk formula, and properness gives finiteness of these cohomology groups. To see local constancy, apply smooth base change to etale morphisms $g:S'\rightarrow S$. Since etale morphisms are smooth, the theorem says that the formation of $\mathrm R^if_*\mathcal F$ is unchanged after passing to such an etale cover. Applying this on an etale cover where the smooth family and the lisse sheaf are locally trivial shows that $\mathrm R^if_*\mathcal F$ is locally constant with finite stalks, hence lisse.
{{< /proof >}}

{{< example >}}
Let $f:X\rightarrow S$ be smooth and proper, and take the constant lisse sheaf $\Lambda_X$ on $X$. By {{< refer id="cor-smooth-proper-lisse" >}}, the sheaves
$$
\mathrm R^if_*\Lambda_X
$$
are lisse $\Lambda$-sheaves on $S$. Their stalk at a geometric point $\overline{s}\rightarrow S$ is
$$
(\mathrm R^if_*\Lambda_X)_{\overline{s}}\cong \mathrm H^i(X_{\overline{s}},\Lambda).
$$
Thus the etale cohomology groups of the geometric fibers form a local system on $S$. Equivalently, after choosing a geometric point $\overline{s}\rightarrow S$, this lisse sheaf gives a continuous monodromy representation
$$
\rho_i:\pi_1^{\mathrm{\acute et}}(S,\overline{s})\rightarrow \mathrm{Aut}_{\Lambda}\!\left(\mathrm H^i(X_{\overline{s}},\Lambda)\right).
$$
The Tate module of an abelian variety is a special case. If $A$ is an abelian variety over a field $k$ with separable closure $\overline{k}$, then
$$
T_{\ell}(A)=\varprojlim_n A[\ell^n](\overline{k})
$$
is a continuous representation of $\mathrm{Gal}(\overline{k}/k)=\pi_1^{\mathrm{\acute et}}(\mathrm{Spec}(k),\mathrm{Spec}(\overline{k}))$, and it is naturally dual to $\mathrm H^1(A_{\overline{k}},\mathbb Z_\ell)$.
{{< /example >}}

{{< example >}}
Let $k$ be a field with $n$ invertible, and $\Lambda$ be $\mathbb Z/\ell^m\mathbb Z$, $\mathbb Z_\ell$, or $\mathbb Q_\ell$ with $\ell\nmid n$. Consider the finite etale Kummer cover
$$
[n]:\mathbb G_{m,k}\rightarrow \mathbb G_{m,k},\qquad t\longmapsto t^n.
$$
Its Galois group is $\mu_n$, acting on the source by multiplication: $\zeta\in\mu_n$ sends $t$ to $\zeta t$. The sheaf $[n]_*\Lambda$ is locally free of rank $n$; for an etale $U\rightarrow\mathbb G_{m,k}$, its sections are locally constant $\Lambda$-valued functions on the pullback cover
$$
U\times_{\mathbb G_m,[n]}\mathbb G_m.
$$
The action of $\mu_n$ on the cover gives an action of $\mu_n$ on this sheaf. If $\chi:\mu_n\rightarrow\Lambda^\times$ is a character, the *Kummer sheaf* $\mathcal K_{\chi}$ is the subsheaf of $[n]_*\Lambda$ on which every deck transformation $\zeta\in\mu_n$ acts by the scalar $\chi(\zeta)$:
$$
\mathcal K_{\chi}(U)=\{s\in ([n]_*\Lambda)(U):\zeta\cdot s=\chi(\zeta)s\text{ for all }\zeta\in\mu_n\}.
$$
Equivalently, choose a geometric point $\overline{x}\rightarrow\mathbb G_{m,k}$ and choose a point $\overline{y}$ of the geometric fiber $[n]^{-1}(\overline{x})$. The etale fundamental group acts on the fiber of every finite etale cover, so each $\gamma\in\pi_1^{\mathrm{\acute et}}(\mathbb G_{m,k},\overline{x})$ sends $\overline{y}$ to another point $\gamma\overline{y}$ of $[n]^{-1}(\overline{x})$. Since this fiber is a $\mu_n$-torsor, there is a unique element $\zeta(\gamma)\in\mu_n$ such that
$$
\gamma\overline{y}=\zeta(\gamma)\overline{y}.
$$
This gives a quotient map
$$
\pi_1^{\mathrm{\acute et}}(\mathbb G_{m,k},\overline{x})\twoheadrightarrow \mu_n,\qquad \gamma\longmapsto \zeta(\gamma).
$$
The representation attached to $\mathcal K_{\chi}$ is the rank one representation on the free $\Lambda$-module $\Lambda$ given by
$$
\rho_{\chi}(\gamma)(a)=\chi(\zeta(\gamma))a,\qquad a\in\Lambda.
$$
The lisse sheaf attached to this representation is precisely $\mathcal K_{\chi}$.
{{< /example >}}

{{< example >}}
Assume $\mathrm{char}(k)=p>0$ and let $\ell\ne p$. Let $\Lambda$ be $\mathbb Z/\ell^m\mathbb Z$, $\mathbb Z_\ell$, or $\mathbb Q_\ell$, and choose a nontrivial additive character $\psi:\mathbb F_p\rightarrow\Lambda^\times$. The Artin-Schreier map
$$
\mathrm{AS}:\mathbb A^1_k\rightarrow\mathbb A^1_k,\qquad t\longmapsto t^p-t
$$
is a finite etale cover. Its deck group is the additive group $\mathbb F_p$, acting by translations $t\mapsto t+a$. The *Artin-Schreier sheaf* $\mathcal{AS}_{\psi}$ is the subsheaf of $\mathrm{AS}_*\Lambda$ on which $a\in\mathbb F_p$ acts by the scalar $\psi(a)$:
$$
\mathcal{AS}_{\psi}(U)=\{s\in(\mathrm{AS}_*\Lambda)(U):a\cdot s=\psi(a)s\text{ for all }a\in\mathbb F_p\}.
$$
Equivalently, after choosing a geometric point $\overline{x}\rightarrow\mathbb A^1_k$, the cover gives a quotient
$$
\pi_1^{\mathrm{\acute et}}(\mathbb A^1_k,\overline{x})\twoheadrightarrow\mathbb F_p,
$$
and $\mathcal{AS}_{\psi}$ corresponds to the rank one representation obtained by composing this quotient with $\psi:\mathbb F_p\rightarrow\Lambda^\times$.
{{< /example >}}

{{< example >}}
The Kummer and Artin-Schreier examples are instances of the same descent construction. Let $\pi:Y\rightarrow X$ be a finite etale right $G$-torsor, where $G$ is a finite group, and let $\rho:G\rightarrow\mathrm{Aut}_{\Lambda}(M)$ be a representation on a finite free $\Lambda$-module $M$. The constant sheaf $\underline{M}_Y$ on $Y$ descends to a lisse sheaf $\mathcal L_{\rho}$ on $X$ by using the torsor isomorphism
$$
Y\times_XY\cong Y\times G
$$
and the representation $\rho$ to identify the two pullbacks of $\underline{M}_Y$ to $Y\times_XY$. Equivalently,
$$
\mathcal L_{\rho}(U)=\{s\in \mathrm{Map}_{\mathrm{loc.const.}}(U\times_XY,M):s(yg)=\rho(g)^{-1}s(y)\text{ for all }g\in G\}.
$$
After choosing a geometric point $\overline{x}\rightarrow X$ and a point $\overline{y}\in Y_{\overline{x}}$, the torsor gives a quotient
$$
\pi_1^{\mathrm{\acute et}}(X,\overline{x})\twoheadrightarrow G,
$$
and $\mathcal L_{\rho}$ is the lisse sheaf corresponding to the representation
$$
\pi_1^{\mathrm{\acute et}}(X,\overline{x})\twoheadrightarrow G\xrightarrow{\rho}\mathrm{Aut}_{\Lambda}(M).
$$
Kummer sheaves correspond to $G=\mu_n$ and a multiplicative character $\chi$, while Artin-Schreier sheaves correspond to $G=\mathbb F_p$ and an additive character $\psi$. 
{{< /example >}}

## Riemann–Hilbert Correspondence

Let $X$ be a smooth complex variety. Let $\mathcal E$ be a coherent sheaf on $X$. Recall a connection on $\mathcal E$ is a morphism $\nabla:\mathcal E\rightarrow \mathcal E\otimes_{\mathcal O_X}\Omega^1_X$ such that for open $U\subseteq X$ and sections $s\in\mathcal E(U)$ and $f\in\mathcal O_X(U)$, the Leibniz formula $\nabla_U(fs)=s\otimes \mathrm df+f\nabla_U(s)$ is satisfied. For each derivation $D\in \mathcal{Der}_{\mathbb C}(\mathcal O_X,\mathcal O_X)\cong \mathcal{Hom}_{\mathcal O_X}(\Omega_X^1,\mathcal O_X)$, define the covariant derivative in the direction $D$ by
$$
\nabla_D:\mathcal E\xrightarrow{\nabla}\mathcal E\otimes_{\mathcal O_X}\Omega^1_X\xrightarrow{\mathrm{id}_{\mathcal E}\otimes D}\mathcal E\otimes_{\mathcal O_X}\mathcal O_X\cong \mathcal E.
$$
Then $\nabla_D(fs)=D(f)s+f\nabla_D(s)$. For each connection $\nabla$, we can extend it to 
$$\mathcal E\xrightarrow{\nabla}\mathcal E\otimes_{\mathcal O_X}\Omega^1_X\xrightarrow{\nabla_1}\mathcal E\otimes_{\mathcal O_X}\Omega^2_X\xrightarrow{\nabla_2}\mathcal E\otimes_{\mathcal O_X}\Omega^{3}_X\xrightarrow{\nabla_3}\cdots$$

where $\nabla_i:\mathcal E\otimes_{\mathcal O_X}\Omega^i_X\rightarrow \mathcal E\otimes_{\mathcal O_X}\Omega^{i+1}_X$ is defined by 

$$\nabla_i(s\otimes\omega)=\nabla(s)\wedge\omega+s\otimes\mathrm d\omega$$

Here $\nabla(s)\wedge\omega$ means the image of $\nabla(s)\otimes\omega$ under the natural map
$$
(\mathcal E\otimes_{\mathcal O_X}\Omega^1_X)\otimes_{\mathcal O_X}\Omega^i_X\cong\mathcal E\otimes_{\mathcal O_X}(\Omega^1_X\otimes_{\mathcal O_X}\Omega^i_X)\xrightarrow{\mathrm{id}_{\mathcal E}\otimes\wedge}\mathcal E\otimes_{\mathcal O_X}\Omega^{i+1}_X.
$$

Recall that $\nabla$ is said to be integrable or flat if the curvature $\nabla^2=\nabla_1\circ \nabla=0$. Let $\mathrm{Vect}^\nabla(X)$ be the category of vector bundles on $X$ equipped with a flat connection. Recall a section $s\in \mathcal E$ is called horizontal if $\nabla(s)=0$. 

{{< theorem note="Riemann–Hilbert">}}
There is an equivalence of categories
$$\mathrm{LocSys}_{\mathbb C}(X)\cong \mathrm{Vect}^\nabla(X)$$
{{< /theorem >}}
{{< proof >}}
For a local system $\mathcal L$, send it to the vector bundle $\mathcal L\otimes_{\mathbb C_X}\mathcal O_X$, equipped with the flat connection 
$$\mathcal L\otimes_{\mathbb C_X}\mathcal O_X\xrightarrow{1\otimes \mathrm d}\mathcal L\otimes_{\mathbb C_X} \Omega^1_X$$
where $\mathrm d:\mathcal O_X\rightarrow\Omega^1_X$ is the differential. Conversely, send a pair $(\mathcal E,\nabla)$ to the sheaf of horizontal sections $\mathrm{Ker}(\nabla)$. We claim this is a local system. For a small polydisc $U\subseteq X$ trivializing $\mathcal E$ with $\mathcal E|_U=(\mathcal O_X|_U)^r$, the connection has form $\nabla|_U=\mathrm d+A$ where $A\in \mathrm M_{r}(\Omega^1_X)$. For a local section $s:U\rightarrow \mathbb C^r$, the equation $\nabla(s)=0$ determines a system of first order linear PDEs.
$$\frac{\partial s}{\partial z_k}+A_k s=0 \tag{1}$$
for $k=1,\dots,n$, where $\{z_k\}$ is a local frame and $A=\sum_{k}A_k\mathrm dz_k$. From flatness $\nabla^2=0$, we get $\mathrm{d}A+A\wedge A=0$, i.e.
$$\frac{\partial A_j}{\partial z_i}-\frac{\partial A_i}{\partial z_j}+\left[A_i, A_j\right]=0$$
This is equivalent to $D_i=\partial_i+A_i$ commuting $D_iD_j=D_jD_i$. Holomorphic Frobenius theorem implies that the PDE in equation $(1)$ is locally solvable with any initial value, meaning for each $v\in \mathcal E_x$, there exists unique holomorphic local section $s_v:U\rightarrow\mathbb C^r$ satisfying equation (1) with $s_v(x)=v$. It is not hard to check that the two constructions are mutually inverse. 
{{< /proof >}}

So far, our construction only works for non-singular connections. For $X=\mathbb A^1$ and $U=\{x\ne 0\}\subseteq X$, the connection $\nabla=\mathrm d+\lambda\frac{\mathrm dx}{x}$ has a singularity at $0$, so our version does not apply. To fix it we need $\mathcal D$-modules. 

## $\mathcal D$-modules and Perverse Sheaves

Let $X$ be a complex manifold or smooth complex algebraic variety. 

{{< definition >}}
The sheaf of differential operators $\mathcal D_X$ is a sheaf of noncommutative rings on $X$, defined as the direct limit 
$$\mathcal D_X=\varinjlim \mathcal D_X^{\le n}=\varinjlim \mathcal{Hom}_{\mathcal O_X}(\Delta^{-1}(\mathcal O_{X\times X}/\mathcal I_{\Delta}^{n+1}), \mathcal O_X)$$
where $\Delta:X\rightarrow X\times X$ is the diagonal and $\mathcal I_\Delta$ is the ideal sheaf of its image. 
{{< /definition >}}

Concretely, $\mathcal D_X^{\le 0}=\mathcal O_X$ and for $n\ge 1$, $\mathcal D^{\le n}_X$ is the sheaf of $\mathbb C$-linear endomorphisms $P:\mathcal O_X\rightarrow\mathcal O_X$ such that for $U\subseteq X$ and for $f\in \mathcal O_X(U)$, the commutator $[P_U,m_f]=P_U\circ m_f-m_f\circ P_U\in\mathcal D_X^{n-1}$. And $\mathcal D_X(U)=\bigcup_n \mathcal D_X^{\le n}(U)$. For a local $U\subseteq X$ with local coordinates $z_1,\dots,z_n$, write $\partial_i=\frac{\partial }{\partial z_i}$, then we can think of $\mathcal D_X$ as

$$\mathcal D_X|_U=\mathcal O_U\langle \partial_1,\dots,\partial_n\rangle/([\partial_i,\partial_j], [\partial_i,z_j]-\delta_{ij})$$

locally at $U$. 


{{< definition >}}A $\mathcal D_X$-module is a sheaf of $\mathbb C$-vector spaces $\mathcal M$ on $X$, together with a morphism of sheaf of $\mathbb C$-algebras
$$\mathcal D_X\rightarrow\mathcal{End}_{\mathbb C}(\mathcal M)$$
which locally at $U$ is $\mathcal D_X(U)\rightarrow\mathrm{End}_{\mathbb C}(\mathcal M(U))$ the scalar action of a module over the $\mathbb C$-algebra $\mathcal D_X(U)$. 
{{< /definition >}}

{{< example >}}
One can encode differential equations in a $\mathcal D_X$-module. Let $X=\mathbb A^1$ and $\mathcal D_X(X)=\mathbb C\langle x,\partial_x\rangle/(\partial_xx-x\partial_x-1)$, then a DE like $\frac{\partial f}{\partial x}=\lambda f$ can be encoded as $(\partial_x -\lambda)f=0$. Hence $\mathcal M=\mathcal D_X/(\mathcal D_X (\partial_x -\lambda))$ encodes this DE. 
{{< /example >}}

We call a $\mathcal D_X$-module *holonomic* if it represents a “finite dimensional” system of DEs. We will not define this rigorously. 

<!-- The graded object of the order filtration $$\mathrm{gr}\,\mathcal D_X=\bigoplus_{i}\mathrm{gr}^i(\mathcal D_X^{\le\bullet})=\bigoplus_{i}\mathcal D_X^{i+1}/\mathcal D_X^{i}\cong \pi_*\mathcal O_{T^*X}$$
where $\pi:T^*X\rightarrow X$ is the cotangent bundle. We call the support

$$\mathrm{Char}(\mathcal M)=\mathrm{Supp}_{T^*M}(\mathrm{gr}\,\mathcal M)$$

the *characteristic variety*. -->

{{< definition >}}
A *perverse sheaf* on $X$ is an element $K\in\mathrm{D}^b_{c}(X,\mathbb C)$ in the bounded derived category of constructible sheaves of $\mathbb C$-vector spaces, such that $$\mathrm{dim}\,\overline{\mathrm{Supp}_X(\mathcal H^i(K))}, \mathrm{dim}\,\overline{\mathrm{Supp}_X(\mathcal H^i(DK))}\le -i$$ for $i\in\mathbb Z$, where $\mathrm{dim}(\emptyset)=-\infty$, and $DK:=\mathrm R\mathcal{Hom}_{\mathbb C_X}(K,\mathbb C_X[2d])$ is the Verdier dual.
{{< /definition >}}

{{< remark >}}
$\mathcal D$-modules generalize vector bundles with flat connections: if $\mathcal E$ is a vector bundle with flat connection $\nabla$, then functions act through the $\mathcal O_X$-module structure and derivations act by $D\cdot s=\nabla_D(s)$. The flatness condition is exactly what makes this action compatible with the commutation relations in $\mathcal D_X$. Conversely, a left $\mathcal D_X$-module whose underlying $\mathcal O_X$-module is locally free of finite rank is the same thing as a vector bundle with flat connection. Perverse sheaves generalize local systems in the corresponding sheaf-theoretic direction: if $X$ is smooth of dimension $d$ and $\mathcal L$ is a local system on $X$, then $\mathcal L[d]$ is a perverse sheaf. Unlike local systems, perverse sheaves can also encode singular behavior along closed subsets, so they are the right replacement for local systems when singularities are allowed.

{{< /remark >}}

{{< notation >}}
Write $\mathrm{Perv}(X,\mathbb C)$ for the category of perverse sheaves of $\mathbb C$-vector spaces on $X$. Write $\mathrm{Mod}_{\mathrm{rh}}(\mathcal D_X)$ for the category of regular holonomic left $\mathcal D_X$-modules.
{{< /notation >}}

{{< theorem note="Generalized Riemann–Hilbert">}}
Let $X$ be a complex manifold of dimension $d$. Define the perverse-normalized de Rham functor on the derived category of left $\mathcal D_X$-modules by
$$
\mathrm{DR}_X:\mathrm D^b(\mathcal D_X)\rightarrow \mathrm D^b(X,\mathbb C),
\qquad
\mathcal M\mapsto
\left[
\mathcal M\rightarrow \mathcal M\otimes_{\mathcal O_X}\Omega^1_X\rightarrow\cdots\rightarrow \mathcal M\otimes_{\mathcal O_X}\Omega^d_X
\right][d]
$$
and define the perverse-normalized solution functor by
$$
\mathrm{Sol}_X:\mathrm D^b(\mathcal D_X)^{\mathrm{op}}\rightarrow \mathrm D^b(X,\mathbb C),
\qquad
\mathcal M\mapsto \mathrm R\mathcal{Hom}_{\mathcal D_X}(\mathcal M,\mathcal O_X)[d].
$$
These functors restrict to equivalences
$$
\mathrm{DR}_X:\mathrm D^b_{\mathrm{rh}}(\mathcal D_X)\xrightarrow{\sim}\mathrm D^b_c(X,\mathbb C)
$$
and
$$
\mathrm{Sol}_X:\mathrm D^b_{\mathrm{rh}}(\mathcal D_X)^{\mathrm{op}}\xrightarrow{\sim}\mathrm D^b_c(X,\mathbb C),
$$
where $\mathrm D^b_{\mathrm{rh}}(\mathcal D_X)$ is the full subcategory of complexes with regular holonomic cohomology sheaves, and $\mathrm D^b_c(X,\mathbb C)$ is the constructible derived category. In particular, on the abelian category of regular holonomic $\mathcal D_X$-modules, these give
$$
\mathrm{DR}_X:\mathrm{Mod}_{\mathrm{rh}}(\mathcal D_X)\xrightarrow{\sim}\mathrm{Perv}(X,\mathbb C),
\qquad
\mathrm{Sol}_X:\mathrm{Mod}_{\mathrm{rh}}(\mathcal D_X)^{\mathrm{op}}\xrightarrow{\sim}\mathrm{Perv}(X,\mathbb C).
$$
{{< /theorem >}}
{{< proof >}}
See {{< cite "HTT08" >}}. 
{{< /proof >}}

{{< definition >}}
Let $X$ be a scheme of finite type over a field $k$ of characteristic $p>0$, and let $\ell\ne p$. A *perverse $\mathbb Q_\ell$-sheaf* on $X$ is an object $K\in \mathrm D^b_c(X,\mathbb Q_\ell)$ in the bounded constructible derived category of $\ell$-adic sheaves on $X_{\mathrm{\acute et}}$ such that
$$
\dim \overline{\mathrm{Supp}_X(\mathcal H^i(K))}\le -i
\qquad\textrm{and}\qquad
\dim \overline{\mathrm{Supp}_X(\mathcal H^i(D_XK))}\le -i
$$
for all $i\in\mathbb Z$, where $\dim(\emptyset)=-\infty$. Here
$$
D_XK:=\mathrm R\mathcal{Hom}_{\mathbb Q_{\ell,X}}(K,a^!\mathbb Q_\ell)
$$
is Verdier dual for $a:X\rightarrow\mathrm{Spec}(k)$. If $X$ is smooth of pure dimension $d$, then $a^!\mathbb Q_\ell\cong \mathbb Q_\ell(d)[2d]$.
{{< /definition >}}



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
