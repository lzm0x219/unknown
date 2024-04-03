import { useRef, useEffect } from "react";

type EffectHookType = typeof useEffect;

export const useUpdateEffect: EffectHookType = (effect, deps) => {
  const isMounted = useRef(false);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, [deps]);
};
