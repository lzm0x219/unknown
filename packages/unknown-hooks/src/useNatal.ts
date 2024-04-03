import { useState } from "react";
import { createNatal } from "@unknown/core";
import type { NatalCreateOptions, Natal } from "@unknown/core";
import { useUpdateEffect } from "./useUpdateEffect";

export function useNatal(params: NatalCreateOptions) {
  console.log(params);
  const [natal, setNatal] = useState<Natal>(() => createNatal(params));

  useUpdateEffect(() => {
    setNatal(createNatal(params));
  }, [JSON.stringify(params)]);

  return {
    natal,
  };
}
