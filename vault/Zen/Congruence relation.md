---
tags:
- public
---

[Equivalence relation](Equivalence%20relation.md)

# Congruence relation

A **congruence relation** is to an equivalence relation what a [homomorphism](Morphism.md) is to a function:
it is an equivalence relation which somehow respects the algebraic structure of the set being partitioned;
i.e. it is *structure-preserving*.
Indeed, congruence relations correspond exactly to equivalence relations induced by a [homomorphism](Morphism.md).

Due to the *structure-preserving* property, a congruence relation defines a new algebraic structure on the [equivalence classes](Equivalence%20relation.md#equivalence-class) under the relation,
known as the [Algebraic quotient](Algebraic%20quotient.md).

## Examples

### Group congruence relation

Given a [group](Group.md) $(G, \cdot)$ then an [Equivalence relation](Equivalence%20relation.md) $\equiv$ is a congruence relation iff.
$$
\begin{align*}
g_{1} \equiv g_{2} \land h_{1} \equiv h_{2} \implies g_{1} \cdot h_{1} \equiv g_{2} \cdot h_{2}
\end{align*}
$$

#### Properties

* Due to the [correspondence between normal subgroups and congruence relations](Correspondence%20between%20normal%20subgroups%20and%20congruence%20relations.md), congruence relations are usually represented by a normal subgroup, especially in constructions like the [Quotient group](Quotient%20group.md).

### Category congruence relation

Given a category $\cat C$ then a a family of equivalence relations on every hom-set $\equiv$  is an equivalence relation iff. $f_{1} \equiv f_{2} : X\to Y$ and $g_{1} \equiv g_{2} : Y\to Z$ implies $g_{1}f_{1} \equiv g_{2}f_{2} : X \to Z$.

See [Quotient category](Quotient%20category.md)

# 

---

\#state/tidy | #lang/en | #SemBr
