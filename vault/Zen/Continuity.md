---
tags:
- public
alias: discontinuity, continuous, discontinuous, continuous map
---

[Topology MOC](Topology%20MOC.md)

# Continuity

In its most general form, a function between [topological spaces](Topological%20space.md) $f : X \to Y$ is **continuous**^\[German *stetig in $x$*\] at a point $c \in X$
iff. for every (open) [neighbourhood](Neighbourhood.md) $V$ of $f(c)$,
there exists an (open) neighbourhood $U$ of $c$,
such that $f(U) \sube V$.[^image] #m/def/topology
Intuitively, you can move a small amount in any direction from $c$ and end up close to $f(c)$.

[^image]: Using the notation of an *Image*. Can be restates as $f(x) \in V$ for any $x \in U$.

![450](../Bins/Attachments/topological%20continuity.png#invert)

A function is **continuous** iff. it is continuous at every point in its domain,
or equivalently **iff. the [preïmage](Image%20and%20prei%CC%88mage.md) of every open set is open**. #m/thm/topology
The [Category of topological spaces](Category%20of%20topological%20spaces.md) has such functions as its morphisms.
We write $C(\mathbb{R})$ to refer to the^\[well, a\] [Function space](Function%20space.md) of continuous functions on $\mathbb{R}$.

 > 
 > \[!check\]- Proof of equivalence of open and general neighbourhood pointwise definitions
 > Let $(X, \mathcal{T}_{X})$ and $(Y, \mathcal{T_{Y}})$ be topological spaces,
 > and $f : X \to Y$.
 > 
 > First assume for every open neighbourhood $V \in \mathcal{T}_{Y}$ of $f(c)$,
 > there exists an open neighbourhood $U \in \mathcal{T}_{X}$ of $c$,
 > such that $f(U) \sube V$.
 > Given an arbitrary neighbourhood $V'$ of $f(c)$,
 > there exists an open neighbourhood $V$ such that $x \in V \sube V'$.
 > Thence there exists an open neighbourhood $U$ of $c$,
 > such that $f(U_{}) \sube V \sube V'$.
 > Therefore for every neighbourhood $V'$ of $f(c)$,
 > there exists a neighbourhood $U$ of $c$,
 > such that $f(U) \sube V'$.
 > 
 > For the converse, assume for every neighbourhood $V$ of $f(c)$,
 > there exists a neighbourhood $U'$ of $c$,
 > such that $f(U) \sube V$.
 > Let $V$ be an open neighbourhood of $f(c)$.
 > Then there exists a neighbourhood $U'$ of $c$ such that $f(U') \sube V$.
 > It follows there exists an open neighbourhood $U \sube U'$ of $C$,
 > such that $f(U) \sube V$.
 > Therefore for every open neighbourhood $V$ of $f(c)$,
 > there exists an open neighbourhood $U$ of $c$,
 > such that $f(U) \sube V$.
 > <span class="QED"/>

 > 
 > \[!check\]- Proof of equivalence of pointwise and preïmage definition
 > Let $(X, \mathcal{T}_{X})$ and $(Y, \mathcal{T_{Y}})$ be topological spaces,
 > and $f : X \to Y$.
 > 
 > First assume the preïmage of every open set is open.
 > Let some $c \in X$, and $V$ be an open neighbourhood of $f(c)$.
 > The preïmage $U = f^{-1}(V)$ is then an open neighbourhood of $c$,
 > and $f(U) = f(f^{-1}(V)) \sube V$ ([image of preïmage](The%20prei%CC%88mage%20of%20the%20image%20and%20image%20of%20the%20prei%CC%88mage%20are%20not%20necessarily%20the%20identity.md)).
 > Therefore, given any $c \in X$ and any open neighbourhood $V$ of $f(c)$,
 > there exists an open neighbourhood $U$ of $c$
 > such that $f(U) \sube V$.
 > 
 > For the converse, assume given any $c \in X$ and any open neighbourhood $V$ of $f(c)$,
 > there exists an open neighbourhood $U$ of $c$
 > such that $f(U) \sube V$.
 > Let $V \in \mathcal{T}_{Y}$ be an open set.
 > For every $c \in f^{-1}(V)$, let $U_{c}$ be an open neighbourhood of $c$ such that $f(U_{c}) \sube V$.
 > Take the union $U = \bigcup_{c \in f^{-1}(V)}U_{c}$, which is an open neighbourhood of every $c \in f^{-1}(V)$,
 > whence $f^{-1}(V) \sube U$
 > Since every $f(U_{c}) \sube V$ it follows that $f(U) \sube V$,
 > whence $U \sube f^{-1}(V)$.
 > Thus $U = f^{-1}(V)$ is open.
 > Therefore the preïmage of every open set is open.
 > <span class="QED"/>

A continuous bijection with a continuous inverse is a [Homeomorphism](Homeomorphism.md)[^confused].

[^confused]: Not to be confused with **homomorphism**.

## Special cases

### In a metric space

If $(X, d_{X})$ and $(Y, d_{Y})$ are [metric spaces](Metric%20space.md) then the definition may be restated as

 > 
 > A function $f : X \to Y$ is continuous at a point $c \in X$
 > iff. for every $\epsilon > 0$ there exists $\delta > 0$
 > such that $f(B_{\delta}(c)) \sube B_{\epsilon}(f(c))$,
 > i.e. $f(x) \in B_{\epsilon}(f(c))$ for any $x \in B_{\delta}(c)$.

In metric spaces continuity is equivalent to [Sequential continuity](Sequential%20continuity.md),
namely a function is continuous at a point $c$ iff. it is sequentially continuous at that point.

### In the real numbers

Intuitively, a function is **continuous** if it has *no gaps*,
i.e. for $f: \mathbb R \to \mathbb R$ you can sketch the function without the pen leaving the page.
More formally continuity is defined in terms of [Limits (Calculus)](Limits%20%28Calculus%29.md).
A function $f$ is *continuous at $a$* iff.
$$
\begin{align*}
\lim_{x\to a}{f(x)} = f(a)
\end{align*}
$$
and $f$ is itself continuous iff. it is continuous at all points in its domain.

A function which is **differentiable at $a$** is continuous at $a$, but the converse is not necessarily true
$$
\begin{align*}
\text{differentiable} \implies \text{continuous}
\end{align*}
$$
Hypernyms include

* [Piecewise continuous](Piecewise%20continuous.md)
* [Left and right continuity](Left%20and%20right%20continuity.md)

---

\#state/tidy | #SemBr | #lang/en
