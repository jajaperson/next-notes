---
tags:
- public
---

[Continuous random variable](Continuous%20random%20variable.md)

# Chi-squared distribution

A **chi-squared distributed** random variable $X \sim \chi^2_{n}$ is the sum of squares of $n$ [independent and identically distributed](Independence%20of%20random%20variables.md) $\{ Z_{i} \}_{i=1}^n$ with [standard normal distributions](Standard%20normal%20distribution.md). #m/def/prob
$$
\begin{align*}
X &= \sum_{i=1}^n (Z_{i} )^2 & Z_{i} \stackrel{\text{iid}}{\sim} \N(0,1)
\end{align*}
$$
This turns out to be a special case of the [Gamma distribution](Gamma%20distribution.md),
namely $X \sim \mathrm{Gamma}\left( \frac{n}{2}, \frac{1}{2} \right)$.

 > 
 > \[!check\]- Proof
 > Let $X = Z^2$ for $Z \sim \N(0,1)$, i.e. $X \sim \chi^2_{1}$.
 > Then
 > $$
\begin{align*}
F_{X}(x) &= \mathbb{P}(Z^2 \leq x) \\
&= \mathbb{P}(-\sqrt{ x } < Z < \sqrt{ x }) \\
&= \Phi(\sqrt{ x } ) -  \Phi(-\sqrt{ x }) \\
&= 2\Phi(\sqrt{ x }) - 1
\end{align*}
$$
 > thus
 > $$
\begin{align*}
f_{X}(x) = \varphi(\sqrt{ x }) x^{-1/2} = \frac{(1 / 2)^{1/2}}{\Gamma(1 / 2)} x^{1/2 - 1} \mathrm{e}^{-x/2}
\end{align*}
$$
 > so $X \sim \mathrm{Gamma}\left( \frac{1}{2}, \frac{1}{2} \right)$.
 > Thus by [Gamma distribution > ^Q1](Gamma%20distribution.md#q1), the claim is proven. <span class="QED"/>

## Properties

Additional properties

1. Let $\{ X_{j} \}_{j=1}^n$ be a [random sample](Random%20sample.md) of variable [independently distributed](Independence%20of%20random%20variables.md) according to the [normal distribution](Normal%20distribution.md) $\N(\mu,\sigma^2)$.
   Then the [sample variance](Sample%20variance.md) is distributed such that
   $$
  \begin{align*}
  \frac{(n-1)S_{n}^2}{\sigma^2} \sim \chi^2_{n-1}
  \end{align*}
  $$

# 

---

\#state/tidy | #lang/en | #SemBr
