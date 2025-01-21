import { useModal } from "store/useModal";
import { Modal } from "./Modal";
import { Form } from "components/Form";
import { treeApi } from "api/tree";
import { useTreeChange } from "hooks/useTreeChange";

/**
 *
 * @description для правильной работы этот компонент должен быть размонтирован когда модалка не видна
 *
 */
export function EditModal() {
  const { modalData, openModal } = useModal();

  const change = useTreeChange();

  const submit = (value: string) =>
    change(async () => {
      await treeApi.renameNode(modalData.parentNodeId, value);
    });

  return (
    <Modal title="Rename" opened handleCancel={() => openModal(null)}>
      <Form title="Node Name" submitTitle="Rename" submit={submit} />
    </Modal>
  );
}
