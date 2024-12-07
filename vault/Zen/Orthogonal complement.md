---
tags:
- public
---

[Vector subspace](Vector%20subspace.md)

# Orthogonal complement

Given an [Inner product space](Inner%20product%20space.md) $(V, \mathbb{K}, \braket{ \cdot | \cdot })$,
the **orthogonal complement** $A^\perp$ of a subset $A \sube V$
is the [vector subspace](Vector%20subspace.md) of vectors orthogonal to those $A$ #m/def/linalg
$$
\begin{align*}
A^\perp = \{ v \in V : (\forall a \in A) [\braket{ a | v } =0] \}
\end{align*}
$$

\[!check\]- Proof of subspace
Clearly the $\vab 0 \in A^\perp$.
If $v_{1},v_{2} \in A^\perp$ and $\alpha,\beta \in \mathbb{K}$ then $\braket{ a | \alpha v_{1}+\beta v_{2} } = \alpha \braket{ a | v_{1} }+ \beta \braket{ a | v_{2} }=0$ for all $a \in A$,
and thus $\alpha v_{1} + \beta v_{2} \in A^\perp$.
Therefore $A^\perp$ is a subspace.
<span class="QED"/>

## Properties

Let $A \sube V$ be an arbitrary subset. Then

1. $A^\perp$ is [topologically closed](Topological%20space.md) ^S1
1. $A \cap A^\perp \sube \{ 0 \}$ ^S2
1. $B \sube A \implies A^\perp \sube B^\perp$ ^S3
1. $A \sube (A^\perp)^\perp$ ^S4
1. If $\mathrm{B}_{\epsilon}(v) \sube A$ for some $v \in V$, then $A^\perp = \{ 0 \}$ ^S5
1. $A^\perp = (\span A)^\perp$ ^S6

 > 
 > \[!check\]- Proof of 1–6
 > Note that the orthogonal complement of a singleton $\{ v  \}$ can be expressed as a preïmage
 > $$
\begin{align*}
\{ v \}^\perp = (\bra{v})^{-1} \{ 0 \}
\end{align*}
$$
 > Since $\{ 0 \}$ is closed in $\mathbb{K}$, and *the inner product is continuous*,
 > it follows $\{ v \}^\perp$ is closed.
 > Now for an arbitrary set $A$,
 > $$
\begin{align*}
A^\perp = \bigcap_{a \in A} \{ a \}^\perp
\end{align*}
$$
 > which is an intersection of closed sets and is therefore closed,
 > proving [^S1](Orthogonal%20complement.md#s1).
 > 
 > Note if $v \in A \cap A^\perp$ then $\braket{ v | v }= 0$, implying $v = 0$ by [Inner product space > ^IP3](Inner%20product%20space.md#ip3),
 > proving [^S2](Orthogonal%20complement.md#s2).
 > 
 > Let $B \sube A \sube V$ and $v \in A^\perp$.
 > Then $\braket{ v | b }=0$ for any $b \in B \sube A$,
 > so $v \in B^\perp$, proving [^S3](Orthogonal%20complement.md#s3).
 > 
 > Let $a \in A$.
 > Then by definition $\braket{ a | v }=0$ for any $v \in A^\perp$,
 > so $a \in (A^\perp)^\perp$,
 > proving [^S4](Orthogonal%20complement.md#s4).
 > 
 > Without loss of generality $v=0$, for $\braket{ B_{\epsilon}(v) | a } = 0$ iff $\braket{ \mathrm{B}_{\epsilon}(v) - v | a } = \braket{ \mathrm{B}_{\epsilon}(0) |a  }=0$.
 > Now
 > $$
\begin{align*}
\mathrm{B}_{\epsilon}(0) = \{ v \in V: \braket{ v | v } < \epsilon \}
\end{align*}
$$
 > and
 > $$
\braket{ \mathrm{B}_{\epsilon}(0) | y }=0
\iff
\braket{ \mathrm{B}_{\epsilon}(0) | \frac{\epsilon y}{2\|y\|} } = 0
$$
 > but since $\frac{\epsilon y}{2\|y\|} \in \mathrm{B}_{\epsilon}(0)$, it follows from [Inner product space > ^IP3](Inner%20product%20space.md#ip3) that $y=0$,
 > proving [^S5](Orthogonal%20complement.md#s5).
 > 
 > Let $x \in A^\perp$ and $y \in \span A$,
 > so $y = \sum_{i=1}^n \lambda_{i}a_{i}$ for some $\{ a_{i} \}_{i=1}^n \sube A$.
 > Then
 > $$
\begin{align*}
\braket{ x | y } = \bra{x} \sum_{i=1}^n \lambda_{i} \ket{a_{i}}  = 0
\end{align*}
$$
 > proving [^S6](Orthogonal%20complement.md#s6). <span class="QED"/>

Let $W \leq V$ be a [vector subspace](Vector%20subspace.md). Then

1. $V = W \oplus W^\perp$ ([Direct sum of vector spaces > Internal direct sum](Direct%20sum%20of%20vector%20spaces.md#internal-direct-sum)). ^V1
1. $W=(W^\perp)^\perp$. ^V2

 > 
 > \[!check\]- Proof of 1–2
 > [^V1](Orthogonal%20complement.md#v1) follows directly from [^S2](Orthogonal%20complement.md#s2),
 > and [^V2](Orthogonal%20complement.md#v2) follows directly from [^S4](Orthogonal%20complement.md#s4). <span class="QED"/>

Other properties include

* [The orthogonal compliment of an invariant subspace under a unitary operator is invariant](The%20orthogonal%20compliment%20of%20an%20invariant%20subspace%20under%20a%20unitary%20operator%20is%20invariant.md)

# 

---

\#state/tidy | #lang/en | #SemBr
