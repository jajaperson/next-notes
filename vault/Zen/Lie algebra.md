---
tags:
- public
aliases:
- Lie bracket
mathLink-blocks:
  Jacobi: Jacobi identity
---

[Lie algebras MOC](Lie%20algebras%20MOC.md)

# Lie algebra

A **Lie algebra** $\mathfrak{g}$ is a [vector space](Vector%20space.md) over a field $\mathbb{K}$ with an [alternating bilinear map](Alternating%20multilinear%20map.md) $[-,-]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$ satisfying the Jacobi identity #m/def/lie
$$
\begin{align*}
[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0
\end{align*}
$$
^Jacobi

which [away from 2](Away%20from%202.md) is equivalent to demanding the Lie bracket is a derivation on itself (see [adjoint Lie algebra representation > ^P1](Adjoint%20Lie%20algebra%20representation.md#p1)).
A Lie algebra is one of the simplest kinds of non-associative, non-commutative [algebras](Algebra%20over%20a%20field.md) (in fact it is anticommutative).
Every [Lie group](Lie%20group.md) has a corresponding Lie algebra, given by the tangent at identity.

## Further terminology

* An [Abelian Lie algebra](Abelian%20Lie%20algebra.md) has $[X,Y]=0$ for all $X,Y \in \mathfrak{g}$
* A [Lie subalgebra](Lie%20subalgebra.md) is a linear subspace closed under the bracket.
* A [Lie algebra ideal](Lie%20algebra%20ideal.md) is a linear subspace which “absorbs all elements“.
* [Lie algebra extension](Lie%20algebra%20extension.md)

## Basis

Since $\mathfrak{g}$ is a vector space we can find a basis $\{ X_{j} \}_{j \in J}$.
The behaviour of the Lie bracket on all elements is completely determined by the basis generators due to linearity.
We describe this using the so-called **structure constants**
$$
\begin{align*}
[X_{j}, X_{k}] = \sum_{\ell \in J} c^\ell_{jk} X_{\ell}
\end{align*}
$$

## Properties

1. [Alternating iff anticommutative away from 2](Alternating%20iff%20anticommutative%20away%20from%202.md)
1. Every Lie algebra may be constructed as a subalgebra of the commutator of its [Universal enveloping algebra](Universal%20enveloping%20algebra.md) (see [Poincaré-Birkhoff-Witt theorem](Poincar%C3%A9-Birkhoff-Witt%20theorem.md))

## Examples

* [Commutator](Commutator.md) of any associative algebra

# 

---

\#state/tidy | #lang/en | #SemBr
