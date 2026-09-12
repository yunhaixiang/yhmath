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

Let $X$ be a smooth projective connected curve over $\mathbb C$ of genus $g$. Let $S\subseteq X(\mathbb C)$ a nonempty finite subset and set $U:=X-S$ the open complement. For each base point $u$ on the complex manifold $U^{\mathrm{an}}$, there is an equivalence of symmetric monoidal categories induced by the fibre functor $\mathcal F\mapsto \mathcal F_u$ where $\mathcal F$ is a local system on $U$.

$$\mathrm{LocSys}_{\mathbb C}(U)\simeq^{\otimes} \mathrm{Rep}_{\mathbb C}(\pi_1(U,u))$$

All vector spaces and representations here are assumed finite dimensional. We say the local system is *irreducible* if the corresponding representation is. For every singular point $s\in S$, the punctured neighborhood $$D^*(s)=U^{\mathrm{an}}\cap (\textrm{small disc around }s\textrm{ in }X^{\mathrm{an}})$$

has fundamental group $I(s)=\pi_1(D^*(s),u_s)=\mathbb Z$ called the *local inertia group*, where $u_s$ is a chosen base point. 

{{< definition >}}
We say a local system $\mathcal F$ on $U^{\mathrm{an}}$ is *physically rigid* if for every local system $\mathcal G$ on $U^{\mathrm{an}}$ with isomorphic local monodromy, i.e. there is isomorphism of local systems 
$\mathcal F|_{D^*(s)}\cong \mathcal G|_{D^*(s)}$
for each $s\in S$, there is $\mathcal F\cong \mathcal G$. 
{{< /definition >}}

However, physically rigid is a notion that only works for genus $0$. If $g(X)\ge 1$, then no local system on $U^{\mathrm{an}}$ is physically rigid. Let $\mathcal L$ be a rank $1$ local system on $X^{\mathrm{an}}$ (they correspond to characters of $\pi_1(X^{\mathrm{an}})^{\mathrm{ab}}\cong \mathbb Z^{2g}$) no tensor power of which is trivial. Let $j:U^{\mathrm{an}}\to X^{\mathrm{an}}$ be the inclusion. The pushforward $j_*:\pi_1(U^{\mathrm{an}},u)\rightarrow \pi_1(X^{\mathrm{an}},u)$ is surjective, so no tensor power of $j^*\mathcal L$ is trivial, and it has trivial local monodromy. Thus $\mathcal F$ and $\mathcal F\otimes j^*\mathcal L$ have isomorphic local monodromy for any $\mathcal F\in\mathrm{LocSys}_{\mathbb C}(U^{\mathrm{an}})$. Suppose $\mathcal F\cong \mathcal F\otimes j^*\mathcal L$ then $\mathrm{det}(\mathcal F)\cong \mathrm{det}(\mathcal F\otimes j^*\mathcal L)\cong \mathrm{det}(\mathcal F)\otimes (j^*\mathcal L)^{\otimes\mathrm{rank}(\mathcal F)}$. By tensoring both sides with $\mathrm{det}(\mathcal F)^\lor$, we have $(j^*\mathcal L)^{\otimes\mathrm{rank}(\mathcal F)}=\underline{\mathbb C}$, which is a contradiction. Hence $\mathcal F=0$. Hence no nonzero local system is physically rigid when $g\ge 1$. 

## Numerical Criterion for $\mathbb P^1$

Use same notation as above. 

{{< lemma id="groupcoh">}}
Let $Y$ be a connected manifold with contractible universal cover and $u\in Y$. For any complex local system $\mathcal H$, monodromy gives natural isomorphisms
$\mathrm H^q(Y,\mathcal H)\cong\mathrm H^q(\pi_1(Y,u),\mathcal H_u)$ for $q\ge 0$. 
{{< /lemma >}}

{{< proof >}}
Let $p:\widetilde Y\to Y$ be the universal cover, put $\Gamma=\pi_1(Y,u)$ and $R=\mathbb C[\Gamma]$, and give $V=\mathcal H_u$ its monodromy action $\rho$. We will compute both cohomology groups using the same cochain complex.

First consider the singular chains $C_q=C_q(\widetilde Y;\mathbb C)$. This is the complex vector space with basis the singular simplices $\sigma:\Delta^q\to\widetilde Y$. Deck transformations give it a left $R$-module structure by $\gamma\cdot\sigma=\gamma\circ\sigma$. This action is free on the set of simplices: if a deck transformation fixes a simplex, it fixes a point of $\widetilde Y$, so it is the identity. Choosing one simplex from each orbit therefore gives an $R$-basis of $C_q$. Thus every $C_q$ is a free $R$-module.

