---
tags:
- public
alias: cyclic group
---

[Subgroup](Subgroup.md)

# Cyclic subgroup

A **cyclic subgroup** is the smallest possible subgroup containing some element.
A **cyclic group** may be **generated** from a single element (the **generator**) using the inverse and binary operations to “complete” it.
Given a generating element $a \in G$ we define $\langle a \rangle = \{ a^n \mid a \in G \}$,
where $a^0 = e$ and $a^{-n} = (a^{-1})^n$.[^gallian] #m/def/group

[^gallian]: 2017, [Contemporary Abstract Algebra](../Sources/@gallianContemporaryAbstractAlgebra2017.md), p. 65

Every cyclic group is isomorphic to $\mathbb{Z}_{n}$ under addition, where $n$ is the order of the generator.
In the infinite case this is just additive $\mathbb{Z}$.

## Properties

* [The order of a cyclic group equals the order of its generator](The%20order%20of%20a%20cyclic%20group%20equals%20the%20order%20of%20its%20generator.md), i.e. $\abs a = \abs{\langle a \rangle}$.
* All cyclic subgroups are abelian (see above)
* **Generators of a finite group** From the theorem on [Order of powers of a group element](Order%20of%20powers%20of%20a%20group%20element.md),
  it follows that $\langle a \rangle = \langle a^j \rangle$ iff $\abs{a}$ and $j$ are coprime.
* [Fundamental theorem of cyclic groups](Fundamental%20theorem%20of%20cyclic%20groups.md)
* [Number of elements of each order in a cyclic group](Number%20of%20elements%20of%20each%20order%20in%20a%20cyclic%20group.md)
* [Group of prime order](Group%20of%20prime%20order.md)

## Bibliography

* 2017, [Contemporary Abstract Algebra](../Sources/@gallianContemporaryAbstractAlgebra2017.md), §5 (pp. 75ff.)

# 

---

\#state/tidy | #lang/en | #SemBr
