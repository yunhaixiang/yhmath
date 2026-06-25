---
title: Aperiodic Tilings
date: 2026-06-23 00:00:01 -0400
slug: aperiodic-tilings
aliases:
  - /posts/aperiodic-tilings/
categories: [expositions]
tags: [math, geometry, combinatorics]
---


{{< pullquote author="Linus Pauling" >}}
There is no such thing as quasicrystals, only quasi-scientists.
{{< /pullquote >}}

I have been interested in aperiodic tilings for a long time. Despite being somewhat niche and underexplored, it seems to me a branch of math that potentially can have lots of connections to number theory. While tiling itself has a long artistic history, the modern study of aperiodic tilings is closely tied to physics: in 1982, Dan Shechtman observed diffraction patterns with sharp fivefold symmetry in an aluminium-manganese alloy, contradicting the old crystallographic expectation that crystals must be periodic. The mathematical models for such quasicrystals are not random patterns, but ordered non-periodic structures, with Penrose tilings as the prototypical example.

## Periodic Tilings

Periodic tilings are much more well understood than aperiodic ones. These are tilings which can be transformed to itself by translation, rotation, or reflection. Regular polygons already admit periodic tilings, and they are represented with the Schläfli symbol $\{n,q\}$ meaning “$q$-regular $n$-gons” meet at each vertax. 

{{< theorem >}}
The only (edge-to-edge) periodic tilings by a regular polygon are $\{3, 6\},\{4, 4\}, \{6, 3\}$. 
{{< /theorem >}}
{{< proof >}}
The interior angle is $\frac{(n-2)\pi}{n}$, and around each vertax the sum of angles $q\frac{(n-2)\pi}{n}=2\pi$. We obtain the diophantine equation $q(n-2)=2n$, which only gives these solutions. 
{{< /proof >}}

For nonregular polygon tilings, we know every triangle can tile periodically. Every quadrilateral also tiles periodically by gluing to itself rotated 180 degrees {{< cite key="GS87" note="Chapter 9" >}}. For convex pentagons and hexagons, all monohedral tilings by a convex prototile have been classified: there are 15 types for convex pentagons {{< cite key="Rao17" >}} and 3 types for convex hexagons {{< cite key="Rei18" >}}. For concave ones, we don't know a full classification for pentagons or hexagons. For convex $n$-gons with $n\ge 7$, no periodic tilings can exist {{< cite key="GS87" note="Chapter 9" >}}. 

For periodic tilings with more than 1 prototile, it is more complicated. An *Archimedean tiling* is a tiling of possibly multiple prototiles all regular polygon, such that the same cyclic arrangement of polygons occurs at every vertex. They are completely classified and there are 11 of them. An *$m$-Archimedean tiling* is the generalization where one allows $m$ cyclic arrangement of polygons. These have been enumerated for small $m$. There are $20$ for $m=2$, $61$ for $m=3$, $151$ for $m=4$, and so on. 

## Aperiodic Tiling

