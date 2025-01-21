import { create } from "zustand";

import { MODAL_TYPES } from "enums/modal";
import { ModalData } from "types/modal";

type ModalStore = {
  type: MODAL_TYPES | null;
  modalData: ModalData;
  openModal: (type: MODAL_TYPES | null, modalData?: ModalData) => void;
};

export const useModal = create<ModalStore>((set) => ({
  type: null,
  modalData: {},
  openModal: (type, modalData = {}) => set(() => ({ type, modalData })),
}));
