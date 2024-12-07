---
tags:
- public
---

[Electrodynamics MOC](Electrodynamics%20MOC.md)

# Maxwell's equations

1. [Gauß's law](Gau%C3%9F's%20law.md)
1. [Gauß's law for magnetic flux](Gau%C3%9F's%20law%20for%20magnetic%20flux.md)
1. [Faraday's law of induction](Faraday's%20law%20of%20induction.md)
1. [Ampère's circuital law](Amp%C3%A8re's%20circuital%20law.md)

Maxwell's equations form the basis of [Electrodynamics](Electrodynamics%20MOC.md),
along with the [Lorentz force law](Lorentz%20force%20law.md).
The differential and integral forms are translated using generalisations of the [Fundamental theorem of calculus](Fundamental%20theorem%20of%20calculus.md),
namely [Острогра́дский's divergence theorem](%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B3%D1%80%D0%B0%CC%81%D0%B4%D1%81%D0%BA%D0%B8%D0%B9's%20divergence%20theorem.md) and [Stokes's theorem](Stokes's%20theorem.md).
Note that [Gauß's law for magnetic flux](Gau%C3%9F's%20law%20for%20magnetic%20flux.md) and [Faraday's law of induction](Faraday's%20law%20of%20induction.md) are automatically satisfied by defining the fields in terms of [Electric and magnetic potentials](Electric%20and%20magnetic%20potentials.md).

See also [Maxwell's equations in materials](Maxwell's%20equations%20in%20materials.md)

## Differential form

These use the mathematical language of [Divergence](Divergence.md) and [Curl](Curl.md).

1. The divergence of an electric field at a given point
   (how much field lines move away from that point)
   is proportional to the charge density at that point.
   $$
\begin{align*}
\vab\nabla \cdot \vab E = \frac{\rho_q}{\varepsilon_0}
\end{align*}
$$
   ^D1
1. The divergence of a magnetic field is $\vab 0$ at all points,
   i.e. they do not diverge, since there are no monopoles.
   Thus a magnetic field is [solenoidal](Incompressible%20vector%20field.md).
   $$
\begin{align*}
\vab\nabla \cdot \vab B = 0
\end{align*}
$$
   ^D2
1. Curl (tendency for field lines to orbit)
   in an electric field results in a change in a magnetic field,
   and vice versa.
   $$
\begin{align*}
\vab\nabla \times \vab E = -\frac{\partial \vab B}{\partial t}
\end{align*}
$$
   ^D3
1. Electric current passing through a closed circuit
   results in the magnetic curl,
   and vice versa.[^adjust]
   $$
\begin{align*}
\vab\nabla \times \vab B = \mu_0 \left( 
	\vab J + \varepsilon_0 \frac{\partial \vab E}{\partial t}
\right)
\end{align*}
$$
   ^D4

[^adjust]: Note that partial term here is an adjustment that was made by Maxwell.

## Integral form

These use the mathematical language of the [Double integral](Double%20integral.md),
[Triple integral](Triple%20integral.md);
and more specifically closed [Circulation](Circulation.md) and [Flux](Flux.md)

1. The nett number of electric field lines
   escaping through the boundary of some solid $\Omega$
   is proportional to the amount of charge contained within that solid
   (contained charge can be calculated using an integral over [Charge density](Charge%20density.md)).
   $$
\begin{align*}
\Phi_E 
= \oiint_{\partial \Omega}{\vab E \cdot d\vab a}
= \frac{1}{\varepsilon_0} \iiint_\Omega{\rho_q\, d\tau'}
\end{align*}
$$
   ^I1
1. The nett number of magnetic field lines
   escaping through the boundary of some solid $\Omega$
   is always $0$,
   i.e. the number of magnetic field lines leaving a space
   is equal to the number entering that space,
   since there are no monopoles.
   $$
\begin{align*}
\oiint_{\partial \Omega}{\vab B \cdot d\vab a} = 0
\end{align*}
$$
   ^I2
1. Electric current moving anticlockwise in a closed loop
   creates a change in magnetic flux inside the loop
   in the direction of negative orientation.
   $$
\begin{align*}
\mathcal{E} =\oint_{\partial \Sigma}{\vab E \cdot d \vab \ell} 
&= -\frac{\partial \Phi_B}{\partial t} \\\\
&= -\frac{\partial}{\partial t} \iint_\Sigma{\vab B \cdot d \vab a}
\end{align*}
$$
   ^I3
1. Nett current moving through a cross section solid conductor $\Sigma$
   or a change in electric flux cutting through $\Sigma$
   (working together additively)
   results in a magnetic field [circulating](Circulation.md) around the conductor,
   and vice versa.
   $$
\begin{align*}
\oint_{\partial \Sigma}{\vab B \cdot d \vab \ell}
&= \mu_0 \left( 
	I_{\Sigma} + \varepsilon_0 \frac{\partial \Phi_E}{\partial t}
\right) \\\\
&= \mu_0 \left( 
	\iint_\Sigma{\vab J \cdot d\vab a} + \varepsilon_0 \frac{\partial}{\partial t} \iint_\Sigma{\vab E \cdot d\vab a}
\right)
\end{align*}
$$
   ^I4

## Quantities

* **Fields**
  * [Electric field](Electric%20field.md) $\vab E$
  * [Magnetic field](Magnetic%20field.md) $\vab B$
* **Sources**
  * [Current density](Current%20density.md) $\vab J$
  * [Charge density](Charge%20density.md) $\rho$
* **Constants**
  * *Permeability of free space* $\mu_{0}$
  * *Permativity of free space* $\epsilon_{0}$

---

\#state/tidy | #SemBr | #lang/en
