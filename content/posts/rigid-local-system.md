---
title: Rigid Local Systems
date: 2026-09-03 00:00:01 -0400
slug: 07bd743
aliases:
  - /posts/rigid-local-systems/
categories: [expositions]
tags: [math, algebraic-geometry, number-theory]
---

{{< pullquote author="Alexander Grothendieck" >}}
The art of doing mathematics consists in finding that special case which contains all the germs of generality.
{{< /pullquote >}}


I am reading Katz’s *Rigid Local Systems* {{< cite key="Kat96" >}}. Here are my notes. One starts complex analytically with $U=\mathbb P^1-\{m\ \textrm{pts}\}$. Riemann introduced *local systems* on $U$, i.e. a locally constant sheaf of complex vector spaces, to study the solutions to $n$-th order linear differential equations with singularities at $\mathbb P^1-U$ {{< cite key="Rie57" >}}. If there are no “accessory parameters”, we say this local system is *rigid*, i.e. determiend by its local monodromies. 


## Generalities Concerning Rigid Local Systems over $\mathbb C$

Let $X$ be a smooth projective connected curve over $\mathbb C$ of genus $g$. Let $S\subseteq X(\mathbb C)$ a nonempty finite subset, and set $m=\#S$ and $U:=X-S$ the open complement. Henceforth, we write $X$ and $U$ for their analytifications $X^{\mathrm{an}}$ and $U^{\mathrm{an}}$; all local systems and cohomology are taken in the classical topology. For each base point $u$ on the complex manifold $U$, there is an equivalence of symmetric monoidal categories induced by the fibre functor $\mathcal F\mapsto \mathcal F_u$ where $\mathcal F$ is a local system on $U$.

$$\mathrm{LocSys}_{\mathbb C}(U)\simeq^{\otimes} \mathrm{Rep}_{\mathbb C}(\pi_1(U,u))$$

All vector spaces and representations here are assumed finite dimensional. We say the local system is *irreducible* if the corresponding representation is. For every singular point $s\in S$, the punctured neighborhood $$D^*(s)=U\cap (\textrm{small disc around }s\textrm{ in }X)$$

has fundamental group $I(s)=\pi_1(D^*(s),u_s)=\mathbb Z$ called the *local inertia group*, where $u_s$ is a chosen base point. 

{{< definition >}}
We say a local system $\mathcal F$ on $U$ is *physically rigid* if for every local system $\mathcal G$ on $U$ with isomorphic local monodromy, i.e. there is isomorphism of local systems 
$\mathcal F|_{D^*(s)}\cong \mathcal G|_{D^*(s)}$
for each $s\in S$, there is $\mathcal F\cong \mathcal G$. 
{{< /definition >}}

However, physically rigid is a notion that only works for genus $0$. If $g(X)\ge 1$, then no local system on $U$ is physically rigid. Let $\mathcal L$ be a rank $1$ local system on $X$ (they correspond to characters of $\pi_1(X)^{\mathrm{ab}}\cong \mathbb Z^{2g}$) no tensor power of which is trivial. Let $j:U\to X$ be the inclusion. The pushforward $j_*:\pi_1(U,u)\rightarrow \pi_1(X,u)$ is surjective, so no tensor power of $j^*\mathcal L$ is trivial, and it has trivial local monodromy. Thus $\mathcal F$ and $\mathcal F\otimes j^*\mathcal L$ have isomorphic local monodromy for any $\mathcal F\in\mathrm{LocSys}_{\mathbb C}(U)$. Suppose $\mathcal F\cong \mathcal F\otimes j^*\mathcal L$ then $\mathrm{det}(\mathcal F)\cong \mathrm{det}(\mathcal F\otimes j^*\mathcal L)\cong \mathrm{det}(\mathcal F)\otimes (j^*\mathcal L)^{\otimes\mathrm{rank}(\mathcal F)}$. By tensoring both sides with $\mathrm{det}(\mathcal F)^\lor$, we have $(j^*\mathcal L)^{\otimes\mathrm{rank}(\mathcal F)}=\underline{\mathbb C}$, which is a contradiction. Hence $\mathcal F=0$. Hence no nonzero local system is physically rigid when $g\ge 1$. 

## Numerical Criterion for $\mathbb P^1$

Use same notation as above. 

