import {Action} from "actions";

export const Types = {
    increase: "COUNTER_INCREASE",
    decrease: "COUNTER_DECREASE",
    stopTimeout: "COUNTER_STOP"
}

export const increase: Action = {
    type: Types.increase
}

export const decrease: Action = {
    type: Types.decrease
}

export const stop: Action = {
    type: Types.stopTimeout
}