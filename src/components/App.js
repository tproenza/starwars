import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Nav from "./Nav";
import Home from "./Home";
import CategoryItems from "./CategoryItems";
import ItemDetail from "./ItemDetail";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route
                path="/category/:category"
                component={CategoryItems}
                exact
              />
              <Route
                path="/category/:category/:name/:id"
                component={ItemDetail}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
