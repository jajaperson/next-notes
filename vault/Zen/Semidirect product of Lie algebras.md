---
tags:
- public
---

[Lie algebras MOC](Lie%20algebras%20MOC.md)

# Semidirect product of Lie algebras

The **semidirect product** $\mathfrak{a} \rtimes \mathfrak{b}$ of [Lie algebras](Lie%20algebra.md) is a generalization of the [Direct product of Lie algebras](Direct%20product%20of%20Lie%20algebras.md) where only one of the operands is required to be an [ideal](Lie%20algebra%20ideal.md).[^1988].
The semidirect product $\mathfrak{a} \rtimes \mathfrak{b}$ is an [extension](Lie%20algebra%20extension.md) of $\mathfrak{b}$ by $\mathfrak{a}$,
$$
\begin{align*}
0 \to \mathfrak{a} \hookrightarrow \mathfrak{a} \rtimes  \mathfrak{b} \twoheadrightarrow \mathfrak{b} \to 0
\end{align*}
$$
and extensions which can be written this way are precisely [split extensions](Lie%20algebra%20extension.md#split).

[^1988]: 1988. [Vertex operator algebras and the Monster](../Sources/@frenkelVertexOperatorAlgebras1988.md), p. 7

## Internal semidirect product.

Let $\mathfrak{a} \trianglelefteq \mathfrak{g}$ and $\mathfrak{b} \leq \mathfrak{g}$ be [subalgebras](Subalgebra%20over%20a%20field.md),
the first of which is an [ideal](Lie%20algebra%20ideal.md),
such that $\mathfrak{g} = \mathfrak{a} \oplus \mathfrak{b}$ [internally](Direct%20sum%20of%20vector%20spaces.md#internal-direct-sum).
Then $\mathfrak{g}$ is the **internal semidirect product** $\mathfrak{a} \rtimes \mathfrak{b}$.

## External semidirect product

Let $\mathfrak{a}$ be a Lie algebra and let $\mathfrak{b}$ be a Lie algebra [acting](Lie%20algebra%20representation.md) on $\mathfrak{a}$ by [derivations](Derivation%20on%20an%20algebra.md),
i.e. equipped with a [Lie algebra homomorphism](Lie%20algebra%20homomorphism.md) $\pi : \mathfrak{b} \to \mathcal{D}(\mathfrak{a})$ into the [Derivation subalgebra](Derivation%20subalgebra.md) $\mathcal{D}(\mathfrak{a})  \leq \End \mathfrak{a}$,
so that $\pi(x)$ is a derivation of $\mathfrak{a}$ for every $x \in \mathfrak{b}$.
Then the **external semidirect product** $\mathfrak{a} \rtimes \mathfrak{b}$ is the unique [Lie bracket](Lie%20algebra.md) on the [sum vector space](Direct%20sum%20of%20vector%20spaces.md) $\mathfrak{a} \oplus \mathfrak{b}$
such that $\mathfrak{a}$ and $\mathfrak{b}$ are [subalgebras](Lie%20subalgebra.md) and #m/def/lie
$$
\begin{align*}
\ad_{x} y =  [x,y] = \pi(x)y
\end{align*}
$$
for all $y \in \mathfrak{a}$ and $x \in \mathfrak{b}$.

## Properties

* $\mathfrak{a} \rtimes \mathfrak{b} \cong \mathfrak{a} \times \mathfrak{b}$ iff $\pi = 0$ is the trivial representation

## Special cases

* [Adjoining a derivation](Adjoining%20a%20derivation.md)

# 

---

\#state/tidy| #lang/en | #SemBr
