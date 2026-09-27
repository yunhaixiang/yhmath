---
title: Verdier Duality
date: 2026-09-26 09:37:56 -0400
draft: true
slug: 64c8a2f
aliases:
  - /posts/verdier-duality/
categories: [expositions]
tags: [math, algebraic-geometry, cohomology]
---

{{< pullquote author="David Hilbert" >}}
Mathematical science is in my opinion an indivisible whole, an organism whose vitality is conditioned upon the connection of its parts. 
{{< /pullquote >}}

Verdier duality extends Poincaré duality from manifolds to a sheaf-theoretic framework that also accommodates singular spaces. This post develops the dualizing complex and the Verdier dual, and explains how they relate ordinary and compactly supported cohomology.


## Poincaré Duality

Recall the classical topological statement, using singular homology and cohomology with coefficients in a field $k$.

{{< theorem id="thm-poincare-topological" >}}
Let $M$ be a connected compact oriented real $n$-dimensional manifold without boundary, and let $[M]\in H_n(M;k)$ be its fundamental class. Cap product with $[M]$ gives isomorphisms
$$H^i(M;k)\xrightarrow{\sim}H_{n-i}(M;k),\qquad \alpha\longmapsto\alpha\frown[M].$$
Equivalently, cup product followed by evaluation on $[M]$ gives a perfect pairing
$$H^i(M;k)\otimes_k H^{n-i}(M;k)\longrightarrow k,\qquad \alpha\otimes\beta\longmapsto\langle\alpha\smile\beta,[M]\rangle.$$
Thus $H^{n-i}(M;k)\cong H^i(M;k)^\vee$, where $V^\vee:=\operatorname{Hom}_k(V,k)$ {{< cite key="Hat02" note="Theorem 3.30 and §3.3" >}}.
{{< /theorem >}}

If $M$ is not compact, the corresponding statement is $H_c^i(M;k)\cong H_{n-i}(M;k)$, where compactly supported cohomology is defined without sheaves by
$$H_c^i(M;k):=\varinjlim_{K\subseteq M\text{ compact}}H^i(M,M\setminus K;k).$$
Consequently $H^{n-i}(M;k)\cong H_c^i(M;k)^\vee$; when these groups are finite-dimensional, the associated pairing is perfect {{< cite key="Hat02" note="Theorem 3.35" >}}.

## References

{{< bibliography >}}
  {{< bibitem key="Hat02" author="Allen Hatcher" type="book" publisher="Cambridge University Press" year="2002" url="https://pi.math.cornell.edu/~hatcher/AT/AT.pdf" >}}
  Algebraic Topology
  {{< /bibitem >}}
  {{< bibitem key="Mil13" author="James S. Milne" type="online" year="2013" url="https://www.jmilne.org/math/CourseNotes/LEC.pdf" >}}
  Lectures on Étale Cohomology (Version 2.21)
  {{< /bibitem >}}
  {{< bibitem key="Hil02" author="David Hilbert" type="article" journal="Bulletin of the American Mathematical Society" volume="8" number="10" pages="437–479" year="1902" url="https://cs.clarku.edu/~djoyce/hilbert/problems.html" >}}
  Mathematical Problems
  {{< /bibitem >}}
{{< /bibliography >}}
