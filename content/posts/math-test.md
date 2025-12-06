---
title: "Math Test"
date: "2019-03-12"
---

In this post, we test mathematical typesettings.

<!--more-->

## Basic KaTeX

We use $\KaTeX$. First we test inline math

This is some random math $\zeta(s)=\sum_{n=1}^\infty \frac{1}{n^s}$ and here is more text. 

How about block math, does it look okay? Let $H_n=1+\frac{1}{2}+\cdots+\frac{1}{n}$ be the harmonic numbers, show that 

$$\lim_{k\rightarrow\infty} \sum_{n_1=1}^\infty \sum_{n_2=1}^\infty \cdots\sum_{n_k=1}^\infty (-1)^{n_1+\cdots+n_k}\frac{H_{n_1}H_{n_2}\cdots H_{n_k}}{1+n_1+n_2+\cdots+n_k}=0$$

**Note:** Never use double dollar sign inline, always use in newline. How about matrices, does this look good?

$$\det \begin{pmatrix}
\gcd(1,1)& \gcd (1,2)& \cdots &\gcd(1,n)\\\
\gcd(2,1)&\gcd(2,2)& \cdots &\gcd(2,n)\\\
\vdots &\ddots & \vdots& \vdots\\\
\gcd(n,1)&\gcd(n,2)&\cdots&\gcd(n,n) 
\end{pmatrix}=\varphi(1)\varphi(2)\cdots \varphi(n)$$

**Note:** it seems that you must use three backslashes for new row. 

Now I'm going to stress test it with very long formulas, does it overflow? can it slide left and right?

$$
\frac{1}{2 \pi i} \int_{|s|=1 / \mathcal{L}} \frac{\vartheta_1(d, s) G_1(s)}{\zeta(1+s)^{k_0}} \frac{(D / d)^s d s}{s^{k_0+l_0+1}}-\frac{1}{2 \pi i} \vartheta_1(d) \mathfrak{S} \int_{|s|=1 / \mathcal{L}} \frac{(D / d)^s d s}{s^{l_0+1}} \ll \mathcal{L}^{l_0-1+\varepsilon}= \sum_{\psi \in \Psi_1} \sum_{\rho \in \mathcal{Z}(\psi)} \mathcal{C}^*(\rho, \psi)\left|H_1(\rho, \psi)+Z(\rho, \chi \psi) \overline{H_2(\rho, \psi)}\right|^2 \omega(\rho)<0.001 \mathfrak{a} \mathcal{P},
$$

Now I want to test if `\align` and `\alignat` work? Firstly,

$$
\begin{align}
   a&=b+c \\\
   d+e&=f
\end{align}
$$

Secondly,

$$
\begin{alignat}{2}
   10&x+&3&y=2\\\
   3&x+&13&y=4
\end{alignat}
$$

How about different mathematical fonts

$$ABC, \mathcal{ABC}, \mathrm{ABC}, \mathbf{ABC}, \mathfrak{ABC}, \mathbb{ABC}, \mathscr{ABC}, $$

Hebrew letters fine? $\aleph,\beth, \gimel, \daleth, \gimel$, seems good. Greek letters? $\alpha, \beta, \gamma, \Gamma, \Sigma$. How about variants? $\varphi, \varepsilon, \vartheta$. 


中文行不行？我来试试中文的行间数学公式 $e^{i\theta}=\cos\theta+i\sin\theta$ 后面再来一点文字。是否能在TeX中用中文？

$$\textrm{古来云海茫茫，道山绛阙知何处？}$$

能不能使用中文角标？测试一下$F_{浮}=\rho_{液}gV_{排}$

Emojis in math $😀^2+😛^2=😚^2$[^1]

[^1]: This is a footnote.

## Environments

Here we test various theorem, example, definition, remark, etc, environments. {{< cite "Ser79" >}}.

Currently, they cannot process shortcodes within them. This is not easy to solve, so i can only leave it as it is right now. 

{{< theorem level=2 note="Euler, 1888" >}}
Let $K$ be a number field and let $\mathfrak{p}$ be a nonzero prime ideal of $\mathcal{O}_K$.

Then
$$
\mathcal{O}_{K,\mathfrak{p}}
$$
is a discrete valuation ring.
{{< /theorem >}}
{{< proof note="Sketch" >}}
Only the main idea will be explained here… $E=mc^2$. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue condimentum sapien, non posuere sapien finibus eget. In vel rutrum massa, non vulputate augue. Quisque at gravida elit. Nam blandit, nunc et fringilla ultrices, massa tortor molestie tortor, in feugiat leo justo nec orci. Etiam molestie ultricies mauris,
{{< /proof >}}

{{< lemma level=2 >}}
Let $R$ be a discrete valuation ring with maximal ideal $\mathfrak{m}$. Then every nonzero ideal of $R$ is of the form $\mathfrak{m}^n$ for a unique integer $n \ge 0$.
{{< /lemma >}}

