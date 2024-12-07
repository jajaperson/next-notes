---
tags:
- public
---

[Ring](Ring.md)

# Ring homomorphism

A **ring homomorphism** is a [morphism](Morphism.md) in the *Category of rings*,
that is to say a structure-preserving map between [rings](Ring.md). #m/def/ring
Let $A,B$ be rings and let $f : A \to B$.
Then $f$ is a ring homomorphism iff $f$ is a [rng homomorphism](Rng%20homomorphism.md) and in addition

3. $f(1_{A})=f(1_{B})$

Sometimes these are referred to as **unital ring homomorphisms**.

## Properties

* A ring homomorphism $\varphi \in \Ring(R,S)$ is [monic](Monomorphism.md) iff it is [injective](Surjectivity,%20injectivity,%20and%20bijectivity.md) iff $\ker f = \{ 0 \}$
* A ring [epimorphism](Epimorphism.md) need not be [surjective](Surjectivity,%20injectivity,%20and%20bijectivity.md)
  * e.g. inclusion $\iota : \mathbb{Z} \hookrightarrow \mathbb{Q}$. If $\alpha_{1}$ and $\alpha_{2}$ agree on $\mathbb{Z}$ they agree everywhere.

# 

---

\#state/tidy | #lang/en | #SemBr
