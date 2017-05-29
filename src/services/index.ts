import {mappedTimeService} from "./time.service";
import {Dispatch} from "../actions"

export type Service<S> = (getState: () => S, dispatch: Dispatch) => Dispatch

export const services = [mappedTimeService]