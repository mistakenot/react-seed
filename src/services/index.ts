import {HttpService} from "./http/http.service";
import {SignalRService} from "./signalr/signalr.service";
import {TimeService} from "./time/time.service";
import { Service } from "utils";
import { Store } from "redux";

export const serviceCollection = (store: Store<any>): Service[] => ([
    new HttpService(store.dispatch),
    new SignalRService(store.dispatch),
    new TimeService(store.dispatch, store.getState)
])