An aperiodic tiling is a tiling whose prototiles can ONLY tile aperiodically. Wang tiles are the first aperiodic tiling. Wang tiles are squares with colored edges (which can be replaced with jaggedness), neighboring tiles must match edge colors, and you cannot rotate or translate tiles. Berger showed there are a set of Wang tiles that can only tile aperiodically. He also showed there are sets of Wang tiles where whether one could tile the plane is undecidable. For more aperiodic tilings, see [here](https://tilings.math.uni-bielefeld.de/). One famous example is Penrose tiling. They have two prototiles, kite and dart {{< cite key="Pen74" >}}. This came from the study of quasicrystals in physics {{< cite key="Sen06" >}}. Another famous example is the aperiodic monotile (Einstein problem): the hat and spectre, discovered by Smith, Myers, Kaplan, and Goodman-Strauss {{< cite key="SMKG24a" >}} {{< cite key="SMKG24b" >}}.

One of the main ways to create aperiodic tilings is by *substitution tiling*. One defines how to expand a tile and subdivide it into prototiles, and then repeat. It will cover more and more parts of the plane, but one has to show this stabilizes. Penrose tilings are the prototypical substitution tiling. For the hat shape, it is not a substitution tiling. Its aperiodicity is shown with something called metatiles. Clusters of hats are grouped together called a metatile, and these metatiles satisfy a substitution tiling pattern. 

## References

{{< bibliography >}}
  {{< bibitem key="GS87" author="Branko Grünbaum and G. C. Shephard" type="book" publisher="W. H. Freeman" year="1987" >}}
  Tilings and Patterns
  {{< /bibitem >}}
  {{< bibitem key="Rei18" author="Karl Reinhardt" type="book" publisher="Druck von Robert Noske" year="1918" >}}
  Über die Zerlegung der Ebene in Polygone
  {{< /bibitem >}}
  {{< bibitem key="Rao17" author="Michaël Rao" type="article" eprint="1708.00274" year="2017" >}}
  Exhaustive Search of Convex Pentagons Which Tile the Plane
  {{< /bibitem >}}
  {{< bibitem key="Gar89" author="Martin Gardner" type="book" publisher="W. H. Freeman" year="1989" >}}
  Penrose Tiles to Trapdoor Ciphers
  {{< /bibitem >}}
  {{< bibitem key="Tre23" author="Rodrigo Treviño" type="article" journal="Notices of the American Mathematical Society" volume="70" number="10" pages="1640--1651" year="2023" >}}
  Aperiodic Tilings, Order, and Randomness
  {{< /bibitem >}}
  {{< bibitem key="BG13" author="Michael Baake and Uwe Grimm" type="book" publisher="Cambridge University Press" year="2013" >}}
  Aperiodic Order. Volume 1: A Mathematical Invitation
  {{< /bibitem >}}
  {{< bibitem key="Sen06" author="Marjorie Senechal" type="article" journal="Notices of the American Mathematical Society" volume="53" number="8" pages="886--887" year="2006" >}}
  What is... a Quasicrystal?
  {{< /bibitem >}}
  {{< bibitem key="Ber66" author="Robert Berger" type="book" series="Memoirs of the American Mathematical Society" volume="66" publisher="American Mathematical Society" year="1966" >}}
  The Undecidability of the Domino Problem
  {{< /bibitem >}}
  {{< bibitem key="Rob71" author="Raphael M. Robinson" type="article" journal="Inventiones Mathematicae" volume="12" pages="177--209" year="1971" >}}
  Undecidability and Nonperiodicity for Tilings of the Plane
  {{< /bibitem >}}
  {{< bibitem key="Pen74" author="Roger Penrose" type="article" journal="Bulletin of the Institute of Mathematics and its Applications" volume="10" pages="266--271" year="1974" >}}
  The Role of Aesthetics in Pure and Applied Mathematical Research
  {{< /bibitem >}}
  {{< bibitem key="dB81a" author="N. G. de Bruijn" type="article" journal="Indagationes Mathematicae" volume="43" pages="39--52" year="1981" >}}
  Algebraic Theory of Penrose's Non-Periodic Tilings of the Plane. I
  {{< /bibitem >}}
  {{< bibitem key="dB81b" author="N. G. de Bruijn" type="article" journal="Indagationes Mathematicae" volume="43" pages="53--66" year="1981" >}}
  Algebraic Theory of Penrose's Non-Periodic Tilings of the Plane. II
  {{< /bibitem >}}
  {{< bibitem key="SMKG24a" author="David Smith, Joseph Samuel Myers, Craig S. Kaplan, and Chaim Goodman-Strauss" type="article" journal="Combinatorial Theory" volume="4" number="1" year="2024" eprint="2303.10798" >}}
  An Aperiodic Monotile
  {{< /bibitem >}}
  {{< bibitem key="SMKG24b" author="David Smith, Joseph Samuel Myers, Craig S. Kaplan, and Chaim Goodman-Strauss" type="article" journal="Combinatorial Theory" volume="4" number="1" year="2024" eprint="2305.17743" >}}
  A Chiral Aperiodic Monotile
  {{< /bibitem >}}
{{< /bibliography >}}
