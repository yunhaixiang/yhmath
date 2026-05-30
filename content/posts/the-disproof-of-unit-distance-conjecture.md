---
title: The Disproof of Unit Distance Conjecture
date: 2026-05-28 17:13:21 -0400
categories: [expositions]
tags: [math, discrete-geometry, combinatorics, ai]
---

{{< pullquote author="Anonymous" >}}
Why did the two algebraic geometers get arrested at the airport? Because they were talking about blowing up six points on the plane.
{{< /pullquote >}}

After learning about the recent OpenAI disproof of the unit distance conjecture {{< cite key="OpenAI26" >}}, I want to devote some time to understand some main ideas in this paper. The problem goes back to Erdős's 1946 paper {{< cite key="Erd46" >}}, and the classical upper bound is due to Spencer, Szemerédi, and Trotter {{< cite key="SST84" >}}. There are new developments by Will Sawin, who gave a more concrete bound {{< cite key="Saw26" >}}, and there is also a human-verified expository note with expert comments {{< cite key="ABG+26" >}}. For broader background, see Brass, Moser, and Pach {{< cite key="BMP05" >}}.

## Main Ideas

For a finite set $P\subseteq\mathbb C$, let 
$$\nu(P):=\#\{\{x,y\}\subseteq P:|x-y|=1\}\qquad \nu(n)=\mathrm{max}_{\# P=n}\nu(P)$$
Erdos conjectured that $\nu(n)=n^{1+o(1)}$. The result that was shown was the following

{{< theorem note="OpenAI">}}
There exists some $\delta>0$ such that $\nu(n)>n^{1+\delta}$ for infinitely many $n$. 
{{< /theorem >}}

This disproves Erdos. 
Let $f\ge 1$, then in $\mathbb C^f$, denote the polydisc
$$B_R=\{(x_1,\dots,x_f)\in\mathbb C^f:\forall i,|x_i|\le R\}$$
and for a (full) lattice $\Lambda\subseteq\mathbb C^f$, define 
$$U_{\Lambda}=\{(x_1,\dots,x_f)\in\Lambda:\forall i,|x_i|=1\}$$
Let $\pi:\mathbb \Lambda\rightarrow\mathbb C$ be the projection to an arbitrary coordinate and and assume it is injective.
If $\Lambda$ can be found such that $U_\Lambda$ is large, then for $R>1$, the set $P_{\Lambda,R}:=\pi(U_{\Lambda}\cap B_R)$ is a finite set of points with at least $\frac{1}{2}|U_{\Lambda}||\Lambda\cap B_{R-1}|$ unit distance pairs among at most $|U_{\Lambda}\cap B_{R}|$ points. One of the core lemmas in the paper proves an explicit estimate for this type of statement with a translate $a+\Lambda$ of the lattice, and it turns out this estimate is enough to produce the lower bound. 

Take a totally real number field $F$ of degree $f$ and form the CM field $K/F$ by quadratic imaginary extension, one can from the Minkowski embedding $K\rightarrow\mathbb C^f$ and form the lattice $\Lambda$ by taking the image of a fractional ideal. If we have find $K$ such that many primes $\mathfrak q$ in $F$ split, then we can find many $u=\frac{\mathfrak q}{\overline{\mathfrak q}}$ of unit norm, so that $U_{\Lambda}$ is big enough. Such fields $K$ are eventually built from Golod–Shafarevich class field towers, which is a tower of CM fields, where ramification is controlled. 

So far the above is what I gathered to be the main ideas. 

## References

{{< bibliography >}}
  {{< bibitem key="OpenAI26" author="OpenAI" type="online" url="https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf" year="2026" >}}
  Planar Point Sets with Many Unit Distances
  {{< /bibitem >}}
  {{< bibitem key="ABG+26" author="Noga Alon, Thomas F. Bloom, W. T. Gowers, Daniel Litt, Will Sawin, Arul Shankar, Jacob Tsimerman, Victor Wang, and Melanie Matchett Wood" type="article" eprint="2605.20695" url="https://arxiv.org/abs/2605.20695" year="2026" >}}
  Remarks on the Disproof of the Unit Distance Conjecture
  {{< /bibitem >}}
  {{< bibitem key="Saw26" author="Will Sawin" type="article" eprint="2605.20579" url="https://arxiv.org/abs/2605.20579" year="2026" >}}
  An Explicit Lower Bound for the Unit Distance Problem
  {{< /bibitem >}}
  {{< bibitem key="Erd46" author="Paul Erdős" type="article" journal="American Mathematical Monthly" volume="53" number="5" pages="248--250" year="1946" >}}
  On Sets of Distances of $n$ Points
  {{< /bibitem >}}
  {{< bibitem key="SST84" author="Joel Spencer, Endre Szemerédi, and William T. Trotter" type="incollection" booktitle="Graph Theory and Combinatorics" editor="Béla Bollobás" publisher="Academic Press" address="London" pages="293--303" year="1984" >}}
  Unit Distances in the Euclidean Plane
  {{< /bibitem >}}
  {{< bibitem key="BMP05" author="Peter Brass, William Moser, and János Pach" type="book" publisher="Springer" year="2005" >}}
  Research Problems in Discrete Geometry
  {{< /bibitem >}}
{{< /bibliography >}}
