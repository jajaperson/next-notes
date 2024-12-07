---
tags:
- public
aliases:
- Hausdorff
---

[Separation axioms](Separation%20axioms.md)

# Hausdorff space

A **Hausdorff space**[^hausdorffsch] or $\mathrm{T}_{2}$-space is a topological space $(X, \mathcal{T})$ satisfying the separation axiom:[^loose]

 > 
 > For any $x,y \in X$ where $x \neq y$, there exist open neighbourhoods $U \in \mathcal{T}(x)$ and $V \in \mathcal{T}(y)$ such that $U \cap V = \0$. #m/def/topology

[^loose]: 2010, [Algebraische Topologie](../Sources/@looseAlgebraischeTopologie2010.md), p. 7 (Definition 1.1.25)

[^hausdorffsch]: German *der hausdorffsche Raum*

this can be easily generalised to a finite number of points:

 > 
 > For any finite set $A \sube X$ there exists an open neighbourhood $U_{x}$ of each $x \in A$ so that $U_{x} \cap U_{y} = \0$ for any $x,y \in A$ with $x \neq y$. #m/thm/topology

 > 
 > \[!check\]- Proof
 > Since $X$ is hausdorff, for every $x,y \in A$ with $x \neq y$ there exists an open neighbourhood $U_{xy}$ of $x$ and $U_{yx}$ of $y$ so that $U_{xy} \cap U_{yx} = \0$.
 > For each $x \in A$ let $U_{x} = \bigcap_{y \in A \setminus \{ x \} } U_{xy}$.
 > Then $U_{x}$ is an open neighbourhood of $x$ and $U_{x} \cap U_{yz} = \0$ for every $x,y,z \in A$ with $x \neq y \neq z$.
 > It follows that $U_{x} \cap U_{y} = \0$ for every $x,y \in X$ with $x \neq y$.
 > <span class="QED"/>

## Properties

* A Hausdorff space guarantees [uniqueness of the limit](Conditions%20for%20uniqueness%20of%20the%20limit.md). If a space is first-countable, it is Hausdorff precisely when all limits are unique.
* [Hausdorffness is preserved by subspaces, products, and coproducts, but not quotients](Hausdorffness%20is%20preserved%20by%20subspaces,%20products,%20and%20coproducts,%20but%20not%20quotients.md).
* [A space is Hausdorff iff the diagonal is closed](A%20space%20is%20Hausdorff%20iff%20the%20diagonal%20is%20closed.md)

# 

---

\#state/develop | #lang/en | #SemBr
