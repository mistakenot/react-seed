import {HttpService} from "./http/http.service";
import {SignalRService} from "./signalr/signalr.service";
import {TimeService} from "./time/time.service";
import { Store } from "redux";

export interface ServiceCollection {
    http: HttpService;
    signalr: SignalRService;
    time: TimeService;
    dispose: () => void;
}

export const createServices = (store: Store<any>): ServiceCollection => ({
    http: new HttpService(store.dispatch),
    signalr: new SignalRService(store.dispatch),
    time: new TimeService(store.dispatch, store.getState),
    dispose: () => {
        // Dispose here.
    }
})