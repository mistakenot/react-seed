export interface Action {
    type: string;
}

export type Dispatch = (msg: Action) => void;

export interface ActionHandler {
    dispatch: Dispatch;
}