import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider}  from "react-redux";
import {ReduxStore} from "./reduxData/datastore";


ReduxStore.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <Provider store={ReduxStore}>
        <App />
        </Provider>, document.getElementById('root')
    );

    serviceWorker.unregister();

})

