import { Reducer } from "react";
import { IBookAction } from "../actions";
import { ADD_BOOK, EDIT_BOOK, GET_ALL_BOOKS, REMOVE_BOOK } from "../constants";
import { RootState } from "../store";
import { IbooksState } from "../types";
// import { IbooksState } from "../types";
const initialState = {books: {}}


const bookReducer: Reducer<IbooksState, IBookAction> = (
    state = initialState, 
    action
    ) => {
    if (action.type === GET_ALL_BOOKS) {
        return {
            ...state,
            books: action.payload
        }
    } else if (action.type === ADD_BOOK) {
        const id = action.payload.id;
        return {...state,
            books: {...state.books, [id]: action.payload}
        }
    }
    //  else if (action.type === EDIT_BOOK) {
    //     return Object.entries(state.books).map(([key, value]) => value.id === action.id ? {
    //         ...value,
    //         title: action.payload.title,
    //         author: action.payload.author,
    //         description: action.payload.description,
    //         published: action.payload.published
    //     } : value)
    // } else if(action.type === REMOVE_BOOK) {
    //     return Object.entries(state.books).filter(([key, value]) => value.id !== action.payload.id);
    // }
    return state;
}

export default bookReducer;