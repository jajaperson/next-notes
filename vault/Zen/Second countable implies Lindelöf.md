---
tags:
- public
---

[Second countability axiom](Second%20countability%20axiom.md)

# Second countable implies Lindelöf

Let $X$ be a topological space.
If $X$ is [second-countable](Second%20countability%20axiom.md) then it is [Lindelöf](Lindelo%CC%88f%20space.md).

 > 
 > \[!check\]- Proof
 > Let $\{ S_{n} \}_{n \in \mathbb{N}}$ be a countable [topological basis](Topological%20basis.md) of $X$,
 > and $\{ U_{\alpha} \}_{\alpha \in I}$ be an [open cover](Cover%20set.md).
 > Let $J \sube \mathbb{N}$ such that
 > $$
\begin{align*}
n \in J \iff \exists \alpha \in I : S_{n} \sube U_{\alpha}
\end{align*}
$$
 > And for every $n \in J$ let $\alpha_{n} \in I$ such that $S_{n} \sube U_{\alpha_{n}}$.
 > Since every $U_\alpha$ is the union of some family of $S_{n}$ with $n \in J$,
 > $\{ S_{n} \}_{n \in J}$ is a countable open cover of $X$
 > and therefore $\{ U_{\alpha_{n}} \}_{n \in J}$ is too.
 > <span class="QED"/>

The proof relies on the [Axiom of Choice](Axiom%20of%20Choice.md).

# 

---

\#state/tidy| #lang/en | #SemBr
