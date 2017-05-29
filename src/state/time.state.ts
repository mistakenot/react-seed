import {Action} from "../actions";
import * as Actions from "../actions/time.actions";

export interface State {
    time: string;
    active: boolean;
}

const defaultState: State = {
    time: "",
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