---
tags:
- public
---

[Probability theory MOC](Probability%20theory%20MOC.md)

# Real random variable

A **real random variable**^\[German *Zufallsvariable*\] assigns a numerical value to an experimental outcome,
that is world-state.
In this way a random variable $X$ in the [Probability model](Probability%20model.md) $(\xi, \mathcal{F}, \mathbb P)$ may be identified with a $\mathbb{P}$-[measurable](Measurable%20function.md) function[^md]
$$
\begin{align*}
X: \xi \to \mathbb{R}
\end{align*}
$$

[^md]: See also [Multivariate random variable](Multivariate%20random%20variable.md) and the more [General random variable](General%20random%20variable.md)

This turns out to be an incredibly useful concept,
since it allows for a very natural comparison between outcomes.
The notational convention is to use an uppercase letter $X$ for the random variable,
in which case $x$ is used for specific values.
Furthermore, $X$ itself is often used as a shorthand for $X(s)$ where $s \in \xi$ is the *actual outcome* (world-state).
We can then define the probability of $X = x$ as follows
$$
\begin{align*}
\mathbb{P}(X = x) = \mathbb{P}(X(s) = x) = \mathbb{P}(\{ s \in \xi \mid X(s) = s \})
\end{align*}
$$
where a similar construction may be used for any other predicate.
This definition naturally gives way to the distinction between a [Discrete random variable](Discrete%20random%20variable.md)
and a [Continuous random variable](Continuous%20random%20variable.md):

* The range of a [Discrete random variable](Discrete%20random%20variable.md) forms a set of cardinality $\leq \aleph_{0}$
* If the probability of any exact value $\mathbb{P}(X = x) = 0$
  then $X$ is a [Continuous random variable](Continuous%20random%20variable.md).
* Probability which are neither of these are *mixed variables*.
* One refers to values or ranges with nonzero probabilities as the [support](Support%20of%20a%20map.md) of $X$

For both of these it is possible to define the following

* [Independence of random variables](Independence%20of%20random%20variables.md)
* [Cumulative distribution function](Cumulative%20distribution%20function.md)
* [Expectation](Expectation.md)
* [Standard deviation](Standard%20deviation.md)

## Remarks

* A function of a random variable is a [Random function](Random%20function.md)
* [Sum of independent random variables](Sum%20of%20independent%20random%20variables.md)

# 

---

\#state/tidy | #SemBr | #lang/en
