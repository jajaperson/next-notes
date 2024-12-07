---
tags:
- public
---

[Category theory MOC](Category%20theory%20MOC.md)

# Category

If groups are the algebraic structure which abstract symmetry,
categories are the algebraic structure which abstract mathematical theories.
A category $\cat C$ is a mathematical object consisting of #m/def/cat

* a *class* of objects, $\ob (\cat C)$, sometimes referred to as $\cat C$ when its meaning is clear
* for every ordered pair of objects $X,Y \in \Ob(\cat C)$
  a *class*[^loc] of [morphisms](Morphism.md) $\cat C(X, Y)$.
  If $f \in \cat C(X, Y)$ then $f : X \to Y$.
* a composition operation $(\circ)$ so that given $f : X \to Y$ and $g : Y\to Z$ we have $g \circ f : X \to Z$.

and satisfying the following properties

* for any $X \in \ob(\cat C)$,
  there exists a unique $\id_X : X \to X$
  which is the left and right identity under composition,
  i.e. $f = \id_X \circ f$ and $g = g \circ \id_Y$.
* composition is associative, i.e. $f \circ (g \circ h) = (f \circ g) \circ h$.

[^loc]: If this is restricted to be a set, the category is said to be [locally small](Locally%20small%20category.md).

It is common for $\circ$ to be abandoned in favour of juxtaposition, so $f \circ g = f\,g$.

* See also [Examples of Categories](Examples%20of%20Categories.md) and [Opposite category](Opposite%20category.md).
* Morphisms come in different shapes and sizes — see [Morphism](Morphism.md)
* There are also different kinds of category — see [Types of Category](Types%20of%20Category.md).
* Reasoning about categories is often done through a [Commutative diagram](Commutative%20diagram.md)

Note that since objects are in correspondence with identity morphisms, it is possible to avoid considering a separate class of objects and instead use identity morphisms.

---

\#state/tidy | #SemBr | #lang/en
