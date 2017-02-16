import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from "./home";
import Resume from "./resume";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Sipper from "./sipper";
import Arduino from "./arduino";
import Fabrication from "./fabrication";

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/about" component={Contact}/>
    <Route path="/sipper" component={Sipper}/>
    <Route path="/arduino" component={Arduino}/>
    <Route path="/fabrication" component={Fabrication}/>
  </Router>,
  document.getElementById('app'));