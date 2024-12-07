---
tags:
- public
aliases:
- character
- irreducible character
---

[Group representation theory MOC](Group%20representation%20theory%20MOC.md)

# Group character

A **character** $\chi$ of a group $G$ over a [field](Field.md) $\mathbb{K}$ is a map  $\chi \in \mathbb{K}[G]$ that can be defined as the [Trace](Trace.md) of a [Group representation](Group%20representation.md) $\Gamma : G \to \Vect_{\mathbb{K}}$. #m/def/rep
$$
\begin{align*}
\chi(g) = \Tr \Gamma(g) = \sum_{j = 1}^{\dim \Gamma} \Gamma_{jj}(g)
\end{align*}
$$
Since [Trace](Trace.md) is invariant under unitary equivalences, [unitarily equivalent](Unitary%20equivalence%20of%20representations.md) representations have the same character.

If $\Gamma^\mu$ is an [irrep](Irrep.md) then $\chi^\mu$ is an **irreducible character**.
The irreducible characters $\{ x^\mu \}$ are [class functions](Class%20function.md) and [form an orthonormal basis](Orthonormality%20of%20irreducible%20characters.md) of [all such class functions within the group ring](Centre%20of%20the%20group%20ring.md) $Z(\mathbb{C}[G])$.

Characters neatly characterise representations. See [Character table](Character%20table.md).

## Linear character

In the special case of a **linear character** the vector space is one-dimensional and thus the character is a homomorphism into the multiplicative group of $\mathbb{K}$,
i.e. a [1-dimensional representation](1-dimensional%20irrep.md).

## Properties

* [Orthonormality of irreducible characters](Orthonormality%20of%20irreducible%20characters.md)
* [Character irreducibility criterion](Character%20irreducibility%20criterion.md)
* [Irreducible character as function of an idempotent](Irreducible%20character%20as%20function%20of%20an%20idempotent.md)

# 

---

\#state/tidy| #lang/en | #SemBr
