import { useModal } from "store/useModal";
import { Modal } from "./Modal";

/**
 *
 * @description для правильной работы этот компонент должен быть размонтирован когда модалка не видна
 *
 */
export function ErrorModal() {
  const { openModal } = useModal();

  return (
    <Modal title="Error" opened handleCancel={() => openModal(null)}>
      <></>
    </Modal>
  );
}
