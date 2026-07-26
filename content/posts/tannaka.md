---
title: Tannakian Category and Tannaka–Krein  Duality
date: 2026-07-17 00:00:01 -0400
slug: f2c37cb
aliases:
  - /posts/tannakian-category-and-tannaka-krein-duality/
categories: [expositions]
tags: [math, category-theory, algebraic-geometry]
---

{{< pullquote author="Mark Krein">}}
My lawful wife is mathematics; my mistress is mechanics.
{{< /pullquote >}}

Tannakian duality is a way to recover a group scheme from its category of representations. More generally, it says that a suitable tensor category equipped with a fiber functor behaves like the representation category of an affine group scheme. This post is an exposition for these ideas.

<!--more-->

## Tannakian Category

Let $k$ be a field.

{{< definition >}}
A _tensor category_ is a category $\mathcal C$ equipped with a bifunctor

$$
\otimes:\mathcal C\times\mathcal C\longrightarrow\mathcal C,
$$

and natural isomorphisms

$$
\alpha_{X,Y,Z}:X\otimes(Y\otimes Z)\xrightarrow{\sim}(X\otimes Y)\otimes Z,
\qquad
\sigma_{X,Y}:X\otimes Y\xrightarrow{\sim}Y\otimes X,
$$

satisfying the pentagon and hexagon coherence axioms, together with an
_identity object_: a pair $(\mathbf 1,u)$ consisting of an object
$\mathbf 1$ and an isomorphism
$u:\mathbf 1\xrightarrow{\sim}\mathbf 1\otimes\mathbf 1$ for which the
functor $X\mapsto\mathbf 1\otimes X$ is an equivalence of categories.
We use $\mathbf 1$ for this identity object throughout.
{{< /definition >}}

{{< definition >}}
An object $L$ of a tensor category is _invertible_ if the functor

$$
X\longmapsto L\otimes X
$$

is an equivalence of categories. Equivalently, there is an object $L^{-1}$
and an isomorphism

$$
L\otimes L^{-1}\xrightarrow{\sim}\mathbf 1.
$$

Such a pair $(L^{-1},\delta)$, with
$\delta:L\otimes L^{-1}\xrightarrow{\sim}\mathbf 1$, is called an
_inverse_ of $L$.
{{< /definition >}}

{{< definition >}}
Let $X,Y$ be objects of a tensor category. An _internal Hom_
$\underline{\operatorname{Hom}}(X,Y)$ exists if the functor

$$
T\longmapsto\operatorname{Hom}_{\mathcal C}(T\otimes X,Y)
\colon\mathcal C^{\mathrm{op}}\longrightarrow\mathbf{Set}
$$

is representable. Thus it comes with natural bijections

$$
\operatorname{Hom}_{\mathcal C}(T,\underline{\operatorname{Hom}}(X,Y))
\cong\operatorname{Hom}_{\mathcal C}(T\otimes X,Y).
$$

The _evaluation map_

$$
\operatorname{ev}_{X,Y}:\underline{\operatorname{Hom}}(X,Y)\otimes X\longrightarrow Y
$$

is the morphism corresponding to
$\operatorname{id}_{\underline{\operatorname{Hom}}(X,Y)}$ under these bijections. When internal Homs exist for all pairs of objects, there is a canonical
_composition map_

$$
\operatorname{comp}_{X,Y,Z}:
\underline{\operatorname{Hom}}(X,Y)\otimes
\underline{\operatorname{Hom}}(Y,Z)
\longrightarrow
\underline{\operatorname{Hom}}(X,Z).
$$

It is the morphism represented by the composite

$$
\begin{aligned}
\underline{\operatorname{Hom}}(X,Y)\otimes
\underline{\operatorname{Hom}}(Y,Z)\otimes X
&\xrightarrow{\sim}
\underline{\operatorname{Hom}}(Y,Z)\otimes
\underline{\operatorname{Hom}}(X,Y)\otimes X \\
&\xrightarrow{\operatorname{id}\otimes\operatorname{ev}_{X,Y}}
\underline{\operatorname{Hom}}(Y,Z)\otimes Y
\xrightarrow{\operatorname{ev}_{Y,Z}} Z,
\end{aligned}
$$

where the first isomorphism is built from the symmetry and associativity
constraints. Thus $\operatorname{comp}_{X,Y,Z}$ sends a pair of internal maps
$X\to Y$ and $Y\to Z$ to their composite $X\to Z$.
{{< /definition >}}

{{< definition >}}
Let $\mathcal C$ be a $k$-linear abelian category. Tensoring by a vector space
is the bifunctor

