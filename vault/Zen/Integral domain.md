---
tags:
- public
---

[Ring](Ring.md)

# Integral domain

An **integral domain** is a [commutative ring](Commutative%20ring.md) with no nonzero [zero-divisors](Units%20and%20zero-divisors.md), #m/def/ring i.e. $ab=0$ iff $a = 0$ or $b = 0$.
This gives rise the the cancellation property,
since all nonzero elements are [epic](Epimorphism.md) and [monic](Monomorphism.md):
$ab = ac$ and $a \neq 0$ implies $b = c$.

 > 
 > \[!check\]- Proof
 > Since $0 = ab - ac = a(b-c)$ and $a \neq 0$, it follows $b - c =0$ and hence $b = c$.
 > <span class="QED"/>

## Properties

1. [A finite integral domain is a field](A%20finite%20integral%20domain%20is%20a%20field.md)
1. [The characteristic of an integral domain is 0 or prime](The%20characteristic%20of%20an%20integral%20domain%20is%200%20or%20prime.md)
1. [Condition for a quotient commutative ring to be an integral domain](Condition%20for%20a%20quotient%20commutative%20ring%20to%20be%20an%20integral%20domain.md)
1. [The polynomial ring over an integral domain is an integral domain](The%20polynomial%20ring%20over%20an%20integral%20domain%20is%20an%20integral%20domain.md)

## See also

* [Field of fractions](Field%20of%20fractions.md)

# 

---

\#state/tidy | #lang/en | #SemBr
