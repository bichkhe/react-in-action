import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.scss";
import Lesson1 from "./pages/lesson1/Lesson1";
import Scrolling from "./pages/scrolling/scrolling";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/lesson1" exact component={Lesson1}></Route>
          <Route path="/scrolling" exact component={Scrolling}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
