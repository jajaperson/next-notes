---
tags:
- public
---

[Module theory MOC](Module%20theory%20MOC.md)

# Module

A **module** $(M, R, +, \cdot)$ over a [ring](Ring.md) $R$ is an [abelian group](Abelian%20group.md) $(M, +)$ together with an action $(\cdot)$ of $R$ on $V$ that is distributive and $R$-linear. #m/def/module
Explicitly, a **left-module** $M$ over $R$ satisfies the following for any $x,y,z \in M$ and $\mu,\lambda \in R$

1. $(v+u)+w = v+(u+w)$ ^M1
1. $v+0 = v$ ^M2
1. $u+v = v+u$ ^M3
1. $1v = v$ ^M4
1. $(\mu\lambda)v = \mu(\lambda v)$ ^M5
1. $\lambda(u+v) = \lambda u + \lambda v$ ^M6
1. $(\mu+\lambda)v = \mu v + \lambda v$ ^M7

whereas a **right-module** satisfies the same properties with scalar multiplication written on the right.[^lr]
Thus a module is a generalization of a [vector space](Vector%20space.md),
which is just a module over a field.
This small change has far-reaching implications,
for example the existence of [Torsion](Torsion.md).

[^lr]: If $R$ is a [commutative ring](Commutative%20ring.md) the concepts of left- and right-modules coïncide, but otherwise there is a distinction between left- and right-scalar multiplication.

## Properties

* [A module inherits linear structure from the underlying ring](Module%20over%20a%20unital%20associative%20algebra.md#explanation)

# 

---

\#state/tidy | #lang/en | #SemBr
