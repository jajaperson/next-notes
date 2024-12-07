---
tags:
- public
---

[Lie algebras MOC](Lie%20algebras%20MOC.md)

# Heisenberg algebra

In the general formulation used in *conformal field theory*, a **Heisenberg algebra** $\mathfrak{l}$ over $\mathbb{K}$ is a *nilpotent Lie algebra* whose 1-dimensional [centre](Centre%20of%20a%20Lie%20algebra.md) is its [commutator ideal](Commutator%20ideal.md) #m/def/lie
$$
\begin{align*}
\mathfrak{l}_{0} = \mathfrak{z} (\mathfrak{l}) = [\mathfrak{l}, \mathfrak{l}] = \mathbb{K}z
\end{align*}
$$
Assuming $\dim \mathfrak{l}$ is countable, one may impose a $\mathbb{Z}$-grading $\mathfrak{l} = \bigoplus_{n \in \mathbb{Z}} \mathfrak{l}_{n}$ with $\dim \mathfrak{l}_{n} < \infty$ for $n \in \mathbb{Z}$ and $\mathfrak{l}_{0}$ given above, giving [abelian](Abelian%20Lie%20algebra.md) [subalgebras](Lie%20subalgebra.md)
$$
\begin{align*}
\mathfrak{l}^{\pm} = \bigoplus _{n = 1}^\infty \mathfrak{l}_{\pm n}
\end{align*}
$$
so that $\mathfrak{b}^\pm =\mathfrak{l}_{0} \oplus \mathfrak{l}^\pm$ are maximal abelian subalgebras of $\mathfrak{l}$.
An [alternating](Alternating%20multilinear%20map.md) [bilinear form](Bilinear%20form.md) $(\cdot,\cdot)$ on $\mathfrak{l}$ is given by
$$
\begin{align*}
[x,y] = (x,y) z
\end{align*}
$$
which is [Bilinear form > ^nondegenerate](Bilinear%20form.md#nondegenerate) on $\mathfrak{l}^+ \oplus \mathfrak{l}^{-}$ and $\mathfrak{l}_{n} \oplus \mathfrak{l}_{-n}$ for all $n \in \mathbb{N}$,
so one may form bases $(x_i)_{i \in I}$ of $\mathfrak{l}^+$ and $(y_{i})_{i \in I}$ of $\mathfrak{l}^{-}$ satisfying the **Heisenberg commutation relations**
$$
\begin{align*}
[x_{i},z] = [y_{i},z] =  [x_{i},x_{j}] = [y_{i},y_{j}] &= 0 & [x_{i},y_{j}]=\delta_{ij}z
\end{align*}
$$
and
$$
\begin{align*}
\deg x_{i} + \deg y_{i} = 0
\end{align*}
$$
for $i,j \in I$.

## Properties

1. $\dim \mathfrak{l} > 1$, since otherwise the centre would be trivial (not 1-dimensional)
1. If $\dim \mathfrak{l}$ is finite, then it is odd

## Examples

* [Standard Heisenberg algebra for QM](Standard%20Heisenberg%20algebra%20for%20QM.md)

## See also

* [Modules of a Heisenberg algebra](Modules%20of%20a%20Heisenberg%20algebra.md)
  * [Canonical realization of the Heisenberg commutation relations](Canonical%20realization%20of%20the%20Heisenberg%20commutation%20relations.md)

# 

---

\#state/tidy | #lang/en | #SemBr
