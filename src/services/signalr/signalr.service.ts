import {Action, Dispatch} from "../../utils";
import {ServiceBase} from "utils";
import * as Actions from "./signalr.actions";

export class SignalRService extends ServiceBase {
    private connection: any

    constructor(dispatch: Dispatch) {
        super(dispatch);
        this.connection = {}; // Set up signal r connection here
    }

    onAction(action: Action) {
        switch (action.type) {
            case Actions.Types.requestInvoke: {
                // request signalr invoke
                // then:
                // dispatch()
            }
        }
    }

}