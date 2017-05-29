import { 
    combineReducers, 
    applyMiddleware, 
    MiddlewareAPI,
    Action,
    Dispatch as ReduxDispatch,
    createStore as createReduxStore} from "redux";
import {Store} from "react-redux";
import * as Counter from "state/counter.state";
import * as Time from "state/time.state";
import {reducer as counterReducer} from "./counter.state"
import {reducer as timeReducer} from "./time.state";
import {Service} from "../services";

export interface AppState {
    counter: Counter.State
    time: Time.State
}

export function createStore(...services: Service<AppState>[]): Store<AppState> {
    let reducer = combineReducers<AppState>({
        counter: counterReducer,
        time: timeReducer
    });
    let servicesMiddleware = services.map(createServiceMiddleware)
    return createReduxStore(reducer, applyMiddleware(...servicesMiddleware));
}

// function createDispatchMiddleware(services: Dispatch): Middleware {
//     return (api: MiddlewareAPI<AppState>) => 
//         (next: ReduxDispatch<AppState>) => (action: Action) => {
//     }
// }

// const createServicesMiddleware = 
//     (services: Dispatch) => 
//     (api: MiddlewareAPI<AppState>) => 
//     (next: ReduxDispatch<AppState>) => 
//     (action: Action): Action => {
//         services(action);
//         return next(action);
//     }

const createServiceMiddleware = 
    (service: Service<AppState>) => 
    (api: MiddlewareAPI<AppState>) => 
    (next: ReduxDispatch<AppState>) => {
        let serviceDispatch = service(api.getState, api.dispatch);
        return (action: Action): Action => {
            serviceDispatch(action);
            return next(action);
        }
    }
    