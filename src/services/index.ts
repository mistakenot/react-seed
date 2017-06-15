import {Action, Dispatch} from "utils";

export interface Service {
    onAction: (action: Action, dispatch: Dispatch) => void;
}