$$
\operatorname{Vec}_k\times\mathcal C\longrightarrow\mathcal C,
\qquad
(V,X)\longmapsto V\otimes X,
$$

characterized, up to a unique natural isomorphism, by natural isomorphisms of
$k$-vector spaces

$$
\operatorname{Hom}_{\mathcal C}(T,V\otimes X)
\cong V\otimes_k\operatorname{Hom}_{\mathcal C}(T,X).
$$

These are functorial in $T$, $V$, and $X$.
{{< /definition >}}

{{< definition >}}
Let $\mathcal C$ be a $k$-linear abelian category, $V$ a finite-dimensional
$k$-vector space, and $X$ an object of $\mathcal C$. Set
$\underline{\operatorname{Hom}}(V,X):=V^\vee\otimes X$. If
$W\subseteq V$ is a subspace and $Y\subseteq X$ is a subobject, their
_transporter_ is the subobject

$$
(Y:W):=\operatorname{Ker}\!\left(
\underline{\operatorname{Hom}}(V,X)
\longrightarrow
\underline{\operatorname{Hom}}(W,X/Y)
\right).
$$

It is the object of maps from $V$ to $X$ that carry $W$ into $Y$.
{{< /definition >}}

{{< definition >}}
Assume that internal Homs exist. The _dual_ of an object $X$ is

$$
X^\vee:=\underline{\operatorname{Hom}}(X,\mathbf 1).
$$

Its evaluation map is

$$
\operatorname{ev}_X:X^\vee\otimes X\longrightarrow\mathbf 1.
$$

The _biduality map_ $\iota_X:X\to X^{\vee\vee}$ is the morphism adjoint to
the composite

$$
X\otimes X^\vee
\xrightarrow{\sigma_{X,X^\vee}}
X^\vee\otimes X
\xrightarrow{\operatorname{ev}_X}
\mathbf 1.
$$

We call $X$ _reflexive_ if $\iota_X$ is an isomorphism.
{{< /definition >}}

{{< definition >}}
A tensor category is _rigid_ if:

1. the internal Hom $\underline{\operatorname{Hom}}(X,Y)$ exists for every
   pair of objects $X,Y$;
2. for all objects $X_1,X_2,Y_1,Y_2$, the natural morphism induced by
   evaluation,

   $$
   \underline{\operatorname{Hom}}(X_1,Y_1)\otimes
   \underline{\operatorname{Hom}}(X_2,Y_2)
   \longrightarrow
   \underline{\operatorname{Hom}}(X_1\otimes X_2,Y_1\otimes Y_2),
   $$

   is an isomorphism; and
3. every object is reflexive.
{{< /definition >}}

{{< definition >}}
Let $\mathcal C$ be a rigid tensor category and let $X$ be an object of
$\mathcal C$. The _trace morphism_

$$
\operatorname{Tr}_X:
\operatorname{End}_{\mathcal C}(X)
\longrightarrow
\operatorname{End}_{\mathcal C}(\mathbf 1)
$$

is obtained, using
$\operatorname{End}_{\mathcal C}(X)\cong
\operatorname{Hom}_{\mathcal C}(\mathbf 1,\underline{\operatorname{Hom}}(X,X))$,
by applying $\operatorname{Hom}_{\mathcal C}(\mathbf 1,-)$ to the canonical
composite

$$
\underline{\operatorname{Hom}}(X,X)
\xrightarrow{\sim}
X^\vee\otimes X
\xrightarrow{\operatorname{ev}_X}
\mathbf 1.
$$

The _rank_ of $X$ is

$$
\operatorname{rank}(X):=\operatorname{Tr}_X(\operatorname{id}_X)
\in\operatorname{End}_{\mathcal C}(\mathbf 1).
$$
{{< /definition >}}

{{< definition >}}
Let $(\mathcal C,\otimes)$ and $(\mathcal C',\otimes')$ be tensor
categories. A _tensor functor_ $(F,c):\mathcal C\to\mathcal C'$ consists of a
functor $F:\mathcal C\to\mathcal C'$ and functorial isomorphisms

$$
c_{X,Y}:F(X)\otimes'F(Y)\xrightarrow{\sim}F(X\otimes Y).
$$

They are required to be compatible with associativity and commutativity: for
all objects $X,Y,Z$, the two composites from
$F(X)\otimes'(F(Y)\otimes'F(Z))$ to $F((X\otimes Y)\otimes Z)$ obtained
from the associativity constraints, the maps $c$, and $F(\alpha_{X,Y,Z})$
agree, and

$$
F(\sigma_{X,Y})\circ c_{X,Y}
=c_{Y,X}\circ\sigma'_{F(X),F(Y)}.
$$

