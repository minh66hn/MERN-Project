import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
Landing
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={landing} />
      </Switch>
    </Router>
  );
}

export default App;
