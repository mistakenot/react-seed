import * as React from "react";
import {Collapse, Row, Col, Checkbox, Glyphicon, Button, Radio} from "react-bootstrap";

interface TreeProps {
    root: NodeProps;
    onUpdate: (ids: string[]) => void;
}

interface TreeState {
    root: NodeProps;
}

export class Tree extends React.Component<TreeProps, TreeState> {
    constructor(props, state) {
        super(props, state);
        this.state = this.props;
    }

    findElement(id: string, node: NodeProps): NodeProps {
        if (node.id === id) {
            return node;
        }

        var childSearchResults = node.children
            .map(c => this.findElement(id, c))
            .filter(r => r !== undefined);
        
        if (childSearchResults.length > 0) {
            return childSearchResults[0];
        }

        return undefined;
    }

    getAllAncesstors(node: NodeProps): NodeProps[] {
        return node.children
            .map(c => this.getAllAncesstors(c))
            .reduce((x, y) => x.concat(y), [node])
    }

    onExpand(id: string) {
        var node = this.findElement(id, this.state.root);

        if (node) {
            node.isExpanded = !node.isExpanded;
            this.forceUpdate();
        }
    }

    reset() {
        this.state.root.isSelected = false;
        this.getAllAncesstors(this.state.root).forEach(a => a.isSelected = false);
    }

    onSelect(id: string) {
        var node = this.findElement(id, this.state.root);

        if (node) {
            this.reset();
            node.isSelected = !node.isSelected;
            this.getAllAncesstors(node).forEach(n => n.isSelected = node.isSelected);
            this.onUpdate();
        }
    }

    getAllNodes() {
        return this.getAllAncesstors(this.state.root)
            .concat([this.state.root]);
    }

    onChangeFilter(value: string) {
        this.getAllNodes()
            .forEach(a => { 
                a.isVisible = a.name.includes(value);
            });
        this.onUpdate();
    }

    onUpdate() {
        var ids = this.getAllNodes()
            .filter(n => n.isSelected)
            .map(n => n.id);
        this.forceUpdate();

        this.props.onUpdate(ids);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Filter</label>
                    <input className="form-control" type="text" onChange={e => this.onChangeFilter(e.target.value)}/>
                </div>
                <Node {...this.state.root} 
                    onExpand={(id: string) => this.onExpand(id)} 
                    onSelect={(id: string) => this.onSelect(id)} />
            </div>)
    }
}