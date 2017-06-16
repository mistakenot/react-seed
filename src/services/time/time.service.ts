import {newTime} from "./time.actions";
import {State} from "./time.state";
import {ServiceBase} from "utils";
import {Action, Dispatch} from "utils";

export class TimeService extends ServiceBase {
    private timer: any;

    constructor(dispatch: Dispatch, private getState: () => State) {
        super(dispatch);

        this.timer = setInterval(
            () => {
                if (this.getState().active) {
                    dispatch(newTime(new Date().toLocaleTimeString()))
                }
            },
            1000);
    }

    onAction(action: Action): void {

    }
}