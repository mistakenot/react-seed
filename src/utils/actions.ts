export interface Action {
    type: string;
}

export type Dispatch = (msg: Action | Dispatch) => void;

export interface ActionHandler {
    dispatch: Dispatch;
}

export const emptyDispatch: Dispatch = (_) => {}