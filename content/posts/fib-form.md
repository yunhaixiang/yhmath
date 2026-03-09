---
title: Formalization of a Result of Fibonacci Sequence
date: 2026-03-08 12:00:00 -0500
categories: [expositions]
tags: [math, ai]
---

{{< pullquote author="Angus K. Rodgers">}}
Mathematics requires a small dose, not of genius, but of an imaginative freedom which, in a larger dose, would be insanity. And if mathematicians tend to burn out early in their careers, it is probably because life has forced them to acquire too much common sense, thereby rendering them too sane to work. But by then they are sane enough to teach, so a use can still be found for them.
{{< /pullquote >}}

Continuing my previous post on AI for math, I want to give a concrete example of how AI can be used to formalize a mathematical result. More specifically, in this post, I will be discussing the formalization of an elementary result about the Fibonacci sequence. The Fibbonaci sequence is a sequence $(f_n)_{n\in\mathbb Z}$ defined as follows: $f_0=0$, $f_1=1$, and $f_n=f_{n-1}+f_{n-2}$ for $n\in\mathbb Z$. The result I want to formalize is a result I really liked: $f_{\gcd(m,n)}=\gcd(f_m,f_n)$ for all $m,n\in\mathbb N$, which is called the _strong divisibility_ of Fibonacci sequence. In particular, this implies that if $n,m\in\mathbb N$ are such that $n\mid m$ then $f_n\mid f_m$. Along the way, I will formalize some other elementary results of Fibonacci sequence, such as the closed form formula for $f_n$. I will be using Lean proof assistant.

## Lean Syntax

We begin by defining Fibonacci sequence. 

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

Now we can try formalizing Bezout's lemma. 

```lean

```


## Proof of Strong Divisibility

We give the following proof of strong divisibility.
We observe that for all $n\in\mathbb Z$

$$\begin{pmatrix}f_{n+1}\\ f_n\end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix}f_{n}\\ f_{n-1}\end{pmatrix} $$
Therefore for all $n\ge 0$
$$\begin{pmatrix}f_{n+1}\\ f_n\end{pmatrix} =\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n \begin{pmatrix}f_{1}\\ f_{0}\end{pmatrix}=\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n \begin{pmatrix}1\\ 0\end{pmatrix}\tag{1}$$
and offsetting the index by $1$ we have for all $n\ge 0$
$$\begin{pmatrix}f_{n}\\ f_{n-1}\end{pmatrix} =\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n \begin{pmatrix}f_{0}\\ f_{-1}\end{pmatrix}=\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n \begin{pmatrix}0\\ 1\end{pmatrix}\tag{2}$$

Since we know where the standard basis vectors map to, if we let $$A=\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$$
then we have for all $n\ge 0$
$$A^n=\begin{pmatrix} f_{n+1} & f_n \\ f_n & f_{n-1} \end{pmatrix}\tag{3}$$
Since $\det A=-1$, $A$ is invertible, and by (1) its inverse satisfies
$$\begin{pmatrix}f_{n}\\ f_{n-1}\end{pmatrix} = A^{-1} \begin{pmatrix}f_{n+1}\\ f_{n}\end{pmatrix} $$
for all $n\ge 0$. Therefore equations (1) and (2) holds hold for all $n\in\mathbb Z$, and hence equation (3) hold for all $n\in\mathbb Z$ as well. 
{{< remark >}}
We can find $A^{-1}$ with a formula, but one can avoid that for a more conceptual approach. Observe for all $n\in\mathbb Z$
$$\begin{pmatrix}f_{n}\\ f_{n-1}\end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix}f_{n+1}\\ f_{n}\end{pmatrix} $$
by definition of $f_n$. This reverses what $A$ does, so we expect $B$ to be the inverse of $A$ where 
$$B=\begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}$$
Since $A$ shifts the vector $(f_n,f_{n-1})$ forward to $(f_{n+1},f_n)$ and $B$ shifts the vector  $(f_n,f_{n-1})$ backwards to $(f_{n-1},f_{n-2})$, they cancel each other out. Therefore $AB$ and $BA$ fix the set of vectors $\{(f_{n+1},f_n):n\in\mathbb Z\}$, in particular they fix the standard basis vectors $(1,0)=(f_1,f_0)$ and $(0,1)=(f_0,f_{-1})$, hence $AB=BA=I$, and $B=A^{-1}$. 
{{< /remark >}}

