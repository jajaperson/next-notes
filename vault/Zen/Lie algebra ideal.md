---
tags:
- public
---

[Lie algebra](Lie%20algebra.md)

# Lie algebra ideal

A **Lie algebra ideal** $\mathfrak{a} \trianglelefteq \mathfrak{g}$ is just an [algebra ideal](Algebra%20ideal.md) of a [Lie algebra](Lie%20algebra.md). #m/def/lie
Equivalently, $\mathfrak{a} \trianglelefteq \mathfrak{g}$ is a [submodule](Module%20over%20a%20Lie%20algebra.md) under the [adjoint representation](Adjoint%20Lie%20algebra%20representation.md).
Note that a [Lie subalgebra](Lie%20subalgebra.md) is a (two-sided) ideal iff it is a left or right ideal, by the [alternating](Alternating%20multilinear%20map.md) property.
A Lie algebra is [simple](Simple%20Lie%20algebra.md) iff it has no nontrivial ideals.

## Properties

Let $\mathfrak{a},\mathfrak{b} \trianglelefteq \mathfrak{g}$ be ideals. Then

1. $\mathfrak{a} + \mathfrak{ b}$ is an ideal ^P1
1. $\mathfrak{a} \cap \mathfrak{b}$ is an ideal ^P2
1. $[\mathfrak{a}, \mathfrak{b}]$ is an ideal (see [Commutator ideal](Commutator%20ideal.md)) ^P3

 > 
 > \[!check\]- Proof
 > [^P1](Lie%20algebra%20ideal.md#p1) and [^P2](Lie%20algebra%20ideal.md#p2) follow immediately.
 > Note that for any $x \in \mathfrak{ g}$,
 > by [Adjoint Lie algebra representation > ^P1](Adjoint%20Lie%20algebra%20representation.md#p1)
 > $$
\begin{align*}
\ad_{x} [\mathfrak{a}, \mathfrak{b}] = [\ad_{x} \mathfrak{a}, \mathfrak{b}] + [\mathfrak{a}, \ad_{x} \mathfrak{b}] = [\mathfrak{a}, \mathfrak{b}]
\end{align*}
$$
 > so $[\mathfrak{a}, \mathfrak{b}]$ is an ideal. <span class="QED"/>

## Special ideals

* [Centre of a Lie algebra](Centre%20of%20a%20Lie%20algebra.md)
* [Kernel of a Lie algebra homomorphism](Kernel%20of%20a%20Lie%20algebra%20homomorphism.md)
* [Central ideal](Central%20ideal.md)

## See also

* [Quotient Lie algebra](Quotient%20Lie%20algebra.md)

# 

---

\#state/tidy | #lang/en | #SemBr
