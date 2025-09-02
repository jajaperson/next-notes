import fs from "fs";
import path from "path";

import { VAULT_DIR } from "./constants";
import matter from "gray-matter";


/** Finds the paths for all notes in the given directory */
function getNoteFiles(dir: string): string[] {
  return fs.readdirSync(dir, { recursive: true }).map(String).filter((file) => path.extname(file) === ".md");
}

export type Slug = string[];

/** Data from a note */
export interface Note {
  content: string,
  slug: Slug,
  [k: string]: any,
}

/** Parses the frontmatter of all notes in the given directory */
function* getNoteData(dir: string): IterableIterator<[string, Note]> {
  const noteFiles = getNoteFiles(dir);
  for (const file of noteFiles) {
    const rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(rawContent);
    const slug = file.replace(/\.md$/, "").split(path.sep)

    const note = { slug, content, ...data }
    yield [slug.join("/"), note]
  }
}

/** Returns note objects for all notes in the vault. */
export function getNotesInVault(): Map<string, Note> {
  const vaultDirectory = path.join(process.cwd(), VAULT_DIR);
  return new Map(getNoteData(vaultDirectory));
}
