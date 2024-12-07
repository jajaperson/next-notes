---
tags:
- public
alias: graded
---

[Algebra theory MOC](Algebra%20theory%20MOC.md)

# Graded algebra

Let $(M, +, 0)$ be a [monoid](Monoid.md).
An [algebra](Algebra%20over%20a%20field.md) $(A, \cdot)$ over $\mathbb{K}$ is said to be $M$-**graded** iff it is an $M$-[graded vector space](Graded%20vector%20space.md) $A = \bigoplus_{\alpha \in M} A_{\alpha}$
such that #m/def/falg
$$
\begin{align*}
A_{\alpha} \cdot A_{\beta} \sube A_{\alpha + \beta}
\end{align*}
$$
for any $\alpha,\beta \in M$.
If $(A, \cdot)$ is a [unital associative algebra](Unital%20associative%20algebra.md), this definition is equivalent to that of a [graded ring](Graded%20ring.md),
and hence $1 \in A+0$.

## Category of graded algebras

Many of our typical algebra constructions carry over.

* *Homomorphism of graded algebras*
* [Graded subalgebra](Graded%20subalgebra.md), *Quotient graded algebra*

## Properties

* If $M \leq \mathbb{K}^+$, the [degree operator](Degree%20operator.md) on $A$ is a [derivation](Derivation%20on%20an%20algebra.md).
* If $A$ is commutative, then $M$ must be abelian/

## Examples

* [Tensor algebra](Tensor%20algebra.md)

## See also

* [Graded structure](Graded%20structure.md)

# 

---

\#state/tidy | #lang/en | #SemBr
