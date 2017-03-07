import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems, linkItems } from "./data/menu_items";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar menuItems={menuItems} location="left"/>
        <div className="container contact">
          <div className="row">
            <div className="col s12 m2 l2">
            </div>
            <div className="col s12 m8 l8">
              <div className="card transparent z-depth-0">
                <div className="card-content white-text">
                  <span className="card-title pacifico">Impact needs a Hacker Mindset</span>
                  <p>Souranil Sen</p>
                  <p>Graduate Student @ StonyBrook University</p>
                  <a href="https://github.com/sladebot"><i className="mdi mdi-github-box mdi-light mdi-36px"></i></a>
                  <a href="https://www.linkedin.com/in/souranil"><i className="mdi mdi-linkedin-box mdi-light mdi-36px"></i></a>
                  <a href="https://facebook.com/souranil"><i className="mdi mdi-facebook-box mdi-light mdi-36px"></i></a>
                  <a href="https://twitter.com/souranil"><i className="mdi mdi-twitter-box mdi-light mdi-36px"></i></a>
                </div>
              </div>
            </div>
            <div className="col s12 m2 l2">
            </div>
          </div>
        </div>
      </div>
    )
  }
};