Finally, if $(\mathbf 1,u)$ is an identity object of $\mathcal C$, then
$(F(\mathbf 1),F(u))$ is an identity object of $\mathcal C'$.
{{< /definition >}}

{{< definition >}}
An _additive (resp. abelian) rigid tensor category_ is a rigid tensor category
whose underlying category is additive (resp. abelian) and whose tensor product
is biadditive.
{{< /definition >}}

{{< definition >}}
A _neutral Tannakian category over $k$_ is a pair $(\mathcal C,\omega)$,
where $\mathcal C$ is an abelian rigid tensor category such that

$$
\operatorname{End}_{\mathcal C}(\mathbf 1)=k
$$

and $\omega$ is an exact faithful $k$-linear tensor functor

$$
\omega:\mathcal C\longrightarrow\operatorname{Vec}_k.
$$

Such a functor $\omega$ is called a _fibre functor_.
{{< /definition >}}


## Tannakian Duality

{{< definition >}}
Let $\omega:\mathcal C\to\operatorname{Vec}_k$ be a fibre functor. For a
$k$-algebra $R$, write

$$
\omega_R(X):=\omega(X)\otimes_k R.
$$

The _tensor automorphism functor_ of $\omega$ is the group-valued functor

$$
\operatorname{Aut}^{\otimes}(\omega):R\longmapsto
\operatorname{Aut}^{\otimes}(\omega)(R),
$$

where $\operatorname{Aut}^{\otimes}(\omega)(R)$ consists of families of
$R$-linear automorphisms

$$
\lambda_X:\omega_R(X)\xrightarrow{\sim}\omega_R(X),
$$

natural in $X$, and satisfying

$$
\lambda_Y\circ\omega_R(f)=\omega_R(f)\circ\lambda_X
\qquad\text{for every }f:X\to Y,
$$

as well as

$$
\lambda_{X\otimes Y}=\lambda_X\otimes\lambda_Y,
\qquad
\lambda_{\mathbf 1}=\operatorname{id}_R,
$$

under the tensor identifications supplied by $\omega$.
{{< /definition >}}

{{< lemma id="lem-tensor-stabilizer" note="Tensor-stabilizer lemma" >}}
Let $H$ be a closed subgroup scheme of $\operatorname{GL}(V)$. Let
$m,n\geq 0$, and write

$$
T^{m,n}(V):=V^{\otimes m}\otimes(V^\vee)^{\otimes n}.
$$

For a $k$-algebra $R$, set

$$
T^{m,n}_R(V):=T^{m,n}(V)\otimes_kR.
$$

If $t\in T^{m,n}(V)$, write $t_R:=t\otimes1\in T^{m,n}_R(V)$. An element
$g\in\operatorname{GL}(V)(R)=\operatorname{GL}(V\otimes_kR)$ induces an
$R$-linear automorphism

$$
g^{m,n}:T^{m,n}_R(V)\xrightarrow{\sim}T^{m,n}_R(V)
$$

by acting on each copy of $V\otimes_kR$ and by the dual action on each copy of
$V^\vee\otimes_kR$. Then

$$
H(R)=\left\{g\in\operatorname{GL}(V)(R)\ \middle|\ 
\forall m,n\in\mathbb Z_{\geq0},\ \forall t\in T^{m,n}(V)^H,\quad
g^{m,n}(t_R)=t_R\right\}.
$$

{{< /lemma >}}

{{< proposition >}}
Let $G$ be an affine group scheme over $k$, and let

$$
\omega_G:\operatorname{Rep}_k(G)\longrightarrow\operatorname{Vec}_k
$$

be the forgetful functor. Then the natural map

$$
G\longrightarrow\operatorname{Aut}^{\otimes}(\omega_G),
$$

which sends $g\in G(R)$ to its action on every representation after extension
of scalars to a $k$-algebra $R$, is an isomorphism.
{{< /proposition >}}

{{< proof >}}
Fix a finite-dimensional representation $X$ of $G$. Let $\mathcal C_X$ be the
strictly full subcategory of $\operatorname{Rep}_k(G)$ whose objects are
subquotients of finite direct sums of tensor expressions in $X$ and $X^\vee$.
For every $k$-algebra $R$, evaluation on $X$ is the homomorphism

$$
\operatorname{Aut}^{\otimes}(\omega_G|_{\mathcal C_X})(R)
\longrightarrow\operatorname{GL}(\omega_G(X)\otimes_k R),
\qquad
\lambda\longmapsto\lambda_X.
$$

