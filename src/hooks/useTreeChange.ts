import { useCallback } from "react";

import { useModal } from "store/useModal";
import { MODAL_TYPES } from "enums/modal";
import { treeApi } from "api/tree";
import { useTree } from "store/useTree";

type Callback = () => Promise<any>;

export function useTreeChange() {
  const { type, openModal } = useModal();
  const { setTree } = useTree();

  const change = useCallback(
    async (callback: Callback) => {
      if (type === MODAL_TYPES.WAITING) return;

      try {
        openModal(MODAL_TYPES.WAITING);

        await callback();

        const result = await treeApi.getTree();

        setTree(result);

        openModal(null);
      } catch {
        openModal(MODAL_TYPES.ERROR);
      }
    },
    [type, openModal, setTree]
  );

  return change;
}
