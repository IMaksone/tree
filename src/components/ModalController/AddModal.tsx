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
export function AddModal() {
  const { modalData, openModal } = useModal();

  const change = useTreeChange();

  const submit = (value: string) =>
    change(async () => {
      await treeApi.createNode(modalData.parentNodeId, value);
    });

  return (
    <Modal title="Add" opened handleCancel={() => openModal(null)}>
      <Form title="Node Name" submitTitle="Add" submit={submit} />
    </Modal>
  );
}