It is injective. Indeed, tensor compatibility determines $\lambda$ on tensor
powers of $X$ once $\lambda_X$ is known, and compatibility with the evaluation
map determines $\lambda_{X^\vee}$. Naturality with respect to the inclusions
and projections of finite direct sums then determines $\lambda$ on every
finite direct sum of such tensor expressions. Finally, if $V$ is a subobject
or quotient of one of these objects, naturality with respect to the inclusion
or quotient map determines $\lambda_V$. Thus $\lambda_X$ determines the whole
family $\lambda$. Let $G_X$ be the scheme-theoretic image of

$$
G\longrightarrow\operatorname{GL}(X).
$$

Every object $V$ of $\mathcal C_X$ is constructed from $X$ by tensor products,
duals, finite direct sums, subobjects, and quotients. Consequently, the action
of $G$ on $V$ factors through $G_X$; write

$$
\rho_V:G_X\longrightarrow\operatorname{GL}(V)
$$

for the resulting representation. For $g\in G_X(R)$, the map

$$
\rho_V(g):V\otimes_kR\xrightarrow{\sim}V\otimes_kR
$$

is $R$-linear. If $f:V\to W$ is a morphism in $\mathcal C_X$, then

$$
(f\otimes\operatorname{id}_R)\circ\rho_V(g)
=\rho_W(g)\circ(f\otimes\operatorname{id}_R).
$$

Moreover,

$$
\rho_{V\otimes W}(g)=\rho_V(g)\otimes\rho_W(g),
\qquad
\rho_{\mathbf 1}(g)=\operatorname{id}_R.
$$

Set $\omega_X:=\omega_G|_{\mathcal C_X}$. Thus $\omega_X$ forgets the group
action but is defined only on objects of $\mathcal C_X$, and

$$
(\omega_X)_R(V)=V\otimes_kR.
$$

By definition, an element of $\operatorname{Aut}^{\otimes}(\omega_X)(R)$ is
a family $\lambda_V:(\omega_X)_R(V)\to(\omega_X)_R(V)$ that is natural in
$V$, respects tensor products, and is the identity on $\mathbf 1$. Taking
$\lambda_V=\rho_V(g)$, the preceding three displayed formulas verify exactly
these conditions. Hence $g$ defines an element of
$\operatorname{Aut}^{\otimes}(\omega_X)(R)$, giving the first inclusion

$$
G_X\subseteq\operatorname{Aut}^{\otimes}(\omega_G|_{\mathcal C_X})
\subseteq\operatorname{GL}(X).
$$

We now prove the reverse inclusion. Let

$$
\lambda\in\operatorname{Aut}^{\otimes}(\omega_X)(R).
$$

Because evaluation on $X$ is injective, it is enough to prove that
$\lambda_X$ lies in $G_X(R)\subseteq\operatorname{GL}(X\otimes_kR)$. To show that $\lambda_X\in G_X(R)$, let $V\in\mathcal C_X$ and let $t\in V$
be fixed by $G_X$. Then the map

$$
k\longrightarrow V,\qquad a\longmapsto at,
$$

is $G_X$-equivariant. After extension of scalars to $R$, naturality gives

$$
\lambda_V\circ(t\otimes-)
=(t\otimes-)\circ\lambda_{\mathbf 1}.
$$

Here $(t\otimes-):R\to V\otimes_kR$ sends $a$ to $t\otimes a$.
Because $\lambda_{\mathbf 1}=\operatorname{id}_R$, evaluating this equality
at $1\in R$ gives $\lambda_V(t_R)=t_R$. In particular, $\lambda_X$ fixes every tensor

$$
t\in\left(X^{\otimes m}\otimes(X^\vee)^{\otimes n}\right)^{G_X}.
$$

By {{< refer id="lem-tensor-stabilizer" >}}, an element of
$\operatorname{GL}(X\otimes_kR)$ with this property belongs to $G_X(R)$.
Therefore $\lambda_X\in G_X(R)$, as required. This proves

$$
G_X\xrightarrow{\sim}\operatorname{Aut}^{\otimes}(\omega_G|_{\mathcal C_X}).
$$

If $X'=X\oplus Y$, then $\mathcal C_X\subseteq\mathcal C_{X'}$, and these
isomorphisms commute with the restriction maps. Finally, finite-dimensional
representations recover an affine group scheme from its finite-dimensional
image groups:

$$
G\cong\varprojlim_XG_X.
$$

Likewise, a tensor automorphism of $\omega_G$ is uniquely the compatible
family of its restrictions to the $\mathcal C_X$, so

$$
\operatorname{Aut}^{\otimes}(\omega_G)
\cong\varprojlim_X\operatorname{Aut}^{\otimes}
(\omega_G|_{\mathcal C_X}).
$$

