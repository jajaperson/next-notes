---
tags:
- public
---

[Linear algebra MOC](Linear%20algebra%20MOC.md)

# Complement subspace

Let $V$ be a [vector space](Vector%20space.md) over $\mathbb{K}$ and $U \leq V$ be a subspace.
A **complement** $U^c \leq V$ is a subspace such that the [internal direct sum](Direct%20sum%20of%20vector%20spaces.md#internal-direct-sum) $U \oplus U^c = V$.

## Properties

1. Every $U \leq V$ has a (in general not unique) complement $U^c \leq V$. ^Existence

 > 
 > \[!check\]- Proof of 1.
 > The existence of the compliment follows from [Every vector space has a basis](Every%20vector%20space%20has%20a%20basis.md):
 > Let $\mathcal{A}$ be a basis of $U$.
 > Then there exists a basis $\mathcal{B}$ of $V$ such that $\mathcal{A} \sube \mathcal{B}$.
 > Then $U^c = \span(\mathcal{B}\setminus \mathcal{A})$ is a complement of $U$.
 > <span class="QED"/>

# 

---

\#state/tidy | #lang/en | #SemBr
