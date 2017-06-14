import {Action} from "utils/actions";

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

export const httpResponseAction = (error: boolean, body: any): HttpResponseAction => ({
    type: Types.response,
    wasSuccess: !error,
    body: body })

export const httpRequestAction = (method: string, url: string): HttpRequestAction => ({ 
    type: Types.request, 
    method: method, 
    url: url })