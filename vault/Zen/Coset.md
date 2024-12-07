---
tags:
- public
---

[Group theory MOC](Group%20theory%20MOC.md)

# Coset

Given a subgroup $H \sube G$, the **left coset** of $H$ in an element $g \in G$ is defined as #m/def/group
$$
\begin{align*}
gH = \{ gh : h \in H \} \sube G
\end{align*}
$$
likewise the **right coset** as
$$
\begin{align*}
Hg = \{ hg : h \in H \} \sube G
\end{align*}
$$

## Properties

1. $g \in H$ iff $gH = Hg = H$ ($\implies$ by *Reärrangement lemma*, $\impliedby$ by $ge = g$)
1. As a consequence of the *Reärrangement lemma* $\abs{gH} = \abs{H}$.
1. [Cosets are either identical or disjoint](Cosets%20are%20either%20identical%20or%20disjoint.md).
1. Every $g \in G$ is contained in at least one coset of $H$, namely $gH$ (by $ge = g$)
1. From 2–4, $G$ may be partitioned into equally sized cosets. Hence [the order of a subgroup divides the order of a group](Lagrange's%20Theorem.md).

# 

---

\#state/develop | #lang/en | #SemBr
