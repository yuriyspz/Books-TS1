import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from 'redux-form';
import book from '../reducers/book'

export default combineReducers({
    book,
    form: reduxFormReducer
})
