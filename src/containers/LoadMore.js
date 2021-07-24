import { useSelector } from "react-redux";

const LoadMore = (props) => {
    const books = useSelector((state) => state); //assigning state to a variable

    if (
        //if state already has data  but there are more results to load ,display loadmore... button
        books.allBooks.books.length > 0 &&
        books.allBooks.books.length < books.allBooks.total
    ) {
        return (
        <div>
            <button
            class="ui blue button"
            onClick={(() => props.setLoading(true), props.fetchBooks)}
            style={{ marginTop: "2%", marginBottom: "2%" }}
            >
            {" "}
            Load more...
            </button>
        </div>
        );


    } else {
        //else send empty div
        return (
        <div style={{ marginTop: "2%", marginBottom: "2%" }}>
            <h1> </h1>
        </div>
        );
    }
    };

export default LoadMore;
