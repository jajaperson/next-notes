---
tags:
- public
aliases:
- $p$-norm
- $p$-seminorm
- 1-norm
- 2-norm
- $\infty$-norm
---

[Analysis MOC](Analysis%20MOC.md)

# Lebesgue space

Let $(X,\Sigma,\mu)$ be a [measure space](Measure%20space.md) and let $p \in [1,\infty]$.
The **seminormed Lebesgue space** $\mathcal{L}^p(X,\mu)$ is defined as the set of all [measurable functions](Measurable%20function.md) $f: X \to \mathbb{C}$ with finite $p$-[seminorm](Seminormed%20vector%20space.md) given by *Lebesgue integral* #m/def/anal/fun
$$
\begin{align*}
\|f\|_{p} = \left( \int _{X}|f(x)|^p \, d\mu(x)  \right)^{1/p} < \infty
\end{align*}
$$
where in the case of $p = \infty$ (assuming $\mu(X) \neq 0$) we get the [essential supremum](Essential%20supremum%20and%20infimum.md)
$$
\begin{align*}
\|f\|_{\infty} = \inf \{ C \in \mathbb{R}_{\geq_{0}} : \mu(\{ s \in X : |f(s)| > C \}) = 0 \}
\end{align*}
$$
The **Lebesgue space** $L^p(X,\mu)$ is a [Banach space](Banach%20space.md) given by the [normed quotient](A%20seminorm%20induces%20a%20normed%20quotient.md) $\mathcal{L}^p(X,\mu)$, whose elements are functions up to equality [almost everywhere](Almost%20everywhere.md).

 > 
 > \[!check\]- Proof of (semi)norm
 > [Absolute homogeneity](Seminormed%20vector%20space.md#s1) is immediately clear,
 > while the the [triangle inequality](Seminormed%20vector%20space.md#s2) is given by the [Minkowski inequality](Minkowski%20inequality.md). <span class="QED"/>

 > 
 > \[!missing\]- Proof of Banach space
 > \#missing/proof

In case $X = \mathbb{N}$ and $\mu$ is the counting measure, one recovers [Lebesgue sequence space](Lebesgue%20sequence%20space.md).
The special case of [L2 space](L2%20space.md) can be be endowed with the structure of a Hilbert space (see below)

## Properties

* [Lebesgue space forms an inner product space iff p=2](Lebesgue%20space%20forms%20an%20inner%20product%20space%20iff%20p=2.md)

## Alternate approach

In the case $X = [a,b] \sube \mathbb{R}$ an alternate approach is followed by *Lyle Noakes*,
where one first defines $\tilde{L}^p(X) = C[a,b]$ with integration given by the *Riemann integral*,
and then moving to the [Banach completion](Banach%20completion.md) which is defined as $L^p[a,b]$.

# 

---

\#state/tidy | #lang/en | #SemBr
