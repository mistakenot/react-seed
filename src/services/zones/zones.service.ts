import {Service} from "../";
import { Action, Dispatch } from "utils/actions";
import * as HttpActions from "../http/http.actions";
import * as Actions from "./zones.actions";

export class ZoneService implements Service {
    onAction(action: Action, dispatch: Dispatch) {
        switch (action.type) {
            case (Actions.Types.requestZones): {
                dispatch(HttpActions.httpRequestAction("GET", "/zones"));
            }
        }
    }
}