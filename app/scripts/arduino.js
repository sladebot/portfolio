import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems } from "./data/menu_items";

export default class Arduino extends React.Component {
  render() {
    return (
      <div className="arduino-home">
        <div className="header">
          <div className="brand red-text text-darken-2"><h1> Arduino </h1></div>
          <Navbar menuItems={menuItems} location="right" textColor="red-text text-darken-2" hoverClass="hover-red" appendClasses="navbar"/>
        </div>
        <div className="container arduino-container animate fadeInUp one">
          
          <div className="row">
            <div className="col s12 m12 l12">
              
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/kfbh3srw55wbr7p/animated-leds.gif?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>            
          </div>


          <div className="row">
            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/6g3d29h9sej1b7a/single-led.jpg?dl=0" />
                  <span className="card-title red-text text-darken-2">A Single LED</span>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/jo56j615mrl8pf5/schematic.png?dl=0" />
                </div>
              </div>
            </div>

            <div className="col s12 m12 l12">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/fu9i3arh9cj97av/breadboard.png?dl=0" />
                </div>
                <div className="card-content red darken-2">
                  <span className="card-title white-text">Circuit Diagram</span>
                  <p className="white-text">A Single LED Circuit Diagram with a 100Ohm Resistor powering a LED via a 5V power.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row arduino-demos">
            <div className="col s12 m12 l12">
              <div className="card-panel red darken-2">
                <span className="white-text">"Writing in Space" with LEDs.
                </span>
              </div>
            </div>
            
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/tkbzlw6ovezhamv/led-paint-1.jpg?dl=0" />
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed image-height-limit" src="https://dl.dropbox.com/s/f7uypetdkemw8vl/led-paint-4.jpg?dl=0" />
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/x0xy3gcis6a769u/led-paint-3.jpg?dl=0" />
                </div>
              </div>
            </div>
          </div>

          

          <div className="row">
            <div className="col s12 m12 l12 arduino-conclusion">
              <div className="card-panel red darken-1">
                <span className="white-text">
                  <h4 className="white-text">Building with Arduino.</h4>
                  <article className="theory-item">
                    <div className="theory-name">
                      <span>Some more fun coming up soon ...</span>
                    </div>
                    
                  </article>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
};