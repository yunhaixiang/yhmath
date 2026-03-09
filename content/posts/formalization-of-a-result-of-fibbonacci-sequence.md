---
title: Formalization of a Result of Fibbonacci Sequence
date: 2026-03-08 12:00:00 -0500
categories: [expositions]
tags: [math, ai]
---

{{< pullquote author="Angus K. Rodgers">}}
Mathematics requires a small dose, not of genius, but of an imaginative freedom which, in a larger dose, would be insanity. And if mathematicians tend to burn out early in their careers, it is probably because life has forced them to acquire too much common sense, thereby rendering them too sane to work. But by then they are sane enough to teach, so a use can still be found for them.
{{< /pullquote >}}

Continuing my previous post on AI for math, I want to give a concrete example of how AI can be used to formalize a mathematical result. More specifically, in this post, I will be discussing the formalization of an elementary result about the Fibonacci sequence. The Fibbonaci sequence is a sequence $(f_n)_{n\in\mathbb Z}$ defined as follows: $f_0=0$, $f_1=1$, and $f_n=f_{n-1}+f_{n-2}$ for $n\in\mathbb Z$. The result I want to formalize is a result I really liked: $f_{\gcd(m,n)}=\gcd(f_m,f_n)$ for all $m,n\in\mathbb N$, which is called the _strong divisibility_ of Fibbonacci sequence. In particular, this implies that if $n,m\in\mathbb N$ are such that $n\mid m$ then $f_n\mid f_m$. Along the way, I will formalize some other elementary results of Fibbonacci sequence, such as the closed form formula for $f_n$. I will be using Lean proof assistant.

## Lean Syntax

We begin by defining Fibbonacci sequence. 

```lean
def fib : Nat -> Nat
| 0 => 0
| 1 => 1
| n + 2 => fib (n + 1) + fib (n)

#eval fib 10
```

One can use the middle line to indicate "divides"

```lean
example : 3 ∣ 12 := by
  change ∃ k, 12 = 3 * k
  exact ⟨4, rfl⟩
```

The `Nat` type already has gcd implemented

```lean
example : Nat.gcd 12 18 = 6 := by
  rfl
#eval Nat.gcd 12 18
```

## Proof of Strong Divisibility

