import {emptyDispatch} from "../actions";
import {newTime} from "../actions/time.actions";
import {Service} from "./";
import {AppState} from "../state";
import {State} from "../state/time.state";

export const timeService: Service<State> = (state, dispatch) => {
    dispatch(newTime(new Date().toLocaleTimeString()))
    
    setInterval(() => {
        if (state().active) dispatch(newTime(new Date().toLocaleTimeString()))},
        1000);

    return emptyDispatch;
}

export const mappedTimeService: Service<AppState> = (appState, dispatch) => {
    return timeService(() => appState().time, dispatch);
}