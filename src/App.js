import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Adduser from "./Comp/Adduser";
import Edituser from "./Comp/Edituser";
import Home from "./Comp/Home";

function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route exact path="/Add" component={Adduser} />
          <Route exact path="/Edit/:id" component={Edituser} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
