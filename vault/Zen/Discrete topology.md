---
tags:
- public
alias: discrete metric
---

[Topological space](Topological%20space.md)

# Discrete topology

On any set $X$ the **discrete topology** of $X$ is one
where all subsets of $X$ are considered open (and therefore also closed, since the compliment of any subset is necessarily also a subset and therefore open),
i.e. $\mathcal T = 2^X$.
Such a topology is the [finest](Coarseness%20and%20fineness%20of%20topologies.md) topology that can be formed on any set.

## Metric

A discrete topology is [metrizable](Metric%20topology.md) with the so-called **discrete metric**
$$
\begin{align*}
\rho(x_{1},x_{2}) = \begin{cases}
1 & \text{if } x \neq y \\
0 & \text{if } x = y
\end{cases}
\end{align*}
$$
although there may exist other metricisations.

## Properties

* [A topological space is discrete iff every point is its own connected component](A%20topological%20space%20is%20discrete%20iff%20every%20point%20is%20its%20own%20connected%20component.md)

# 

---

\#state/develop | #SemBr | #lang/en
