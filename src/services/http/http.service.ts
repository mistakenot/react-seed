import * as request from "request";
import { put, takeEvery } from 'redux-saga/effects'
import * as Actions from "./http.actions";

function* httpRequest(action: Actions.HttpRequestAction) {
    yield request({
        method: action.method,
        url: action.url
    }, (err, resp, body) => {
        if (err) {
            return put(Actions.httpResponseAction(true, null))
        }
        return put(Actions.httpResponseAction(false, body));
    });
}

export function* httpSaga() {
    yield takeEvery(Actions.Types.request, httpRequest)
}