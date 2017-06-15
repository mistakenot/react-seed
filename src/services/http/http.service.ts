import * as request from "request";
import { Action, ServiceBase, Dispatch } from "utils";
import * as Actions from "./http.actions";

export class HttpService extends ServiceBase {
    constructor(dispatch: Dispatch) {
        super(dispatch);
    }
    
    onAction(action: Action) {
        switch (action.type) {
            case (Actions.Types.request): {
                let requestAction = action as Actions.HttpRequestAction;
                request({
                    url: requestAction.url, 
                    method: requestAction.method}, 
                    (err, resp, body) => {
                        if (err) {
                            this.dispatch(Actions.httpResponseAction(requestAction, true, null));
                        } else {
                            this.dispatch(Actions.httpResponseAction(requestAction, false, body));
                        }
                })
            }
        }
    }
}