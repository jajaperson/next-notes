---
tags:
- public
---

[Continuous random variable](Continuous%20random%20variable.md)

# Gamma distribution

A **gamma distributed** random variable $Y \sim \mathrm{Gamma}(a,\lambda)$ where $a,\lambda>0$ is described by the [probability density function](Probability%20density%20function.md) #m/def/prob
$$
\begin{align*}
f_{Y}(y) = \frac{\lambda^a}{\Gamma(a) } y^{a-1} \mathrm{e^{-\lambda y}}
\end{align*}
$$
where $\Gamma$ is the [gamma function](Gamma%20function.md).

## Properties

1. [Expectation](Expectation.md): $\Ex[Y] = \frac{a}{\lambda}$ ^P1
1. [Variance](Standard%20deviation.md): $\Var[X] = \frac{a}{\lambda^2}$ ^P2
1. [Moments](Statistical%20moment.md): $\Ex[Y^n] = \lambda^{-n} \frac{\Gamma(a+n)}{\Gamma(a)}$ for $n > -a$ ^P3

Furthermore

1. The sum of $a$ independent [exponential](Exponential%20distribution.md) random variables is $\mathrm{Gamm a}(a,\lambda)$ ^Q1
1. Conjugate prior to Poisson #to/elaborate
1. A special case is the [Chi-squared distribution](Chi-squared%20distribution.md)

## Relationship to other distributions

* By the [Central limits theorem](Central%20limits%20theorem.md) for integer $n$, $\mathrm{Gamma}(n,\lambda) \rightsquigarrow \N\left( \frac{n}{\lambda}, \frac{n}{\lambda^2} \right)$ as $n \to \infty$.

# 

---

\#state/develop | #lang/en | #SemBr
