---
tags:
- public
---

[Lie algebra representation](Lie%20algebra%20representation.md)

# Adjoint Lie algebra representation

The **adjoint representation** of a [Lie algebra](Lie%20algebra.md) $\mathfrak{g}$ is a [representation](Lie%20algebra%20representation.md) carried by $\mathfrak{g}$ itself, given by #m/def/lie
$$
\begin{align*}
\ad_{X} : \mathfrak{g} &\to \mathfrak{g} \\
Y &\mapsto [X,Y]
\end{align*}
$$
The *Jacobi identity* implies $\ad_{X}$ is a [derivation](Derivation%20on%20an%20algebra.md) for all $X \in \mathfrak{g}$ ([^P1](Adjoint%20Lie%20algebra%20representation.md#p1)),
and [away from 2](Away%20from%202.md) these conditions are equivalent.

## Properties

1. $\ad_{X}[Y,Z] = [\ad_{X}Y, Z] + [Y,\ad_{X} Z]$ ^P1
1. $\ad_{X}$ has no nonzero eigenvalues for each $X \in \mathfrak{g}$ ^P2
1. $[\ad_{X},\ad_{Y}] = \ad_{[X,Y]}$ ^P3

 > 
 > \[!check\]- Proof of 1–3
 > Let $X,Y,Z \in \mathfrak{g}$.
 > Assuming anticommutativity
 > $$
\begin{align*}
\ad_{X}[Y,Z] &= [X,[Y,Z]] \\
&= - [Y, [Z,X]] - [Z, [X,Y]] \\
&= [Y, [X,Z]] + [[X,Y],Z] \\
&= [Y, \ad_{X}Z] + [\ad_{X}Y, Z]
\end{align*}
$$
 > proving [^P1](Adjoint%20Lie%20algebra%20representation.md#p1).
 > 
 > Assume $\ad_{X}(Y) = [X,Y] = \lambda Y$.
 > Then
 > $$
\begin{align*}
0 &= [Y,[X,Y]] + \cancel{ [X, [Y,Y]] } + [X,[Y,X]] \\
&= \cancel{ [Y, \lambda Y] } + [X,-\lambda Y] \\
&= -\lambda[X,Y] = -\lambda^2 Y
\end{align*}
$$
 > hence either $\lambda = 0$ or $Y = 0$,
 > proving [^P2](Adjoint%20Lie%20algebra%20representation.md#p2).
 > 
 > For any $Z \in \mathfrak{g}$,
 > $$
\begin{align*}
[\ad_{X},\ad_{Y}](Z) &= \ad_{X}\ad_{Y}(Z) - \ad_{Y}\ad_{X}(Z) \\
&= [X,[Y,Z]] - [Y,[X,Z]] \\
&= [X, [Y,Z]] + [Y,[Z,X]] \\
&= - [Z,[X,Y]]  \\
&= [[X,Y], Z] \\
&= \ad_{[X,Y]}(Z)
\end{align*}
$$
 > hence $[\ad_{X},\ad_{Y}] = \ad_{[X,Y]}$,
 > proving [^P3](Adjoint%20Lie%20algebra%20representation.md#p3).
 > <span class="QED"/>

# 

---

\#state/tidy | #lang/en | #SemBr
