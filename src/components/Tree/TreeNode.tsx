import { AddButton, EdditButton, RemoveButton } from "./Buttons";

type DropDownProps = {
  root?: boolean;
  nodeId: number;
  nodeName: string;
};

export function TreeNode({ nodeId, nodeName, root }: DropDownProps) {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <span>{nodeName}</span>
      <AddButton parentNodeId={nodeId} />
      {!root && (
        <>
          <EdditButton nodeId={nodeId} />
          <RemoveButton nodeId={nodeId} />
        </>
      )}
    </div>
  );
}
