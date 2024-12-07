---
tags:
- public
aliases:
- surjective
- injective
- surjectivity
- injectivity
- bijectivity
- injection
- surjection
- bijection
- bijective
---

[Naïve set theory MOC](Na%C3%AFve%20set%20theory%20MOC.md)

# Surjectivity, injectivity, and bijectivity

**Surjective**, **injective**, and **bijective** functions are [epimorphisms](Morphism.md),  [monomorphisms](Morphism.md), and [isomorphisms](Morphism.md) respectively in the *Category of Sets* ($\Set$).
Thus the morphisms of any *concrete category* may be described as such,
but these concepts may not align exactly
(for example, there exist bijectivity continuous functions that are not homeomorphisms).
Specifically, given a function $f:A \to B$

* $f$ is **surjective** iff for every $b \in B$ there exists $a \in A$ such that $f(a) = b$ #m/def/general
  * Equivalently, there exists a right-inverse.
  * A surjective function induces an [Equivalence relation](Equivalence%20relation.md).
* $f$ is **injective** iff $f(a_{1}) = f(a_{2}) \iff a_{1} = a_{2}$. #m/def/general
  * Equivalently, there exists a left-inverse.
* $f$ is **bijective** iff it is surjective and injective. #m/def/general
  * Equivalently, there exists a unique ambidextrous inverse.

# 

---

\#state/tidy | #lang/en | #SemBr
