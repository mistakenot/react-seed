import { combineReducers, createStore as createReduxStore} from "redux";
import {Store} from "react-redux";
import * as Counter from "state/counter.state";
import {reducer as counterReducer} from "./counter.state"

export interface AppState {
    counter: Counter.State
}

export function createStore(): Store<AppState> {
    let reducer = combineReducers<AppState>({
        counter: counterReducer
    });
    
    return createReduxStore(reducer);
}