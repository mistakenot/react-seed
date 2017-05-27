import {IAction} from "actions";
import * as Actions from "actions/counter.actions";

export interface State {
    count: number;
}

const defaultState: State = {
    count: 0
}

export function reducer(state: State = defaultState, action: IAction): State {
    switch (action.type) {
        case (Actions.Types.increase): {
            return Object.assign({}, state, {
                count: state.count + 1
            })
        }
        case (Actions.Types.decrease): {
            return Object.assign({}, state, {
                count: state.count - 1
            })
        }
        default: return state;
    }
}