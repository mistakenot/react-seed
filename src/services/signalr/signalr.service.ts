import {Action, Dispatch} from "../../utils";
import {Service} from "../";
import * as Actions from "./signalr.actions";

export class SignalRService implements Service {
    private connection: any

    constructor() {
        this.connection = {}
    }

    onAction(action: Action, dispatch: Dispatch) {
        switch (action.type) {
            case Actions.Types.requestInvoke: {
                // request signalr invoke
                // then:
                // dispatch()
            }
        }
    }

}