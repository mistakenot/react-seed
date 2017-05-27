import * as React from "react";
import {State} from "state/counter.state";

export const Counter = (props: State) => (
    <div>
    {props.count}
    </div>
)