The boundary maps commute with deck transformations, so the augmented singular chain complex
$$\cdots\longrightarrow C_2\xrightarrow{\partial_2}C_1\xrightarrow{\partial_1}C_0\xrightarrow{\varepsilon}\mathbb C\longrightarrow0$$
is a complex of $R$-modules. Here $\varepsilon$ sums the coefficients of a $0$-chain, and $\mathbb C$ has the trivial $\Gamma$-action. Since $\widetilde Y$ is contractible, its positive-degree homology vanishes and $\mathrm H_0(\widetilde Y;\mathbb C)\cong\mathbb C$. Consequently this augmented complex is exact, hence a free resolution of the trivial $R$-module $\mathbb C$.

By the definition $\mathrm H^q(\Gamma,V)=\mathrm{Ext}^q_R(\mathbb C,V)$, group cohomology is therefore computed by
$$0\longrightarrow\mathrm{Hom}_R(C_0,V)\xrightarrow{d^0}\mathrm{Hom}_R(C_1,V)\xrightarrow{d^1}\mathrm{Hom}_R(C_2,V)\longrightarrow\cdots,$$
where $d^q(f)=f\circ\partial_{q+1}$.

We now identify this with the singular cochain complex on $Y$ with local coefficients in $\mathcal H$. Choose a lift of $u$ to $\widetilde Y$. Parallel transport upstairs trivializes $p^*\mathcal H$, because $\widetilde Y$ is simply connected, identifying its fibres with $V$. Thus cochains upstairs assign vectors in $V$ to singular simplices. To describe local coefficients downstairs, the values on different lifts must agree through the monodromy identifications. With compatible conventions for the deck and monodromy actions, this condition is
$$f(\gamma\cdot\sigma)=\rho(\gamma)f(\sigma).$$
It says precisely that the linear map $f:C_q\to V$ is $R$-linear. Indeed, each simplex in $Y$ lifts to $\widetilde Y$, and its lifts form one $\Gamma$-orbit, so an equivariant assignment is determined by its value on any one lift. The coboundary is induced by the same alternating face maps, giving the cochain complex $\mathrm{Hom}_R(C_\bullet,V)$ above.

On a manifold, singular cohomology with local coefficients agrees with sheaf cohomology of the local system. Hence
$$\mathrm H^q(Y,\mathcal H)\cong\mathrm H^q\!\left(\mathrm{Hom}_R(C_\bullet,V)\right)\cong\mathrm H^q(\Gamma,V).$$
These identifications respect morphisms of local systems, so they are natural in $\mathcal H$.
{{< /proof >}}

{{< lemma note="Euler–Poincaré" id="euler">}}For any local system $\mathcal H$ on $U^{\mathrm{an}}$, 
$$\chi(X^{\mathrm{an}},j_*\mathcal H)=\chi(U^{\mathrm an}, \underline{\mathbb C})\,\mathrm{rank}(\mathcal H)+\sum_{s\in S}\mathrm{dim}_{\mathbb C}\mathcal H^{I(s)}$$
where $\mathcal H^{I(s)}$ is the local inertia invariant subspace
$$\mathcal H^{I(s)}:=\{v\in \mathcal H_{u_s}:\gamma v=v, \textrm{for\ all\ }\gamma\in I(s)\}$$
where the action of $I(s)$ inherits from that of $\mathcal H$. 
{{< /lemma >}}

