import { create } from "zustand";

import { Tree } from "types/tree";

type TreeStore = {
  tree: Tree;
  setTree: (tree: Tree) => void;
};

export const useTree = create<TreeStore>((set) => ({
  tree: null,
  setTree: (tree) => {
    set(() => ({ tree }));
  },
}));
