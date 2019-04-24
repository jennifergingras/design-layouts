import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header"
import NavTabs from "./components/navtabs";
import Albers from "./components/pages/albers";
import Brodovich from "./components/pages/brodovich";
import Constructivism from "./components/pages/constructivism";
import Destijl from "./components/pages/destijl";
import Miles from "./components/pages/miles";
import Postmodern from "./components/pages/postmodernism";
import Home from "./components/pages/home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <NavTabs />
          <Route exact path="/home" component={Home} />
          <Route exact path="/albers" component={Albers} />
          <Route exact path="/brodovich" component={Brodovich} />
          <Route exact path="/constructivism" component={Constructivism} />
          <Route exact path="/destijl" component={Destijl} />
          <Route exact path="/miles" component={Miles} />
          <Route exact path="/postmodern" component={Postmodern} />
        </div>
      </Router>
    );
  }
}

export default App;
