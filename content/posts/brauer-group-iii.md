---
title: Brauer Group III
date: 2026-04-07 16:42:00 -0400
categories: [expositions]
tags: [algebraic-geometry]
---

{{< pullquote author="Alexander Grothendieck" >}}
The introduction of the cipher 0 or the group concept was general nonsense too, and mathematics was more or less stagnating for thousands of years because nobody was around to take such childish steps.
{{< /pullquote >}}

We continue with [Part II](brauer2.md) of our discussion of the Brauer group. In 1970, Manin explained how elements of $\mathrm{Br}(X)$ produces obstructions to local-global principles on $X$ in {{< cite "Man71" >}}. On the other hand, it was shown that a torsor under an algebraic group $G$ over $X$ could give rise to an obstruction. In this post, we will explain these obstructions, and all related concepts. We will still be following {{< cite "Poo17" >}}, mostly chapter 8. 

## Obstructions from functors

Let $K$ be a global field and $F:\mathbf{Sch}^{\mathrm{op}}\rightarrow\mathbf{Set}$ be a functor. Let $A\in F(L)$ for a $K$-algebra $L$, there is a map $\mathrm{ev}_A:X(L)\rightarrow F(L)$, by sending a point $x\in X(L)$ to the image of $A$ of the map $F(X)\rightarrow F(L)$ induced by $x$. Let $X(\mathbb{A}_K)^A$ be the adelic points of $X$ whose image under $\mathrm{ev}_A$ is contained in the image of $F(K)\rightarrow F(\mathbb{A}_K)$. Define $X(\mathbb{A}_K)^F=\bigcap_{A\in F(K)} X(\mathbb{A}_K)^A\supseteq X(K)$.

{{< definition >}}
If $X(\mathbb{A}_K)\ne \emptyset$ but $X(\mathbb{A}_K)^F=\emptyset$, we say that there is an obstruction to the local-global principle on $X$ coming from $F$, in which case $X$ has no $K$-rational points.
{{< /definition >}}

Unfinished. 


## References

{{< bibliography >}}
  {{< bibitem key="Poo17" author="Bjorn Poonen" type="book" publisher="American Mathematical Society" year="2017" >}}
  Rational Points on Varieties
  {{< /bibitem >}}
  {{< bibitem key="Man71" author="Y. I. Manin" type="inproceedings" publisher="Gauthier-Villars" address="Paris" year="1971" booktitle="Actes du Congrès International des Mathématiciens (Nice, 1970), Tome 1" pages="401--411" >}}
  Le groupe de Brauer-Grothendieck en géométrie diophantienne
  {{< /bibitem >}}
{{< /bibliography >}}
