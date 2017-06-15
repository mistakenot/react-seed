import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider, connect } from "react-redux";
import {App} from "components/app/app.component";
import {reducer as AppReducer} from "components/app/app.state";
import { createStore, combineReducers } from "redux";
import { createServices } from "services";

let reducer = combineReducers({
  app: AppReducer
});

let store = createStore(reducer);

(window as any).services = createServices(store)

const mapStateToProps = (state: any) => (state);

const mapDispatchToProps = (dispatch: (msg: any) => void) => ({
    dispatch: dispatch});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();