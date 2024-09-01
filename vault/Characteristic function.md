[[Probability theory MOC]]
# Characteristic function

The **characteristic function**^[German _charakteristische Funktion_] $\chi(k)$ of a [[Random variable]] $X \sim w$ 
is the [[Fourier transform]] of the [[Continuous random variable|probability density function]] $w(x)$
or equivalently the [[Expected value]] of the function $e^{-ikX}$[^schw] #m/def/prob
$$
\begin{align*}
\chi (k) = \langle e^{-ikX} \rangle = \mathcal{F}\{ w \}(k) = \int_{-\infty}^{\infty} w(x) e^{-ikx} \, dx 
\end{align*}
$$
This describes the distribution of $X$ completely —
the density function may be obtained using the reverse Fourier transform:
$$
\begin{align*}
w(x) = \mathcal{F}^{-1}\{ \chi \}(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \chi(k) e^{ikx} \, dk 
\end{align*}
$$
Using the [[Taylor series]] expansion of $e^{-ikX}$ one obtains a further representation of $\chi(k)$ in terms of [[Moment (probability)|moments]]:
$$
\begin{align*}
\chi(k) &= \sum_{n=0}^\infty \frac{(-ik)^n}{n!} \langle X^n \rangle \\
\end{align*}
$$

[^schw]: 2006, [[@schwablStatistischeMechanik2006|Statistische Mechanik]], p. 5

#
---
#state/develop | #lang/en | #SemBr
