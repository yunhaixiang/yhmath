---
title: Brauer Group III
date: 2026-04-07 16:42:00 -0400
slug: d04997f
aliases:
  - /posts/brauer-group-iii/
categories: [expositions]
tags: [algebraic-geometry]
---

{{< pullquote author="Alexander Grothendieck" >}}
The introduction of the cipher 0 or the group concept was general nonsense too, and mathematics was more or less stagnating for thousands of years because nobody was around to take such childish steps.
{{< /pullquote >}}

We continue with [Part II](brauer2.md) of our discussion of the Brauer group. In 1970, Manin explained how elements of $\mathrm{Br}(X)$ produces obstructions to local-global principles on $X$ in {{< cite "Man71" >}}. On the other hand, it was shown that a torsor under an algebraic group $G$ over $X$ could give rise to an obstruction. In this post, we will explain these obstructions, and all related concepts. We will still be following {{< cite "Poo17" >}}, mostly chapter 8. 

## Obstructions from functors

Let $K$ be a global field and $F:\mathbf{Sch}^{\mathrm{op}}\rightarrow\mathbf{Set}$ be a functor. Let $A\in F(L)$ for a $K$-algebra $L$, there is a map $\mathrm{ev}_A:X(L)\rightarrow F(L)$, by sending a point $x\in X(L)$ to the image of $A$ of the map $F(X)\rightarrow F(L)$ induced by $x$. Let $X(\mathbb{A}_K)^A$ be the adelic points of $X$ whose image under $\mathrm{ev}_A$ is contained in the image of $F(K)\rightarrow F(\mathbb{A}_K)$. Define $X(\mathbb{A}_K)^F=\bigcap_{A\in F(K)} X(\mathbb{A}_K)^A\supseteq X(K)$. The diagram

{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJYKEspIl0sWzEsMCwiWChcXG1hdGhiYntBfV9LKSJdLFswLDEsIkYoSykiXSxbMSwxLCJGKFxcbWF0aGJie0F9X0spIl0sWzAsMV0sWzAsMiwiXFxtYXRocm17ZXZ9X0EiLDJdLFsxLDMsIlxcbWF0aHJte2V2fV9BIiwyXSxbMiwzXV0=&embed"
    width="260px"
    height="150px"
    scale="1.34"
    ty="-6px"
    radius="0px"
>}}

commutes. 

{{< definition >}}
If $X(\mathbb{A}_K)\ne \emptyset$ but $X(\mathbb{A}_K)^F=\emptyset$, we say that there is an obstruction to the local-global principle on $X$ coming from $F$, in which case $X$ has no $K$-rational points. Take $F=\mathrm{Br}$, then the set $X(\mathbb{A}_K)^{\mathrm{Br}}$ is called the Brauer-Manin set of $X$, and the obstruction is called the Brauer-Manin obstruction. Take $F=H^1(-,G)$ for an algebraic group $G$, then the obstruction is called the descent obstruction coming from $G$.
{{< /definition >}}

We have $X(\mathbb{A}_K)\subseteq X(\prod_{v}K_v)=\prod_{v}X(K_v)$ (if $X$ is proper then all three are the same). We have a similar commutative diagram. 

{{< quiver
    src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJYKEspIl0sWzEsMCwiXFxwcm9kX3t2fVgoS192KSJdLFswLDEsIkYoSykiXSxbMSwxLCJcXHByb2Rfe3Z9RihLX3YpIl0sWzAsMV0sWzAsMiwiXFxtYXRocm17ZXZ9X0EiLDJdLFsxLDMsIlxcbWF0aHJte2V2fV9BIiwyXSxbMiwzXV0=&embed"
    width="260px"
    height="150px"
    scale="1.34"
    ty="-6px"
    radius="0px"
>}}

Define $X(\prod_v K_v)^F=\bigcap_{A\in F(K)} X(\prod_v K_v)^A\subseteq X(\prod_v K_v)$ similarly. 
{{< definition >}}
If $X(\prod_v K_v)^F\subsetneq X(\prod_v K_v)$, we say that there is an obstruction to the local-global principle on $X$ coming from $F$, in which case $X(K)$ is not dense in $X(\prod_v K_v)$.
{{< /definition >}}



## References

{{< bibliography >}}
  {{< bibitem key="Poo17" author="Bjorn Poonen" type="book" publisher="American Mathematical Society" year="2017" >}}
  Rational Points on Varieties
  {{< /bibitem >}}
  {{< bibitem key="Man71" author="Y. I. Manin" type="inproceedings" publisher="Gauthier-Villars" address="Paris" year="1971" booktitle="Actes du Congrès International des Mathématiciens (Nice, 1970), Tome 1" pages="401--411" >}}
  Le groupe de Brauer-Grothendieck en géométrie diophantienne
  {{< /bibitem >}}
{{< /bibliography >}}
