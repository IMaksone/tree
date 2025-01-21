import { MouseEventHandler, ReactNode } from "react";

import { Modal as AntModal } from "antd";

type ModalProps = {
  title: string;
  opened: boolean;
  children: ReactNode;
  handleCancel: MouseEventHandler;
};

/**
 *
 * @description для правильной работы этот компонент должен быть размонтирован когда модалка не видна
 *
 */
export function Modal({ title, opened, children, handleCancel }: ModalProps) {
  return (
    <AntModal
      title={title}
      open={opened}
      footer={<></>}
      onCancel={handleCancel}
    >
      {children}
    </AntModal>
  );
}
