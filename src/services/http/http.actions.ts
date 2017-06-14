import {Action, Dispatch} from "utils/actions";
import * as request from "request";

export const Types = {
    request: "HTTP_REQUEST",
    response: "HTTP_RESPONSE"
}

export interface HttpRequestAction extends Action {
    method: string;
    url: string;
}

export interface HttpResponseAction extends Action {
    wasSuccess: boolean;
    body: any;
}

export const httpResponseAction = (error: boolean, body: any): HttpResponseAction => {
    return {
        type: Types.response,
        wasSuccess: !error,
        body: body
    };
}

export const httpRequestAction = 
    (uri: string, method: string) =>
    (dispatch: Dispatch) => {
        request({
            method: method,
            url: uri
        }, (err, resp, body) => {
            if (err) {
                dispatch(httpResponseAction(true, null))
            }
            dispatch(httpResponseAction(false, body));
        });
    }