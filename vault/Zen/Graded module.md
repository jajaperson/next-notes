---
tags:
- public
---

[Module theory MOC](Module%20theory%20MOC.md)

# Graded module

Let $R$ be a $\mathfrak{U}$-[graded ring](Graded%20ring.md). A **graded module** $M$ over $R$ is a [module](Module.md) over $R$ with [submodules](Submodule.md) $(M_{\alpha})_{\alpha \in \mathfrak{U}}$ such that $M$ is the [direct sum](Direct%20sum%20of%20modules.md) $\bigoplus_{\alpha \in \mathfrak{U}} M_{\alpha}$ and #m/def/module
$$
\begin{align*}
R_{\alpha} \cdot M_{\beta} \sube V_{\alpha+\beta}
\end{align*}
$$
for $\alpha,\beta \in \mathfrak{U}$.

## Category of graded modules

Many of our typical module constructions carry over.

* *Homomorphism of graded modules*
* [Graded submodule](Graded%20submodule.md), *Quotient graded module*
* *Direct sum of graded modules*

## Properties

* If $M$ is a graded [module over a](Module%20over%20a%20unital%20associative%20algebra.md) [graded](Graded%20algebra.md) associative or Lie algebra $A$, then $a \in A_{\alpha}$ acts as a [Homomorphism of graded vector spaces > ^homogenous](Homomorphism%20of%20graded%20vector%20spaces.md#homogenous) operator of degree $\alpha$.[^Lie]

* The grades of a graded module may be shifted arbitrarily, see [Shifted graded module](Shifted%20graded%20module.md).
  
  [^Lie]: For the Lie case, [this abuse of terminology](Module%20over%20a%20Lie%20algebra.md) works since *The universal enveloping algebra of a Lie algebra inherits its graded structure*.

## See also

* [Graded structure](Graded%20structure.md)

# 

---

\#state/tidy | #lang/en | #SemBr
