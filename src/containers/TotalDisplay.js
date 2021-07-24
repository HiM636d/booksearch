import { useSelector } from "react-redux";

const TotalDisplay = (props) => {
  const books = useSelector((state) => state);//assigning state to a variable

  if (books.allBooks.total != 0 && props.term != "") {
    return (
        //checking if there is a total and user has typed in a keyword and returning the total with the number of totalItems 
      <div style={{ marginBottom: "2%" }}>
        <h1 style={{ color: "blueviolet" }}>
          {" "}
          total number of books found:{books.allBooks.total}
        </h1>
      </div>


    );
  } else {
      //if total is 0 or user didnt type in a keyword return empty div
    return <> </>;
  }
};

export default TotalDisplay;
