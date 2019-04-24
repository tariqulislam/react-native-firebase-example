import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import {firebaseExamples} from './reducers.js'
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore} from 'redux-firestore';
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import firebaseConfig from './../config/firebaseConfig';
import {firestoreReducer} from 'redux-firestore'

export const rootReducers = combineReducers({
    firebaseExamples,
    firestoreReducer: firestoreReducer
});

export const composeMiddleware = compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
)

export const configureStore = () => {
    return createStore(rootReducers, composeMiddleware)
}

export default configureStore;