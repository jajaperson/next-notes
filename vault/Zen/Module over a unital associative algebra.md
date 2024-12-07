---
tags:
- public
aliases:
- A module inherits linear structure from the underlying ring
---

[Algebra theory MOC](Algebra%20theory%20MOC.md)

# Module over an associative algebra

Let $A$ be a [unital associative algebra](Unital%20associative%20algebra.md) over $\mathbb{K}$.
A (left) $A$-[module](Module.md) is a $\mathbb{K}$-[vector space](Vector%20space.md) $V$ equipped with a bilinear map
$$
\begin{align*}
A \times V &\to V \\
(a,v) &\mapsto a \cdot v
\end{align*}
$$
such that

1. $1 \cdot v = v$ for $v \in V$
1. $(ab)\cdot v = a \cdot(b \cdot v)$ for $a,b \in A$, $v \in V$

This is equivalent to a **representation** of $A$ carried by $V$.

## Properties and further terminology

* $V$ automatically carries a [Lie algebra representation](Lie%20algebra%20representation.md) of the [commutator](Commutator.md) algebra of $A$ and any [Lie subalgebra](Lie%20subalgebra.md).
* A [Submodule](Submodule.md) of $V$ is an [invariant subspace](Invariant%20subspace.md) under the action of $A$.
* A module is [irreducible](Simple%20module.md) iff it has no proper nontrivial submodules.
* A module is [indecomposable](Indecomposable%20module.md) iff it cannot be decomposed into the [direct sum](Direct%20sum%20of%20modules.md) of two nonzero submodules.
* A *module isomorphism* is an [equivalence of representations](Equivalence%20of%20representations.md).
* The [Regular representation](Regular%20representation.md) shows that $A$ is a module over itself.

## Explanation

Since a [unital associative algebra](Unital%20associative%20algebra.md) $A$ over a field $\mathbb{K}$ is itself a ring,
it is possible to form a [module](Module.md) $V$ over $A$.
The action of $\mathbb{K}$ on $A$ and $A$ on $V$ induces an action of $\mathbb{K}$ on $V$,
thus the module $V$ inherits the $\mathbb{K}$-linear structure of the underlying ring $A$.
Therefore $V$ is a [vector space](Vector%20space.md) over $\mathbb{K}$. #m/thm/module

 > 
 > \[!check\]- Proof
 > Let $\mathbb{1} \in A$ be the identity element of the associative algebra $A$.
 > Then a distributive and linear field action is given by
 > $$
\begin{align*}
(\cdot) : \mathbb{K} \times V &\to V \\
(\lambda, v) &\mapsto \lambda \mathbb{1} v
\end{align*}
$$
 > since for any $u,v \in V$ and $\mu,\lambda \in \mathbb{K}$:
 > $$
\begin{align*}
1\mathbb{1}v  = v
\end{align*}
$$
 > satisfying [Vector space > ^V4](Vector%20space.md#v4);
 > $$
\begin{align*}
(\mu\lambda) \mathbb{1} v = \mu \mathbb{1} (\lambda \mathbb{1} v)
\end{align*}
$$
 > satisfying [Vector space > ^V5](Vector%20space.md#v5);
 > $$
\begin{align*}
\lambda \mathbb{1} (u + v) = \lambda \mathbb{1} u + \lambda \mathbb{1}v
\end{align*}
$$
 > satisfying [Vector space > ^V6](Vector%20space.md#v6); and
 > $$
\begin{align*}
(\mu+\lambda)\mathbb{1} v = \mu \mathbb{1} v + \lambda \mathbb{1}v
\end{align*}
$$
 > satisfying [Vector space > ^V7](Vector%20space.md#v7).
 > <span class="QED"/>

Such a module coïncides exactly with the notion of a [Group representation](Group%20representation.md) of the algebra $A$ over $\mathbb{K}$.

## See also

* [Module over a Lie algebra](Module%20over%20a%20Lie%20algebra.md)
* [Module over a group](Module%20over%20a%20group.md)

# 

---

\#state/tidy | #lang/en | #SemBr
