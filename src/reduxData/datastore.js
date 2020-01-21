import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import UserReducer from "./reducers/userReducer.js";
import AuthReducer from "./reducers/authReducer.js";

import ProjectReducer from "./reducers/projectReducer.js";
import thunk from "redux-thunk";
import { getFirebase,reactReduxFirebase,firebaseReducer} from "react-redux-firebase";
import { getFirestore,reduxFirestore,firestoreReducer} from "redux-firestore";
import fbConfig from "../config/firebaseConfig";

const commonReducer = combineReducers(
   {    auth:AuthReducer,
        project:ProjectReducer,
        user:UserReducer,
        firestore:firestoreReducer,
        firebase:firebaseReducer
    }
)

export const ReduxStore = createStore(commonReducer,
    compose(
    applyMiddleware(
        thunk.withExtraArgument(
            {getFirebase,getFirestore}
            )),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig,{attachAuthIsReady:true,useFirestoreForProfile:true,userProfile:'users'})
    ));
