---
tags:
- public
mathLink: $D[x]$ is an integral domain iff $D$ is an integral domain
---

[Integral domain](Integral%20domain.md)

# The polynomial ring over an integral domain is an integral domain

Let $D$ be a [ring](Ring.md) and $D[x]$ be the [polynomial ring](Polynomial%20ring.md) in indeterminate $x$.
Then $D[x]$ is an [integral domain](Integral%20domain.md) iff $D$ is an integral domain. #m/thm/ring

 > 
 > \[!check\]- Proof
 > Assume $D$ is an integral domain.
 > Clearly $D[x]$ is commutative since $D$ is.
 > Let $f(x), g(x) \in D[x]$ be nonzero with leading terms $f_{n}a^n$ and $g_{m}x^m$ respectively.
 > Then the leading term of $f(x)g(x)$ is $f_{n}g_{m}x^{n+m}$ so $f(x)g(x) \neq 0$.
 > 
 > Note if $D[x]$ is an integral domain, then so are its subrings, including $D$. <span class="QED"/>

# 

---

\#state/tidy | #lang/en | #SemBr
