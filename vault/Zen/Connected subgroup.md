---
tags:
- public
---

[Topological group](Topological%20group.md)

# The connected component of the identity is a normal subgroup

Let $G$ be a [Topological group](Topological%20group.md) and $[e]_{\sim} \sube G$ be the (path) [connected component](Connectedness.md) containing the identity $e$, where $\sim$ is the (path) connectedness relation.
Then $G_{e} = [e]_{\sim} \trianglelefteq G$ is a [normal subgroup](Normal%20subgroup.md) of $G$,
called the (path) **connected subgroup** of $G$ #m/thm/group

 > 
 > \[!check\]- Proof
 > $e \in G_{0}$ by construction.
 > Let $a, b \in [e]_{\sim}$, so $a \sim b \sim e$.
 > We will use [The continuous image of a connected space is connected](Main%20theorem%20of%20connectedness.md).
 > $(-)^{-1}$ so continuous $b^{-1} \sim e^{-1} \sim e \sim b$.
 > Right-multiplication by $b^{-1}$ is continuous so $ab^{-1} \sim bb^{-1} = e$.
 > Thus $ab^{-1} \in [e]_{\sim}$,
 > and $[e]_{\sim}$ is a subgroup by [Subgroup > One step subgroup test](Subgroup.md#one-step-subgroup-test).
 > For any $x \in G$, conjugation by $x$ is continuous.
 > Hence $xyx^{-1} \sim x e x^{-1} = e$ for any $y \in [e]_{\sim}$.
 > Therefore $[e]_{\sim} \trianglelefteq G$ is a [normal subgroup](Normal%20subgroup.md).
 > <span class="QED"/>

## Properties

1. The cosets of $G_{e}$ are the [connected components](Connectedness.md) of $G$, i.e. $h[g]_{\sim} = [hg]_{\sim}$ ^P1

 > 
 > \[!check\]- Proof of 1
 > Since multiplication is continuous and hence preserves connected components
 > $$
\begin{align*}
h \sim g &\iff g^{-1}h \sim g^{-1}g = e \\
&\iff g^{-1}h \in G_{e}\\
&\iff h \in g G_{e}
\end{align*}
$$
 > proving [^P1](Connected%20subgroup.md#p1).
 > <span class="QED"/>

# 

---

\#state/tidy | #lang/en | #SemBr
