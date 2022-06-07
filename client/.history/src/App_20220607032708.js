import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Landing} />
      </Routes>
    </Router>
  );
}

export default App;
