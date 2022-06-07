import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./view/Auth";
function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Landing />
    //     </Route>
    //     <Route
    //       exact
    //       path="/login"
    //       render={(props) => <Auth {...props} authRoute="login" />}
    //     ></Route>
    //     <Route
    //       exact
    //       path="/register"
    //       render={(props) => <Auth {...props} authRoute="register" />}
    //     ></Route>
    //   </Switch>
    // </Router>
    <Router>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route
							exact
							path='/login'
							render={props => <Auth {...props} authRoute='login' />}
						/>
						<Route
							exact
							path='/register'
							render={props => <Auth {...props} authRoute='register' />}
						/>
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/about' component={About} />
					</Switch>
				</Router>
  );
}

export default App;
