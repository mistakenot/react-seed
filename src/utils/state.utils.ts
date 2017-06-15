// import { 
//     combineReducers, 
//     applyMiddleware, 
//     MiddlewareAPI,
//     Action,
//     Dispatch as ReduxDispatch,
//     createStore as createReduxStore} from "redux";
// import {Store} from "react-redux";
// import {Service} from "utils";

// // export function createStore(...services: Service<AppState>[]): Store<AppState> {
// //     let reducer = combineReducers<AppState>({
// //         counter: counterReducer,
// //         time: timeReducer
// //     });
// //     let servicesMiddleware = services.map(createServiceMiddleware)
// //     return createReduxStore(reducer, applyMiddleware(...servicesMiddleware));
// // }

// const createServiceMiddleware = 
//     (service: Service<AppState>) => 
//     (api: MiddlewareAPI<AppState>) => 
//     (next: ReduxDispatch<AppState>) => {
//         let serviceDispatch = service(api.getState, api.dispatch);
//         return (action: Action): Action => {
//             serviceDispatch(action);
//             return next(action);
//         }
//     }
    