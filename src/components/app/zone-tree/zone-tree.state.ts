import {Action} from "utils";
import * as Actions from "services/zones/zones.actions";
import {Zone} from "domain/zone";

export interface State {
    rootZone?: Zone;
}

const defaultState: State = {
    rootZone: undefined 
}

export const reducer = (state = defaultState, action: Action): State => {
    switch (action.type) {
        case Actions.Types.receivedZones: {
            let receivedZonesAction = action as Actions.ReceivedZonesActions;
            return {
                rootZone: receivedZonesAction.rootZone
            }
        }
        default: {
            return state;
        }
    }
}