import { Action } from "utils";

export const Types = {
    onSelection: "TREE_ON_SELECTION"
}

export interface OnSelectionAction extends Action {
    ids: string[];
}

export const onSelection = (ids: string[]): OnSelectionAction => ({
    type: Types.onSelection, 
    ids: ids});