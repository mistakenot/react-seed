import {Action} from "utils";

import * as Actions from "./time.actions";

export interface State {
    time: string;
    active: boolean;
}

const defaultState: State = {
    time: new Date().toLocaleTimeString(),
    active: true
}

export function reducer(state = defaultState, action: Action): State {
    switch(action.type) {
        case Actions.Types.NewTime: {
            const a = <Actions.NewTimeAction> action;
            return Object.assign({}, state, {
                time: a.time
            });
        }
        case Actions.Types.ToggleActive: {
            return Object.assign({}, state, {
                active: !state.active
            });
        }
        default: return state;
    }
}