import {ServiceBase} from "utils";
import {Action, Dispatch} from "utils";
import * as HttpActions from "../http/http.actions";
import * as Actions from "./zones.actions";
import {Zone} from "../../domain/zone";

export class ZoneService extends ServiceBase {
    constructor(dispatch: Dispatch) {
        super(dispatch);
    }

    onAction(action: Action) {
        switch (action.type) {
            case (Actions.Types.requestZones): {
                this.dispatch(HttpActions.httpRequestAction(Actions.Types.requestZones, "GET", "/zones"));
            }
            case (HttpActions.Types.response): {
                let httpResponse = action as HttpActions.HttpResponseAction;
                if (httpResponse.request.callingType == Actions.Types.requestZones) {
                    let rootZone = (httpResponse.body as Zone);
                    // Parsing here, etc.
                    this.dispatch(Actions.receiveZones(rootZone));
                }
            }
        }
    }
}