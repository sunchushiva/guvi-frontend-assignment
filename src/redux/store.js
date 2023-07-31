import { legacy_createStore, compose, combineReducers } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  mainReducer: reducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancer());
