---
tags:
- public
---

[Material set theory](Material%20set%20theory.md)

# Separation Axiom Schema

The **Separation Axiom**, technically an *axiom schema*, is a possible axiom schema of [Material set theory](Material%20set%20theory.md): #m/def/set/zf
Let $\varphi(x)$ be a formula (i.e. unary definite condition) of set theory.
Then,
$$
\begin{align*}
(\forall \shood A)(\exists \shood B)[x \in B \iff x \in A \land \varphi(x)]
\end{align*}
$$
which is to say, there exists a subset $B$ of $A$ containing all those elements $x$ of $A$ for which $\varphi(x)$.
By the [Axiom of Extensionality](Axiom%20of%20Extensionality.md) suc h a set is unique, and we denote it using *Set builder notation* as
$$
\begin{align*}
B = \{ x \in A : \varphi(x) \}
\end{align*}
$$

# 

---

\#state/tidy | #lang/en | #SemBr
