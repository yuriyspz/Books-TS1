import { type } from "os";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { IBookAction } from "./actions";
import reducers from "./reducers";
import { bookReducer } from "./reducers/book";
import { IBooks } from "./types";

export interface IBookState {
    books: IBooks
}
export interface IRootState {
    readonly books: IBookState
}
const RootReducer = combineReducers<IRootState>({
    books: bookReducer
})
export type RootAction = IBookAction

export const store = createStore(RootReducer, applyMiddleware(thunk as ThunkMiddleware<IRootState, RootAction>));