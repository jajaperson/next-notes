---
tags:
- public
alias: electric polarization density
---

[Electrostatics MOC](Electrostatics%20MOC.md)

# Electric dipole moment

The **electric dipole moment** $\vab p$ measures the separation of positive and negative charges within a system, determining the dipole term in the [Multipole expansion of the electrostatic potential](Multipole%20expansion%20of%20the%20electrostatic%20potential.md).
In general, for a charge distribution $\rho$ localized to $\Omega$ the electric dipole moment is given by
$$
\begin{align*}
\vab p(\vab r) &= \iiint_{\Omega} \vab \SR \rho(\vab r') \,d\tau'
\end{align*}
$$
In the case of a point charge $Q$ at position $\vab r$, we have $\vab p = Q \vab r$.
It is useful to introduce the concept of **electric polarization density** $\vab P$,
so that the dipole moment due to a volume $\Omega$ is given by
$$
\begin{align*}
\vab p = \iiint_{\Omega} \vab P(\vab r') \,d\tau'
\end{align*}
$$
Analysis of the [Electric potential of a polarized material](Electric%20potential%20of%20a%20polarized%20material.md) motivates the surface and volume **bound charge densities**
$$
\begin{align*}
\sigma_{b}(\vab r') &= \vab P(\vab r') \cdot \unitv n 
&
\rho_{b}(\vab r') &= -\vab{\nabla} \cdot \vab P(\vab r')
\end{align*}
$$

## See also

* See [Perfect electric dipole](Perfect%20electric%20dipole.md)

# 

---

\#state/tidy | #lang/en | #SemBr
