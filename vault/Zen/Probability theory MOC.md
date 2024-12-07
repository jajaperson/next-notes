---
tags:
- public
---

[Mathematics MOC](Mathematics%20MOC.md)

# Probability Theory MOC

**Probability theory** concerns the axiomatisation of probability models.
Traditional models rely on the concepts of [Set theory MOC](Set%20theory%20MOC.md) and [Measure theory MOC](Measure%20theory%20MOC.md).
It is often broken into the two branches of [discrete probability](Probability%20theory%20MOC.md#discrete-probability) and [continuous probability](Probability%20theory%20MOC.md#continuous-probability).

## Foundations

At the foundation of probability theory is the [Probability model](Probability%20model.md) $(\xi, \mathcal{F}, \mathbb{P})$, a special kind of [Measure space](Measure%20space.md) such that $\mathbb{P}(\xi)=1$
After this comes ideas such as

* [Conditional probability](Conditional%20probability.md)
* [Bonferroni inequalities](Bonferroni%20inequalities.md)
* [Independence of events](Independence%20of%20events.md)

By introducing the concept of a [Real random variable](Real%20random%20variable.md),
we can give defined values to different outcomes
and therefore make comparisons between them.
For all random variables we may speak of

* [Cumulative distribution function](Cumulative%20distribution%20function.md)
* [Expectation](Expectation.md)
* [Standard deviation](Standard%20deviation.md)
* [Statistical moment](Statistical%20moment.md)
* [Moment-generating function](Moment-generating%20function.md)
* [Probability-generating function](Probability-generating%20function.md)

The [Discrete random variable](Discrete%20random%20variable.md) and [Continuous random variable](Continuous%20random%20variable.md) are starting points
for [Discrete probability](Probability%20theory%20MOC.md#discrete-probability) and [Continuous probability](Probability%20theory%20MOC.md#continuous-probability) respectively.

## Discrete probability

Discrete probability concerns the [Discrete random variable](Discrete%20random%20variable.md).
Common distributions of such variables include

* [Bernoulli trial](Bernoulli%20trial.md)
* [Binomial distribution](Binomial%20distribution.md)
* [Poisson distribution](Poisson%20distribution.md)

## Continuous probability

Continuous probability concerns the [Continuous random variable](Continuous%20random%20variable.md),
and so it uses many of the tools of [calculus](Infinitesimal%20calculus%20MOC.md) and [analysis](Mathematics%20MOC.md#analysis).
Common distributions include

* [Uniform distribution](Uniform%20distribution.md)
* [Exponential distribution](Exponential%20distribution.md)
* [Normal distribution](Normal%20distribution.md)

## Higher concepts

* [Characteristic function (probability)](Characteristic%20function%20%28probability%29.md)
* [Multivariate random variable](Multivariate%20random%20variable.md)
* [Random function](Random%20function.md)
  * [Distribution of a function](Random%20function.md#distribution)
* [Inequalities in probability MOC](Inequalities%20in%20probability%20MOC.md)
* [Convergence concepts in probability MOC](Convergence%20concepts%20in%20probability%20MOC.md)

## Statistical inference

Using a probability model for any real-world applications involves the assumption that the parameters of a distribution are known.
Generally, this involves extrapolating from a [Random sample](Random%20sample.md),
which may then be used to generate [statistics](Statistic.md),
some of which are [estimators](Estimator.md) —
both of which are a form of [Real random variable](Real%20random%20variable.md).
Importantly, the [𝜇-estimator](%F0%9D%9C%87-estimator.md) gives rise to the [Central limits theorem](Central%20limits%20theorem.md).

Another important aspect of statistical inference is the [Statistical hypothesis](Statistical%20hypothesis.md),
a guess on how a random variable is distributed.

# 

---

\#MOC | #state/tidy | #SemBr
