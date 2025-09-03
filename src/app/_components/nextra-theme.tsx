import { PageMapItem } from "nextra";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode,
  pageMap: PageMapItem[]
};

export default function NextraTheme({ children }: Props) {
  return (
    <>
      {children}
    </>
  )
}
