---
tags:
- public
---

[Linear algebra MOC](Linear%20algebra%20MOC.md)

# Linear map

A **linear map**[^var] is a structure-preserving map of [vector spaces](Vector%20space.md).
That is, given two vector spaces over the same field $V,W \in \Vect_{\mathbb{K}}$ a mapping $f : V \to W$ is linear iff for any $\lambda,\mu \in \mathbb{K}$ and $\vab v, \vab u \in V$ #m/def/linalg
$$
\begin{align*}
f(\lambda\vab v + \mu \vab u) = \lambda f(\vab v) + \mu f(\vab u)
\end{align*}
$$
It follows that $f(\vab 0) = \vab 0$.
A linear map is an example of a [Module homomorphism](Module%20homomorphism.md).

 > 
 > \[!tip\]+ Geometric interpretation
 > If a map $f : \mathbb{R}^n \to \mathbb{R}^m$ is interpreted as the warping of space,
 > the above rules are equivalent to the following
 > 
 > * The origin remains in place
 > * Grid lines remain evenly spaced
 > * Grid lines remain parallel

[^var]: variously called a **linear transformation**, **linear operator**, **linear function**, **linear morphism**.

## Properties

Some of these properties apply for a more general [Module homomorphism](Module%20homomorphism.md)

* A linear map $T \in \Vect_{\mathbb{K}}(U,V)$ is [epic](Epimorphism.md) iff it is surjective iff $\im T = V$
* A linear map $T \in \Vect_{\mathbb{K}}(U,V)$ is [monic](Monomorphism.md) iff it is injective iff $\ker T = \{ \vab 0 \}$
* A linear map is an *isomorphism* iff it is [bijective](Surjectivity,%20injectivity,%20and%20bijectivity.md) iff it is epic and monic
* [Rank-nullity theorem](Rank-nullity%20theorem.md)

## Related

* [Linear kernel](Linear%20kernel.md)
* [Bounded operator](Bounded%20operator.md)

# 

---

\#state/tidy | #SemBr | #lang/en
