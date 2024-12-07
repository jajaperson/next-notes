---
tags:
- public
---

[Module theory MOC](Module%20theory%20MOC.md)

# Module homomorphism

Let $R$ be a ring and $V,W$ be (left) $R$-[modules](Module.md).
A map $f : V \to W$ is a (left) $R$-**module homomorphism** or (left) $R$-**linear** iff for any $\lambda,\mu \in \mathbb{R}$ and $u,v \in V$ #m/def/module
$$
\begin{align*}
f(\lambda u + \mu v) = \lambda f(u) + \mu f(v)
\end{align*}
$$
This is a direct generalization of a [linear map](Linear%20map.md) between vector spaces.

## Properties

* A linear map $f \in \lMod R(V,W)$ is [epic](Epimorphism.md) iff it is [surjective](Surjectivity,%20injectivity,%20and%20bijectivity.md) iff $\im f = W$
* A linear map $f \in \lMod R(V,W)$ is [monic](Monomorphism.md) iff it is [injective](Surjectivity,%20injectivity,%20and%20bijectivity.md) iff $\ker f = \{  0 \}$
* A linear map is an [isomorphism](Isomorphism.md) iff it is [bijective](Surjectivity,%20injectivity,%20and%20bijectivity.md) iff it is epic and monic
* If $R$ is a commutative ring, then $\lMod R(V,V)$ is an $R$-algebra called the [Endomorphism ring](Endomorphism%20ring.md).

# 

---

\#state/develop | #lang/en | #SemBr
