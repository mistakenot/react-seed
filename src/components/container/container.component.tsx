import * as React from "react";
import {ServiceCollection} from "services";

interface Props {
    service: ServiceCollection
}

export class Container extends React.Component<Props, {}> {
    private services: ServiceCollection;

    constructor(props: Props, state: {}) {
        super(props, state);
        this.services = props.service;
    }

    render() {
        return <div>{this.props.children}</div>;
    }

    componentWillUnmount() {
        this.services.dispose();
    }
}