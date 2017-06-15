import { Dispatch, Action } from "utils"

export interface Service {
    onAction: Dispatch;
}

export abstract class ServiceBase implements Service {
    constructor(protected dispatch: Dispatch) { }

    abstract onAction(action: Action): void;
}