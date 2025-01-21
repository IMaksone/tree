import { useModal } from "store/useModal";
import { Modal } from "./Modal";
import { treeApi } from "api/tree";
import { useTreeChange } from "hooks/useTreeChange";
import { Button } from "components/Button";

/**
 *
 * @description для правильной работы этот компонент должен быть размонтирован когда модалка не видна
 *
 */
export function RemoveModal() {
  const { modalData, openModal } = useModal();

  const change = useTreeChange();

  const submit = () =>
    change(async () => {
      await treeApi.deleteNode(modalData.parentNodeId);
    });

  return (
    <Modal title="Remove" opened handleCancel={() => openModal(null)}>
      <Button handleClick={submit}>Remove</Button>
    </Modal>
  );
}
