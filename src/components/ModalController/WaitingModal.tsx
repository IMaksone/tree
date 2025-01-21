import { useModal } from "store/useModal";
import { Modal } from "./Modal";

/**
 *
 * @description для правильной работы этот компонент должен быть размонтирован когда модалка не видна
 *
 */
export function WaitingModal() {
  const { openModal } = useModal();

  return (
    <Modal title="Waiting" opened handleCancel={() => openModal(null)}>
      <></>
    </Modal>
  );
}
