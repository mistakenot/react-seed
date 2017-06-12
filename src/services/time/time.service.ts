import {emptyDispatch} from "utils/actions";
import {Service} from "utils/services";

import {newTime} from "./time.actions";
import {State} from "./time.state";

export const timeService: Service<State> = (state, dispatch) => {
    dispatch(newTime(new Date().toLocaleTimeString()))
    
    setInterval(() => {
        if (state().active) dispatch(newTime(new Date().toLocaleTimeString()))},
        1000);

    return emptyDispatch;
}
