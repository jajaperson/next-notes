---
tags:
- public
mathLink: $L^p(X,\mu)$ forms an inner product space iff $p=2$
---

[Lebesgue space](Lebesgue%20space.md)

# $L^p(X,\mu)$ forms an inner product space iff $p=2$

Let $(X,\Sigma,\mu)$ be a [measure space](Measure%20space.md) with at least two distinct subsets $A,B \in \Sigma$ of finite nonzero measure and let $p \in [1,\infty]$.
Then the [Lebesgue space](Lebesgue%20space.md) $L^p(X, \mu)$ satisfies the [parallelogram law](Parallelogram%20law.md) and therefore has a unique [inner product](Inner%20product%20space.md)  iff $p = 2$.

 > 
 > \[!check\]- Proof
 > Without loss of generality we may assume that $A \cap B = \0$.
 > Let $a = \mu(A)$ and $b = \mu(B)$, and
 > $$
\begin{align*}
r : (0,\infty) &\to \mathbb{R} \\
t &\mapsto t^{2/p}
\end{align*}
$$
 > Then using the *indicator functions* $1_{A}$ and $1_{B}$ we have
 > $$
\begin{align*}
2\| 1_{A}\|_{p}^2 + 2\|1_{B}\|_{p}^2 
&= 2\left( \int _{X} |1_{A}|^p \, d\mu  \right)^{1/p} + 2\left( \int _{X} |1_{\underset{  }{ A }}|^p \, d\mu  \right)^{1/p} \\
&= 2r(a) + 2r(b)
\end{align*}
$$
 > and
 > $$
\begin{align*}
\|1_{A}+1_{B}\|^2 + \|1_{A} - 1_{B}\|^2 
&= \left( \int _{X}|1_{A} + 1_{B}|^p \, d\mu  \right) ^{2/p} + \left( \int _{X}|1_{A} - 1_{B}|^p \, d\mu  \right) ^{2/p}
\\
&= 2 r(a+b)
\end{align*}
$$
 > so for equality we require $r(a) + r(b) = r(a+b)$.
 > If $p > 2$, then $r$ is a [strictly convex function](Convex%20function.md), since [its second derivative is positive on its domain](A%20twice-differentiable%20function%20is%20convex%20iff%20its%20second%20derivative%20is%20nonnegative%20everywhere.md),
 > so since \[\[Convexity on the positive reals and negative f(0) implies superadditivity|strict convexity on the positive reals and $f(0) \leq 0$ implies superadditivity\]\] we have
 > $$
\begin{align*}
r(a) + r(b) < r(a+b)
\end{align*}
$$
 > so equality cannot hold.
 > For $p \in (1,2)$ an analogous argument can be made using $-r$.
 > 
 > For the converse, see [L2 space](L2%20space.md). <span class="QED"/>

## Specific counterexamples

To show that the parallelogram law
$$
\begin{align*}
2 \|x\|_{p}^2 + 2 \|y\|_{p}^2 = \|x+y\|_{p}^2 + \|x-y\|_{p}^2
\end{align*}
$$
holds iff $p=2$, the following counterexamples may be used

* For $X=[a,b]$ take $x=1_{\left[ a, m \right]}$ and $y=1_{\left[ m, b \right]}$ where $m = \frac{a+b}{2}$.
* For $X = \mathbb{N}$, i.e. [Lebesgue sequence space](Lebesgue%20sequence%20space.md), take $x_{i} = \delta_{1i}$ and $y_{i}=\delta_{2i}$

# 

---

\#state/develop | #lang/en | #SemBr
