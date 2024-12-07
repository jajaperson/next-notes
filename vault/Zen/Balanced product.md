---
tags:
- public
---

[Module theory MOC](Module%20theory%20MOC.md)

# Balanced product

A **balanced product** is a certain generalization of a [bilinear map](Multilinear%20map.md) for a general [module](Module.md) over a (noncommutative) [ring](Ring.md) $R$.
Let $M$ be a right $R$-module, $N$ be a left $R$-module, and $G$ be an [abelian group](Abelian%20group.md) ($\mathbb{Z}$-module).
A map $\varphi : M \times N \to G$ is $R$-**balanced** iff for all $m,m' \in M$, $n,n' \in N$, $r \in R$ #m/def/module

1. $\varphi(m,n+n') = \varphi(m,n) + \varphi(m,n')$ ^B1
1. $\varphi(m + m', n) = \varphi(m, n) + \varphi(m',n)$ ^B2
1. $\varphi (m \cdot r, n) = \varphi(m, r \cdot n)$ ^B3

Together, [^B1](Balanced%20product.md#b1) and [^B2](Balanced%20product.md#b2) demand **biadditivity**.
Just as bilinear maps are linear maps from the tensor product,
$R$-balanced maps are homomorphisms from the [Tensor product of modules over a noncommutative ring](Tensor%20product%20of%20modules%20over%20a%20noncommutative%20ring.md).

## Examples

* Any [ring](Ring.md) $R$ may be regarded as an $R$-*bimodule*, in which case the ring multiplication is balanced.

# 

---

\#state/tidy | #lang/en | #SemBr
