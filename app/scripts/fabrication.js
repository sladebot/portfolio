import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems } from "./data/menu_items";

export default class Fabrication extends React.Component {
  componentDidMount() {
    console.log("Mounted;");
      $('.slider').slider();
  }


  render() {
    return (
      <div className="arduino-home">
        <div className="header">
          <div className="brand green-text text-darken-2"><h1> Fabrication </h1></div>
          <Navbar menuItems={menuItems} location="right" textColor="green-text text-darken-2" hoverClass="hover-green" appendClasses="navbar"/>
        </div>
        <div className="container arduino-container animate fadeInUp one">
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/w8yeyf9jgresb85/fabrication-box7.jpeg?dl=0" height="600px" />  
                </div>
                <div className="card-content">
                  <span className="card-title green-text text-darken-2 pacifico">Arduino Uno enclosure fabrication with acrylic</span>
                </div>
              </div>
            </div>            
          </div>

          <div className="row">
            <div className="col s12 m12 l12">
                <div className="credits">Partnered with - Amit Bapat</div>
                <a className="external-link" href="http://abapat.github.io/cse592.html">Find More</a>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/4anzwjq76989hl4/fabrication-box1.jpeg?dl=0" />
                </div>
              </div>
            </div>

            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/1u6740o8bvfo8ty/fabrication-box5.jpeg?dl=0" />
                </div>
              </div>
            </div>

            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/uvv6y6kglxq6hsy/fabrication-box2.jpeg?dl=0" />
                </div>
              </div>
            </div>

            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/emuh416pgdgdck9/fabrication-box3.jpeg?dl=0" />
                </div>
              </div>
            </div>

            
          </div>






          
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/6egla0cp1zjwe3v/fabrication.jpg?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>            
          </div>

          


          <div className="row">
            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/cwdb2p27a55jncz/fab-design.png?dl=0" />
                  <span className="card-title green-text text-darken-2">InkScape 2D design</span>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/gxb2brhmoqzzqbm/fab-3d.png?dl=0" />
                </div>
              </div>
            </div>

            <div className="col s12 m12 l12">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/ncddcw6vto1ijlf/fab-parts.png?dl=0" />
                </div>
                <div className="card-content green darken-2">
                  <span className="card-title white-text">Stacked Arduino enclosure parts</span>
                  <p className="white-text">These were designed and stacked by choice to reduce wastage of materials and reducing laser tip movement.</p>
                  <div className="file-download">
                    <a href="https://dl.dropbox.com/s/d0e2mx0heinbk3g/Arduino%20Box.svg?dl=0" className="waves-effect waves-light btn white green-text text-darken-2"><i className="material-icons right">system_update_alt</i>InkScape file</a>
                    <a href="https://dl.dropbox.com/s/yodydq62aw9w2h8/arduino-enclosure.FCStd?dl=0" className="waves-effect waves-light btn white green-text text-darken-2"><i className="material-icons right">system_update_alt</i>FreeCAD file</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
};