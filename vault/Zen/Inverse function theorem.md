---
tags:
- public
---

[Analysis MOC](Analysis%20MOC.md)

# Inverse function theorem

Let $U \sube \mathbb{R}^n$ be open, $F: U \to \mathbb{R}^n$ be $C^\infty$ [differentiable](Differentiability.md),
and $x \in U$.
Then if the [total derivative](Total%20derivative.md) $DF(x)$ is non-singular,
there exist open neighbourhoods $U'$ of $x$ in $U$ and $V$ of $f(x)$ in $\mathbb{R}^n$ such that
$$
\begin{align*}
F \restriction U' : U' \to V
\end{align*}
$$
is a $C^\infty$ [diffeomorphism](Diffeomorphism.md), #m/thm/anal
i.e. $F$ is locally a diffeomorphism at $x$.

 > 
 > \[!missing\]- Proof
 > \#missing/proof

The constructive proof relates to *Newton's method*.

## Corollary

The above theorem is easily extended to a $C^\infty$ [differentiable](Differentiability.md) map $f:X\to Y$ between $C^\infty$ [differentiable manifolds](Differentiable%20manifold.md) $X,Y$.
If the [Differential pushforward](Differential%20pushforward.md) $T_{x}f : T_{x}X \to T_{f(x)}Y$ is a *linear isomorphism*,
then $f$ is a local [diffeomorphism](Diffeomorphism.md),
as one expects from the [Linearization dogma](Linearization%20dogma.md).

# 

---

\#state/develop | #lang/en | #SemBr
