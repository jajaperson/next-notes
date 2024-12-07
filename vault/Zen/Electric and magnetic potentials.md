---
tags:
- public
aliases:
- electric potential
- magnetic potential
---

[Electrodynamics MOC](Electrodynamics%20MOC.md)

# Electric and magnetic potentials

[Gauß's law for magnetic flux](Gau%C3%9F's%20law%20for%20magnetic%20flux.md) and [Faraday's law of induction](Faraday's%20law%20of%20induction.md) are satisfied by the [electric field](Electric%20field.md) $\vab E$ and [Magnetic field](Magnetic%20field.md) $\vab B$ iff there exists an **electric potential** $V$ and a **magnetic potential** $\vab A$ such that
$$
\begin{align*}
\vab E &= -\vab\nabla V - \frac{ \partial \vab A }{ \partial t } & \vab B &= \vab\nabla\times\vab A
\end{align*}
$$

 > 
 > \[!check\]- Proof
 > [Gauß's law for magnetic flux](Gau%C3%9F's%20law%20for%20magnetic%20flux.md) is satisfied iff the $\vab B$-field is [incompressible](Incompressible%20vector%20field.md),
 > which is equivalent to the statement that there exists a [vector potential](Incompressible%20vector%20field.md) $\vab A$ with $\vab B = \vab\nabla \times\vab A$.
 > Then inspecting [Faraday's law of induction](Faraday's%20law%20of%20induction.md),
 > $$
\begin{align*}
\vab \nabla \times\vab E + \frac{ \partial \vab B }{ \partial t } &= \vab 0 \\
\iff \vab\nabla \times \vab E + \frac{ \partial }{ \partial t } \left( \vab\nabla \times \vab A \right) &= \vab 0 \\
\iff \vab \nabla \times \left( \vab E + \frac{ \partial\vab A }{ \partial t }  \right) &= \vab 0
\end{align*}
$$
 > we find it holds iff $\vab E + \frac{ \partial \vab A }{ \partial t }$ is [irrotational](Conservative%20vector%20field.md), i.e. admits a [scalar potential](Conservative%20vector%20field.md) $V$ such that $-\vab \nabla V = \vab E + \frac{ \partial \vab A }{ \partial t }$.
 > Therefore $\vab E = -\vab\nabla V - \frac{ \partial \vab A}{ \partial t }$.
 > <span class="QED"/>

The electric and magnetic fields are *Gauge invariant* under the transformation
$$
\begin{align*}
\vab A &\to \vab A + \vab\nabla f & V &\to V - \frac{ \partial f}{ \partial t } 
\end{align*}
$$

 > 
 > \[!check\]- Proof
 > Applying the identity $\vab{\nabla}\times(\vab{\nabla}f) = 0$ it immediately follows that $\vab A' = \vab A + \vab{\nabla}f$ gives the same $\vab B$-field as $\vab A$, however if we want $\vab E$ to also be the same we require that
 > $$
\begin{align*}
-\vab{\nabla}V - \frac{ \partial \vab A }{ \partial t } = -\vab{\nabla}V' - \frac{ \partial }{ \partial t } (\vab A + \vab{\nabla}f) = -\nabla \left( V' + \frac{ \partial f }{ \partial t }  \right)  - \frac{ \partial \vab A }{ \partial t } 
\end{align*}
$$
 > hence $V' = V - \frac{ \partial f }{ \partial t }$. <span class="QED"/>

## Possible gauges

* [Coulomb gauge](Coulomb%20gauge.md)
* *Lorenz gauge*

# 

---

\#state/develop | #lang/en | #SemBr
