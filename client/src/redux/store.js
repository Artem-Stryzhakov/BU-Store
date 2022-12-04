/*import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";*/
import {postsReducer} from "./slices/posts";

import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: postsReducer
})

export default store;

/*
const rootReducer = combineReducers({
    reducer: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))*/