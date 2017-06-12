import * as React from "react";
import {ActionHandler} from "actions";
import {State} from "../state/counter.state";
import {Button} from "react-bootstrap";
import * as Actions from "../actions/counter.actions";

interface Props extends State, ActionHandler {}

export const Counter = (props: Props) => (
    <div>
        <Button onClick={() => props.dispatch(Actions.increase)}>
            {props.count}
        </Button>
    </div>
)