{{< lemma id="groupcoh">}}
Let $Y$ be a connected complex manifold with contractible universal cover, let $u\in Y$, and put $\Gamma=\pi_1(Y,u)$. For any local system $\mathcal H$ of finite-dimensional complex vector spaces on $Y$, there are $\mathbb C$-linear isomorphisms, natural in $\mathcal H$,
$$\mathrm H^q(Y,\mathcal H)\cong\mathrm H^q(\Gamma,\mathcal H_u)\qquad(q\ge0),$$
where $\Gamma$ acts on the stalk $\mathcal H_u$ by monodromy and the left-hand side is sheaf cohomology in the classical topology.
{{< /lemma >}}

{{< proof >}}
See {{< cite key="Bro82" note="Chapter III, §1, p. 59" >}}.
{{< /proof >}}

{{< lemma note="Euler–Poincaré" id="euler">}}For any local system $\mathcal H$ on $U$ of rank $r$, 
$$\chi(X,j_*\mathcal H)=\chi(U,\mathcal H)+\sum_{s\in S}\mathrm{dim}_{\mathbb C}\mathcal H^{I(s)}=(2-2g-m)r+\sum_{s\in S}\mathrm{dim}_{\mathbb C}\mathcal H^{I(s)}$$
where $\mathcal H^{I(s)}$ is the local inertia invariant subspace
$$\mathcal H^{I(s)}:=\{v\in \mathcal H_{u_s}:\gamma v=v, \textrm{for\ all\ }\gamma\in I(s)\}$$
where the action of $I(s)$ inherits from that of $\mathcal H$. 
{{< /lemma >}}

{{< proof >}}
Let $N=2g+m-1$. Let $s\in S$ and set $V=\mathcal H_{u_s}$. The fundamental group has the presentation
$$\Gamma:=\pi_1(U,u_s)\cong\left\langle a_1,b_1,\ldots,a_g,b_g,c_1,\ldots,c_m\;\middle|\;\prod_{i=1}^g[a_i,b_i]\,c_1\cdots c_m=1\right\rangle,$$
where the $a_i,b_i$ are the handle generators, and each $c_j$ are loops around $j$-th puncture.
Since there is only one relation, we may choose free generators $x_1,\ldots,x_N$, so that $\Gamma\cong\mathrm F_N=\langle x_1,\ldots,x_N\rangle$.
Set $\rho:\Gamma\rightarrow\mathrm{GL}(V)$ the monodromy representation and define $A_i=\rho(x_i)$ for each $i$. 
There is a free resolution of the trivial left $\mathbb C[\Gamma]$-module $\mathbb C$
$$0\to \mathbb C[\Gamma]^N\xrightarrow{\partial} \mathbb C[\Gamma]\xrightarrow{\varepsilon} \mathbb C\to 0$$
where 
$\varepsilon\!\left(\gamma\right)=1$ for each $\gamma\in\Gamma$
and $\partial(e_i)=x_i-1$, where $e_i$ is the $i$-th standard basis element of $\mathbb C[\Gamma]^N$. To justify exactness, note that $\varepsilon(\partial(\gamma e_i))=\varepsilon(\gamma (x_i-1))=1-1=0$ so $\mathrm{Im}(\partial)\subseteq\mathrm{Ker}(\varepsilon)$; for the reverse inclusion, suppose that $a=\sum_\gamma c_\gamma\gamma\in \mathrm{Ker}(\varepsilon)$, we have $\sum_\gamma c_\gamma=0$ so $a=\sum_{\gamma}c_{\gamma}(\gamma-1)=\partial\left(\sum_{\gamma}c_\gamma p_\gamma\right)$ where $p_\gamma\in\mathbb C[\Gamma]^N$ is defined as follows. Write the reduced word
$$\gamma=x_{i_1}^{\epsilon_1}\cdots x_{i_k}^{\epsilon_k},\qquad \epsilon_j\in\{1,-1\},$$
and let $w_0=1$ and $w_j=x_{i_1}^{\epsilon_1}\cdots x_{i_j}^{\epsilon_j}$ be its prefixes. Set
$$p_\gamma:=\sum_{\epsilon_j=1}w_{j-1}e_{i_j}-\sum_{\epsilon_j=-1}w_je_{i_j},\qquad p_1:=0.$$
Here $we_i$ represents the oriented edge from $w$ to $wx_i$ in the Cayley graph. Thus a positive letter contributes $w_{j-1}e_{i_j}$, while a negative letter traverses the edge from $w_j$ to $w_jx_{i_j}=w_{j-1}$ backwards and contributes $-w_je_{i_j}$. Either way its boundary is $w_j-w_{j-1}$, so
$$\partial p_\gamma=\sum_{j=1}^k(w_j-w_{j-1})=w_k-w_0=\gamma-1.$$

