import * as request from "request";
import * as Actions from "./http.actions";
import {Action, Dispatch} from "../../utils/actions";
import {Service} from "../";

export class HttpService implements Service {
    onAction(action: Action, dispatch: Dispatch) {
        switch (action.type) {
            case (Actions.Types.request): {
                let requestAction = action as Actions.HttpRequestAction;
                request({
                    url: requestAction.url, 
                    method: requestAction.method}, 
                    (err, resp, body) => {
                        if (err) {
                            dispatch(Actions.httpResponseAction(true, null));
                        } else {
                            dispatch(Actions.httpResponseAction(false, body));
                        }
                })
            }
        }
    }
}