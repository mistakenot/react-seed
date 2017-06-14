import * as React from 'react';
import {Provider, connect} from "react-redux";
import {createStore, combineReducers} from "redux";

let store = createStore(combineReducers({}));

const mapStateToProps = (state: any) => {
  return state;
}

const mapDispatchToProps = (dispatch: (msg: any) => void) => {
  return {
    dispatch: dispatch
  }
}

interface Props {
    mapStateToProps: (state: any) => any
    mapDispatchToProps: (dispatch: (action: any) => void) => void
}
export class Redux<TState> extends React.Component<Props, {}> {
    render () {
        var ConnectedChild = connect(mapStateToProps, mapDispatchToProps)(this.props.children);

        return (
            <Provider store={store}>
                <ConnectedChild />
            </Provider>)
    }
)