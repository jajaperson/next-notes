---
tags:
- public
alias: Radon-Nikodym derivative
---

[Measure theory MOC](Measure%20theory%20MOC.md)

# Radon-Nikodym theorem

The **Radon-Nikodym theorem** states that given two [measures](Measure%20space.md) $\mu,\nu$ on a [measurable space](Measure%20space.md) $(X, \Sigma)$ such that [Dominating measure > ^eq](Dominating%20measure.md#eq),
there exists a [measurable function](Measurable%20function.md) $f : X \to [0,\infty)$
such that for any $A \in \Sigma$ #m/thm/measure
$$
\begin{align*}
\nu(A)= \int_{A} f(x) \, d\mu(x) 
\end{align*}
$$
which is unique $\mu$-[almost everywhere](Almost%20everywhere.md).
Such an $f$ is called the **Radon-Nikodym derivative**, denotes
$$
\begin{align*}
f = \frac{d\nu}{d\mu}
\end{align*}
$$

 > 
 > \[!missing\]- Proof
 > \#missing/proof

# 

---

\#state/develop | #lang/en | #SemBr
