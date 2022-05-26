import { useCallback, useState } from "react";

type MaybeCollapseHook = [boolean, () => void];

export const useMaybeCollapse = (initial = false, collapsible = false): MaybeCollapseHook => {
  const [collapsed, setCollapsed] = useState<boolean>(() => initial);

  const toggleCollapse = useCallback(() => {
    if (collapsible) {
      setCollapsed((current) => !current);
    }
  }, [collapsible]);

  return [collapsed, toggleCollapse];
};
