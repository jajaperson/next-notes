---
tags:
- public
---

[Category](Category.md)

# Morphism

A **morphism** is an element of some [category](Category.md). #m/def/cat
Typically, it represents some kind of structure-preserving map between sets,
or a more abstract relationship between objects.
Morphisms have the important property that they may be composed to produce new morphisms.

## Classification

* [Monomorphism](Monomorphism.md)
  * [Regular monomorphism](Regular%20monomorphism.md)
  * [Split monomorphism](Split%20monomorphism.md)
* [Epimorphism](Epimorphism.md)
  * [Regular epimorphism](Regular%20epimorphism.md)
  * [Split epimorphism](Split%20epimorphism.md)
* [Isomorphism](Isomorphism.md)
* [Endomorphism](Endomorphism.md)
* [Automorphism](Automorphism.md)

In the following, arrows signify implication.

````mermaid
graph TD;
	Automorphism==>Endomorphism
	Automorphism==>Isomorphism
	Isomorphism==>Monomorphism
	Isomorphism==>Epimorphism
	Endomorphism==>Morphism
	Monomorphism==>Morphism
	Epimorphism==>Morphism
````

The same prefixes are used for specific morphisms, including [functors](Functor.md) and [natural transformations](Natural%20transformation.md).

Mnemonic for types of morphism
→
`MILESR`

* **M**onic
* **I**njective
* **L**eft-cancellable
* **E**pic
* **S**urjective
* **R**ight-cancellable

<!--SR:!2024-02-25,210,190-->

# 

---

\#state/tidy | #to/simplify | #flashcards/maths/mnemonic
