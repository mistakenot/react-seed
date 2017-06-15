import * as React from "react";
import {Node, NodeProps} from "./node/node.component";
import * as NodeActions from "./node/node.actions";
import {ActionHandler} from "utils";

interface TreeProps extends ActionHandler {
    root: NodeProps;
}

interface TreeState {
    root: NodeProps;
}

export class Tree extends React.Component<TreeProps, TreeState> {
    constructor(props: TreeProps, state: TreeState) {
        super(props, state);
        this.state = this.props;
    }

    findElement(id: string, node: NodeProps): NodeProps | undefined {
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

        if (node !== undefined) {
            this.reset();
            node.isSelected = !node.isSelected;
            this.getAllAncesstors(node).forEach(n => n.isSelected = (node as NodeProps).isSelected);
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

    handleNodeAction(action: NodeActions.NodeAction) {
        switch (action.type) {
            case NodeActions.Types.ClickExpand:
                this.onExpand(action.id);
            case NodeActions.Types.ClickSelect:
                this.onSelect(action.id);
        }
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Filter</label>
                    <input className="form-control" type="text" onChange={e => this.onChangeFilter(e.target.value)}/>
                </div>
                <Node 
                    {...this.state.root} 
                    dispatch={a => this.handleNodeAction(a as NodeActions.NodeAction)} />
            </div>)
    }
}