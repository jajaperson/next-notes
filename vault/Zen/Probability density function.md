---
tags:
- public
alias: probability density
---

[Probability theory MOC](Probability%20theory%20MOC.md)

# Probability density function

Consider a [probability model](Probability%20model.md) $(\xi,\mathcal{F},\mathbb{P})$.
The **probability density function** $f_{X}$ of a [general random variable](General%20random%20variable.md) $X \to \xi$ of a [measure space](Measure%20space.md) $(\mathcal{X}, \Sigma, \mu)$ is the [Radon-Nikodym derivative](Radon-Nikodym%20theorem.md)
$$
\begin{align*}
f_{X} = \frac{d X_{*}\mathbb{P}}{d\mu}
\end{align*}
$$
where $X_{*}\mathbb{P}$ is the [Pushforward measure](Pushforward%20measure.md).

## Real random variable

For the simple case of a [real random variable](Real%20random%20variable.md) the probability density function is simply the derivative of the [cumulative distribution function](Cumulative%20distribution%20function.md).

# 

---

\#state/tidy  | #lang/en | #SemBr
