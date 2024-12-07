---
tags:
- public
---

[Ring theory MOC](Ring%20theory%20MOC.md)

# Ring

A **ring** is an algebraic structure on a set, consisting of both an [Abelian group](Abelian%20group.md) and a [Monoid](Monoid.md) over the set which satisfy a distributivity condition.

That is a **ring** $(R, +, \cdot)$ consists of an [Abelian group](Abelian%20group.md) $(R, +)$ called **addition**
and a [Monoid](Monoid.md) $(R, \cdot)$ called **multiplication**, with the extra conditions[^2009] #m/def/ring

* **left-distributivity** $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$
* **right-distributivity** $(b + c) \cdot a = (b \cdot a) + (c \cdot a)$

A ring may be generalised to a [Rng](Rng.md) (possibly lacking unity, where multiplication need only be a [Semigroup](Semigroup.md)),
or specified to an [Integral domain](Integral%20domain.md) or [Field](Field.md) (where both operations form [abelian](Abelian%20group.md) groups ignoring the additive identity, i.e. every element except $0$ is a unit[^unit]).

[^unit]: A [multiplicative unit](Units%20and%20zero-divisors.md) is an element with a multiplicative inverse. A [zero-divisor](Units%20and%20zero-divisors.md) can multiply a nonzero element to give zero. An element cannot be both.

[^2009]: 2009. [Algebra: Chapter 0](../Sources/@aluffiAlgebraChapter2009.md), §III.1.1, pp. 119–120

## Terminology

* A [Subring](Subring.md) is a subset of a ring which is itself a ring (under the same operations)

## Properties

A ring has all the properties of a [Rng](Rng.md), in addition:

1. $(-1)a = -a$ ^P1
1. $(-1)(-1) = 1$ ^P2

 > 
 > \[!check\]- Proof of 1–2
 > Both [^P1](Ring.md#p1) and [^P2](Ring.md#p2) follow directly from [Rng > Properties](Rng.md#properties).
 > <span class="QED"/>

## Examples

* [Zero ring](Zero%20ring.md)
* [Polynomial ring](Polynomial%20ring.md) (Gallian §16 pp. 276ff.)
* [Integers](Integers.md)

# 

---

\#state/tidy | #lang/en | #SemBr
