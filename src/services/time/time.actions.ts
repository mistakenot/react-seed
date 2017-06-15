import {Action} from "utils";

export const Types = {
    NewTime: "TIME_NEW_TIME",
    ToggleActive: "TIME_TOGGLED_ACTIVE"
}

export interface NewTimeAction extends Action {
    time: string;
}

export const newTime = (time: string): NewTimeAction => {
    return {
        type: Types.NewTime,
        time: time
    }
}

export const toggleActive: Action = {type: Types.ToggleActive}