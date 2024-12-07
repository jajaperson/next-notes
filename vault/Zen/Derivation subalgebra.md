---
tags:
- public
---

[Algebra theory MOC](Algebra%20theory%20MOC.md)

# Derivation subalgebra

Let $\mathcal{D}(A)$ be the set of all [derivations](Derivation%20on%20an%20algebra.md) of an [algebra](Algebra%20over%20a%20field.md) $(V, B)$ over $\mathbb{K}$, i.e.
$$
\begin{align*}
\mathcal{D}(A) = \{ D \in \End_{\cat{Alg}_{\mathbb{K}}}(V) : (\forall a,b \in A)[D B(a,b) = B(D(a),b) + B(a,D(b))] \}
\end{align*}
$$
Then $\mathcal{D}$ is a [Lie subalgebra](Lie%20subalgebra.md) of the [commutator](Commutator.md) algebra of the [Endomorphism ring](Endomorphism%20ring.md), #m/thm/falg
i.e. the commutator of two derivations is itself a derivation.

 > 
 > \[!check\]- Proof
 > Let $D,\Delta \in \mathcal{D}(A)$ and $a,b \in V$. Then
 > $$
\begin{align*}
[D,\Delta]B(a,b)
&= D\Delta B(a,b) - \Delta DB(a,b) \\
&= D(B(\Delta(a),b) + B(a,\Delta(b))) - \Delta(B(D(a),b) + B(a,D(b))) \\
&= \begin{pmatrix}
B(D\Delta(a),b) + \cancel{ B(\Delta(a),D(b)) } + \cancel{ B(D(a),\Delta(b)) }+ B(a,D\Delta(b)) \\
\hphantom{.} -B(\Delta D(a), b) - \cancel{ B(D(a),\Delta(b)) }- \cancel{ B(\Delta(a),D(b)) } - B(a, \Delta D(b))
\end{pmatrix} \\
&= B(D\Delta(a), b) - B(\Delta D(a),b) + B(a, D\Delta(b)) - B(a, \Delta D(b)) \\
&= B(D\Delta(a) - \Delta D(a),b) +B (a, D\Delta(b)-\Delta D(b)) \\
&= B([D,\Delta]a,b) + B(a, [D,\Delta]b)
\end{align*}
$$
 > hence $[D,\Delta] \in \mathcal{D}(A)$. <span class="QED"/>

# 

---

\#state/tidy | #lang/en | #SemBr
