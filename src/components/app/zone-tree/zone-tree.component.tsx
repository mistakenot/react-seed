import * as React from "react";
import {Tree, NodeProps} from "components/tree";
import {Zone} from "domain/zone";

interface Props {
    rootZone: Zone;
    isLoading: boolean;
}

const zoneToTree = (zone: Zone): NodeProps => {
    return {
        id: zone.id,
        name: zone.name, 
        children: zone.children.map(zoneToTree),
        isExpanded: true,
        isSelected: true,
        isVisible: true
    }
}
export const ZoneTree = (props: Props) => {

}
