import fs from "fs";
import matter from "gray-matter";
import * as path from "path";

const vaultDirectory = path.join(process.cwd(), process.env.VAULT_DIR || "");

/** Collects the slugs  matching a given pattern. */
export function* getVaultSlugs(pattern?: RegExp): IterableIterator<string[]> {
  for (const file of fs.readdirSync(vaultDirectory, { recursive: true })) {
    const filePath = String(file)
    if (typeof pattern === "undefined" || pattern?.test(filePath)) {
      yield filePath.replace(/\.md$/, "").split(path.sep);
    }
  }
}

/** Data from a note */
export interface Note {
  slug: string[],
  content: string,
  [k: string]: any,
}

/** Get the note at a given slug. */
export function getNoteBySlug(slug: string[]): Note {
  const leading = slug.slice(0, -1);
  const end = slug.at(-1);
  const realEnd = end?.replace(/\.md(?:#[^\)]*)?$/, "") || "";
  const realSlug = [...leading, realEnd];

  return parseFileFromSlug(realSlug);
}

/** Read the file for a note at a given slug */
function parseFileFromSlug(slug: string[]): Note {
  const filePath = path.join(vaultDirectory, ...slug) + ".md"
  const fileContents = fs.readFileSync(filePath);
  const { data, content } = matter(fileContents);

  return {
    content,
    slug,
    ...data
  }
}

