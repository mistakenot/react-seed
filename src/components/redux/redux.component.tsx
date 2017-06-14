import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from "react-redux";
import {createStore, AppState} from "./state";
import {connect} from "react-redux";
import {services} from "./services";

let store = createStore(...services);

const mapStateToProps = (state: AppState) => {
  return state;
}

const mapDispatchToProps = (dispatch: (msg: any) => void) => {
  return {
    dispatch: dispatch
  }
}

const Child = connect(mapStateToProps, mapDispatchToProps)(App)

interface Props {
    mapStateToProps: (state: any) => any
    mapDispatchToProps: (dispatch: (action: any) => void) => void
}
export class Redux extends React.Component<Props, {}> {
    render () {
        var ConnectedChild = connect(mapStateToProps, mapDispatchToProps)(this.children);

        return (
            <Provider store={store}>
                <ConnectedChild />
            </Provider>)
    }
)