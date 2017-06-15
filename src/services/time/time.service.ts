import {emptyDispatch} from "utils";
import {Service} from "utils";

import {newTime} from "./time.actions";
import {State} from "./time.state";

export const timeService: Service<State> = (state, dispatch) => {
    setInterval(() => {
        if (state().active) dispatch(newTime(new Date().toLocaleTimeString()))},
        1000);

    return emptyDispatch;
}

import {ServiceBase} from "utils";
import {Action, Dispatch} from "utils";

export class TimeService extends ServiceBase<State> {
    constructor(dispatch: Dispatch, getState: () => State) {
        super(dispatch, getState);
        setInterval(
            () => {
                if (getState().active) {
                    dispatch(newTime(new Date().toLocaleTimeString()))
                }
            },
            1000);
    }

    handle(msg: Action): void {
        
    }
}