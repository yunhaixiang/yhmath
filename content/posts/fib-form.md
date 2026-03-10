---
title: Formalization of a Result of Fibonacci Sequence
date: 2026-03-08 12:00:00 -0500
categories: [expositions]
tags: [math, ai]
---

{{< pullquote author="Angus K. Rodgers">}}
Mathematics requires a small dose, not of genius, but of an imaginative freedom which, in a larger dose, would be insanity. And if mathematicians tend to burn out early in their careers, it is probably because life has forced them to acquire too much common sense, thereby rendering them too sane to work. But by then they are sane enough to teach, so a use can still be found for them.
{{< /pullquote >}}

Continuing my previous post on AI for math, I want to give a concrete example of how AI can be used to formalize a mathematical result. More specifically, in this post, I will be formalizing an elementary result about the Fibonacci sequence that I really like. The Fibbonaci sequence is a sequence $(f_n)_{n\in\mathbb Z}$ defined as follows: $f_0=0$, $f_1=1$, and $f_n=f_{n-1}+f_{n-2}$ for $n\in\mathbb Z$. The result I want to formalize is: $f_{\gcd(m,n)}=\gcd(f_m,f_n)$ for all $m,n\in\mathbb N$, which is called the _strong divisibility_ of Fibonacci sequence. In particular, this implies that if $n,m\in\mathbb N$ are such that $n\mid m$ then $f_n\mid f_m$ -- This is known as _weak divisbility_. I will be using Lean proof assistant and Codex to _vibe prove_ this result. Find the GitHub repo [here](https://github.com/yunhaixiang/fib_lean).

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
theorem bezout (a b : Nat) : ∃ x y : Int, (Nat.gcd a b : Int) = x * a + y * b := by
  refine ⟨a.gcdA b, a.gcdB b, ?_⟩
  -- `Nat.gcd_eq_gcd_ab` gives the Bezout identity with coefficients `gcdA` and `gcdB`.
  calc
    (Nat.gcd a b : Int) = (a : Int) * a.gcdA b + (b : Int) * a.gcdB b := Nat.gcd_eq_gcd_ab a b
    _ = a.gcdA b * a + a.gcdB b * b := by ring

```
This is basically delegating the theorem to what is already proved in Mathlib.

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
More abstractly, let $V$ be the vector space over $\mathbb R$ (or free module over $\mathbb Z$ if you like, which is arguably better) of all sequences $(a_n)_{n\in\mathbb Z}$ of real numbers that satisfy $a_{n+2}=a_{n+1}+a_n$ for all $n\in\mathbb Z$, then $V$ is $2$-dimensional, by an isomorphism
$$\phi:V\rightarrow \mathbb R^2\qquad \phi((a_n))=(a_0,a_1)$$ 
Let $T:V\rightarrow V$ be the shifting operator $(a_n)_n\mapsto (a_{n+1})_n$ then with respect to the ordered basis $((f_n)_n,(f_{n-1})_n)$, the operator $T$ has matrix $A$. It is easy to see $T$ is invertible, since shifting is reversable. It is also much more intuitive to see that in this same  basis $((f_n)_n,(f_{n-1})_n)$, we have $T^n$ has matrix that of in (3).
{{< /remark >}}

With the linear algebra setup above, we can obtain many classic results about Fibonacci numbers immediately. 


{{< theorem note="Cassini" id="thm-cas" >}}
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
{{< theorem note="Fibonacci Addition Formula" id="thm-fib-add">}}
For $n,m\in\mathbb Z$, we have $f_{m+n}=f_mf_{n+1}+f_{m-1}f_n$.
{{< /theorem >}}
{{< proof >}}
For $n,m\in\mathbb Z$, we have $A^{m+n}=A^mA^n$. Use (3) then compare the $(2,1)$-entry, and the result follows.
{{< /proof >}}
{{< remark >}}
The formula in {{< refer "thm-fib-add">}} admits a natural interpretation in terms of [domino tilings](https://math.berkeley.edu/~tb65536/Fibonacci_Exposition.pdf).
{{< /remark >}}
{{< theorem note="Fibonacci Negation Formula">}}
For $n\in\mathbb Z$, we have $f_{-n}=(-1)^{n+1}f_n$.
{{< /theorem >}}
{{< proof >}}
By the $2$-by-$2$ inverse matrix formula on (3), we find 
$$A^{-n}=\frac{1}{f_{n-1}f_{n+1}-f_n^2}\begin{pmatrix}f_{n-1}&-f_n\\ -f_n&f_{n+1}\end{pmatrix}=\begin{pmatrix}(-1)^nf_{n-1}&(-1)^{n+1}f_n\\ (-1)^{n+1}f_n&(-1)^nf_{n+1}\end{pmatrix}$$
by [Cassini's identity](#thm-cas). Comparing $(2,1)$-entry with (3) then we are done.
{{< /proof >}}

We now know enough to prove divisibility and strong divisibility. There is a natural reduction mod $n\ne 0$ of matrices
$$\mathrm M_2(\mathbb Z)\xrightarrow{\mathrm{mod\ }n} \mathrm M_2(\mathbb Z/n\mathbb Z)$$
reducing mod $n$ entry wise. Since matrix addition and multiplications are algebraic, this is a homomorphhism.

{{< theorem id="thm-div">}}
For $n,m\in\mathbb Z$ we have if $n\mid m$ then $f_n\mid f_m$
{{< /theorem >}}
{{< proof >}}
Note that $A^n$ is diagonal mod $f_n$ for all $n\ne 0$. Thus $A^{kn}=(A^n)^k$ is diagonal mod $f_n$ for any $k$ and $n\ne 0$, and in particular the $(2,1)$-entry of $A^{kn}$ which is $f_{kn}$ is divisible by $f_n$. 
{{< /proof >}}

{{< remark >}}
Converse to {{< refer id="thm-div" >}}, one has $f_n\mid f_m$ implies $n\mid m$ for all $n,m\in\mathbb Z$ with $|n|\ge 3$ (exercise).
{{< /remark >}}

{{< theorem id="thm-strong-div">}}
For $n,m\in\mathbb Z$, we have $\gcd(f_n,f_m)=f_{\gcd(n,m)}$.
{{< /theorem >}}
{{< proof >}}
It follows from {{< refer id="thm-div" >}} that $f_{\gcd(n,m)}\mid \gcd(f_n,f_m)$, thus it suffice to show that $ \gcd(f_n,f_m)\mid f_{\gcd(n,m)}$. By Bézout, there are integers $a,b\in\mathbb Z$ such that $\gcd(m,n)=am+bn$. Thus $A^{\gcd(m,n)}=A^{am+bn}=(A^m)^a(A^n)^b$. Since $A^m$ and $A^n$ are diagonal mod $\gcd(f_m,f_n)$ so is $A^{\gcd(m,n)}$, in particular the $(2,1)$-entry of $A^{\gcd(m,n)}$ which is $f_{\gcd(n,m)}$ is divisible by $\gcd(f_n,f_m)$. 
{{< /proof >}}

{{< remark >}}
Alternative to the proof in {{< refer "thm-strong-div">}} (and less elegant), one can prove the result by showing that $\gcd(f_{n},f_{m})=\gcd(f_{n-m},f_m)$ for all $m,n\in\mathbb Z$, which means we can run the Euclidean algorithm on the indices. This follows from the following.
{{< /remark >}}

{{< lemma >}}
For $m,n\in\mathbb Z$, we have $\gcd(f_{n+m},f_m)=\gcd(f_n,f_m)$. 
{{< /lemma >}}
{{< proof >}}
We claim that $\gcd(f_n,f_{n+1})=1$ for all $n$. By [Cassini's identity](#thm-cas), $f_{n-1}f_{n+1}-f_n^2=(-1)^n$, so modulo $f_n$, we have $f_{n-1}f_{n+1}\equiv (-1)^n\pmod{f_n}$, which means $f_{n+1}$ is invertible mod $f_n$, so it must be coprime to $f_n$. By [Fibonacci addition formula](#thm-fib-add), we have $f_{m+n}=f_mf_{n+1}+f_{m-1}f_n$, which modulo $f_n$, implies $f_{m+n}\equiv f_mf_{n+1}\pmod{f_n}$, hence $\gcd(f_{m+n},f_n)=\gcd(f_mf_{n+1},f_n)$. Since $\gcd(f_n,f_{n+1})=1$, we have $\gcd(f_{m+n},f_n)=\gcd(f_m,f_n)$, and we are done.
{{< /proof >}}

We can even find a general formula for the Fibonacci numbers using the linear algebra developed above. Let $T$ be the operator in {{< refer "rmk-vec" >}}, it has minimal polynomial $x^2-x-1$ coming from the recurrence and eigenvalues $\varphi=\frac{1+\sqrt{5}}{2}$ and its conjugate $\overline{\varphi}=\frac{1-\sqrt{5}}{2}$. The sequences $(\varphi^n)_n$ and $(\overline{\varphi}^n)_n$ are linearly independent and both are elements of the vector space, hence they form a basis of the $2$-dimensional vector space $V$. Thus $f_n=A\varphi^n+B\overline{\varphi}_n$ for some real numbers $A,B$, which one can find by evaluating at $n=0,1$ and solving a system of linear equations. One finds the _Binet formula_:
$$f_n=\frac{\varphi^n-\overline{\varphi}^n}{\sqrt{5}}$$
for Fibonacci numbers. Generating function methods can also be used to arrive at this formula, but I will not expand on that.

## Formalization

To make formalization easier, we show identity (3) with induction in lean.

```lean
open Matrix

def A : Matrix (Fin 2) (Fin 2) Nat := !![1, 1; 1, 0]

theorem fib_matrix_pow_succ (n : Nat) :
    A ^ (n + 1) = !![fib (n + 2), fib (n + 1); fib (n + 1), fib n] := by
  induction n with
  | zero =>
      simp [A, fib]
  | succ n ih =>
      rw [pow_succ, ih]
      ext i j
      fin_cases i
      · fin_cases j <;> simp [A, Matrix.mul_apply, Fin.sum_univ_two, fib, add_comm, add_left_comm]
      · fin_cases j <;> simp [A, Matrix.mul_apply, Fin.sum_univ_two, fib, add_comm, add_left_comm]
```

Then we proceed to prove weak divisibility.
First, lower right of power of diagonal is 0.

```lean
theorem lowerLeft_diagonal_pow_zero {R : Type*} [Semiring R] (a b : R) (k : Nat) :
    (((!![a, 0; 0, b] : Matrix (Fin 2) (Fin 2) R) ^ k) 1 0) = 0 := by
  induction k with
  | zero =>
      simp
  | succ k ih =>
      rw [pow_succ]
      simp [Matrix.mul_apply, Fin.sum_univ_two, ih]
```

Then, with this the weak divisibility result follows.

```lean {collapsed=true}
theorem fib_dvd_of_dvd {n m : Nat} (h : n ∣ m) : fib n ∣ fib m := by
  rcases h with ⟨k, rfl⟩
  cases n with
  | zero =>
      simp [fib]
  | succ n =>
      cases k with
      | zero =>
          simp [fib]
      | succ k =>
          let d := fib (n + 1)
          have hdiag :
              AMod d ^ (n + 1) =
                !![(fib (n + 2) : ZMod d), 0; 0, fib n] := by
            simpa [d] using fib_matrix_pow_succ_mod d n
          have hoff :
              ((AMod d ^ ((n + 1) * (k + 1))) 1 0) = 0 := by
            rw [pow_mul, hdiag]
            exact lowerLeft_diagonal_pow_zero (fib (n + 2) : ZMod d) (fib n : ZMod d) (k + 1)
          have hentry :
              ((AMod d ^ ((n + 1) * (k + 1))) 1 0) =
                (fib ((n + 1) * (k + 1)) : ZMod d) := by
            have hpos : 0 < (n + 1) * (k + 1) := Nat.mul_pos (Nat.succ_pos _) (Nat.succ_pos _)
            simpa [d] using congrArg (fun M => M 1 0) (fib_matrix_pow_mod (d := d) hpos)
          have hzero : (fib ((n + 1) * (k + 1)) : ZMod d) = 0 := by
            rw [← hentry]
            exact hoff
          simpa [d] using (ZMod.natCast_eq_zero_iff (fib ((n + 1) * (k + 1))) d).mp hzero
```

Finally I fed the proof of strong divisibility to Codex and prompt it to generate a lean proof. After 31 minutes, it finally produced code that could run, it is the following.

```lean
theorem fib_eq_natFib : ∀ n : Nat, fib n = Nat.fib n
  | 0 => by simp [fib, Nat.fib_zero]
  | 1 => by simp [fib, Nat.fib_one]
  | n + 2 => by
      rw [fib, fib_eq_natFib (n + 1), fib_eq_natFib n, Nat.fib_add_two, add_comm]

theorem lowerLeft_diagonal_unit_combo_zero {R : Type*} [CommRing R]
    (u v : (Fin 2 → R)ˣ) (x y : Int) :
    ((((Units.map (Matrix.diagonalRingHom (Fin 2) R) u) ^ x *
        (Units.map (Matrix.diagonalRingHom (Fin 2) R) v) ^ y :
          Units (Matrix (Fin 2) (Fin 2) R)) :
      Matrix (Fin 2) (Fin 2) R) 1 0) = 0 := by
  let F : (Fin 2 → R)ˣ →* (Matrix (Fin 2) (Fin 2) R)ˣ :=
    Units.map (Matrix.diagonalRingHom (Fin 2) R)
  calc
    ((((F u) ^ x * (F v) ^ y : Units (Matrix (Fin 2) (Fin 2) R)) :
      Matrix (Fin 2) (Fin 2) R) 1 0)
      = (((F (u ^ x * v ^ y) : Units (Matrix (Fin 2) (Fin 2) R)) :
          Matrix (Fin 2) (Fin 2) R) 1 0) := by
            rw [← map_zpow, ← map_zpow, ← map_mul]
    _ = 0 := by
      change (((Matrix.diagonal (((u ^ x) * (v ^ y) : (Fin 2 → R)ˣ) : Fin 2 → R)) :
        Matrix (Fin 2) (Fin 2) R) 1 0) = 0
      simp [Matrix.diagonal]

theorem fib_gcd (m n : Nat) : Nat.gcd (fib m) (fib n) = fib (Nat.gcd m n) := by
  apply Nat.dvd_antisymm
  · rcases m.eq_zero_or_pos with rfl | hm
    · simp [fib]
    rcases n.eq_zero_or_pos with rfl | hn
    · simp [fib]
    let d := Nat.gcd (fib m) (fib n)
    have hdm : d ∣ fib m := Nat.gcd_dvd_left (fib m) (fib n)
    have hdn : d ∣ fib n := Nat.gcd_dvd_right (fib m) (fib n)
    have hdet : IsUnit (Matrix.det (AMod d)) := by
      simp [AMod, Matrix.det_fin_two_of]
    let uA : (Matrix (Fin 2) (Fin 2) (ZMod d))ˣ := Matrix.nonsingInvUnit (AMod d) hdet
    let F : (Fin 2 → ZMod d)ˣ →* (Matrix (Fin 2) (Fin 2) (ZMod d))ˣ :=
      Units.map (Matrix.diagonalRingHom (Fin 2) (ZMod d))
    have hm0 : (fib m : ZMod d) = 0 := (ZMod.natCast_eq_zero_iff (fib m) d).2 hdm
    have hn0 : (fib n : ZMod d) = 0 := (ZMod.natCast_eq_zero_iff (fib n) d).2 hdn
    have hdiagm_box : AMod d ^ m = !![(fib (m + 1) : ZMod d), 0; 0, fib (m - 1)] := by
      simpa [hm0] using fib_matrix_pow_mod (d := d) hm
    have hdiagn_box : AMod d ^ n = !![(fib (n + 1) : ZMod d), 0; 0, fib (n - 1)] := by
      simpa [hn0] using fib_matrix_pow_mod (d := d) hn
    have hdiagm : AMod d ^ m =
        Matrix.diagonal ![(fib (m + 1) : ZMod d), fib (m - 1)] := by
      calc
        AMod d ^ m = !![(fib (m + 1) : ZMod d), 0; 0, fib (m - 1)] := hdiagm_box
        _ = Matrix.diagonal ![(fib (m + 1) : ZMod d), fib (m - 1)] := by
          ext i j
          fin_cases i
          · fin_cases j <;> simp [Matrix.diagonal]
          · fin_cases j <;> simp [Matrix.diagonal]
    have hdiagn : AMod d ^ n =
        Matrix.diagonal ![(fib (n + 1) : ZMod d), fib (n - 1)] := by
      calc
        AMod d ^ n = !![(fib (n + 1) : ZMod d), 0; 0, fib (n - 1)] := hdiagn_box
        _ = Matrix.diagonal ![(fib (n + 1) : ZMod d), fib (n - 1)] := by
          ext i j
          fin_cases i
          · fin_cases j <;> simp [Matrix.diagonal]
          · fin_cases j <;> simp [Matrix.diagonal]
    have hum_raw :
        (((uA ^ m : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
          Matrix (Fin 2) (Fin 2) (ZMod d))) =
            Matrix.diagonal ![(fib (m + 1) : ZMod d), fib (m - 1)] := by
      simpa [uA, Matrix.nonsingInvUnit] using hdiagm
    have hun_raw :
        (((uA ^ n : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
          Matrix (Fin 2) (Fin 2) (ZMod d))) =
            Matrix.diagonal ![(fib (n + 1) : ZMod d), fib (n - 1)] := by
      simpa [uA, Matrix.nonsingInvUnit] using hdiagn
    let um : (Fin 2 → ZMod d)ˣ :=
      (Matrix.isUnit_diagonal.mp (hum_raw ▸ (uA ^ m).isUnit)).unit
    let un : (Fin 2 → ZMod d)ˣ :=
      (Matrix.isUnit_diagonal.mp (hun_raw ▸ (uA ^ n).isUnit)).unit
    have hum : uA ^ m = F um := by
      apply Units.ext
      calc
        (((uA ^ m : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
          Matrix (Fin 2) (Fin 2) (ZMod d))) =
            Matrix.diagonal ![(fib (m + 1) : ZMod d), fib (m - 1)] := hum_raw
        _ = ((F um : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
              Matrix (Fin 2) (Fin 2) (ZMod d)) := by
              simp [F, um, Matrix.diagonal]
    have hun : uA ^ n = F un := by
      apply Units.ext
      calc
        (((uA ^ n : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
          Matrix (Fin 2) (Fin 2) (ZMod d))) =
            Matrix.diagonal ![(fib (n + 1) : ZMod d), fib (n - 1)] := hun_raw
        _ = ((F un : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
              Matrix (Fin 2) (Fin 2) (ZMod d)) := by
              simp [F, un, Matrix.diagonal]
    obtain ⟨x, y, hbez⟩ := bezout m n
    have hg0 :
        (((uA ^ (Nat.gcd m n : Int) : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
          Matrix (Fin 2) (Fin 2) (ZMod d)) 1 0) = 0 := by
      rw [hbez, _root_.zpow_add, _root_.zpow_mul', _root_.zpow_mul',
        _root_.zpow_natCast, _root_.zpow_natCast, hum, hun]
      simpa [F] using lowerLeft_diagonal_unit_combo_zero (R := ZMod d) um un x y
    have hgpos : 0 < Nat.gcd m n := Nat.gcd_pos_of_pos_left n hm
    have hentry :
        (((uA ^ (Nat.gcd m n : Int) : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
          Matrix (Fin 2) (Fin 2) (ZMod d)) 1 0) =
            (fib (Nat.gcd m n) : ZMod d) := by
      simpa [uA] using congrArg (fun M => M 1 0) (fib_matrix_pow_mod (d := d) hgpos)
    have hzero : (fib (Nat.gcd m n) : ZMod d) = 0 := by
      calc
        (fib (Nat.gcd m n) : ZMod d) =
            (((uA ^ (Nat.gcd m n : Int) : Units (Matrix (Fin 2) (Fin 2) (ZMod d))) :
              Matrix (Fin 2) (Fin 2) (ZMod d)) 1 0) := by symm; exact hentry
        _ = 0 := hg0
    exact (ZMod.natCast_eq_zero_iff (fib (Nat.gcd m n)) d).1 hzero
  · exact Nat.dvd_gcd (fib_dvd_of_dvd (Nat.gcd_dvd_left m n)) (fib_dvd_of_dvd (Nat.gcd_dvd_right m n))
```
