import * as React from "react";
import {Collapse, Row, Col, Checkbox, Glyphicon, Button, Radio} from "react-bootstrap";

interface NodeProps {
    id: string;
    name: string;
    isExpanded: boolean;
    isSelected: boolean;
    isVisible: boolean;
    children: NodeProps[];
}

interface NodePropsWithEvents extends NodeProps {
    onExpand: (id: string) => void;
    onSelect: (id: string) => void;
}

{/*<Glyphicon glyph={props.isExpanded ? "minus" : "plus"} onClick={() => props.onExpand(props.id)}/> : null*/}

const Node = (props: NodePropsWithEvents) => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    { props.isVisible ?
                    <div className="checkbox">
                        { props.children.length > 0 && props.children.some(c => c.isVisible) ?
                            <span className={"showCaret " + (props.isExpanded ? "" : "collapsed")} onClick={() => props.onExpand(props.id)}/> : null
                        }
                        <input type="checkbox" id={"checkbox-" + props.id} checked={props.isSelected} onChange={() => {props.onSelect(props.id)}} />
                        <label htmlFor={"checkbox-" + props.id}>{props.name}</label>
                    </div>
                    : null}
                </Col>
            </Row>
            <Collapse in={props.isExpanded}>
                <Row>
                    <Col sm={1}/>
                    <Col sm={11}>
                    { props.children.map(c => { return (<Node {...c} onSelect={props.onSelect} onExpand={props.onExpand} />) }) }
                    </Col>
                </Row>
            </Collapse>
        </div>)
}