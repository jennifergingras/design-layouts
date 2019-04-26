import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header"
import NavTabs from "./components/navtabs";
import Tiles from "./components/pages/tiles";
import Wrap from "./components/pages/wrap";
import Overlay from "./components/pages/overlay";
import Asymmetry from "./components/pages/asymmetry";
import Postmodern from "./components/pages/postmodern";
import Side from "./components/pages/side";
import Home from "./components/pages/home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/tiles" component={Tiles} />
          <Route exact path="/wrap" component={Wrap} />
          <Route exact path="/overlay" component={Overlay} />
          <Route exact path="/asymmetry" component={Asymmetry} />
          <Route exact path="/side" component={Side} />
          <Route exact path="/postmodern" component={Postmodern} />
        </div>
      </Router>
    );
  }
}

export default App;
