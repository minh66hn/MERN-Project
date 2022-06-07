import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
