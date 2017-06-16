import * as React from "react";
import { ActionHandler, Dispatch, Action } from "utils";
import { Tree, TreeProps, NodeProps, Types as TreeActionTypes, OnSelectionAction } from "components/tree";
import {Zone} from "domain/zone";
import { State } from "./zone-tree.state";
import * as Actions from "./zone-tree.actions";

export interface Props extends State, ActionHandler {}

const mapProps = (zone: Zone, selectedZoneId: string, dispatch: Dispatch): TreeProps => {
    const zoneToNode = (zone: Zone): NodeProps  => ({
        id: zone.id,
        name: zone.name,
        children: zone.children.map(zoneToNode),
        isExpanded: false,
        isSelected: zone.id === selectedZoneId,
        isVisible: true,
        dispatch: dispatch
    });

    return {
        root: zoneToNode(zone),
        dispatch: dispatch
    }
}

const mappedDispatch = (parent: Dispatch) => (action: Action) => {
    switch (TreeActionTypes.onSelection) {
        case (TreeActionTypes.onSelection): {
            let onSelectAction = action as OnSelectionAction;
            parent(Actions.onSelectZone(onSelectAction.ids[0]));
        }
    }
}
// export const ZoneTree: React.SFC<Props> = (props: Props) => (
//     props.isLoading ? 
//         <div>Loading...</div> :
//         props.rootZone === undefined ? 
//             <div>No zones are available.</div> : 
//             <Tree {...mapProps(props.rootZone as Zone, props.selectedZoneId, mappedDispatch(props.dispatch))} />)

export class ZoneTree extends React.Component<Props, {}> {
    componentDidMount() {
        this.props.dispatch(Actions.onLoadZoneTree);
    }

    render() {
        return this.props.isLoading ? 
            <div>Loading...</div> :
            this.props.rootZone === undefined ? 
                <div>No zones are available.</div> : 
                <Tree {...mapProps(this.props.rootZone as Zone, this.props.selectedZoneId, mappedDispatch(this.props.dispatch))} />;
    }
}