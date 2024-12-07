---
tags:
- public
alias: extended Affine algebra
---

[Lie algebras MOC](Lie%20algebras%20MOC.md)

# Affine Lie algebra

Let $\mathfrak{g}$ be a [Lie algebra](Lie%20algebra.md) over $\mathbb{K}$ with a symmetric $\mathfrak{g}$-[invariant bilinear form](Invariant%20bilinear%20form%20on%20a%20Lie%20algebra.md) $\langle \cdot,\cdot \rangle$.
The corresponding **affine Lie algebra** $\hat{\mathfrak{g}}$ is a certain [graded](Graded%20Lie%20algebra.md) [central extension](Lie%20algebra%20extension.md) of the [tensor product algebra](Tensor%20product%20of%20a%20Lie%20algebra%20and%20a%20commutative%20algebra.md) $\mathfrak{g} \otimes \mathbb{K}[t,t^{-1}]$ where $\mathbb{K}[t,t^{-1}]$ is the [algebra of Laurent polynomials](Algebra%20of%20Laurent%20polynomials.md).
Thence one can construct the corresponding **extended affine Lie algebra** $\tilde{\mathfrak{g}}$ by [adjoining the degree derivation](Adjoining%20the%20degree%20derivation.md).
A related construction is the [Twisted affine Lie algebra](Twisted%20affine%20Lie%20algebra.md).

## Construction

Let $\mathfrak{g}$ be an [algebra](Algebra%20over%20a%20field.md) over $\mathbb{K}$ with some [bilinear form](Bilinear%20form.md) $\langle \cdot,\cdot \rangle : \mathfrak{g} \times \mathfrak{g} \to \mathbb{K}$.[^1988]
Further let $d = t \frac{d}{dt}$ be the [Algebra of Laurent polynomials > ^degreeDerivation](Algebra%20of%20Laurent%20polynomials.md#degreederivation) on $\mathbb{K}[t,t^{-1}]$, and construct the vector space
$$
\begin{align*}
\hat{\mathfrak{g}} = \mathfrak{g} \otimes_{\mathbb{K}} \mathbb{K}[t,t^{-1}] \oplus \mathbb{K}c
\end{align*}
$$
with the bilinear product $[\cdot,\cdot] : \hat{\mathfrak{g}} \times  \hat{\mathfrak{g}} \to \hat{\mathfrak{g}}$ defined by the conditions
$$
\begin{align*}
&[c, \hat{\mathfrak{g}}] = [\hat{\mathfrak{g}}, c] = 0 \\
&[x \otimes f, y \otimes g] = [x,y] \otimes fg + \langle x,y \rangle (df \cdot g)_{0} c
\end{align*}
$$
the latter being equivalent to
$$
\begin{align*}
[x \otimes t^n, y \otimes t^m] = [x,y] \otimes t^{n+m} + \langle x,y \rangle n\delta_{n,-m}c
\end{align*}
$$
Then $\hat{\mathfrak{g}}$ is a Lie algebra, called the **affine Lie algebra** associated with $\mathfrak{g}$ and $\langle \cdot,\cdot \rangle$, #m/def/lie
iff $\mathfrak{g}$ is a Lie algebra and $\langle \cdot,\cdot \rangle$ is a symmetric $\mathfrak{g}$-invariant bilinear form,
and we have the [central extension](Lie%20algebra%20extension.md)
$$
\begin{align*}
0 \to \mathbb{K}c \hookrightarrow \hat{\mathfrak{g}} \twoheadrightarrow \mathfrak{g} \otimes \mathbb{K}[t, t^{-1}] \to 0
\end{align*}
$$

 > 
 > \[!check\]- Proof
 > First note the bracket on $\hat{\mathfrak{g}}$ is [alternating](Alternating%20multilinear%20map.md) iff that on $\mathfrak{g}$ is.
 > Let $N = n + m + k$.
 > Then the [Lie algebra > ^Jacobi](Lie%20algebra.md#jacobi) on $\hat{\mathfrak{g}}$ is equivalent to
 > $$
\begin{align*}
0 &= [x \otimes t^n, [y \otimes t^m, z \otimes t^k]] + [y \otimes t^m, [z \otimes t^k, x \otimes t^n]] + [z \otimes t^k , [x \otimes t^n, y \otimes t^m]] \\
&= [x \otimes t^n, [y,z] \otimes t^{m+k} + \cancel{ C_{1}c }] + [y \otimes t^m, [z,x] \otimes t^{k+n} + \cancel{ C_{2}c }] + [z \otimes t^k, [x, y] \otimes t^{n+m} + \cancel{ C_{3}c }] \\
&= \left( [x, [y,z]] + [y,[z,x]] + [z,[x,y]] \right) \otimes t^N + \left( \langle x, [y,z] \rangle n + \langle y,[z,x] \rangle m + \langle z,[x,y] \rangle k \right) \delta_{N,0}c
\end{align*}
$$
 > which holds iff the Jacobi identity holds for $\mathfrak{g}$ along with the identity
 > $$
\begin{align*}
\langle x,[y,z] \rangle n + \langle y,[z,x] \rangle m+ \langle z,[x,y] \rangle k = 0
\end{align*}
$$
 > for all $n,m,k$ such that $n + m + k = 0$.
 > The latter is equivalent to the bilinear map being symmetric and $\mathfrak{g}$-invariant,
 > as can be shown by varying $n,m,k$. <span class="QED"/>

We extend $d$ to a degree derivation of $\hat{\mathfrak{g}}$ by
$$
\begin{align*}
d(c) &= 0 \\
d(x \otimes f) &= x \otimes df
\end{align*}
$$
so that homogenous subspaces are the eigenspaces of $d$.
One obtains the **extended affine Lie algebra** associated with $\mathfrak{g}$ and $\langle \cdot,\cdot \rangle$ by [adjoining the degree derivation](Adjoining%20the%20degree%20derivation.md) $d$ #m/def/lie
$$
\begin{align*}
\tilde{\mathfrak{g}} = \hat{\mathfrak{g}} \rtimes  \mathbb{K}d
\end{align*}
$$
giving the gradation[^not]
$$
\begin{align*}
\tilde{\mathfrak{g}}_{n} = \begin{cases}
\mathfrak{g} \otimes t^n & n \neq 0 \\ \\
\mathfrak{ g} \oplus \mathbb{K}c \oplus \mathbb{K}d & n=0
\end{cases}
\end{align*}
$$

[^not]: We identify $\mathfrak{g}$ with $\mathfrak{g} \otimes t^0$.

[^1988]: 1988. [Vertex operator algebras and the Monster](../Sources/@frenkelVertexOperatorAlgebras1988.md), §1.6, p. 17ff.

# 

---

\#state/tidy | #lang/en | #SemBr
