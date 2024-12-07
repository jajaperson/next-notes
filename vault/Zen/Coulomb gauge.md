---
tags:
- public
---

[Electric and magnetic potentials](Electric%20and%20magnetic%20potentials.md)

# Coulomb gauge

The **Coulomb gauge** of the [magnetic potential](Electric%20and%20magnetic%20potentials.md) $\vab A$ is defined by the gauge fixing condition
$$
\begin{align*}
\vab{\nabla}\cdot\vab A = 0
\end{align*}
$$

 > 
 > \[!check\]- Proof of gauge validity
 > Let $\vab B = \vab{\nabla}\times\vab A$ and let $f$ solve [Poisson's equation](Poisson's%20equation.md)
 > $$
\begin{align*}
\nabla^2 f = - \vab{\nabla} \cdot \vab A
\end{align*}
$$
 > i.e. $f = - G * (\vab{\nabla} \cdot\vab A)$ where $G$ is the [Green's function for the Laplacian](Green's%20function%20for%20the%20Laplacian.md).
 > Then letting $\vab A' = \vab A + \vab{\nabla}f$ we have $\vab{\nabla}\times\vab A' = \vab B$ and
 > $$
\begin{align*}
\vab{\nabla}\cdot \vab A' = \vab{\nabla} \cdot (\vab A + \vab{\nabla}f) = \vab{\nabla} \cdot \vab A + \nabla^2 f = 0
\end{align*}
$$
 > as required.
 > <span class="QED"/>

The main advantage of this gauge is that [Ampère's circuital law](Amp%C3%A8re's%20circuital%20law.md) is simplified using
$$
\begin{align*}
\vab{\nabla}\times\vab B = \vab{\nabla}\times \vab{\nabla}\times\vab A = \vab{\nabla}(\vab{\nabla}\cdot\vab A) - \nabla^2 \vab A = -\nabla^2 \vab A
\end{align*}
$$
see e.g. [Magnetostatics MOC](Magnetostatics%20MOC.md).

# 

---

\#state/tidy | #lang/en | #SemBr