Passing to the inverse limit of the preceding isomorphisms gives the result.
{{< /proof >}}

{{< theorem id="thm-tannaka-reconstruction" note="Tannaka reconstruction" >}}
Let $(\mathcal C,\omega)$ be a neutral Tannakian category over $k$. Then
$\operatorname{Aut}^{\otimes}(\omega)$ is
represented by an affine group scheme $G$ over $k$, and the tensor functor

$$
\widetilde\omega:\mathcal C\longrightarrow\operatorname{Rep}_k(G),
\qquad
X\longmapsto\bigl(\omega(X),\rho_X\bigr),
$$

is an equivalence of tensor categories. For every $k$-algebra $R$ and
$g\in G(R)=\operatorname{Aut}^{\otimes}(\omega_R)$, the action
$\rho_X(g)$ is the $R$-linear map

$$
\rho_X(g)=g_X:\omega(X)\otimes_kR\longrightarrow\omega(X)\otimes_kR.
$$
{{< /theorem >}}

We begin the proof with the following stabilizer lemma.

{{< lemma id="lem-tannakian-stabilizer" >}}
Let $\mathcal C$ be a $k$-linear abelian category and let
$\omega:\mathcal C\to\operatorname{Vec}_k$ be exact and faithful. For an
object $X$ of $\mathcal C$, recall that internal Hom from a vector space is
defined by tensoring:

$$
\underline{\operatorname{Hom}}(\omega(X),X)
=\omega(X)^\vee\otimes X.
$$

Because $\omega$ is $k$-linear, it commutes with tensoring by a
finite-dimensional vector space. Hence there are canonical identifications

$$
\omega\bigl(\underline{\operatorname{Hom}}(\omega(X),X)\bigr)
\cong\omega(X)^\vee\otimes_k\omega(X)
\cong\operatorname{End}_k(\omega(X)),
$$

where $f\otimes v$ corresponds to the endomorphism $w\mapsto f(w)v$.
The following subobjects of

$$
\underline{\operatorname{Hom}}(\omega(X),X)
$$

are equal. Here, for $n\geq0$,

$$
\Delta_n:
\underline{\operatorname{Hom}}(\omega(X),X)
\longrightarrow
\underline{\operatorname{Hom}}(\omega(X)^{\oplus n},X^{\oplus n})
$$

is the map sending $f$ to its $n$-fold direct sum
$f^{\oplus n}$. The two subobjects are:

1. the largest subobject $P$ such that, for every $n\geq0$ and every
   subobject $Y\subseteq X^{\oplus n}$, its diagonal image is contained in

$$
\Delta_n(P)\subseteq\bigl(Y:\omega(Y)\bigr);
$$

2. the smallest subobject $P'$ for which

