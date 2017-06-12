import {Dispatch, Action} from "./actions"

export type Service<S> = (getState: () => S, dispatch: Dispatch) => Dispatch

export interface IService<S> {
    handle(msg: Action, state: S): void;
}

export abstract class ServiceBase<S> implements IService<S> {
    constructor(protected dispatch: Dispatch) {}
    abstract handle(msg: Action, state: S): void;
}