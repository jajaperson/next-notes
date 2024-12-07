---
tags:
- public
---

[Abelian group](Abelian%20group.md)

# Abelianization

The **abelianization** $G^\mathrm{ab}$ of a group $G$ is the largest abelian [quotient](Quotient%20group.md) of $G$. #m/def/group
For a group $G$ is abelianized by taking the quotient with the [Commutator subgroup](Commutator%20subgroup.md) $[G,G]$.
$$
\begin{align*}
G^\mathrm{ab} = G / [G,G]
\end{align*}
$$

## Main theorem

Let $N \trianglelefteq G$. The [quotient group](Quotient%20group.md) $G / N$ is [abelian](Abelian%20group.md) iff $[G,G] \trianglelefteq N$. #m/thm/group

 > 
 > \[!check\]- Proof
 > $G / N$ is abelian iff $[a,b]N = aba^{-1}b^{-1}N = eN = N$ for all $a,b \in G$,
 > and the latter holds iff $[a,b] \in N$ for all $a,b \in G$.
 > <span class="QED"/>

## Universal property

Abelianization has a unique extension to a [functor](Functor.md) $(-)^\mathrm{ab} : \Grp \to \Ab$ into the [Category of abelian groups](Category%20of%20abelian%20groups.md) so that the projection becomes a [natural transformation](Natural%20transformation.md) $\pi : \id_{\Grp} \to \mathrm{I}(-)^\mathrm{ab}$.
This is done by defining $(G^\mathrm{{ab}}, \pi_{G})$ with the help of the following universal property:

$G^\mathrm{ab}$ is abelian.
If $H$ is an abelian group and $\varphi \in \Grp(G,H)$ is a homomorphism,
then there exists a unique $\bar \varphi \in \Ab (G,H)$ such that $\varphi = \bar \varphi \pi_{G}$,
i.e. the following diagram commutes

<p align="center"><img align="center" src="
https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMiwyLCJcXG1hdGhybSBJIEgiXSxbMiwwLCJcXG1hdGhybSBJIEdeXFxtYXRocm17YWJ9Il0sWzAsMCwiRyJdLFs0LDAsIkdeXFxtYXRocm17YWJ9Il0sWzQsMiwiSCJdLFsyLDEsIlxccGlfRyJdLFsxLDAsIlxcbWF0aHJtIEkgXFxiYXJcXHZhcnBoaSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsyLDAsIlxcdmFycGhpIiwyXSxbMyw0LCJcXGJhciBcXHZhcnBoaSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ%3D%3D%26macro_url%3D%255CDeclareMathOperator%257B%255Cid%257D%257Bid%257D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09G%20%5C%26%5C%26%20%7B%5Cmathrm%20I%20G%5E%5Cmathrm%7Bab%7D%7D%20%5C%26%5C%26%20%7BG%5E%5Cmathrm%7Bab%7D%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20%7B%5Cmathrm%20I%20H%7D%20%5C%26%5C%26%20H%0A%09%5Carrow%5B%22%7B%5Cpi_G%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%20I%20%5Cbar%5Cvarphi%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Cvarphi%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20%5Cvarphi%7D%22%2C%20dashed%2C%20from%3D1-5%2C%20to%3D3-5%5D%0A%5Cend%7Btikzcd%7D%0A
#invert" alt="https://q.uiver.app/#q=WzAsNSxbMiwyLCJcXG1hdGhybSBJIEgiXSxbMiwwLCJcXG1hdGhybSBJIEdeXFxtYXRocm17YWJ9Il0sWzAsMCwiRyJdLFs0LDAsIkdeXFxtYXRocm17YWJ9Il0sWzQsMiwiSCJdLFsyLDEsIlxccGlfRyJdLFsxLDAsIlxcbWF0aHJtIEkgXFxiYXJcXHZhcnBoaSJdLFsyLDAsIlxcdmFycGhpIiwyXSxbMyw0LCJcXGJhciBcXHZhcnBoaSJdXQ==&amp;macro_url=%5CDeclareMathOperator%7B%5Cid%7D%7Bid%7D" /></p>

 > 
 > \[!check\]- Proof
 > $G^\mathrm{ab}$ is abelian by construction.
 > By properties of the [Kernel of a homomorphism into an abelian group](Kernel%20of%20a%20homomorphism%20into%20an%20abelian%20group.md),
 > the universal property is equivalent to [that of the quotient group](Quotient%20group.md#universal-property).
 > <span class="QED"/>

This of course forms a *Free-forgetful adjunction*

# 

---

\#state/tidy | #lang/en | #SemBr
