---
tags:
- public
---

[Group representation theory MOC](Group%20representation%20theory%20MOC.md)

# Group representation

A [Representation](Representation.md) $\Gamma$ of a group $G$ is essentially a linear [group action](Group%20action.md) on some vector space $V$. #m/def/rep
It is a [Group homomorphism](Group%20homomorphism.md) $\Gamma : G \to \mathrm{GL}(V)$.
In particular for some $g,h \in G$
$$
\begin{align*}
\Gamma(g) \Gamma(h) = \Gamma(gh)
\end{align*}
$$
and $\Gamma(e) = \mathbb{1}$ where $\mathbb{1}$ is the identity map.[^keppler]
Since [Every representation of a compact group is equivalent to a unitary representation](Every%20representation%20of%20a%20compact%20group%20is%20equivalent%20to%20a%20unitary%20representation.md) (if over a [Hilbert space](Hilbert%20space.md)), it is common to only consider unitary representations.

[^keppler]: 2023, [Groups and representations, p. 20](../Sources/@keppelerGroupsRepresentations2023.md)

## Additional terminology

* $\dim \Gamma = \dim V$ is the **dimension** of the representation.
* The vector space $V$ is said to **carry** the representation $\Gamma$,
  and is also called the **carrier space**.
* In these notes, if the carrier space is an [Inner product space](Inner%20product%20space.md) it will usually use the linear-second $\langle \cdot|\cdot \rangle$ convention, signalled by the bar.
* In a fixed [Orthonormal basis](Orthonormal%20basis.md) $(v_{i})_{i=1}^n$ we call $\Gamma(g)_{jk}$ the [Matrix representation](Matrix%20representation.md) with elements
  $$
\begin{align*}
\Gamma(g)_{jk} = \bra{v_{i}} \Gamma(g)\ket{v_{k}} 
\end{align*}
$$
  where it is said that $v_{i}$ transform under $G$ in the representation $\Gamma$.

## Types of representation

* A [Faithful representation](Faithful%20representation.md) is injective
* A [Full representation](Full%20representation.md) is surjective
* A [Fully faithful representation](Fully%20faithful%20representation.md) is bijective
* A [Unitary representation](Unitary%20representation.md) is unitary for every group element
* Representations may also be classified by [reducibility](Reducibility%20of%20representations.md).

## Properties

1. Every group has a trivial (in general not faithful) representation $\Gamma T : \cdot \mapsto \mathbb{1}$.
1. *A non-trivial non-faithful representation implies a non-trivial normal subgroup*

## Generalizations

A representation may be viewed as a [Functor](Functor.md) from a single-object [Groupoid](Groupoid.md) to $\Vect_{\mathbb{K}}$,
or equivalently as a [module](Module%20over%20a%20unital%20associative%20algebra.md) over a [group ring](Group%20ring.md).
These yield two possible generalizations of representation.

# 

---

\#state/tidy | #lang/en | #SemBr
