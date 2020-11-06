import axios, { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { ADD_BOOK, EDIT_BOOK, GET_ALL_BOOKS, REMOVE_BOOK } from '../constants';
import { IAddBookAction, IBook, IEditBookAction, IGetAllAction, IRemoveBookAction } from '../types';
import {RootState, RootAction} from '../store'

const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export type IBookAction = 
| IAddBookAction
| IEditBookAction
| IGetAllAction
| IRemoveBookAction

export const getAllBooksSuccess = (books: IBook[]): IBookAction => {
    console.log('get all books success')
    return {
        type: GET_ALL_BOOKS,
        payload: books
    }
};

export const getAllBooks = (): ThunkResult<void> => async dispatch => {
    console.log('123')
    return (dispatch: Dispatch<IBookAction>) => {
        console.log('456')
        return dispatch(getAllBooksSuccess([]))
        // return axios.get(url)
        //     .then((response) => {
        //         console.log(response.data)
        //         dispatch(getAllBooksSuccess(response.data))
        //     })
    }
};
export const createBookSuccess = (data: IBook): IAddBookAction => {
    return {
        type: ADD_BOOK,
        payload: {
            id: data.id,
            title: data.title,
            author: data.author,
            description: data.description,
            published: data.published
        }
    }
};
export const createBook = (book: IBook) => {
    console.log('333333' + JSON.stringify(book));
    return (dispatch: Dispatch<IAddBookAction>) => {
        return axios.post(`${url}/create`, book)
            .then((response) => {
                dispatch(createBookSuccess(response.data))
            })
    }
};
export const updateBookSuccess = (id: number, data: IBook) => {
    return (dispatch: Dispatch<IEditBookAction>) => {
        dispatch({ type: EDIT_BOOK, payload: data, id: id });
    }
};
export const updateBook = (id: number, data: IBook) => {
    console.log(data.published);
    return (dispatch: any) => {
        return axios.put(`${url}/${id}`, {
            title: data.title,
            author: data.author,
            description: data.description,
            published: data.published
        })
            .then(res => {
                dispatch(updateBookSuccess(res.data.id, res.data));
            });
    }
};
export const deleteBookSuccess = (id: number) => {
    return (dispatch: any) => {
        dispatch({ type: REMOVE_BOOK, payload: {id} });
    }
};
export const deleteBook = (id:number) => {
    return (dispatch: any) => {
        return axios.delete(`${url}/${id}`)
            .then(res => {
                dispatch(deleteBookSuccess(id));
            });
    }
};
