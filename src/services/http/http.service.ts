import * as request from "request";

import {Action} from "utils/actions";
import {ServiceBase} from "utils/services";
import * as Actions from "./http.actions";

export class HttpService extends ServiceBase<{}> {
    handle(msg: Action, state: {}): void {
        switch (msg.type) {
            case Actions.Types.request: {
                let action = <Actions.HttpRequestAction> msg; 
                request({
                    method: action.method,
                    url: action.url
                }, (err, resp, body) => {
                    if (err) {
                        this.dispatch(Actions.httpResponseAction(true, null))
                    }
                    this.dispatch(Actions.httpResponseAction(false, body));
                });
            }
        }
    }
}