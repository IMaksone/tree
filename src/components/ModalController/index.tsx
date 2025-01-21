import { AddModal } from "./AddModal";
import { useModal } from "store/useModal";
import { MODAL_TYPES } from "enums/modal";
import { RemoveModal } from "./RemoveModal";
import { EditModal } from "./EditModal";
import { WaitingModal } from "./WaitingModal";
import { ErrorModal } from "./ErrorModal";

export function ModalController() {
  const { type } = useModal();

  return type && modals[type];
}

const modals = {
  [MODAL_TYPES.ADD]: <AddModal />,
  [MODAL_TYPES.REMOVE]: <RemoveModal />,
  [MODAL_TYPES.EDIT]: <EditModal />,
  [MODAL_TYPES.WAITING]: <WaitingModal />,
  [MODAL_TYPES.ERROR]: <ErrorModal />,
};
