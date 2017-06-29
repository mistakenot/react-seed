import * as React from 'react';
import { Provider, connect, Store } from "react-redux";
import { createStore } from "redux";
import { Dispatch } from "utils";

interface Props {
    mapStateToProps: (state: any) => any
    mapDispatchToProps: (dispatch: Dispatch) => any
    store: Store<any>
    component: React.StatelessComponent<any>
}

export const ReduxApp = (props: Props) => {
    let store = createStore(props.reducer);
    var Child = connect(props.mapStateToProps, props.mapDispatchToProps)(props.component);

    return (
        <Provider store={store}>
            <Child />
        </Provider>)
}