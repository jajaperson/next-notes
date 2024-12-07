---
tags:
- public
---

[Group theory MOC](Group%20theory%20MOC.md)

# Group homomorphism

A **group homomorphism** is a [morphism](Morphism.md) in the [Category of groups](Category%20of%20groups.md),
that is to say it is a structure-preserving map between [groups](Group.md).
\#m/def/group Let $(G, \circ)$ and $(H, •)$ be groups, and let $f : G \to H$.
Then $f$ is a homomorphism iff
for any $a,b \in G$
$$
\begin{align*}
f(a \circ b) = f(a) • f(b)
\end{align*}
$$
It immediately follows that $f(e) = e$ and $f(a^{-1}) = f(a)^{-1}$.

 > 
 > \[!check\]- Proof
 > For the identity property, it is clear that $f(a \circ e) = f(a) = f(a) • f(e)$ for any $a \in G$, hence $f(e) = e$.
 > For the latter property, notice that for any $a \in G$ it follows $f(a \circ a^{-1}) = f(a) • f(a^{-1}) = f(e) = e$,
 > so $f(a^{-1}) = f(a)^{-1}$. <span class="QED"/>

A bijective homomorphism is the a group [isomorphism](Morphism.md).
Isomorphic groups have the same group table, and are essentially the same up to relabelling.

## Properties and related

* [Group monomorphism](Group%20monomorphism.md), [Group epimorphism](Group%20epimorphism.md)
* The [Kernel of a group homomorphism](Kernel%20of%20a%20group%20homomorphism.md) $\ker(f)$ is the set of all domain elements that map to the identity, and it forms a normal subgroup (proof in Zettel)
* The image $f(G)$ is the range of $f$, and [The image of a group homomorphism is a subgroup](The%20image%20of%20a%20group%20homomorphism%20is%20a%20subgroup.md).
* [A group homomorphism induces a subgroup homomorphism](A%20group%20homomorphism%20induces%20a%20subgroup%20homomorphism.md) when its domain is restricted.

# 

---

\#state/tidy | #lang/en | #SemBr
