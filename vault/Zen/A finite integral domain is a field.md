---
tags:
- public
---

[Integral domain](Integral%20domain.md)

# A finite integral domain is a field

Let $D$ be a finite [Integral domain](Integral%20domain.md). Then $D$ is a [Field](Field.md), i.e. every nonzero element of $D$ is a [unit](Units%20and%20zero-divisors.md). #m/thm/ring

 > 
 > \[!check\]- Proof
 > Let $a$ be a nonzero, non-unity element of $D$ (if it is unity it is trivially a unit).
 > Since $D$ is finite, there must exist some $i+1 < j$ such that $a^i = a^j$.
 > By cancellation it follows $a^{i-j} = 1$ and hence $a a^{i-j-1} = 1$ so $a$ is a unit.
 > <span class="QED"/>

It follows that $\mathbb{Z}_{p}$ is a field.

# 

---

\#state/tidy | #lang/en | #SemBr
