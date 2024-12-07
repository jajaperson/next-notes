---
tags:
- public
---

[Linear algebra MOC](Linear%20algebra%20MOC.md)

# Graded vector space

Given a set $S$, a [vector space](Vector%20space.md) $V$ over $\mathbb{K}$ is said to be **$S$-graded** iff it is (canonically) the [internal direct sum](Direct%20sum%20of%20vector%20spaces.md#internal-direct-sum) #m/def/linalg
$$
\begin{align*}
V = \bigoplus _{\alpha \in S} V_{\alpha}
\end{align*}
$$
for so-called **homogenous subspaces** $V_{\alpha}$ of degrees $\alpha \in S$,
the elements whereof are called **homogenous elements** of degree $\alpha \in S$.[^1988]
For $v \in V_{\alpha}$, we write
$$
\begin{align*}
\deg v = \alpha
\end{align*}
$$
A graded vector space is thus a [Graded module](Graded%20module.md) over a field (with the trivial gradation),
where $S$ may take arbitrary monoidal structure.

[^1988]: 1988. [Vertex operator algebras and the Monster](../Sources/@frenkelVertexOperatorAlgebras1988.md), p. 8

## Category of graded vector spaces

Many of our typical vector space constructions carry over nicely, although some require [monoid](Monoid.md) structure on $S$.

* [Homomorphism of graded vector spaces](Homomorphism%20of%20graded%20vector%20spaces.md)
* [Graded vector subspace](Graded%20vector%20subspace.md), [Quotient graded vector space](Quotient%20graded%20vector%20space.md)
* [Direct sum of graded vector spaces](Direct%20sum%20of%20graded%20vector%20spaces.md)
* [Tensor product of graded vector spaces](Tensor%20product%20of%20graded%20vector%20spaces.md)

## See also

* [Degree operator](Degree%20operator.md)
* [Graded structure](Graded%20structure.md).

# 

---

\#state/tidy | #lang/en | #SemBr
