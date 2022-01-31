import { BrowserRouter as Router,
   Route, 
   Switch } from "react-router-dom";
import Home from '../src/components/Home/Home';
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Foods from "./components/Foods/Foods";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/foods">
          <Foods/>
        </Route>
        <Route path="/food-details/:id">
          <FoodDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
