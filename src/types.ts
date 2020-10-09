import { ADD_BOOK, EDIT_BOOK, GET_ALL_BOOKS, REMOVE_BOOK } from "./constants";

export interface IBook {
    id?: number,
    title?: string,
    author?: string,
    description?: string,
    published? : number
}

export interface IBooks {
    [id: number]: IBook
}

export interface IAddBookAction {
    type: typeof ADD_BOOK,
    payload: IBook
}
export interface IGetAllAction {
    type: typeof GET_ALL_BOOKS,
    payload: IBook[]
}
export interface IRemoveBookAction {
    type: typeof REMOVE_BOOK,
    payload: {
        id: number
    }
}
export interface IEditBookAction {
    type: typeof EDIT_BOOK,
    payload: IBook,
    id: number
}