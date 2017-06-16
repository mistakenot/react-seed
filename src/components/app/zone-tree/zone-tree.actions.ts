import { Action } from "utils";

export const Types = {
    onLoadZoneTree: "ZONE_TREE_ON_LOAD",
    onSelectZone: "ZONE_TREE_ON_SELECT_ZONE"
}

export interface OnSelectZoneAction extends Action {
    zoneId: string;
}

export const onSelectZone = (zoneId: string): OnSelectZoneAction => ({
    type: Types.onSelectZone,
    zoneId: zoneId });

export const onLoadZoneTree: Action = ({
    type: Types.onLoadZoneTree});