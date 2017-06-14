import * as React from "react";
import {Collapse, Row, Col} from "react-bootstrap";
import {ActionHandler} from "../../../utils/actions";
import * as Actions from "./node.actions";

export interface NodeProps extends ActionHandler {
    id: string;
    name: string;
    isExpanded: boolean;
    isSelected: boolean;
    isVisible: boolean;
    children: NodeProps[];
}

{/*<Glyphicon glyph={props.isExpanded ? "minus" : "plus"} onClick={() => props.onExpand(props.id)}/> : null*/}

export const Node = (props: NodeProps): React.ReactElement<NodeProps> => (
    <div>
        <Row>
            <Col sm={12}>
                { props.isVisible ?
                <div className="checkbox">
                    { props.children.length > 0 && props.children.some(c => c.isVisible) ?
                        <span 
                            className={"showCaret " + (props.isExpanded ? "" : "collapsed")} 
                            onClick={() => props.dispatch(Actions.clickExpand(props.id))}/> : null
                    }
                    <input 
                        type="checkbox" 
                        id={"checkbox-" + props.id} 
                        checked={props.isSelected} 
                        onChange={() => {props.dispatch(Actions.clickSelect(props.id))}} />
                    <label htmlFor={"checkbox-" + props.id}>{props.name}</label>
                </div>
                : null}
            </Col>
        </Row>
        <Collapse in={props.isExpanded}>
            <Row>
                <Col sm={1}/>
                <Col sm={11}>
                { props.children.map(c => <Node {...c} />) }
                </Col>
            </Row>
        </Collapse>
    </div>)