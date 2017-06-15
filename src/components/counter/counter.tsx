import * as React from "react";
import {Button} from "react-bootstrap";
import {ActionHandler} from "utils";

import {State} from "./counter.state";
import * as Actions from "./counter.actions";

interface Props extends State, ActionHandler {}

export const Counter = (props: Props) => (
    <div>
        <Button onClick={() => props.dispatch(Actions.increase)}>
            {props.count}
        </Button>
    </div>
)