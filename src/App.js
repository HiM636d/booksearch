
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import BookListing from "./containers/BookListing";
import BookDetails from "./containers/BookDetails";

function App() {
  return (
    <div className="App">
        <Router>
          
      
      

      <Switch>

      <Route path="/" exact  component={BookListing} />
      <Route path="/book/:bookId" exact  component={BookDetails} />
      <Route> 404 Not Found!</Route>
      </Switch>

        </Router>


    </div>
  );
}

export default App;
