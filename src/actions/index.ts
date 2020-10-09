import axios, { AxiosResponse } from 'axios';
import { ThunkAction} from 'redux-thunk';
import { Dispatch } from 'redux';
import { ADD_BOOK, EDIT_BOOK, GET_ALL_BOOKS, REMOVE_BOOK } from '../constants';
import { IAddBookAction, IBook, IEditBookAction, IGetAllAction, IRemoveBookAction } from '../types';

const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

export type IBookAction = 
| IAddBookAction
| IEditBookAction
| IGetAllAction
| IRemoveBookAction

export const getAllBooksSuccess = (books: IBook[]): IGetAllAction => {
    return {
        type: GET_ALL_BOOKS,
        payload: books
    }
};

export const getAllBooks = () => {
    return (dispatch: Dispatch<IGetAllAction>) => {
        return axios.get(url)
            .then((response) => {
                dispatch(getAllBooksSuccess(response.data))
            })
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
export const updateBookSuccess = (id: number, data: IBook): IEditBookAction => {
    return (dispatch: Dispatch<IEditBookAction>) => {
        dispatch({ type: EDIT_BOOK, payload: data, id: id });
    }
};
export const updateBook = (id: number, data: IBook) => {
    console.log(data.published);
    return (dispatch: Dispatch<IEditBookAction>) => {
        return axios.put(`${url}/${id}`, {
            title: data.title,
            author: data.author,
            description: data.description,
            published: data.published
        })
            .then(res => {
                dispatch(updateBookSuccess(id, data));
            });
    }
};
export const deleteBookSuccess = (id: number): IRemoveBookAction => {
    return (dispatch: Dispatch<IRemoveBookAction>) => {
        dispatch({ type: REMOVE_BOOK, payload: {id} });
    }
};
export const deleteBook = (id) => {
    return (dispatch) => {
        return axios.delete(`${url}/${id}`)
            .then(res => {
                dispatch(deleteBookSuccess(id));
            });
    }
};
