import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
function App() {
  return (<div>

    <Router>
      <Switch>
        <Route exact path="/" element={Landing} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
