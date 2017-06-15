import { Action } from "utils";

export const Types = {
    onSelectZone: "ZONE_TREE_ON_SELECT_ZONE"
}

export interface OnSelectZoneAction extends Action {
    zoneId: string;
}

export const onSelectZone = (zoneId: string): OnSelectZoneAction => ({
    type: Types.onSelectZone,
    zoneId: zoneId });