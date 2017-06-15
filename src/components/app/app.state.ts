import {reducer as zoneReducer, State as ZoneState} from "./zone-tree";
import { combineReducers } from "redux";

export interface State {
    zoneTree: ZoneState
}

export const reducer = combineReducers({
    zoneTree: zoneReducer
});