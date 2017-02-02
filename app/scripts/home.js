import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems } from "./data/menu_items";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar menuItems={menuItems} location="left"/>
        <div className="content">
          <h2 className="mantra animate fadeInUp one">
            Hello ! My name is Souranil <a href="https://github.com/sladebot" className="twitter-handle">@sladebot </a>. I am a developer and a design enthuasiast.
            My passion for computers and design led me to <span className="university">Stony Brook University</span> as a Graduate Student.
          </h2>
        </div>
      </div>
    )
  }
};