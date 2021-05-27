import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {compose, createStore} from "redux";
import {rootReducer, RootState} from "./rootReducers";

const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : (f: any) => f

const makeStore: MakeStore<RootState> = (context: Context) => createStore(rootReducer, compose(devtools));

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});