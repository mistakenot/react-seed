import {HttpService} from "./http/http.service";
import {SignalRService} from "./signalr/signalr.service";
import {TimeService} from "./time/time.service";
import { Dispatch, Action } from "utils";
import { ZoneService } from "services/zones/zone.service";

export interface Services {
    dispose: () => void;
    dispatch: Dispatch;
}

class ServiceCollection implements Services {
    constructor(
        private http: HttpService,
        private signalr: SignalRService,
        private time: TimeService,
        private zones: ZoneService) {
    }
    dispatch(action: Action): void {
        console.log(action);
        this.http.onAction(action);
        this.signalr.onAction(action)
        this.time.onAction(action)
        this.zones.onAction(action);
    }
    dispose() {

    }
}

export const createServices = (dispatch: Dispatch, getState: () => any): ServiceCollection => {
    return new ServiceCollection(
        new HttpService(dispatch),
        new SignalRService(dispatch),
        new TimeService(dispatch, getState),
        new ZoneService(dispatch));
}