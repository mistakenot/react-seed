import {Dispatch, Action} from "./actions"

export type Service<S> = (getState: () => S, dispatch: Dispatch) => Dispatch

export interface IService {
    handle(msg: Action): void;
}

export abstract class ServiceBase<S> implements IService {
    constructor(protected dispatch: Dispatch, protected getState: () => S) {}
    public abstract handle(msg: Action): void;
}