$$
\operatorname{id}_{\omega(X)}\in
\omega(P')\subseteq\operatorname{End}_k(\omega(X)).
$$
{{< /lemma >}}

{{< proof >}}
First, $\omega(Z)=0$ implies $Z=0$: faithfulness sends
$\omega(\operatorname{id}_Z)=0$ back to $\operatorname{id}_Z=0$. Hence, if
$U\subsetneq V$, exactness gives a strict inclusion
$\omega(U)\subsetneq\omega(V)$. Every object of $\mathcal C$ is therefore
Artinian and Noetherian, because strict chains of its subobjects give strict
chains of subspaces of a finite-dimensional vector space. Thus both the
largest subobject in (1) and the smallest subobject in (2) exist.

Let $P$ denote the subobject in (1). Since $\omega$ is exact, it carries a
transporter to a transporter:

$$
\omega\bigl(Y:W\bigr)=\bigl(\omega(Y):W\bigr).
$$

Consequently, $\omega(P)$ is the largest subalgebra of
$\operatorname{End}_k(\omega(X))$ that stabilizes $\omega(Y)$ for every
$Y\subseteq X^{\oplus n}$; this means that

$$
a^{\oplus n}\bigl(\omega(Y)\bigr)\subseteq\omega(Y)
\qquad
\text{for every }a\in\omega(P).
$$

In particular,
$\operatorname{id}_{\omega(X)}\in\omega(P)$, so the minimality of $P'$
gives $P'\subseteq P$.

Conversely, let $Q$ be any subobject as in (2). For every finite-dimensional
vector space $V$, there is a natural map

$$
\underline{\operatorname{Hom}}(\omega(X),X)
\longrightarrow
\underline{\operatorname{Hom}}(\omega(V\otimes X),V\otimes X)
$$

After applying $\omega$, this becomes the linear map

$$
\operatorname{End}_k\bigl(\omega(X)\bigr)
\longrightarrow\operatorname{End}_k\bigl(V\otimes_k\omega(X)\bigr),
\qquad
a\longmapsto\operatorname{id}_V\otimes a,
$$

where $(\operatorname{id}_V\otimes a)(v\otimes x)=v\otimes a(x)$. 
Choose an isomorphism $V\cong k^n$. The condition in (1) for the subobject
$Y\subseteq V\otimes X\cong X^{\oplus n}$ is precisely

$$
\Delta_n(P)\subseteq\bigl(Y:\omega(Y)\bigr).
$$

By the definition of the transporter, this says that the diagonal maps in
$\Delta_n(P)$ carry $\omega(Y)$ into $Y$. After applying $\omega$, it says
that for every $a\in\omega(P)$,

$$
(\operatorname{id}_V\otimes a)\bigl(\omega(Y)\bigr)
\subseteq\omega(Y).
$$

Thus $\omega(P)$ stabilizes $\omega(Y)$ for every subobject
$Y\subseteq V\otimes X$. Take
$V=\omega(X)^\vee$ and $Y=Q\subseteq
\omega(X)^\vee\otimes X$. Under the identification
$\omega(X)^\vee\otimes\omega(X)\cong\operatorname{End}_k(\omega(X))$,
the map $\operatorname{id}_V\otimes a$ is left composition by $a$. Thus,
applying the preceding stabilization condition to $\omega(Q)$ says that

$$
a\circ f\in\omega(Q)
\qquad
\text{for every }a\in\omega(P)\text{ and }f\in\omega(Q).
$$

Since
$\operatorname{id}_{\omega(X)}\in\omega(Q)$, every
$a\in\omega(P)$ satisfies

$$
a=a\circ\operatorname{id}_{\omega(X)}\in\omega(Q).
$$

Thus $\omega(P)\subseteq\omega(Q)$, and exactness and faithfulness imply
$P\subseteq Q$. This holds for every $Q$ as in (2), so $P\subseteq P'$.
Together with $P'\subseteq P$, this proves $P=P'$.
{{< /proof >}}

{{< lemma id="lem-tannakian-modules" >}}
Let $(\mathcal C,\omega)$ be as in {{< refer id="lem-tannakian-stabilizer" >}},
let $X\in\mathcal C$, and let $P_X$ be the common subobject in that lemma.
Set

$$
A_X:=\omega(P_X)\subseteq\operatorname{End}_k(\omega(X)),
$$

and let $\langle X\rangle$ be the strictly full subcategory of $\mathcal C$
whose objects are isomorphic to subquotients of $X^{\oplus n}$ for some
$n\geq0$. Then $A_X$ acts naturally on $\omega(Y)$ for every
$Y\in\langle X\rangle$. This action induces an equivalence

$$
\overline\omega_X:\langle X\rangle\longrightarrow
\operatorname{Mod}^{\mathrm{fd}}_{A_X},
\qquad
Y\longmapsto\bigl(\omega(Y),\rho_Y\bigr),
$$

where $\operatorname{Mod}^{\mathrm{fd}}_{A_X}$ is the category of
left $A_X$-modules that are finite-dimensional as $k$-vector spaces, such
that the composite with the forgetful functor is
$\omega|_{\langle X\rangle}$. Here $\rho_Y$ is the natural action of $A_X$
on $\omega(Y)$, and $\overline\omega_X$ sends a morphism $f:Y\to Z$ to
$\omega(f)$.
{{< /lemma >}}

{{< proof >}}
{{< refer id="lem-tannakian-stabilizer" >}} says that $A_X$ is the
largest subalgebra of $\operatorname{End}_k(\omega(X))$ that stabilizes
$\omega(Y)$ for every $Y\subseteq X^{\oplus n}$. It therefore acts on every
$\omega(Y)$ with $Y\in\langle X\rangle$.

The right action on $P_X$ is given by precomposition. It preserves $P_X$
because the composite of two maps that preserve every relevant subobject
again preserves every relevant subobject. Thus, for a left $A_X$-module $M$
that is finite-dimensional as a $k$-vector space, the object

$$
P_X\otimes_{A_X}M
$$

is defined in $\mathcal C$. It belongs to $\langle X\rangle$, since $P_X$ is
a subobject of $\omega(X)^\vee\otimes X$ and $\langle X\rangle$ is closed
under finite sums, subobjects, and quotients. Exactness of $\omega$ gives

$$
\omega\bigl(P_X\otimes_{A_X}M\bigr)
\cong A_X\otimes_{A_X}M
\cong M.
$$

Thus $\overline\omega_X$ is essentially surjective. If
$u:M\to N$ is an $A_X$-linear map, then

$$
\operatorname{id}_{P_X}\otimes_{A_X}u:
P_X\otimes_{A_X}M\longrightarrow P_X\otimes_{A_X}N
$$

is a morphism in $\langle X\rangle$. Applying $\omega$ identifies it with

$$
\operatorname{id}_{A_X}\otimes_{A_X}u=u,
$$

so every $A_X$-linear map lifts; hence $\overline\omega_X$ is full. It is
faithful because $\omega$ is. Therefore it is an equivalence.
{{< /proof >}}

{{< lemma id="lem-tannakian-endomorphisms" >}}
With the notation of {{< refer id="lem-tannakian-modules" >}}, the natural
homomorphism

$$
A_X\longrightarrow\operatorname{End}\bigl(\omega|_{\langle X\rangle}\bigr)
$$

is an isomorphism.
{{< /lemma >}}

{{< proof >}}
Let $a\in A_X$. For every subobject
$Y\subseteq X^{\oplus n}$, the defining property of $A_X$ gives

$$
a^{\oplus n}\bigl(\omega(Y)\bigr)\subseteq\omega(Y).
$$

Thus $a^{\oplus n}$ restricts to $\omega(Y)$ and descends to the quotient
of $\omega(Y)$ by the image of any subobject. It consequently defines an
endomorphism of $\omega(Z)$ for every subquotient $Z$ of $X^{\oplus n}$. If
$f:Z\to Z'$ is a morphism in $\langle X\rangle$, its graph is a subobject of
$Z\oplus Z'$ and is preserved by these endomorphisms. Hence

$$
a_{Z'}\circ\omega(f)=\omega(f)\circ a_Z,
$$

so the resulting family is a natural endomorphism of
$\omega|_{\langle X\rangle}$.

Conversely, let $\eta$ be a natural endomorphism of
$\omega|_{\langle X\rangle}$ and put $a:=\eta_X$. Naturality with the
standard inclusions and projections of $X^{\oplus n}$ gives

$$
\eta_{X^{\oplus n}}=a^{\oplus n}.
$$

For a subobject $i:Y\hookrightarrow X^{\oplus n}$, naturality of $\eta$
gives

$$
a^{\oplus n}\circ\omega(i)=\omega(i)\circ\eta_Y.
$$

Therefore $a^{\oplus n}$ preserves $\omega(Y)$ for every
$Y\subseteq X^{\oplus n}$, and
{{< refer id="lem-tannakian-stabilizer" >}} implies that $a\in A_X$. The
preceding construction then recovers $\eta$ from $a$, because every object of
$\langle X\rangle$ is a subquotient of some $X^{\oplus n}$. This proves

$$
A_X=\operatorname{End}\bigl(\omega|_{\langle X\rangle}\bigr).
$$
{{< /proof >}}

{{< proof >}}
We now prove {{< refer id="thm-tannaka-reconstruction" >}}. For every
$X\in\mathcal C$, let $A_X$ be the algebra of
{{< refer id="lem-tannakian-modules" >}} and put

$$
B_X:=A_X^\vee.
$$

The equivalence in that lemma identifies finite-dimensional $A_X$-modules
with finite-dimensional $B_X$-comodules. If $X$ is a subquotient of a finite
direct sum of copies of $X'$, restriction gives a morphism $A_{X'}\to A_X$;
dually, it gives a coalgebra morphism $B_X\to B_{X'}$. Define

$$
B:=\varinjlim_X B_X.
$$

The objects $X\oplus X'$ show that this system is filtered. Every
finite-dimensional $B$-comodule factors through some $B_X$, so the
equivalences of {{< refer id="lem-tannakian-modules" >}} glue to an
equivalence

$$
\mathcal C\xrightarrow{\sim}\operatorname{Comod}^{\mathrm{fd}}_B
$$

that carries $\omega$ to the forgetful functor.

We now use the tensor structure. Let $V$ and $W$ be finite-dimensional left
$B$-comodules, with coactions

$$
\delta_V:V\longrightarrow B\otimes_kV,
\qquad
\delta_W:W\longrightarrow B\otimes_kW.
$$

A multiplication $m:B\otimes_kB\to B$ that is a coalgebra map gives a
coaction on the ordinary tensor product $V\otimes_kW$: it is the composite

$$
\begin{aligned}
V\otimes_kW
&\xrightarrow{\ \delta_V\otimes\delta_W\ }
B\otimes_kV\otimes_kB\otimes_kW \\
&\xrightarrow{\ \operatorname{id}_B\otimes\tau_{V,B}\otimes
\operatorname{id}_W\ }
B\otimes_kB\otimes_kV\otimes_kW \\
&\xrightarrow{\ m\otimes\operatorname{id}_{V\otimes W}\ }
B\otimes_kV\otimes_kW,
\end{aligned}
$$

where

$$
\tau_{U,V}:U\otimes_kV\longrightarrow V\otimes_kU,
\qquad
u\otimes v\longmapsto v\otimes u,
$$

is the symmetry of finite-dimensional vector spaces.

The condition that $m$ be a coalgebra map is exactly what makes this a
coaction. Conversely, every tensor product on
$\operatorname{Comod}^{\mathrm{fd}}_B$ whose underlying vector space is
the ordinary tensor product arises in this way from a unique coalgebra map

$$
m:B\otimes_kB\longrightarrow B.
$$

Transport the tensor product of $\mathcal C$ across the preceding
equivalence. Its underlying vector space is the ordinary tensor product,
because $\omega$ is a tensor functor, so it gives such a multiplication $m$.
The associativity and symmetry constraints make $m$ associative and
commutative, while the identity object gives a unit $k\to B$. Thus $B$ is a
commutative bialgebra and

$$
M:=\operatorname{Spec}(B)
$$

is an affine monoid scheme.

For every $k$-algebra $R$ and every $k$-algebra map $s:B\to R$, the coaction
of a $B$-comodule $V$ defines an $R$-linear endomorphism of $V\otimes_kR$.
It is the composite

$$
\begin{aligned}
V\otimes_kR
&\xrightarrow{\ \delta_V\otimes\operatorname{id}_R\ }
B\otimes_kV\otimes_kR \\
&\xrightarrow{\ \operatorname{id}_B\otimes\tau_{V,R}\ }
B\otimes_kR\otimes_kV \\
&\xrightarrow{\ s\otimes\operatorname{id}_R\otimes\operatorname{id}_V\ }
R\otimes_kR\otimes_kV \\
&\xrightarrow{\ \mu_R\otimes\operatorname{id}_V\ }
R\otimes_kV
\xrightarrow{\ \tau_{R,V}\ }V\otimes_kR,
\end{aligned}
$$

where $\mu_R$ is multiplication in $R$.

This construction is natural in $V$. The displayed formula for the coaction
on $V\otimes W$ shows that these endomorphisms respect tensor products
exactly when

$$
s\circ m=\mu_R\circ(s\otimes s);
$$

they preserve the identity object exactly when $s$ preserves the unit. Thus
the preceding construction identifies the
tensor-compatible endomorphisms of $\omega_R$ with the $k$-algebra maps
$B\to R$. Write $\operatorname{End}^{\otimes}(\omega)(R)$ for these
endomorphisms, without requiring them to be invertible. Hence

$$
\operatorname{End}^{\otimes}(\omega)(R)
=\operatorname{Hom}_{k\text{-}\mathrm{alg}}(B,R)
=M(R).
$$

Rigidity makes every tensor-compatible endomorphism invertible: compatibility
with the evaluation and coevaluation maps of $X$ and $X^\vee$ gives an inverse
to its component on $X$. Therefore

$$
\operatorname{End}^{\otimes}(\omega)
=\operatorname{Aut}^{\otimes}(\omega).
$$

Thus $M$ is an affine group scheme; write it as $G$. Finally,
finite-dimensional $B$-comodules are precisely finite-dimensional
representations of $G$. Under the equivalence above, the coaction on
$\omega(X)$ gives the representation $\rho_X$, so the equivalence is exactly
$\widetilde\omega$ from the statement.
{{< /proof >}}



## References

{{< bibliography >}}
  {{< bibitem key="DM82" author="Pierre Deligne and James S. Milne" type="incollection" booktitle="Hodge Cycles, Motives, and Shimura Varieties" series="Lecture Notes in Mathematics" volume="900" publisher="Springer-Verlag" year="1982" >}}
  Tannakian Categories
  {{< /bibitem >}}
  {{< bibitem key="Mil17" author="James S. Milne" type="book" publisher="Cambridge University Press" year="2017" >}}
  Algebraic Groups: The Theory of Group Schemes of Finite Type over a Field
  {{< /bibitem >}}
  {{< bibitem key="Saa72" author="N. Saavedra Rivano" type="book" series="Lecture Notes in Mathematics" volume="265" publisher="Springer-Verlag" year="1972" >}}
  Catégories Tannakiennes
  {{< /bibitem >}}
  {{< bibitem key="Lan98" author="N. P. Landsman" type="article" year="1998" >}}
  Tannaka-Krein Duality for Compact Groups
  {{< /bibitem >}}
{{< /bibliography >}}
