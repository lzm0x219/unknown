import { useState, useEffect } from "react";
import { createNatal } from "@unknown/core";
import type { NatalCreateOptions, Natal } from "@unknown/core";

export function useNatal(params: NatalCreateOptions) {
  const [natal, setNatal] = useState<Natal>(() => createNatal(params));

  useEffect(() => {
    setNatal(createNatal(params));
  }, [JSON.stringify(params)]);

  return {
    natal,
    setNatal,
  };
}
