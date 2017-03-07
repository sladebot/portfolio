import React from "react";
import * as ReactDOM from "react-dom";
import * as _ from 'lodash';
import { Router, Route, Link } from 'react-router';


export default class Navbar extends React.Component {
  getTextColor() {
    return this.props.textColor ? this.props.textColor : "grey-text text-lighten-5";
  }

  getHoverClass() {
    return this.props.hoverClass ? this.props.hoverClass : "hover-white";
  }

  render() {
    return (
       <nav className={"transparent z-depth-0 " + this.props.appendClasses}>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className={this.props.location + " hide-on-med-and-down scale-transition nav-item "}>
            {_.map(this.props.menuItems, menuItem => (
              <li key={menuItem.name}>
                <Link to={menuItem.link} className={this.getTextColor() + " " + this.getHoverClass()}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="right icon-items">
            {_.map(this.props.linkItems, linkItem => (
              <li>
                <a href={linkItem.link}>
                  <i className={"mdi mdi-" + linkItem.icon + " mdi-light mdi-36px"}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>       
    )
  }
}