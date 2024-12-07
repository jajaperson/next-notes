---
tags:
- public
aliases:
- inner product
---

[Vector space](Vector%20space.md)

# Inner product space

An **inner product space** is a vector space $(V, \mathbb{K})$[^K] together with an operation
$$
\begin{align*}
\langle \cdot, \cdot \rangle : V \times V \to \mathbb{K} 
\end{align*}
$$
which for any $x, y, z \in V$ and $\lambda, \mu \in \mathbb{K}$ has the following properties: #m/def/anal/vec

1. **conjugate symmetry** $\langle x,y \rangle = \overline{\langle y, x \rangle}$ ^IP1
1. **linearity in the first argument**^\[Alternatively in the second, see [below](Inner%20product%20space.md#ip2a)\] $\langle \lambda x + \mu y, z \rangle = \lambda \langle x , z \rangle + \mu \langle y,z \rangle$ ^IP2
1. **positive-definiteness** $\langle x,x \rangle > 0 \iff x \neq \mathbf{0}$ ^IP3

[^K]: Where either $\mathbb{K} = \mathbb{C}$ or $\mathbb{K} = \mathbb{R}$, in the latter case conjugate symmetry ([1](Inner%20product%20space.md#ip1)) is just symmetry

In some fields a *bra-ket notation* style inner product is more common, signaled by a `|` instead of `,`[^con], in which case the [second axiom](Inner%20product%20space.md#ip2) is

2. **linearity in the second argument** $\langle x | \lambda y + \mu z \rangle = \lambda \langle x | y \rangle + \mu \langle x | z \rangle$ ^IP2a

[^con]: See [Vector notation in these notes](Vector%20notation%20in%20these%20notes.md)

Every inner product induced a [norm](Normed%20vector%20space.md) $\|x\|^2 = \langle x,x \rangle$,
and norms have a corresponding unique inner product iff the [Parallelogram law](Parallelogram%20law.md) holds.

## Properties

1. **antilineärity in the other argument:**  $\braket{ \lambda x + \mu y | z } = \lambda^* \braket{ x | z } + \mu^* \braket{ y | z }$
1. **General [Cauchy-Schwarz inequality](Cauchy-Schwarz%20inequality.md):** $\abs{\braket{ x | y }}^2 \leq \|x\|^2 \|y\|^2$

### Further properties

* A change of basis is also a [Change of inner product](Change%20of%20inner%20product.md)
* *The inner product is continuous*

# 

---

\#state/tidy | #lang/en | #SemBr
