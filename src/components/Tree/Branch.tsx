import { Tree } from "types/tree";
import { Dropdown } from "components/Dropdown";
import { TreeNode } from "./TreeNode";

type BranchProps = {
  root?: boolean;
  nodeId: number;
  nodeName: string;
  childList: Tree[];
};

export function Branch({ root, nodeId, nodeName, childList }: BranchProps) {
  const renderedList = childList?.map((child) => (
    <Branch
      key={child.id}
      nodeId={child.id}
      nodeName={child.name}
      childList={child.children}
    />
  ));

  return (
    <Dropdown label={<TreeNode root={root} nodeId={nodeId} nodeName={nodeName} />}>
      {renderedList}
    </Dropdown>
  );
}
