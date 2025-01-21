import { fetcher } from "./tools/fetcher";

const GET_TREE_ENDPOINT = "/api.user.tree.get";
const CREATE_NODE_ENDPOINT = "/api.user.tree.node.create";
const DELETE_NODE_ENDPOINT = "/api.user.tree.node.delete";
const RENAME_NODE_ENDPOINT = "/api.user.tree.node.rename";

const getTree = async () =>
  fetcher(GET_TREE_ENDPOINT, {
    params: { treeName: process.env.REACT_APP_TREE_NAME },
  }).then((res) => res.json());

const createNode = async (parentNodeId: number, nodeName: string) =>
  fetcher(CREATE_NODE_ENDPOINT, {
    params: {
      treeName: process.env.REACT_APP_TREE_NAME,
      parentNodeId,
      nodeName,
    },
  });

const deleteNode = async (nodeId: number) =>
  fetcher(DELETE_NODE_ENDPOINT, {
    params: {
      treeName: process.env.REACT_APP_TREE_NAME,
      nodeId,
    },
  });

const renameNode = async (nodeId: number, newNodeName: string) =>
  fetcher(RENAME_NODE_ENDPOINT, {
    params: {
      treeName: process.env.REACT_APP_TREE_NAME,
      nodeId,
      newNodeName,
    },
  });

export const treeApi = {
  getTree,
  createNode,
  deleteNode,
  renameNode,
};
