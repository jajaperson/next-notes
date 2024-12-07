---
tags:
- public
---

[Lie theory MOC](Lie%20theory%20MOC.md)

# Lie group

A **Lie group** $G$ is a [topological group](Topological%20group.md) $G$ on an [analytic manifold](Differentiable%20manifold.md) $G$ such that the group operation $(\cdot) : G \times G \to G$ and the inverse map $(-)^{-1} : G \to G$ are [analytic](Differentiability.md). #m/def/lie
Equivalently, the map $gh \mapsto gh^{-1}$ is analytic.

 > 
 > \[!info\]- Charts and atlases of a Lie group
 > Due to properties of a Lie group as a [Homogenous space](Homogenous%20space.md), it is possible to build an [atlas](Atlas.md) for the entire group from a single [coördinate chart](Coo%CC%88rdinate%20chart.md) $(U, \varphi)$.
 > For if $(U, \varphi)$ is a chart with $\varphi(e) = \vab 0$, then $(gU, \varphi_{g})$ may be defined as
 > $$
\begin{align*}
\varphi_{g} : gU &\to \varphi_{g}(gU) \\
h &\mapsto \varphi_{g}(g^{-1}h)
\end{align*}
$$
 > so that $\varphi_{g}(g) = \vab 0$.

Every Lie group has a corresponding [Lie algebra](Lie%20algebra.md) given by the [Tangent space](Tangent%20space.md) at identity. #to/clarify

# 

---

\#state/develop | #lang/en | #SemBr