Next, we use {{< refer "groupcoh">}}.
To compute $\mathrm H^q(\Gamma,V)=\mathrm{Ext}^q_{\mathbb C[\Gamma]}(\mathbb C,V)$, we apply $\mathrm{Hom}_{\mathbb C[\Gamma]}(-,V)$ and get 
$$0\to \mathrm{Hom}_{\mathbb C[\Gamma]}(\mathbb C[\Gamma], V)\cong V\xrightarrow{d}\mathrm{Hom}_{\mathbb C[\Gamma]}(\mathbb C[\Gamma]^N, V)\cong V^N \to 0$$
where $d(v)=((A_1-I)v,\ldots,(A_N-I)v)$. Indeed, under the identifications $f\mapsto f(1)$ and $h\mapsto(h(e_1),\ldots,h(e_N))$, the map $d$ is precomposition with $\partial$, so its $i$-th component is $(f\circ\partial)(e_i)=f(x_i-1)=A_i f(1)-f(1)$.

Thus $\mathrm H^0(U,\mathcal H)\cong\ker d$ and $\mathrm H^1(U,\mathcal H)\cong\operatorname{coker}d$, while $\mathrm H^q(U,\mathcal H)=0$ for $q\ge2$. Put $t=\dim_{\mathbb C}\operatorname{im}d$. By rank-nullity, $\dim\ker d=r-t$ and $\dim\operatorname{coker}d=Nr-t$. Therefore
$$\begin{aligned}
\chi(U,\mathcal H)
&=\dim\ker d-\dim\operatorname{coker}d\\
&=(r-t)-(Nr-t)\\
&=(1-N)r\\
&=(2-2g-m)r.
\end{aligned}$$

We next compute the compactly supported Euler characteristic $\chi_c(U,\mathcal H)$. Poincaré duality gives
$$\mathrm H_c^q(U,\mathcal H)\cong\mathrm H^{2-q}(U,\mathcal H^\vee)^\vee,$$
where $\mathcal H^\vee$ is the dual local system. Taking dimensions and reindexing by $k=2-q$, we obtain
$$\begin{aligned}
\chi_c(U,\mathcal H)
&=\sum_{q=0}^2(-1)^q\dim_{\mathbb C}\mathrm H^{2-q}(U,\mathcal H^\vee)\\
&=\sum_{k=0}^2(-1)^k\dim_{\mathbb C}\mathrm H^k(U,\mathcal H^\vee)\\
&=\chi(U,\mathcal H^\vee)\\
&=(2-2g-m)r=\chi(U,\mathcal H).
\end{aligned}$$

Finally, let $i_s:\{s\}\hookrightarrow X$ be the inclusion of a puncture. There is a short exact sequence
$$0\longrightarrow j_!\mathcal H\longrightarrow j_*\mathcal H\longrightarrow\bigoplus_{s\in S}i_{s*}\mathcal H^{I(s)}\longrightarrow0,$$
where $j_!$ denotes extension by zero and the last map takes germs at the punctures. Exactness can be checked on stalks: on $U$, the first map is the identity; at $s\in S$, we have $(j_!\mathcal H)_s=0$ and $(j_*\mathcal H)_s\cong\mathcal H^{I(s)}$. Indeed, a section on a sufficiently small punctured disc is determined by a vector fixed by transport around the puncture.
Since $X$ is compact, $\mathrm H^q(X,j_!\mathcal H)\cong\mathrm H_c^q(U,\mathcal H)$. Each skyscraper sheaf $i_{s*}\mathcal H^{I(s)}$ has global sections $\mathcal H^{I(s)}$ and no higher cohomology. Taking the alternating sum of dimensions in the associated long exact cohomology sequence therefore gives
$$\begin{aligned}
\chi(X,j_*\mathcal H)
&=\chi(X,j_!\mathcal H)+\sum_{s\in S}\dim_{\mathbb C}\mathcal H^{I(s)}\\
&=\chi_c(U,\mathcal H)+\sum_{s\in S}\dim_{\mathbb C}\mathcal H^{I(s)}\\
&=\chi(U,\mathcal H)+\sum_{s\in S}\dim_{\mathbb C}\mathcal H^{I(s)}\\
&=(2-2g-m)r+\sum_{s\in S}\dim_{\mathbb C}\mathcal H^{I(s)},
\end{aligned}$$
as required.

