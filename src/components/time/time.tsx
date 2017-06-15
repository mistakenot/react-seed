import * as React from "react";
import {Row, Col, Button} from "react-bootstrap";
import {ActionHandler} from "utils";
import {State} from "./time.state";
import * as Actions from "../../services/time/time.actions"

interface Props extends State, ActionHandler {}

export const Time = (props: Props) => (
    <div>
        <Row>
            <Col sm={12}>
                {props.time}
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Button onClick={(_) => props.dispatch(Actions.toggleActive)}>
                    {props.isActive ? "Deactivate" : "Activate"}
                </Button>
            </Col>
        </Row>
    </div>)