---
tags:
- public
---

[Real random variable](Real%20random%20variable.md)

# Random function

A **random function** $T$ is a function of some [Real random variable](Real%20random%20variable.md) $X$,
or rather a function that composes with the random variable $X$ to create a function on the sample space $T \circ X : \xi \to S$. #m/def/prob

## Distribution

The [probability density function](Probability%20density%20function.md) of a random function $F$ is given by #m/thm/prob
$$
\begin{align*}
F_{T} (t) = \Ex[ \delta (T ( X) - t) ]
\end{align*}
$$
where $\delta$ is the [Dirac delta](Dirac%20delta.md).[^schw]

[^schw]: 2006, [Statistische Mechanik](../Sources/@schwablStatistischeMechanik2006.md), p. 5

 > 
 > \[!check\]- Proof
 > Let $X \sim w$ and $F(X)$ be a random function.
 > Then the [Characteristic function (probability)](Characteristic%20function%20%28probability%29.md) of $F$ is
 > $$
\begin{align*}
\chi_{F} (k) = \sum_{n=0}^\infty \frac{(-ik)^n}{n!} \langle F(X)^n \rangle 
\end{align*}
$$
 > Applying the inverse [Fourier transform](Fourier%20transform.md):
 > $$
\begin{align*}
w_{F}(f) &= \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \sum_{n=0}^\infty \frac{(-ik)^n}{n!} \langle F^n \rangle  \right) e^{ikf} \, dk \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \sum_{n=0}^\infty \frac{(-ik)^n}{n!} \int_{-\infty}^{\infty} F(x)^n \, w(x) dx   \right) e^{ikf} \, dk \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} \left( \int_{-\infty}^{\infty} \left( \sum_{n=0}^\infty \frac{(-ik)^n}{n!} F(x)^n \right) \, w(x) dx   \right) e^{ikf} \, dk \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ikf} \int_{-\infty}^{\infty}  e^{-ikF(x)} \, w(x)dx  \, dk \\
&= \frac{1}{2\pi} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty}  e^{ik(f-F(x))} \, dk\, w(x)dx  
\end{align*}
$$
 > Now using the [Fourier representation of the Dirac delta](Dirac%20delta.md#properties)
 > $$
\begin{align*}
w_{F}(f) &=  \int_{-\infty}^{\infty} \delta(f - F(x)) \, w(x)dx = \langle \delta(f-F(x)) \rangle
\end{align*}
$$
 > This expands to [multivariate](Multivariate%20random%20variable.md) scenarios as expected. <span class="QED"/>

In the discrete case the [probability mass function](Discrete%20random%20variable.md) is
$$
\begin{align*}
p_{T}(t) = \sum_{x:T(x) = y}p_{X}(y)
\end{align*}
$$

See also

* [Distribution of a differentiable injective random function](Distribution%20of%20a%20differentiable%20injective%20random%20function.md)

# 

---

\#state/tidy | #lang/en | #SemBr