{{< /proof >}}

Now set $X=\mathbb P^1$. 

{{< theorem >}}
An irreducible local system $\mathcal F$ of rank $\ge 1$ on $U$ is physically rigid iff $\chi(X,j_*\mathrm{End}(\mathcal F) )=2$
{{< /theorem >}}

{{< proof >}}
We follow {{< cite key="Kat96" note="Theorem 1.1.2" >}}, writing $n=\mathrm{rank}(\mathcal F)$ and $h^q=\dim_{\mathbb C}\mathrm H^q$.
Suppose first that $\chi(X,j_*\mathrm{End}(\mathcal F))=2$, and let $\mathcal G$ be any complex local system on $U$ with the same local monodromies as $\mathcal F$. Since $S\ne\varnothing$, this implies $\mathrm{rank}(\mathcal G)=\mathrm{rank}(\mathcal F)=n$. We will show that $\mathcal F\cong\mathcal G$. By {{< refer "euler">}}, local systems $\mathcal H_1$ and $\mathcal H_2$ with isomorphic local monodromy have
$\chi(X,j_*\mathcal H_1)=\chi(X,j_*\mathcal H_2).$
Apply this to $\mathcal H_1=\mathrm{End}(\mathcal F)$ and $\mathcal H_2=\mathrm{Hom}(\mathcal F,\mathcal G)$, whose local monodromies are isomorphic. It follows that
$$\chi(X,j_*\mathrm{Hom}(\mathcal F,\mathcal G))=\chi(X,j_*\mathrm{End}(\mathcal F))=2.$$
On a curve, $\chi=h^0-h^1+h^2\le h^0+h^2$, hence
$$h^0(X,j_*\mathrm{Hom}(\mathcal F,\mathcal G))+h^2(X,j_*\mathrm{Hom}(\mathcal F,\mathcal G))\ge2.$$
Rewriting in terms of ordinary and compactly supported cohomology on $U$ gives
$$h^0(U,\mathrm{Hom}(\mathcal F,\mathcal G))+h_c^2(U,\mathrm{Hom}(\mathcal F,\mathcal G))\ge2.$$
[To explain the rewriting of the second term, put $\mathcal K=\mathrm{Hom}(\mathcal F,\mathcal G)$. The boundary exact sequence $$0\to j_!\mathcal K\to j_*\mathcal K\to Q\to0$$ has skyscraper quotient $Q$, so $\mathrm H^1(X,Q)=\mathrm H^2(X,Q)=0$. By its long exact cohomology sequence $\mathrm H^2(X,j_!\mathcal K)\cong\mathrm H^2(X,j_*\mathcal K)$. Since $X$ is compact, $\mathrm H^2(X,j_!\mathcal K)\cong\mathrm H_c^2(U,\mathcal K)$.] Poincaré duality, together with the trace-pairing identification $\mathrm{Hom}(\mathcal F,\mathcal G)^\vee\cong\mathrm{Hom}(\mathcal G,\mathcal F)$, gives
$\mathrm H_c^2(U,\mathrm{Hom}(\mathcal F,\mathcal G))^\vee
\cong\mathrm H^0(U,\mathrm{Hom}(\mathcal G,\mathcal F)),$
so
$$h^0(U,\mathrm{Hom}(\mathcal F,\mathcal G))+h^0(U,\mathrm{Hom}(\mathcal G,\mathcal F))\ge2.$$
Thus there is a nonzero morphism $\mathcal F\to\mathcal G$ or $\mathcal G\to\mathcal F$. By irreducibility of $\mathcal F$, the former is injective and the latter is surjective. Since both local systems have rank $n$, either morphism is an isomorphism, proving physical rigidity.