{{< remark id="rmk-vec">}}
More abstractly, let $V$ be the vector space over $\mathbb Q$ (or free module over $\mathbb Z$ if you like, which is arguably better) of all sequences $(a_n)_{n\in\mathbb Z}$ of rational numbers that satisfy $a_{n+2}=a_{n+1}+a_n$ for all $n\in\mathbb Z$, then $V$ is $2$-dimensional, by an isomorphism
$$\phi:V\rightarrow \mathbb Q^2\qquad \phi((a_n))=(a_0,a_1)$$ 
Let $T:V\rightarrow V$ be the shifting operator $(a_n)_n\mapsto (a_{n+1})_n$ then with respect to the ordered basis $((f_n)_n,(f_{n-1})_n)$, the operator $T$ has matrix $A$. It is easy to see $T$ is invertible, since shifting is reversable. It is also much more intuitive to see that in this same  basis $((f_n)_n,(f_{n-1})_n)$, we have $T^n$ has matrix that of in (3).
{{< /remark >}}

With the linear algebra setup above, we can obtain many classic results about Fibonacci numbers immediately. 


{{< theorem note="Cassini" >}}
For $n\in\mathbb Z$, we have $f_{n-1}f_{n+1}-f_n^2=(-1)^n$.
{{< /theorem >}}
{{< proof >}}
Using identity (3), taking determinants yields the result immediately, as $\det A=-1$. 
{{< /proof >}}

{{< theorem note="d'Ocagne">}}For $n,m\in\mathbb Z$, we have $f_{m+1}f_n-f_{m}f_{n+1}=(-1)^mf_{n-m}$
{{< /theorem >}}
{{< proof >}}
For $n,m\in\mathbb Z$, we have $\det(A^ne_1,A^me_1)=\det(A^m)\det(A^{n-m}e_1,e_1)$. The result follows. 
{{< /proof >}}
{{< theorem note="Vajda">}}For $n,i,j\in\mathbb Z$, we have $f_{n+i}f_{n+j}-f_nf_{n+i+j}=(-1)^nf_if_j$
{{< /theorem >}}
{{< proof >}}
By {{< refer id="rmk-vec">}}, the operator $T$ acts as shifting, with matrix $A$. We have
$$A^n\begin{pmatrix}f_i\\0\end{pmatrix}=\begin{pmatrix}f_{n+i}\\ f_n\end{pmatrix}\quad\mathrm{and}\quad A^n\begin{pmatrix}f_{i+j}\\ f_j\end{pmatrix}=\begin{pmatrix}f_{n+i+j}\\ f_{n+j}\end{pmatrix}$$ 
Therefore we have
$$\det\begin{pmatrix}f_{n+i}&f_{n+i+j}\\ f_n&f_{n+j}\end{pmatrix}=\det A^n\det\begin{pmatrix}f_i&f_{i+j}\\0&f_j\end{pmatrix} $$
and the result follows. 
{{< /proof >}}
{{< theorem note="Fibonacci Addition Formula">}}
For $n,m\in\mathbb Z$, we have $f_{m+n}=f_mf_{n+1}+f_{m-1}f_n$.
{{< /theorem >}}
{{< proof >}}
For $n,m\in\mathbb Z$, we have $A^{m+n}=A^mA^n$. Use (3) then compare the $(2,1)$-entry, and the result follows.
{{< /proof >}}

{{< theorem note="Fibonacci Negation Formula">}}
For $n\in\mathbb Z$, we have $f_{-n}=(-1)^{n+1}f_n$.
{{< /theorem >}}
{{< proof >}}
By the $2$-by-$2$ inverse matrix formula on (3), we find 
$$A^{-n}=$$
{{< /proof >}}



{{< theorem >}}
For $n,m\in\mathbb Z$ we have $n\mid m$ iff $f_n\mid f_m$
{{< /theorem >}}

