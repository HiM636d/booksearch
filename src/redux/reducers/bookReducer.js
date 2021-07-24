import { ActionTypes } from "../constants/action-types";
// initializing state 
const initialState = {
  books: [],
  total: 0,
};

export const bookReducer = (state = initialState, { type, payload }) => {
  //takes in initial state and the type and load that the action delivers through dispatch
  switch (type) {
    //if the action has the type of SET_BOOKS it returns previous state and sets the state(books) to the payload 
    case ActionTypes.SET_BOOKS:
      return { ...state, books: payload };
//if action has the type of LOAD_MORE it returns previous state and **adds the payload to it
    case ActionTypes.LOAD_MORE:
      return { ...state, books: [...state.books, ...payload] };
//if action has the type of SET_TOTAL it returns previous state and sets the state(total) to the payload 
    case ActionTypes.SET_TOTAL:
      return { ...state, total: payload };
//if action has the type of REMOVE_SPINNER it returns previous state of books and removes the last element of the state(book),which is the mockup object added by add spinner action
    case ActionTypes.REMOVE_SPINNER:
      return { ...state, books: state.books.slice(0, -1) };
//if action has the type add spinner it returns previous state and adds a mockup object
    case ActionTypes.ADD_SPINNER:
      return { ...state, books: [...state.books, payload] };

    default:
      return state;
  }
};
const mockObject = {
  //defining a mockup object to populate the book state to avoid undefined and set loading while data populates,
  //object only has the fields that are read by the conponent that displays the book details
  id: "loading id..",
  volumeInfo: {
    authors: ["loading author..."],
    categories: ["loading categories.."],
    description: ["loading description"],
    title: "loading",
    imageLinks: {
      thumbnail: "/spinnergif",
    },
  },
};
export const selectedBookReducer = (state = mockObject, { type, payload }) => {
  //selected book reducer takes state initialized with mockObject and type and payload sent by the action
  switch (type) {
    //if  type is SELECTEd_BOOK ,it returns previous state and unpacks the object contained in the payload and populates the state with it
    case ActionTypes.SELECTED_BOOK:
      return { ...state, ...payload };

    case ActionTypes.ADD_SPINNER_TO_DETAIL:
      return { ...state, ...payload };
    //if type is ADD_SPINNER_TO_DETAIL it returns previous state and sets the state to payload
    case ActionTypes.CLEAR_SPINNER:
      return { ...state, payload };
    default:
      return state;
  }
};
