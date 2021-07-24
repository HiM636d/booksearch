import {combineReducers} from 'redux';
import { bookReducer,selectedBookReducer} from "./bookReducer";


const reducers = combineReducers({
    //setes both reducers in constant called reducers using the combineReducer function provided by redux
    allBooks: bookReducer,
    book:selectedBookReducer,

});

export default reducers;
