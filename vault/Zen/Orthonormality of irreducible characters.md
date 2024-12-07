---
tags:
- public
---

[Group character](Group%20character.md)

# Orthonormality of irreducible characters

Let $\chi^\mu : G \to \mathbb{C}$ be [irreducible characters](Group%20character.md) for each $\mu \in \hat{G}$.
Then $\{ \chi^\mu \}$ form an [Orthonormal basis](Orthonormal%20basis.md) of the [Centre of the group ring](Centre%20of%20the%20group%20ring.md) $Z(\mathbb{C}[G])$ (i.e. [class functions](Class%20function.md) into $\mathbb{C}$) under a certain [inner product](Group%20ring.md#hilbert-space).[^sim] #m/thm/rep
In particular,
$$
\begin{align*}
(\chi^\alpha | \chi^\beta) = \frac{1}{\abs G} \sum_{g \in G} \overline{\chi^\alpha(g)} \chi^\beta(g) = \delta_{\alpha\beta}
\end{align*}
$$

[^sim]: 1996, [Representations of finite and compact groups](../Sources/@simonRepresentationsFiniteCompact1996.md), §III.1

 > 
 > \[!check\]- Proof of orthonormality and completeness
 > That each $\chi^\mu$ is central follows from [Trace > Properties](Trace.md#properties), since
 > $$
\begin{align*}
\chi^\mu(yxy^{-1}) = \Tr \Gamma^\mu(yxy^{-1}) = \Tr \Gamma^\mu(xy^{-1}y)  = \Tr \Gamma^\mu(x) = \chi^\mu(x)
\end{align*}
$$
 > Orthonormality follows easily from [Orthonormality of irreps](Orthonormality%20of%20irreps.md):
 > $$
\begin{align*}
(\chi^\alpha|\chi^\beta) = \sum_{j=1}^{d_{\alpha}} \sum_{k=1}^{d_{\beta}} (\Gamma^\alpha_{jj} | \Gamma^\beta_{kk}) = \sum_{j=1}^{d_{\alpha}} \sum_{k=1}^{d_{\beta}} \frac{1}{d_{\alpha}} \delta_{\alpha\beta}\delta_{jk} = \delta_{\alpha\beta}
\end{align*}
$$
 > Completeness follows from that of irreps too, by first noting
 > $$
\begin{align*}
\frac{1}{\abs G}\sum_{y \in G} \Gamma^\mu_{ij}(yxy^{-1}) &= \frac{1}{\abs G}\sum_{y \in G} \sum_{k,l} \Gamma^\mu_{ik}(y)\Gamma^\mu_{kl}(x) \overline{\Gamma^\mu_{jl}(y)} \\
&= \sum_{k,l} (\Gamma^\mu_{jl}|\Gamma^\mu_{ik})\,\Gamma^\mu_{kl}(x) \\
&= \sum_{k,l} \frac{1}{d_{\mu}} \delta_{ji} \delta_{lk} \Gamma^\mu_{kl}(x) \\
&= \frac{1}{d_{\mu}} \delta_{ij} \chi^\mu(x)
\end{align*}
$$
 > and therefore for any $f \in Z(\mathbb{C}[G])$,
 > from completness of irreps $f = \sum_{\mu;i,j} c^\mu_{ij}\Gamma^\mu_{ij}$ for some $c^\mu_{ij}$,
 > thus
 > $$
\begin{align*}
f(x) &= \frac{1}{\abs G} \sum_{y \in G} f(yxy^{-1}) \\
&= \sum_{\mu;i,j} c^\mu_{ij} \frac{1}{\abs G} \sum_{y \in G} \Gamma^\mu_{ij}(yxy^{-1}) \\
&= \sum_{\mu;i,j} c^\mu_{ij}\frac{1}{d_{\mu}} \delta_{ij} \chi^\mu(y)
\end{align*}
$$
 > thus $f \in \span \{ \chi^\mu \}$.
 > <span class="QED"/>

 > 
 > \[!check\]- Alternate proof of completeness via Schur's lemma and matrix algebra isomorphism
 > Let $f \in Z(\mathbb{C}[G])$.
 > Then by the [Isomorphism between the complex group ring and direct sum of matrix algebras on carriers of irreducible representations](Isomorphism%20between%20the%20complex%20group%20ring%20and%20direct%20sum%20of%20matrix%20algebras%20on%20carriers%20of%20irreducible%20representations.md),
 > each $\widehat{f}^\alpha$ commutes in its $d_{\alpha} \times d_{\alpha}$ matrix algebra,
 > which includes with the concrete reälization of $\Gamma^\alpha$
 > $$
\begin{align*}
\widehat{f}^\alpha_{} \Gamma^\alpha(g) = \Gamma^\alpha(g) \widehat{f}^\alpha
\end{align*}
$$
 > and therefore by [Schur's lemma](Schur's%20lemma.md) $\widehat{f}^\alpha = c_{\alpha} \mathbf{I}_{\alpha}$ so
 > $$
f = \frac{1}{\abs G} \sum_{\alpha;jk} d_{\alpha} c_{\alpha} \delta_{jk} \Gamma^\alpha_{jk} = \frac{1}{\abs G} \sum_{\alpha} d_{\alpha} c_{\alpha}  \chi^\alpha
$$
 > as required.
 > <span class="QED"/>

Since $\chi^\alpha$ are class functions, the orthonormality may be rewritten for the [character table](Character%20table.md).

## Corollaries

* [The number of conjugacy classes equals the number of non-equivalent irreps of a group](The%20number%20of%20conjugacy%20classes%20equals%20the%20number%20of%20non-equivalent%20irreps%20of%20a%20group.md)
* The decomposition of a character into irreducible characters is always possible reveals the composition of the characterised representation.
* [Character irreducibility criterion](Character%20irreducibility%20criterion.md)

# 

---

\#state/tidy | #lang/en | #SemBr
