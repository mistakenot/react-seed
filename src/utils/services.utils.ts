import { Dispatch } from "utils"
import { Middleware, MiddlewareAPI, Action, Dispatch as ReduxDispatch } from "redux";
import { createServices } from "services";

export const createServicesMiddleware = (): Middleware => {
    return ( 
        (api: MiddlewareAPI<any>) => 
        (next: ReduxDispatch<any>) => {
            let services = createServices(api.dispatch, api.getState)
            return (action: Action) => {
                services.dispatch(action);
                return next(action);
            }
        }
    )
}

export interface Service {
    onAction: Dispatch;
}

export abstract class ServiceBase implements Service {
    constructor(protected dispatch: Dispatch) { }

    abstract onAction(action: Action): void;
}