---
tags:
- public
---

[Lie algebras MOC](Lie%20algebras%20MOC.md)

# Twisted affine Lie algebra

Let $\mathfrak{g}$ be a [Lie algebra](Lie%20algebra.md) over $\mathbb{K}$ with a symmetric $\mathfrak{g}$-[invariant bilinear form](Invariant%20bilinear%20form%20on%20a%20Lie%20algebra.md) $\langle \cdot,\cdot \rangle$,
and $\vartheta \in \Aut \mathfrak{g}$ be an involutive isometry of $\langle \cdot,\cdot \rangle$.
The corresponding **twisted affine Lie algebra** $\hat{\mathfrak{g}}[\vartheta]$ and **extended twisted affine Lie algebra** $\tilde{\mathfrak{g}}[\vartheta]$ are generalizations of the corresponding [untwisted counterparts](Affine%20Lie%20algebra.md). #to/motivate

## Construction

Let $\mathfrak{g}$ be a [Lie algebra](Lie%20algebra.md) over $\mathbb{K}$ with an involution $\vartheta \in \Aut \mathfrak{g}$,
and let $\langle \cdot,\cdot \rangle$ be a $\mathfrak{g}$-[invariant bilinear form](Invariant%20bilinear%20form%20on%20a%20Lie%20algebra.md) which is also invariant under $\vartheta$ in the sense that
$$
\begin{align*}
\langle \vartheta x, \vartheta y \rangle  = \langle x,y \rangle 
\end{align*}
$$
for all $x,y \in \mathfrak{g}$.[^1988]
Then $\mathfrak{g} = \mathfrak{g}_{(0)} \oplus \mathfrak{g}_{(1)}$ is $\mathbb{Z}_{2}$-[graded](Graded%20Lie%20algebra.md) into orthogonal[^orth] even and odd subspaces
$$
\begin{align*}
\mathfrak{g}_{(i)} = \{ x \in \mathfrak{g}: \vartheta x = (-1)^i x \}
\end{align*}
$$
Let $\mathbb{K}[t^{1/2},t^{-1/2}]$ be the [algebra of Laurent polynomials](Algebra%20of%20Laurent%20polynomials.md) in indeterminate $t^{1/2}$  and $d$ be its [degree derivation](Degree%20operator.md).
Constructing
$$
\begin{align*}
\mathfrak{l}= \mathfrak{g} \otimes_{\mathbb{K}} \mathbb{K}[t^{1/2},t^{-1/2}] \oplus \mathbb{K}c
\end{align*}
$$
with the same bilinear product defined for the (untwisted) [affine Lie algebra](Affine%20Lie%20algebra.md) gives a Lie algebra.
Defining the involution $v : t^{1/2} \mapsto -t^{1/2}$ on $\mathbb{K}[t^{1/2},-t^{1/2}]$ we extend $\vartheta$ to the following involution on $\mathfrak{l}$
$$
\begin{align*}
\vartheta : c &\mapsto c \\
\vartheta : x \otimes f &\mapsto \vartheta x \otimes vf
\end{align*}
$$
The **twisted affine Lie algebra** $\hat{\mathfrak{g}}[\vartheta]$ associated with $\mathfrak{g}$, $\langle \cdot,\cdot \rangle$, and $\vartheta$ is the even subalgebra of $\mathfrak{l}$ under $\vartheta$ #m/def/lie
$$
\begin{align*}
\hat{\mathfrak{g}}[\vartheta] &= \{ x \in \mathfrak{l} : \vartheta x = x \} \\
&= \mathfrak{g}_{(0)} \otimes \mathbb{K}[t,t^{-1}] \oplus \mathfrak{g}_{(1)} \otimes t^{1/2} \mathbb{K}[t,t^{-1}] \oplus \mathbb{K}c
\end{align*}
$$

[^orth]: In the sense $\langle \mathfrak{g}_{(0)}, \mathfrak{g}_{(1)} \rangle = 0$.

 > 
 > \[!missing\]- Proof of Lie algebra
 > \#missing/proof

As in the untwisted case, $d$ extends to a derivation of $\hat{\mathfrak{g}}[\vartheta]$
$$
\begin{align*}
d(c) &= 0 \\
d(x \otimes f) &= x \otimes df
\end{align*}
$$
so that homogenous subspaces are the eigenspaces of $d$.
One obtains the **extended twisted affine Lie algebra** associated with $\mathfrak{g}$, $\langle \cdot,\cdot \rangle$, and $\vartheta$ by [adjoining the derivation](Adjoining%20a%20derivation.md) $d$ #m/def/lie
$$
\begin{align*}
\tilde{\mathfrak{g}}[\vartheta] = \hat{\mathfrak{g}}[\vartheta] \rtimes  \mathbb{K}d
\end{align*}
$$

 > 
 > \[!info\]- Further generalizations
 > This may be generalized to automorphisms of any finite order.

[^1988]: 1988. [Vertex operator algebras and the Monster](../Sources/@frenkelVertexOperatorAlgebras1988.md), §1.6, p. 19–20

## Properties

1. In case $\vartheta = 1$, these constructions yield their [untwisted counterparts](Affine%20Lie%20algebra.md).

# 

---

\#state/tidy | #lang/en | #SemBr