{{< proof >}}
Put $m=\#S\ge 1$ and $N=2g+m-1$. Let $s\in S$ and set $V=\mathcal H_{u_s}$. The fundamental group has the presentation
$$\Gamma:=\pi_1(U^{\mathrm{an}},u_s)\cong\left\langle a_1,b_1,\ldots,a_g,b_g,c_1,\ldots,c_m\;\middle|\;\prod_{i=1}^g[a_i,b_i]\,c_1\cdots c_m=1\right\rangle,$$
where the $a_i,b_i$ are the handle generators, and each $c_j$ are loops around $j$-th puncture.
Since there is only one relation, we may choose free generators $x_1,\ldots,x_N$, so that $\Gamma\cong\mathrm F_N=\langle x_1,\ldots,x_N\rangle$.
Set $\rho:\Gamma\rightarrow\mathrm{GL}(V)$ the monodromy representation and define $A_i=\rho(x_i)$ for each $i$. 
There is a free resolution of the trivial left $\mathbb C[\Gamma]$-module $\mathbb C$
$$0\to \mathbb C[\Gamma]^N\xrightarrow{\partial} \mathbb C[\Gamma]\xrightarrow{\varepsilon} \mathbb C\to 0$$
where 
$\varepsilon\!\left(\gamma\right)=1$ for each $\gamma\in\Gamma$
and $\partial(e_i)=x_i-1$, where $e_i$ is the $i$-th standard basis element of $\mathbb C[\Gamma]^N$. To justify exactness, note that $\varepsilon(\partial(\gamma e_i))=\varepsilon(\gamma (x_i-1))=1-1=0$ so $\mathrm{Im}(\partial)\subseteq\mathrm{Ker}(\varepsilon)$; for the reverse inclusion, suppose that $a\in \sum_\gamma c_\gamma\gamma\in \mathrm{Ker}(\varepsilon)$, we have $\sum_\gamma c_\gamma=0$ so $a=\sum_{\gamma}c_{\gamma}(\gamma-1)=\partial\left(\sum_{\gamma}c_\gamma p_\gamma\right)$ where $p_\gamma$ is a linear combination representing a path in the Cayley graph of $\Gamma$ connecting $1$ and $\gamma$. Next, we use {{< refer "groupcoh">}}.
To compute $\mathrm H^q(\Gamma,V)=\mathrm{Ext}^q_{\mathbb C[\Gamma]}(\mathbb C,V)$, we apply $\mathrm{Hom}_{\mathbb C[\Gamma]}(-,V)$ and get 
$$0\to \mathrm{Hom}_{\mathbb C[\Gamma]}(\mathbb C[\Gamma], V)\cong V\xrightarrow{d}\mathrm{Hom}_{\mathbb C[\Gamma]}(\mathbb C[\Gamma]^N, V)\cong V^N \to 0$$
where $d$
{{< /proof >}}

Now set $X=\mathbb P^1$. 

{{< theorem >}}
An irreducible local system $\mathcal F$ of rank $\ge 1$ on $U^{\mathrm{an}}$ is physically rigid iff $\chi((\mathbb P^1)^{\mathrm{an}},j_*\mathrm{End}(\mathcal F) )=2$
{{< /theorem >}}

{{< proof >}}
Let $\chi((\mathbb P^1)^{\mathrm{an}},j_*\mathrm{End}(\mathcal F) )=2$ and  $\mathcal G$ a local system on $U^{\mathrm an}$ with isomorphic local monodromy with $\mathcal F$. We will show $\mathcal F\cong \mathcal G$. By {{< refer "euler">}}, if two local systems $\mathcal H_1,\mathcal H_2$ have isomorphic local monodromy then $\chi(X^{\mathrm{an}},j_*\mathcal H_1)=\chi(X^{\mathrm{an}},j_*\mathcal H_2)$. Applying this to $\mathcal H_1=\mathrm{End}(\mathcal F)$ and $\mathcal H_2=\mathrm{Hom}(\mathcal F,\mathcal G)$, we have $\chi\!\left(X^{\mathrm{an}},j_*\mathrm{End}(\mathcal F)\right)=\chi\!\left(X^{\mathrm{an}},j_*\mathrm{Hom}(\mathcal F,\mathcal G)\right)=2$. Thus
$$\begin{aligned}
h^0(U^{\mathrm {an}},\mathrm{Hom}(\mathcal F,\mathcal G))+h^0(U^{\mathrm {an}},\mathrm{Hom}(\mathcal G,\mathcal F))=h^0(U^{\mathrm {an}},\mathrm{Hom}(\mathcal F,\mathcal G))+h^0(U^{\mathrm {an}},\mathrm{Hom}(\mathcal G,\mathcal F))
\end{aligned}$$ 
{{< /proof >}}

## References

{{< bibliography >}}
  {{< bibitem key="Kat96" author="Nicholas M. Katz" type="book" series="Annals of Mathematics Studies" volume="139" publisher="Princeton University Press" year="1996" >}}
  Rigid Local Systems
  {{< /bibitem >}}
  {{< bibitem key="Rie57" author="Bernhard Riemann" type="article" journal="Journal für die reine und angewandte Mathematik" volume="54" pages="115--155" year="1857" doi="10.1515/crll.1857.54.115" >}}
  Theorie der Abel’schen Functionen
  {{< /bibitem >}}
{{< /bibliography >}}
