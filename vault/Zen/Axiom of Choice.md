---
alias: AC
tags: public
---

[Set theory MOC](Set%20theory%20MOC.md)

# Axiom of Choice

The **Axiom of Choice** is a controversial axiom of set theory.
In addition to those of [ZF](ZF.md) it forms the final axiom of [ZFC](ZFC.md).
Some equivalent formulations are #m/def/set/zfc

1. For any set $X$ of nonempty sets, there exists a [choice function](Choice%20function.md) $f : X \rightarrowtail \bigcup X$.
   $$
  \begin{align*}
  (\forall \shood X)\left[(\forall x \in X)(\exists y \in x) \implies \left( \exists f : X \to \bigcup X \right) (\forall A \in X)[f(A) \in A]\right] 
  \end{align*}
  $$
1. Let $A,B$ be functions and $P \sube A \times B$ be a [relation](Relation.md).
   If $P$ is *left-total*, i.e. relates every $x \in A$ with at least one $y \in B$, then there exists a [choice function](Choice%20function.md) that selects such a $y$ for each $x$, i.e.
   $$
\begin{align*}
(\forall x \in A)(\exists y \in B)P(x,y) \implies (\exists f: A\to B)(\forall x \in A)P(x,f(x))
\end{align*}
$$
1. The [cartesian product](Cartesian%20product.md) of an arbitrary collection of nonempty sets is itself nonempty.
   $$
  \begin{align*}
  (\forall \alpha \in A)[X_{\alpha} \neq \0] \implies \prod_{\alpha \in A}X_{\alpha} \neq \0
  \end{align*}
  $$
1. Every [surjection](Surjectivity,%20injectivity,%20and%20bijectivity.md) in the *category of sets* is [split epic](Split%20epimorphism.md).
   This *structuralist* formulation is an example of the *Internal Axiom of Choice*.

 > 
 > \[!missing\]- Proof of equivalence over [ZF](ZF.md)
 > \#missing/proof

## Other equivalences

* Set-theoretic
  * *Well ordering principle*
  * *Cardinal comparability hypothesis*
  * *Maximal chain principle*
  * [Zorn's lemma](Zorn's%20lemma.md)
* Topological
  * [Tikhonov's theorem](Tikhonov's%20theorem.md)

## Relationship to other axioms

### Weakenings

Over [ZF](ZF.md)

* *Boolean prime ideal theorem*
* [Axiom of Dependent Choice](Axiom%20of%20Dependent%20Choice.md) $\implies$ [Countable Axiom of Choice](Countable%20Axiom%20of%20Choice.md)

# 

---

\#state/tidy | #lang/en | #SemBr