{{< proposition level=2 note="Standard folklore" >}}
Let $K$ be the fraction field of a discrete valuation ring $R$. Then every nonzero $x \in K^\times$ can be written uniquely as
$$
x = u \pi^n
$$
with $u \in R^\times$ a unit and $n \in \mathbb{Z}$, where $\pi$ is a fixed uniformizer.
{{< /proposition >}}
{{< proof lang="zh">}}
Yada Yada.
{{< /proof>}}

{{< corollary level=2 >}}
With notation as above, the valuation $v : K^\times \to \mathbb{Z}$ defined by $x = u\pi^{v(x)}$ is well-defined and surjective.
{{< /corollary >}}

{{< definition level=2 >}}
A **local field** is a field $K$ which is complete with respect to a discrete valuation $v$ and whose residue field is finite.
{{< /definition >}}

{{< example lang="zh" level=2 >}}
The $p$-adic numbers $\mathbb{Q}_p$ and the field of Laurent series $\mathbb{F}_q((t))$ over a finite field are examples of local fields.
{{< /example >}}

{{< question level=3 >}}
Is every finite extension of a local field again a local field?
{{< /question >}}
{{< solution >}}Blah Blah blah.
{{< /solution>}}

{{< conjecture lang="zh" level=2 note="fake" >}}
Every interesting number theorist secretly prefers nonarchimedean fields.
{{< /conjecture >}}
{{< solution lang="zh">}}Blah Blah blah.
{{< /solution>}}

{{< remark level=2 >}}
The classification of local fields shows that up to isomorphism there are only three kinds: $\mathbb{R}$, $\mathbb{C}$, and the nonarchimedean ones (which are exactly the finite extensions of $\mathbb{Q}_p$ or $\mathbb{F}_q((t))$).
{{< /remark >}}

{{< convention level=2 >}}
Throughout these notes, $p$ will always denote a rational prime [[Knu86]](#bib-Knu86), and $v_p$ the associated $p$-adic valuation on $\mathbb{Q}$.
{{< /convention >}}

{{< exercise level=3 >}}
Idk what some exercise i guess
{{< /exercise>}}

{{< claim lang="zh" >}}
对所有 $p$ 进数域都成立。
{{< /claim >}}

{{< fact >}}
Every finite extension of $\mathbb{Q}_p$ is complete.
{{< /fact >}}

{{< caveat >}}
The extension need not be Galois; only normal extensions enjoy this property.
{{< /caveat >}}

{{< algorithm note="Toy example" >}}
1. $i \gets 10$
2. **if** $i \ge 5$ **then**
3. $\quad i \gets i - 1$
4. **else**
5. **if** $i \le 3$ **then**
6. $\quad i \gets i + 2$
7. **end if**
8. **end if**
{{< /algorithm >}}


## Figures

{{< figure
    level=2
    src="https://mathworld.wolfram.com/images/eps-svg/KleinBottle_1200.svg"
    alt="Klein Bottle"
    caption="This is an image of Klein bottle"
    width="30%">}}

## Commutative diagrams

$\KaTeX$ supports simple commutative diagrams, but it does not allow advanced features like diagonal or curved arrows. See [here](https://redgregory.notion.site/Diagrams-With-KaTeX-9166ebfa650a463dbdf67357143ebaed). However, for some reason I could not get that to even work here. This is weird. Instead I can use [quiver](https://q.uiver.app/) [^2]

[^2]: This is another footnote with latex $1+1=2$


{{< quiver
    src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJBIl0sWzEsMCwiQiJdLFsxLDEsIkMiXSxbMiwwLCJEIl0sWzAsMSwiIiwwLHsiY3VydmUiOi0yfV0sWzAsMSwiIiwyLHsiY3VydmUiOjJ9XSxbMSwyXSxbMiwzXSxbMSwzXV0=&embed"
    width="60%"
    height="200px">}}

I wrote a shortcode for it to avoid the iframe being escaped by the theme. 


## References

Citing can be done with a shortcode `cite`. However, this does not work within a theorem environment since it cannot process shortcodes within shortcodes easily (it will show but the link won't work). For the latter, opt instead for generic markdown links i.e. `[[Knu86]](#bib-Knu86)`.

{{< bibliography >}}
  {{< bibitem key="Knu86" >}}
  Donald E. Knuth, *The TeXbook*, Addison-Wesley, 1986.
  {{< /bibitem >}}

  {{< bibitem key="Ser79" >}}
  Jean-Pierre Serre, *Local Fields*, Springer, 1979.
  {{< /bibitem >}}

  {{< bibitem key="Neu99" >}}
  Jürgen Neukirch, *Algebraic Number Theory*, Springer, 1999.
  {{< /bibitem >}}
{{< /bibliography >}}
