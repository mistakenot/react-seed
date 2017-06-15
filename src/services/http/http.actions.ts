import {Action} from "utils";

export const Types = {
    request: "HTTP_REQUEST",
    response: "HTTP_RESPONSE"
}

export interface HttpRequestAction extends Action {
    callingType: string,
    method: string;
    url: string;
}

export interface HttpResponseAction extends Action {
    request: HttpRequestAction,
    wasSuccess: boolean;
    body: any;
}

export const httpResponseAction = (request: HttpRequestAction, error: boolean, body: any): HttpResponseAction => ({
    request: request,
    type: Types.response,
    wasSuccess: !error,
    body: body })

export const httpRequestAction = (id: string, method: string, url: string): HttpRequestAction => ({ 
    callingType: id,
    type: Types.request, 
    method: method, 
    url: url })