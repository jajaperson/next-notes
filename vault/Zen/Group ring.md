---
tags:
- public
alias: monoid ring
---

[Unital associative algebra](Unital%20associative%20algebra.md)

# Group ring

The **group ring** (also **monoid ring**) is a [free module](Free%20module.md) over a group (or monoid) with the additional structure of a [ring](Ring.md) with convolution (defined below) by a group/monoid operation, i.e. a *∗-algebra*.
The idea is to form basis elements $\delta_{g}$ for each $g \in G$,
and take linear combinations over $R$.
This module is then given the structure of a [ring](Ring.md) using a multiplication rule (convolution) induced by group multiplication, which has the property $\delta_{g} *\delta_{h} = \delta_{gh}$.

## Definition

Let $G$ be a group, and $R$ be a ring.
The **group ring** $R[G]$ is the set of [maps of finite-support](Support%20of%20a%20map.md) $G \to R$,
with the **convolution** and **conjugate** operations defined below.[^simon] #m/def/group

 > 
 > \[!info\]- Defining basis
 > The basis elements are
 > $$
\begin{align*}
\delta_{g} : x \mapsto \begin{cases}
1_{R} & x=g \\
0_{R} & x \neq g
\end{cases}
\end{align*}
$$
 > and thus each $a \in R[G]$ has the form
 > $$
\begin{align*}
a = \sum_{g \in G} a(g)\delta_{g}
\end{align*}
$$
 > However other bases prove useful, see below

The **convolution** operation is defined by
$$
\begin{align*}
(a * b)(x) = \sum_{h \in G} a(xh^{-1})b(h)
\end{align*}
$$

 > 
 > \[!check\]- Derivation
 > Convolution is defined by extending $\delta_{g} * \delta_{h} = \delta_{gh}$ by linearity, so
 > $$
\begin{align*}
\left( \sum_{g \in G} a(g)\delta_{g} \right) * \left( \sum_{h \in G} b(g)\delta_{g} \right) &= \sum_{g,h\in G} a(g)b(h)\delta_{gh} \\
&= \sum_{x,h \in G } a(xh^{-1})b(h) \delta_{x}
\end{align*}
$$
 > which yields the definition given above.
 > Note the similarity to the everyday [Convolution](Convolution.md) operation.

If $R$ is an *Involutive ring*, the **conjugate** is defined by
$$
\begin{align*}
a^{\dagger}(g) = \overline{a(g^{-1})}
\end{align*}
$$

[^simon]: 1996, [Representations of finite and compact groups](../Sources/@simonRepresentationsFiniteCompact1996.md), §II.3

### Hilbert space

If $R = \mathbb{C}$, then the group ring can be made into a [Hilbert space](Hilbert%20space.md) with some inner product, usually taken from those listed below.

 > 
 > \[!info\]- Inner products
 > Two possible inner products on a complex group ring are
 > $$
\begin{align*}
\braket{ a | b } = \sum_{g \in G} \overline{a(g)}b(g)
\end{align*}
$$
 > which has $\{ \delta_{x} \}_{x \in G}$ as an [Orthonormal basis](Orthonormal%20basis.md);
 > or alternatively the renormalised
 > $$
\begin{align*}
( a | b ) = \frac{1}{\abs G} \sum_{g \in G} \overline{a(g)}b(g)
\end{align*}
$$
 > which has $c_{1} : g \mapsto 1$ as a unit vector.
 > This normalisation is used for [orthogonality of irreps](Orthonormality%20of%20irreps.md).
 > In these notes I will try to stay consistent with distinguishing these two inner products as above.

## Properties

* [∗-representation of the complex group ring](%E2%88%97-representation%20of%20the%20complex%20group%20ring.md)
* [Regular group representation](Regular%20group%20representation.md)
* [Ideal of the complex group ring](Ideal%20of%20the%20complex%20group%20ring.md)
* [Idempotent of the complex group ring](Idempotent%20of%20the%20complex%20group%20ring.md)
* [Isomorphism between the complex group ring and direct sum of matrix algebras on carriers of irreducible representations](Isomorphism%20between%20the%20complex%20group%20ring%20and%20direct%20sum%20of%20matrix%20algebras%20on%20carriers%20of%20irreducible%20representations.md)
* [Centre of the group ring](Centre%20of%20the%20group%20ring.md)

# 

---

\#state/tidy | #lang/en | #SemBr
