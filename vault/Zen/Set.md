---
tags:
- public
---

[Set theory MOC](Set%20theory%20MOC.md)

# Set

 > 
 > “Unter einer Menge verstehen wir jede Zusammenfassung $M$ von bestimmten wohlunterscheidbaren Objecten $m$ unserer Anschauung oder unseres Denkens (welche die Elemente von $M$ genannt werden) zu einem Ganze.”^\[1895. [Beiträge zur Begründung der transfiniten Mengenlehre](../Sources/@cantorBeitraegeZurBegruendung1895.md)\] ^def

A **set** is a collection of different things, called elements or members. #m/def/set
Two sets are said to be the same iff they have the same members,
i.e.
$$
\begin{align*}
(\forall \shood A,\shood B) [A=B \iff(\forall x)[x \in A \iff x \in B]]
\end{align*}
$$
which is the [Axiom of Extensionality](Axiom%20of%20Extensionality.md).
See [axiomatic set theory](Axiomatic%20set%20theory.md) for different axiomatic treatments of the set.

## Further terms

* It follows from extensionality that the [Empty set](Empty%20set.md) $\0$ is unique.
* [Subset](Subset.md)

## Forming sets

* $A = \{ a_{1},a_{2},\dots,a_{n} \}$ is the finite set with members $a_{1},a_{2},\dots,a_{n}$
* $A = \{ x : P(x) \}$ is the set of all $x$ satisfying predicate $P$, i.e. $x \in A \iff P(x)$
* $A \cup B = \{ x : x \in A \lor x \in B \}$ is the *union* of $A$ and $B$
* $A \cap B = \{ x : x \in A \land x \in B \}$ is the *intersection* of $A$ and $B$
* $A \setminus B = \{ x : x \in A \land x \notin B \}$ is the *set difference* of $B$ from $A$

# 

---

\#state/develop | #lang/en | #SemBr
