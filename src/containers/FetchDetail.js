                    //this conponent handles the display of the bookdetails
import react from 'react';
import { useSelector } from "react-redux";

  const FetchDetail = () => {
    //assiging state and checking if fields are defined fields to be displayedor placing a place holder
  const book = useSelector((state) => state.book);
  const bookId = book.id; 
  const image = book.volumeInfo.imageLinks.thumbnail?book.volumeInfo.imageLinks.thumbnail:''; 
  const author =  book.volumeInfo.authors?book.volumeInfo.authors.toString():'no authors mentioned';//unpacks the authors array to display all authors
  const title = book.volumeInfo.title;
  const category = book.volumeInfo.categories?book.volumeInfo.categories.toString():'no categories tagged';//unpacks the categories array to display all categories
  const description = book.volumeInfo.description?book.volumeInfo.description:'no description provided';

  return (
    <div className="ui grid container" >
    
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image } />
              </div>
              <div className="column rp">
                <h1> {title}</h1>
                <h2>
                {author}
              </h2>
              <h3 className="ui brown block header"> {category} </h3>
              <div dangerouslySetInnerHTML={ {__html:description} }/>
              </div>
              
            </div>
            <h1></h1>
          </div>
        </div>
      
    </div>
  );
};

export default FetchDetail;
