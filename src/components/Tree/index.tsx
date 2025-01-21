import { useEffect } from "react";

import { treeApi } from "api/tree";
import { MODAL_TYPES } from "enums/modal";
import { useModal } from "store/useModal";
import { useTree } from "store/useTree";
import { Branch } from "./Branch";

export const Tree = () => {
  const { openModal } = useModal();
  const { tree, setTree } = useTree();

  useEffect(() => {
    treeApi
      .getTree()
      .then((data) => {
        setTree(data);
      })
      .catch(() => {
        openModal(MODAL_TYPES.ERROR);
      });
  }, [openModal, setTree]);

  return (
    <Branch root nodeId={tree?.id} nodeName="Root" childList={tree?.children} />
  );
};
