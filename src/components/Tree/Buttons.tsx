import {
  PlusCircleOutlined,
  DeleteTwoTone,
  EditOutlined,
} from "@ant-design/icons";
import { Button } from "components/Button";
import { MODAL_TYPES } from "enums/modal";
import { useModal } from "store/useModal";

type AddButtonProps = {
  parentNodeId: number;
};

export function AddButton({ parentNodeId }: AddButtonProps) {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(MODAL_TYPES.ADD, { parentNodeId });
  };

  return (
    <Button handleClick={handleClick}>
      <PlusCircleOutlined />
    </Button>
  );
}

type EdditButtonProps = {
  nodeId: number;
};

export function EdditButton({ nodeId }: EdditButtonProps) {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(MODAL_TYPES.EDIT, { nodeId });
  };

  return (
    <Button handleClick={handleClick}>
      <EditOutlined />
    </Button>
  );
}

type RemoveButtonProps = {
  nodeId: number;
};

export function RemoveButton({ nodeId }: RemoveButtonProps) {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(MODAL_TYPES.REMOVE, { nodeId });
  };

  return (
    <Button handleClick={handleClick}>
      <DeleteTwoTone twoToneColor="#FF0000" />
    </Button>
  );
}
