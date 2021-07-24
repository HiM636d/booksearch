import { ActionTypes } from "../constants/action-types";


//action set books,takes results stored in books variable and delivers it as payload to reducer along with type SET_BOOKS

export const setBooks = (books) => {
  return {
    type: ActionTypes.SET_BOOKS,
    payload: books,
  };
};


//action load more,takes results stored in books variable and delivers it as payload to reducer along with type LOAD_MORE
export const loadMore = (books) => {
  return {
    type: ActionTypes.LOAD_MORE,
    payload: books,
  };
};


//action set selected Book,takes results stored in book variable and delivers it as payload to reducer along with type SELECTED_BOOKS

export const selectedBook = (book) => {
  return {
    type: ActionTypes.SELECTED_BOOK,
    payload: book,
  };
};

//action set total,takes results stored in total variable and delivers it as payload to reducer along with type SET_TOTAL

export const setTotal = (total) => {
  return {
    type: ActionTypes.SET_TOTAL,
    payload: total,
  };
};

//action removes spinner,doesnt take any parameters ,doesnt delover payload sends only type SET_BOOKS

export const rmSpinner = () => {
  return {
    type: ActionTypes.REMOVE_SPINNER,
  };
};

//action add spinner,takes mock object stores it in spinner variable and delivers it as payload to reducer along with type ADD_SPINNER

export const addSpinner = (spinner) => {
  return {
    type: ActionTypes.ADD_SPINNER,
    payload: spinner,
  };
};
