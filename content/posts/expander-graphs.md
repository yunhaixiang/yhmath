---
layout: post
title: Expander Graphs
date: 2026-01-24 23:25:50 -0500
slug: 4ce12e1
aliases:
  - /posts/expander-graphs/
tags: [math, combinatorics, number-theory]
categories: [expositions]
---

{{< pullquote author="Hermann Weyl" >}}
Mathematics is not the rigid and rigidity-producing schema that the layman thinks it is; rather, in it we find ourselves at that meeting point of constraint and freedom that is the very essence of human nature.
{{< /pullquote >}}

Expander graphs are sparse graphs with strong connectivity properties. They show up across combinatorics, theoretical computer science, and number theory. This post will collect definitions, basic examples, and a few standard criteria (spectral gap and etc). My main motivations will come from number theory, so there will be inclinations towards that. I will basically be following Kowalski's excellent notes on expander graphs {{< cite key="Kow24" >}}, with supplements from Godsil's textbook {{< cite key="God93" >}}.

## Basic Definitions

By a graph we mean a undirected graph with loops and multiple edges allowed, which we write as $\Gamma=(V,E,\mathrm{ep})$, where $V$ is a set of vertices, $E$ is a set of edges, and $\mathrm{ep}:E\to \{\{u,v\}:u,v\in V\}$ is the endpoint map. A graph is called *$k$-regular* if every vertex has exactly $k$ edges incident to it (counting loops twice). A *morphism* of graphs $f:\Gamma\to\Gamma'$ is a pair of maps $f_V:V\to V'$ and $f_E:E\to E'$ such that $\mathrm{ep}'(f_E(e))=\{f_V(u),f_V(v)\}$ whenever $\mathrm{ep}(e)=\{u,v\}$. An *isomorphism* is a morphism with inverses. A *subgraph* of $\Gamma$ is a graph $\Gamma'$ with injective morphism $\Gamma'\to\Gamma$ (both on vertices and edges). The complete graph on $n$ vertices, denoted $K_n$, is the graph with $n$ vertices and an edge between every pair of distinct vertices. A *path* is the graph $P_n$ with vertices $\{0,1,\dots,n\}$ and edges $\{(i,i+1):0\le i < n\}$. A cycle is the graph $C_n$ with vertices $\mathbb{Z}/n\mathbb{Z}$ and edges $\{(i,i+1):i\in \mathbb{Z}/n\mathbb{Z}\}$. A path (resp. cycle) in $\Gamma$ is a subgraph isomorphic to $P_n$ (resp. $C_n$). An arc in a graph is a map from $P_n\rightarrow \Gamma$ such that it contains no loops, and a walk in a graph is any map $P_n\rightarrow \Gamma$. A graph is *connected* if any two vertices can be joined by a path. A graph is a *forest* if it has no cycles, and a *tree* if it is a connected forest. Let $T_{d,k}$ be the graph where vertices are all words of length $\le k$ in the alphabet $\{1,2,\dots,d\}$ with no letter repeated consecutively, and edges connect words that differ by exactly one letter at the end. This is a $d$-regular tree. The $d$-regular tree $T_d$ is taking $k\to\infty$ limit of $T_{d,k}$. The incidence set $\mathrm{\partial}_{\Gamma}(v)$ of a vertex $v$ in $\Gamma$ is the set of pairs $(e,w)$ where $e$ is an edge incident to $v$ and $w$ is the other endpoint of $e$. The degree of $v$ is the cardinality of its incidence set. A graph is $k$-regular if every vertex has degree $k$. The Cayley graph $\mathrm{Cay}(G,S)$ of a group $G$ with respect to a symmetric generating set $S$ (i.e., $s\in S$ implies $s^{-1}\in S$) is the graph with vertex set $G$ and edges connecting $g$ and $gs$ for every $g\in G$ and $s\in S$. This is a $|S|$-regular graph.

{{< definition >}}
A *cover* of a graph $\Gamma$ is a graph $\Gamma^\prime$ with a map $\pi:\Gamma^\prime\rightarrow\Gamma$ such that the induced map on incidences $\partial_{\Gamma}(v)\rightarrow\partial_{\Gamma^\prime}(\pi(v))$ is bijective. The *universal cover* of a connected nonempty graph $\Gamma$ at a vertax $v$ is a graph $\widetilde{\Gamma}$ where vertices are all arcs in $\Gamma$ starting at $v$, and edges connect arcs that differ by exactly one edge at the end, with the projection $\pi:\widetilde{\Gamma}\rightarrow\Gamma$ mapping each arc to its other endpoint.
{{< /definition >}}

{{< definition >}}
A family of finite nonempty connected graphs $$\{\Gamma_i=(V_i,E_i,\mathrm{ep}_i)\}_{i\in I}$$ is called an *expander family* if there exists constants $v\ge 1$ and $h>0$ such that
1. For each $N\ge 1$ there are only finitely many $i\in I$ with $|V_i|\le N$.
2. For each $i\in I$, the maximum valency of vertices in $\Gamma_i$ is at most $v$.
3. For each $i\in I$ the expansion constant $h(\Gamma_i)$ defined by
   $$h(\Gamma_i)=\min_{\substack{S\subset V_i\\0<|S|\le |V_i|/2}}\frac{|\partial S|}{|S|}$$
   is at least $h$, where $\partial S$ is the set of edges with exactly one endpoint in $S$.
{{< /definition >}}

## References

{{< bibliography >}}
  {{< bibitem key="Kow24" author="Emmanuel Kowalski" type="online" url="https://people.math.ethz.ch/~kowalski/expander-graphs.pdf" year="2024">}}
  An Introduction to Expander Graphs
  {{< /bibitem >}}
  {{< bibitem key="God93" author="Chris Godsil" type="book" publisher="Chapman and Hall" year="1993" >}}
  Algebraic Combinatorics
  {{< /bibitem >}}
{{< /bibliography >}}
