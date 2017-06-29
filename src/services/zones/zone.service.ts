import {Zone} from "domain/zone";
import {Action, Dispatch, ServiceBase} from "utils";
import * as HttpActions from "services/http/http.actions";
import * as Actions from "./zones.actions";
import * as ZoneTreeActions from "components/app/zone-tree/zone-tree.actions";

export class ZoneService extends ServiceBase {
    constructor(dispatch: Dispatch) {
        super(dispatch);
    }

    onAction(action: Action) {
        switch (action.type) {
            case (Actions.Types.requestZones): {
                this.dispatch(HttpActions.httpRequestAction(Actions.Types.requestZones, "GET", "/zones"));
            }
            case (HttpActions.Types.response): {
                let httpResponse = action as HttpActions.HttpResponseAction;
                if (httpResponse.wasSuccess && httpResponse.request.callingType == Actions.Types.requestZones) {
                    let rootZone = (httpResponse.body as Zone);
                    // Parsing here, etc.
                    // this.dispatch(Actions.receiveZones(rootZone));
                    alert(rootZone);
                }
                else {
                    console.log(httpResponse.err);
                }
            }
            case (ZoneTreeActions.Types.onLoadZoneTree): {
                this.dispatch(Actions.requestZones);
            }
        }
    }
}