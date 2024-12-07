---
tags:
- public
aliases:
- canonical immersion
- immersion
- immersive
- submersion
- submersive
- canonical submersion
- (im/sub)mersion
- local submersion theorem
- local immersion theorem
---

[Differential geometry MOC](Differential%20geometry%20MOC.md)

# Immersion amd submersion

A $C^k$ [differentiable](Differentiability.md) function $f : X \to Y$ between $C^k$ [differentiable manifolds](Differentiable%20manifold.md) $X,Y$ of dimensions $n,m$ respectively
is **(im/sub)mersive** at $x \in X$ iff the [Differential pushforward](Differential%20pushforward.md) $T_{x}f : T_{x}X \to T_{f(x)}Y$ at $x$ is a linear ([mono](Linear%20monomorphism.md)/[epi](Linear%20epimorphism.md))morphism.
Such function is said to be an **(im/sub)mersion** iff it is an (im/sub)mersion everywhere. #m/def/geo/diff

An immersion may be thought of as a map which *locally* resembles the **canonical immersion** defined for $n \leq m$ as
$$
\begin{align*}
i : \mathbb{R}^n &\to \mathbb{R}^n \times \mathbb{R}^{m-n} \\
x &\mapsto(x;0)
\end{align*}
$$
whereas submersion may be thought of as a map which *locally* resembles the **canonical submersion** defined for $n \geq m$ as
$$
\begin{align*}
j : \mathbb{R}^m \times \mathbb{R}^{n-m} &\to \mathbb{R}^m \\
(x;y) &\mapsto x
\end{align*}
$$
This point of view is justified by the [Local (im/sub)mersion theorem](Immersion%20and%20submersion.md#local-im-sub-mersion-theorem).

## Local (im/sub)mersion theorem

Let $f : X \to Y$ be a $C^\infty$ [differentiable](Differentiability.md) map between $C^\infty$ [differentiable manifolds](Differentiable%20manifold.md) $X,Y$ of dimension $n,m$ respectively,
and let $f : x \mapsto y$.
Then $f$ is an (im/sub)mersion at $x$
iff there exist $C^\infty$ [charts](Coo%CC%88rdinate%20chart.md) $\varphi : U \to V$ on $X$ about $x$ and $\tilde{\varphi} : \tilde{U} \to \tilde{V}$ on $Y$ about $y$
with $f(U) \sube \tilde{U}$
such that $\psi f \varphi^{-1}$ is a restriction of the canonical (im/sub)mersion, #m/thm/geo/diff
i.e. in the immersion case
$$
\begin{align*}
\tilde{\varphi} f \varphi^{-1}(v) = i(v) = (v;\vab 0)
\end{align*}
$$
and in the submersion case
$$
\begin{align*}
\tilde{\varphi} f\varphi^{-1}(v;w) = j(v;w) = v
\end{align*}
$$

 > 
 > \[!check\]- Proof
 > Without loss of generality, we can consider $X$ and $Y$ to be open subsets of $\mathbb{R}^n$ and $\mathbb{R}^m$ respectively,
 > since we are only interested in local properties and locally these are diffeomorphic.
 > We also assume $n \neq m$, since otherwise this is a special case of the [Inverse function theorem](Inverse%20function%20theorem.md).
 > 
 > Assume $f$ is an immersion at $x$.
 > Let $W = Df(x)(\mathbb{R}^n) \leq \mathbb{R}^m$ where $\dim W = n$.
 > Choose some [complement subspace](Complement%20subspace.md) $W^c$ where $\dim W^c = m-n$.
 > We can then define
 > $$
\begin{align*}
F : X\times W^c &\to \mathbb{R}^m \\
(\xi; w) &\mapsto f(\xi) + w
\end{align*}
$$
 > which has the [total derivative](Total%20derivative.md)
 > $$
\begin{align*}
DF(x,0) : \mathbb{R}^n \times W^c &\to \mathbb{R}^m \\
(\vab a, \vab b) &\mapsto Df(x_{0})(\vab a)+\vab b
\end{align*}
$$
 > which is a *linear isomorphism*,
 > so by the [Inverse function theorem](Inverse%20function%20theorem.md) $F$ is locally a diffeomorphism.
 > Thus taking the canonical immersion $i : X \to X \times W^c = \mathbb{R}^m$, we have $Fi = f$, as required.
 > 
 > Now assume $f$ is a submersion at $x$.
 > Let $K = \ker Df(x)$ where $\dim K = n-m$ by the [Rank-nullity theorem](Rank-nullity%20theorem.md)
 > and let $P : \mathbb{R}^n \twoheadrightarrow K$ be a [projection operator](Projection%20operator.md) onto $K$
 > (where we make the natural identification of $\mathbb{R}^n$ with $T_{x}X$).
 > We can then define
 > $$
\begin{align*}
F : X &\to \mathbb{R}^m \times K \\
\xi &\mapsto (f(\xi), P(\xi))
\end{align*}
$$
 > which has the total derivative
 > $$
\begin{align*}
DF(x) : \mathbb{R}^n &\to \mathbb{R}^m \times K \\
\vab a &\mapsto (Df(x)\,\vab a, P\,\vab a)
\end{align*}
$$
 > which is a *linear isomorphism*,
 > so by the [Inverse function theorem](Inverse%20function%20theorem.md) $F$ is locally a diffeomorphism.
 > Thus taking the canonical submersion $j : \mathbb{R}^m \times K \to \mathbb{R}^m$,
 > we have $jF = f$, as required.
 > 
 > For the converses note, that the composition of (im/sub)mersions is an (im/sub)mersion,
 > and coördinate charts are diffeomorphisms and hence both immersions and submersions. <span class="QED"/>

## Properties

* Iff $f$ is immersive at $x$, then $\rank(T_{x}f)=n \leq m$
* Iff $f$ is submersive at $x$, then $\rank(T_{x}f)=m \leq n$

# 

---

\#state/tidy | #lang/en | #SemBr
