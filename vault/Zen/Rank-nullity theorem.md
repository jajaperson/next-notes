---
tags:
- public
---

[Linear map](Linear%20map.md)

# Rank-nullity theorem

Let $T \in \Vect_{\mathbb{K}}(U,V)$ be a [linear map](Linear%20map.md).
Then any [complement](Complement%20subspace.md) of the [kernel](Linear%20kernel.md) is isomorphic to the image #m/thm/linalg
$$
\begin{align*}
(\ker T)^c \cong \im T
\end{align*}
$$
and thus the sum of the [rank](Rank.md) and the [nullity](Linear%20kernel.md) equals the [dimension](Dimension%20of%20a%20vector%20space.md) of $U$[^2008]
$$
\begin{align*}
\rank T + \nullity T = \dim U
\end{align*}
$$

[^2008]: 2008. [Advanced Linear Algebra](../Sources/@romanAdvancedLinearAlgebra2008.md), p. 63

 > 
 > \[!check\]- Proof
 > By [Complement subspace > ^Existence](Complement%20subspace.md#existence) we have $U = \ker T \oplus (\ker T)^c$
 > whence $\dim U = \nullity T + \dim((\ker T)^c)$.
 > Let $T^c = T \restriction (\ker T)^c$.
 > Note $T^c$ is monic since $\ker T^c = (\ker T) \cap (\ker T)^c = \{ 0 \}$.
 > Let $Tv \in \im T$.
 > Since $v = u + u^c$ for $u \in \ker T$ and $u \in (\ker T)^c$ we have
 > $$
\begin{align*}
Tv = Tu + Tu^c = Tu^c = T^cu^c \in \im(T^c)
\end{align*}
$$
 > hence $\im(T) \sube \im(T^c)$ so $T^c:(\ker T)^c \to \im T$ is an isomorphism
 > It follows immediately that $\rank T + \nullity T = \dim U$.
 > <span class="QED"/>

## Corollaries

* It follows that an endomorphism $T$ on a finite-dimensional vector space is [monic](Linear%20monomorphism.md) iff it is [epic](Linear%20epimorphism.md).

# 

---

\#state/tidy | #lang/en | #SemBr
