import {Action} from "utils";

export const Types = {
    ClickExpand: "NODE_CLICK_EXPAND",
    ClickSelect: "NODE_CLICK_SELECT"
}

export interface NodeAction extends Action {
    id: string;
}

export const clickExpand = (id: string): NodeAction => ({type: Types.ClickExpand, id: id})

export const clickSelect = (id: string): NodeAction => ({type: Types.ClickSelect, id: id})