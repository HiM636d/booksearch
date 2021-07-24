                                                                      /* This is the main component - it does the logic and renders "Header"   "TotalDisplay"  "BookComponent" and " LoadMore" */


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookComponent from "./BookComponent";
import axios from "axios";

import {
setBooks,
  setTotal,
  rmSpinner,
  addSpinner,
  loadMore,
} from "../redux/actions/bookActions";

import Header from "./Header";
import LoadMore from "./LoadMore";
import TotalDisplay from "./TotalDisplay";
const ApiKey=process.env.REACT_APP_GOOGLE_BOOK_API_KEY


const BookListing = () => {

  
      const books = useSelector((state) => state);      //assigning state to a varial
      const dispatch = useDispatch();              //assigning the 
      const [term, setTerm] = useState("");   //using useState hook to initialize the variable "term" that will hold the keyword entered by the user 
      const [orderBy, setOrderBy] = useState("relevance");  //using useState hook to initialize the variable "orderBy"  that will hold the value of the order by drop down
      const [category, setCategory] = useState(""); // category will hold the value of the category dropdown 
      const [startIndex, setStartIndex] = useState(0); // starIndex will be passed in the get method to determine start index and will be incremented by 30 everytime LoadMore is pressed
      const [isLoaded, setLoading] = useState(0); // a variable that changes everytime  fetchBooks is called
      const[error,setError]=useState(null)
      
      useEffect(() => {setStartIndex(startIndex + 30);}, [isLoaded]);  //adding 30 to startIndex variable everytime isLoaded is changed andloaded is changed everytime fetchBooks is called
      useEffect(() => {setStartIndex(0);dispatch(setTotal(0));dispatch(setBooks([]));}, [term, category, orderBy]);//  whenever term ,category,or order by are changed by the user.. startIndex,total and books are reseted

      const fetchBooks = async (handle) => {
                        //function that handles sending the get request using axios and assigns it to  state elements,total and books
                           
                        dispatch(addSpinner({   // adding mock object to the state to show loading state and avoid type error before data is properly assigned
                              id: "loadingPlaceHolder",
                            volumeInfo: { 
                              imageLinks:
                               { thumbnail: "/spinner.gif" } },})
                                );
                              

                              //using axios get with await to fetch data from google books api
                            const response = await axios
                            .get( `https://www.googleapis.com/books/v1/volumes?q=${term}+subject:${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${ApiKey} `
                            )
                            .catch((err) => {
                            setError('Err');
                            });


                            dispatch(rmSpinner());//removing mockobject after data is fetched
                            dispatch(setTotal(response.data.totalItems));//assigning total nummber of items to total variable
                          
                            
                            handle === "setBooks"?          //fetchBooks function is called from the "search" button  data is assigned with setBOOKS --if called with the loadMore button data is assigned with loadMore
                            dispatch(setBooks(response.data.items))
                            :dispatch(loadMore(response.data.items));

                            setLoading(isLoaded + 1);//incrementing isLoaded to trigget the useEffect
                            };

      if (term === "") {    //if  nothing is entered by the user no data is returned ,only a blank screan under the header
        return (
                <div>
                  <Header
                    setTerm={setTerm}
                    setOrderBy={setOrderBy}
                    setCategory={setCategory}
                    fetchBooks={fetchBooks}
                    
                  />
                  <TotalDisplay term={term} />
                </div>
        );
      } 
              else {   //if user enters keyword header is returned with the total ,the results and the load more button
                return (
                  <div>
                    <Header
                      setTerm={setTerm}
                      setOrderBy={setOrderBy}
                      setCategory={setCategory}
                      fetchBooks={fetchBooks}

                    />
                    <TotalDisplay term={term} isloaded={isLoaded} />
                    <div className="ui grid container">
                      <BookComponent error={error} />
                    </div>
                    <LoadMore fetchBooks={fetchBooks} />
                  </div>
                );
              }
};

export default BookListing;
