---
tags:
- public
---

[Electrodynamics MOC](Electrodynamics%20MOC.md)

# Maxwell's equations in materials

By introducing the auxiliary \[\[Electric displacement|$\vab D$-field\]\] and [H-field](H-field.md)
and separating free charge and current from those arising from [electric polarization](Electric%20dipole%20moment.md) and [magnetization](Magnetic%20dipole%20moment.md),
[Maxwell's equations](Maxwell's%20equations.md) may become

1. [Gauß's law for diëlectrics](Gau%C3%9F's%20law%20for%20di%C3%ABlectrics.md)
1. [Gauß's law for magnetic flux](Gau%C3%9F's%20law%20for%20magnetic%20flux.md)
1. [Faraday's law of induction](Faraday's%20law%20of%20induction.md)
1. [Ampère's law for magnets](Amp%C3%A8re's%20law%20for%20magnets.md)

## Differential form

1. $$
  \begin{align*}
  \vab{\nabla} \cdot \vab D = \rho_{f}
  \end{align*}
  $$
1. $$
\begin{align*}
\vab\nabla \cdot \vab B = 0
\end{align*}
$$
1. $$
\begin{align*}
\vab\nabla \times \vab E = -\frac{\partial \vab B}{\partial t}
\end{align*}
$$
1. $$
  \begin{align*}
  \vab{\nabla} \times \vab H = \vab J_{f} + \frac{ \partial \vab D }{ \partial t } 
  \end{align*}
  $$

## Integral  form

1. $$
  \begin{align*}
  \oiint_{\partial\Omega} \vab D \cdot d\vab a = \iiint_{\Omega} \rho_{f} \, d\tau'
  \end{align*}
  $$
1. $$
\begin{align*}
\oiint_{\partial \Omega}{\vab B \cdot d\vab a} = 0
\end{align*}
$$
1. $$
\begin{align*}
\mathcal{E} =\oint_{\partial \Sigma}{\vab E \cdot d \vab \ell} 
&= -\frac{\partial \Phi_B}{\partial t} \\\\
&= -\frac{\partial}{\partial t} \iint_\Sigma{\vab B \cdot d \vab a}
\end{align*}
$$
1. $$
  \begin{align*}
  \oint_{\partial\Sigma} \vab H \cdot d\vab r &= \mu_{0}\left( I_{f,\Sigma} + \frac{ \partial \Phi_{D,\Sigma} }{ \partial t }  \right)  \\ 
  &= \left( \iint_{\Sigma} \vab J_{f} \cdot d\vab a + \frac{d}{dt} \iint_{\Sigma} \vab D \cdot d\vab a \right) 
  \end{align*}
  $$

## Sources

Noting the expressions for [bound charge density](Electric%20potential%20of%20a%20polarized%20material.md) and [bound current density](Magnetic%20potential%20of%20a%20magnetized%20material.md),
as well as current due to changes in [electric polarization density](Electric%20dipole%20moment.md), we have
$$
\begin{align*}
\rho &= \rho_{f} + \rho_{b} \\
&= \rho_{f} - \vab{\nabla} \cdot  \vab P \\
\vab J &= \vab J_{f} + \vab J_{b} + \frac{ \partial \vab P }{ \partial t } \\
&=  \vab J_{f}  + \vab{\nabla} \times \vab M + \frac{ \partial \vab P }{ \partial t }
\end{align*}
$$

# 

---

\#state/tidy | #lang/en | #SemBr
