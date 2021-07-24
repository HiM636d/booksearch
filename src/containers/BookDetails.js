                                    //this conponent handles the logic of  the bookDetail display and renders Fetchdetail conponent

import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { selectedBook } from "../redux/actions/bookActions";
import { useDispatch, useSelector } from "react-redux";
import FetchDetail from "./FetchDetail";
const ApiKey=process.env.REACT_APP_GOOGLE_BOOKS_API_KEY


const BookDetails = () => {
  const book = useSelector((state) => state.book);//assigning sttae to variable
  const { bookId } = useParams(); //using the useParam hoob provided by react router dom to get the book id from the url
  const dispatch = useDispatch();   //assigning redux useDispatch()

         const fetchBookDetails = async () => {
                    const response = await axios
                    .get(
                        `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${ApiKey}  `//fetching data for a single volume from google books api by passing id
                    )
                    .catch((err) => {
                        console.log("Err", err);
                    });


                    dispatch(selectedBook(response.data));  //assigning data
                };

  useEffect(() => {//calling fetchbookDetails everytime id changes
    fetchBookDetails();
  }, [bookId]);


    return (
      <div className="ui grid container">
        <FetchDetail />
      </div>
    );
  
};

export default BookDetails;
