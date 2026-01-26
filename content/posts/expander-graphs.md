---
layout: post
title: Expander Graphs
date: 2026-01-24 23:25:50 -0500
tags: [math, combinatorics, number-theory]
categories: [expositions]
---

{{< pullquote author="Hermann Weyl" >}}
Mathematics is not the rigid and rigidity-producing schema that the layman thinks it is; rather, in it we find ourselves at that meeting point of constraint and freedom that is the very essence of human nature.
{{< /pullquote >}}

Expander graphs are sparse graphs with strong connectivity properties. They show up across combinatorics, theoretical computer science, and number theory, and they serve as a bridge between random-like behavior and explicit constructions. This post will collect definitions, basic examples, and a few standard criteria (spectral gap and etc). My main motivations will come from number theory, so there will be inclinations towards that. I will basically be following Kowalski's excellent notes on expander graphs {{< cite key="Kow24" >}}, with supplements from Godsil's textbook {{< cite key="God93" >}}.

## Basic Definitions

By a graph we mean a undirected graph with loops and multiple edges allowed, which we write as $\Gamma=(V,E,\mathrm{ep})$, where $V$ is a set of vertices, $E$ is a set of edges, and $\mathrm{ep}:E\to \{\{u,v\}:u,v\in V\}$ is the endpoint map. A graph is called *$k$-regular* if every vertex has exactly $k$ edges incident to it (counting loops twice). A *morphism* of graphs $f:\Gamma\to\Gamma'$ is a pair of maps $f_V:V\to V'$ and $f_E:E\to E'$ such that $\mathrm{ep}'(f_E(e))=\{f_V(u),f_V(v)\}$ whenever $\mathrm{ep}(e)=\{u,v\}$. An *isomorphism* is a morphism with inverses. A *subgraph* of $\Gamma$ is a graph $\Gamma'$ with injective morphism $\Gamma'\to\Gamma$ (both on vertices and edges). A *path* is the graph $P_n$ with vertices $\{0,1,\dots,n\}$ and edges $\{(i,i+1):0\le i < n\}$. A cycle is the graph $C_n$ with vertices $\mathbb{Z}/n\mathbb{Z}$ and edges $\{(i,i+1):i\in \mathbb{Z}/n\mathbb{Z}\}$. A path (resp. cycle) in $\Gamma$ is a subgraph isomorphic to $P_n$ (resp. $C_n$). A graph is *connected* if any two vertices can be joined by a path. A graph is a *forest* if it has no cycles, and a *tree* if it is a connected forest. The complete graph on $n$ vertices, denoted $K_n$, is the graph with $n$ vertices and an edge between every pair of distinct vertices.

## References

{{< bibliography >}}
  {{< bibitem key="Kow24" author="Emmanuel Kowalski" type="online" url="https://people.math.ethz.ch/~kowalski/expander-graphs.pdf" year="2024">}}
  An Introduction to Expander Graphs
  {{< /bibitem >}}
  {{< bibitem key="God93" author="Chris Godsil" type="book" publisher="Chapman and Hall" year="1993" >}}
  Algebraic Combinatorics
  {{< /bibitem >}}
{{< /bibliography >}}
