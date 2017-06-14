import {Action, Dispatch} from "../utils/actions";

export interface Service {
    onAction: (action: Action, dispatch: Dispatch) => void;
}