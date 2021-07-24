                                                              //component that handles the results

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookComponent = (props) => {
  const books = useSelector((state) => state.allBooks.books); //assigning state to a variable 
  const renderList = books.map((book) => {  //defining list to be rendere
            const info = book.volumeInfo ? book.volumeInfo : undefined;
            const image = info.imageLinks ? info.imageLinks.thumbnail : undefined;
            const id = book.id;


            
              return (
                <div className="four wide column" key={id}>
                  <Link to={`/book/${id}`}>
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image">
                          <h5>{id}</h5>
                          <img src={image != undefined ? image : ""} alt={info.title} />
                        </div>
                        <div className="content">
                          <div className="header">{info.title}</div>
                          <div className="meta">
                            {info.authors ? info.authors.toString() : " "}
                          </div>
                          <div className="meta">
                            {info.categories ? info.categories[0] : " "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            });
  if (props.error==='Err'){
    return<div><h1> oops...Something wrong happened</h1></div>
  }
  else{
  return <>{renderList} </>;}
};

export default BookComponent;