Now suppose that $\mathcal F$ is physically rigid. We show
$$\chi(X,j_*\mathrm{End}(\mathcal F))\ge2.$$
This suffices: by irreducibility, Schur's lemma gives $h^0(X,j_*\mathrm{End}(\mathcal F))=1$. By boundary exact sequence and Poincaré duality,
$$\begin{aligned}
\mathrm H^2(X,j_*\mathrm{End}(\mathcal F))
&\cong\mathrm H^2(X,j_!\mathrm{End}(\mathcal F)) &&\text{(boundary exact sequence)}\\
&\cong\mathrm H_c^2(U,\mathrm{End}(\mathcal F)) &&\text{(compactness of }X\text{)}\\
&\cong\mathrm H^0(U,\mathrm{End}(\mathcal F)^\vee)^\vee &&\text{(Poincaré duality)}\\
&\cong\mathrm H^0(U,\mathrm{End}(\mathcal F))^\vee &&\text{(trace pairing)}\\
&\cong\mathrm H^0(X,j_*\mathrm{End}(\mathcal F))^\vee &&\text{(definition of }j_*\text{)}\\
&\cong\mathbb C^\vee &&\text{(Schur's lemma)}\\
&\cong\mathbb C.
\end{aligned}$$
Hence
$$\chi(X,j_*\mathrm{End}(\mathcal F))=2-h^1(X,j_*\mathrm{End}(\mathcal F))\le2.$$


Choose an ordering $s_1,\ldots,s_m$ of the punctures and based loops $c_i$ around them such that
$$\pi_1(U,u)\cong\langle c_1,\ldots,c_m\mid c_1\cdots c_m=1\rangle.$$
The local system $\mathcal F$ corresponds to matrices $A_i\in\mathrm{GL}_n(\mathbb C)$ satisfying $A_1\cdots A_m=I$. Another rank-$n$ local system, represented by matrices $D_i$ with product $I$, has the same local monodromies precisely when each $D_i$ is conjugate to $A_i$, say
$$D_i=B_iA_iB_i^{-1}.$$
The two local systems are isomorphic precisely when there is a single matrix $C$ with $D_i=CA_iC^{-1}$ for every $i$. Multiplying $C$ by a scalar does not change conjugation, so we may require $\det C=1$. Thus physical rigidity says that whenever
$$\prod_{i=1}^m B_iA_iB_i^{-1}=I,$$
there exists $C\in\mathrm{SL}_n(\mathbb C)$ such that
$$CA_iC^{-1}=B_iA_iB_i^{-1}\qquad\text{for every }i.$$

Let $\mathfrak z(A_i)$ be the algebra of matrices in $M_n(\mathbb C)$ commuting with $A_i$, and let $Z(A_i)$ be its group of invertible elements. Since local monodromy acts on $\mathrm{End}(\mathcal F)$ by conjugation, its invariant subspace at $s_i$ is $\mathfrak z(A_i)$. By {{< refer "euler">}},
$$\chi(X,j_*\mathrm{End}(\mathcal F))=(2-m)n^2+\sum_i\dim_{\mathbb C}\mathfrak z(A_i).$$
The group $Z(A_i)$ is a nonempty Zariski open subset of $\mathfrak z(A_i)$ as a irreducible variety. Consequently $\dim Z(A_i)=\dim_{\mathbb C}\mathfrak z(A_i)$, and
$$\chi(X,j_*\mathrm{End}(\mathcal F))=(2-m)n^2+\sum_i\dim Z(A_i).$$

Consider $Y=(\mathrm{GL}_n(\mathbb C))^m$ and the map
$$\pi:Y\longrightarrow\mathrm{SL}_n(\mathbb C),\qquad
(B_1,\ldots,B_m)\longmapsto\prod_{i=1}^m B_iA_iB_i^{-1},$$
where the factors are ordered by $i$. Its values have determinant $\prod_i\det A_i=1$. The group
$$G:=\mathrm{SL}_n(\mathbb C)\times\prod_i Z(A_i)$$
acts on $Y$ by
$$(C,Z_1,\ldots,Z_m)\cdot(B_1,\ldots,B_m)
=(CB_1Z_1^{-1},\ldots,CB_mZ_m^{-1}),$$
and on $\mathrm{SL}_n(\mathbb C)$ by conjugation through $C$. The map $\pi$ is equivariant for these actions. Since $I$ is fixed under conjugation, the fibre $\pi^{-1}(I)$ is preserved by $G$.

The matrix characterization of physical rigidity says exactly that $G$ acts transitively on $\pi^{-1}(I)$. Indeed, for a point $(B_i)$ of the fibre, choose the simultaneous conjugating matrix $C$ above. Then $Z_i:=B_i^{-1}C$ commutes with $A_i$, and $B_i=CZ_i^{-1}$, so $(B_i)$ lies in the orbit of $(I,\ldots,I)$. Conversely, membership in this orbit gives simultaneous conjugacy. Therefore
$$\dim G\ge\dim\pi^{-1}(I).$$

Since $\mathrm{SL}_n(\mathbb C)$ is smooth of dimension $n^2-1$, the point $I$ is locally defined by $n^2-1$ equations. Pulling these equations back by $\pi$ shows that the fibre is locally cut out in $Y$ by $n^2-1$ equations. We now apply Krull's height theorem {{< cite key="Stacks" note="Tag 0BBZ, Lemma 10.60.12(1)" >}}: a locus cut out by $r$ equations in a smooth equidimensional variety has every irreducible component of codimension at most $r$. Thus each irreducible component $W$ of the fibre satisfies
$$\dim W\ge\dim Y-(n^2-1).$$
The fibre is nonempty, as it contains $(I,\ldots,I)$. Thus
$$\dim G\ge\dim\pi^{-1}(I)\ge\dim Y-(n^2-1).$$
Substituting $\dim Y=mn^2$ and $\dim G=(n^2-1)+\sum_i\dim Z(A_i)$ gives
$$\begin{aligned}
\chi(X,j_*\mathrm{End}(\mathcal F))
&=(2-m)n^2+\sum_i\dim Z(A_i)\\
&=(2-m)n^2+\dim G-(n^2-1)\\
&\ge(2-m)n^2+\dim\pi^{-1}(I)-(n^2-1)\\
&\ge(2-m)n^2+\dim Y-2(n^2-1)\\
&=(2-m)n^2+mn^2-2(n^2-1)\\
&=2n^2-2n^2+2\\
&=2.
\end{aligned}$$
Together with the upper bound from irreducibility, this proves $\chi(X,j_*\mathrm{End}(\mathcal F))=2$.
{{< /proof >}}

{{< example note="An irreducible physically rigid local system of rank two" id="rigid-rank-two-example">}}
Take $X=\mathbb P^1$ and $U=\mathbb P^1\setminus\{0,1,\infty\}$. Choose based loops with $c_0c_1c_\infty=1$, and define a rank-two local system $\mathcal F$ by the monodromy matrices
$$A_0=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad
A_1=\begin{pmatrix}1&0\\1&1\end{pmatrix},\qquad
A_\infty=(A_0A_1)^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}.$$
Their product is $I$, so they define a representation of $\pi_1(U)$ and hence a local system. All three determinants are $1$, so $\det\mathcal F$ is trivial. This is a genuinely nontrivial example: $A_0^k=\begin{pmatrix}1&k\\0&1\end{pmatrix}$, so its monodromy group is infinite.

To check irreducibility, write $e_1,e_2$ for the standard basis of $\mathbb C^2$. The only invariant line of $A_0$ is $\mathbb Ce_1$, whereas the only invariant line of $A_1$ is $\mathbb Ce_2$. Thus there is no common invariant line, and the representation is irreducible.

Both $A_0$ and $A_1$ have one size-two Jordan block with eigenvalue $1$. The characteristic polynomial of $A_\infty$ is $t^2-3t+1$, with distinct eigenvalues $\lambda_\pm=(3\pm\sqrt5)/2$, neither equal to $1$. In particular,
$$\ker(A_0-I)=\mathbb Ce_1,\qquad
\ker(A_1-I)=\mathbb Ce_2,\qquad
\ker(A_\infty-I)=0.$$
For the endomorphism local system we must instead compute the commuting algebras. Solving $MA_s=A_sM$ gives
$$\begin{aligned}
\mathfrak z(A_0)&=\left\{\begin{pmatrix}a&b\\0&a\end{pmatrix}:a,b\in\mathbb C\right\},\\
\mathfrak z(A_1)&=\left\{\begin{pmatrix}a&0\\b&a\end{pmatrix}:a,b\in\mathbb C\right\},\\
\mathfrak z(A_\infty)&=\left\{\begin{pmatrix}a&b\\b&a-b\end{pmatrix}:a,b\in\mathbb C\right\}.
\end{aligned}$$
Each has dimension $2$. Thus the relevant local data are
$$\begin{array}{c|c|c|c}
s&\text{Jordan form of }A_s&\dim\mathcal F^{I(s)}
&\dim\mathrm{End}(\mathcal F)^{I(s)}\\ \hline
0&J_2(1)&1&2\\
1&J_2(1)&1&2\\
\infty&\operatorname{diag}(\lambda_+,\lambda_-)&0&2
\end{array}$$
where $J_2(1)=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Notice that the last two columns are different: fixed vectors of $A_s$ are not the same as endomorphisms commuting with $A_s$.

Since $g=0$, $m=3$, and $\mathrm{rank}\,\mathrm{End}(\mathcal F)=2^2=4$, Euler–Poincaré gives
$$\begin{aligned}
\chi(U,\mathrm{End}(\mathcal F))&=(2-3)\cdot4=-4,\\
\chi(X,j_*\mathrm{End}(\mathcal F))
&=-4+(2+2+2)=2.
\end{aligned}$$
The preceding theorem therefore shows that $\mathcal F$ is physically rigid: any triple $(D_0,D_1,D_\infty)$ with product $I$ and with each $D_s$ conjugate to $A_s$ is simultaneously conjugate to this triple.

The cohomological data also make the criterion concrete. A global section of $\mathrm{End}(\mathcal F)$ is determined by its value $M$ at the base point: transport determines its value at every other point. This gives a well-defined section precisely when transport around every loop returns $M$ to itself. Since monodromy on endomorphisms is conjugation, this means $A_\gamma M A_\gamma^{-1}=M$, or equivalently $A_\gamma M=MA_\gamma$. The loops around $0$ and $1$ generate $\pi_1(U)$, so it suffices that $M$ commute with $A_0$ and $A_1$. By the definition of direct image, therefore,
$$H^0(X,j_*\mathrm{End}(\mathcal F))
=H^0(U,\mathrm{End}(\mathcal F))
\cong\mathfrak z(A_0)\cap\mathfrak z(A_1).$$
An element of this intersection must have both displayed forms:
$$M=\begin{pmatrix}a&b\\0&a\end{pmatrix}
=\begin{pmatrix}c&0\\d&c\end{pmatrix}.$$
Comparing entries gives $b=d=0$ and $a=c$, so $M=aI$. Thus the space of global sections is $\mathbb C I$, which has dimension $1$, giving $h^0(X,j_*\mathrm{End}(\mathcal F))=1$. Duality gives $h^2=1$, and $\chi=2$ forces $h^1=0$:
$$\bigl(h^0,h^1,h^2\bigr)(X,j_*\mathrm{End}(\mathcal F))=(1,0,1).$$
{{< /example >}}

## Higher Genus

## References

{{< bibliography >}}
  {{< bibitem key="Bro82" author="Kenneth S. Brown" type="book" series="Graduate Texts in Mathematics" volume="87" publisher="Springer-Verlag" year="1982" doi="10.1007/978-1-4684-9327-6" >}}
  Cohomology of Groups
  {{< /bibitem >}}
  {{< bibitem key="Kat96" author="Nicholas M. Katz" type="book" series="Annals of Mathematics Studies" volume="139" publisher="Princeton University Press" year="1996" >}}
  Rigid Local Systems
  {{< /bibitem >}}
  {{< bibitem key="Rie57" author="Bernhard Riemann" type="article" journal="Journal für die reine und angewandte Mathematik" volume="54" pages="115--155" year="1857" doi="10.1515/crll.1857.54.115" >}}
  Theorie der Abel’schen Functionen
  {{< /bibitem >}}
  {{< bibitem key="Stacks" author="The Stacks Project Authors" type="online" url="https://stacks.math.columbia.edu/tag/0BBZ" >}}
  The Stacks Project, Tag 0BBZ (Krull's height theorem)
  {{< /bibitem >}}
{{< /bibliography >}}
