import { Reducer } from "react";
import { IBookAction } from "../actions";
import { ADD_BOOK, EDIT_BOOK, GET_ALL_BOOKS, REMOVE_BOOK } from "../constants";
import { IBookState } from "../store";
import { IBook } from "../types";
const initialState = {books: []}

export const bookReducer: Reducer<IBookState, IBookAction> = (state = initialState, action) => {
    if (action.type === GET_ALL_BOOKS) {
        return action.payload
    } else if (action.type === ADD_BOOK) {
        return {...state,
            books: {...state.books, [id]: action.payload}
        }
    } else if (action.type === EDIT_BOOK) {
        return state.books.map((book: IBook) => book.id === action.id ? {
            ...book,
            title: action.payload.title,
            author: action.payload.author,
            description: action.payload.description,
            published: action.payload.published
        } : book)
    } else if(action.type === REMOVE_BOOK) {
        return state.books.filter((book: IBook) => book.id !== action.payload.id);
    }
    return state;
}