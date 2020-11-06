import { type } from "os";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { IBookAction } from "./actions";
import reducers from "./reducers";
import bookReducer from "./reducers/book";
import { IBooks, IbooksState } from "./types";
import { composeWithDevTools } from "redux-devtools-extension";

export interface RootState {
    readonly books: IbooksState
}

const RootReducer = combineReducers<RootState>({
    books: bookReducer
})
export type RootAction = IBookAction

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)));