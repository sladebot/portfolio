import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems } from "./data/menu_items";

export default class Cad extends React.Component {
  render() {
    return (
      <div className="sketch-home">
        <div className="header">
          <div className="back"><Link to="/"><i className="material-icons medium">flip_to_back</i></Link></div>
          <div className="brand"><h1> C.A.D </h1></div>
          <Navbar menuItems={menuItems} location="right" textColor="teal-text text-darken-1" hoverClass="hover-teal" appendClasses="navbar"/>
        </div>
        <div className="container sketch-container animate fadeInUp one">
          
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="pacifico">
                Computer Aided Design of a Computer Mouse
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m7 l7">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/9q7nfhg29qnncc9/mouse-cad-1.png?dl=0" />
                  <span className="card-title pacifico">A FreeCAD design of the Computer Mouse</span>
                </div>
              </div>
            </div>

            <div className="col s12 m5 abstract">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div className="intro">
                      The 2D as well as the 3D design of the model was made in <span className="bold">FreeCAD</span> and then exported into <span className="bold">Autodesk 3DS Max</span> for rendering. <span className="bold">V-Ray</span> was used for the lights and materials.
                    </div>
                    
                  </article>
                </span>
              </div>
            </div>
          </div>

          <div className="row sipper-demos">
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/plzhgkcqenk91mp/mouse-hd-1.png?dl=0" />
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/3cw119ckh8yd7cx/mouse-hd-2.png?dl=0" />
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/ysvw782qtnpkwi0/mouse-hd-4.png?dl=0" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12 theories">
              <div className="card-panel teal">
                <span className="white-text">
                  <h4 className="white-text">Methods I used.</h4>
                  <article className="theory-item">
                    <div className="theory-name">
                      <span className="chip white-text small pink lighten-1">FreeCAD</span>
                    </div>
                    <div className="theory-explanation">
                      Started with the basic side view of the mouse, after that was done and constrained made that into a pad and then extruded the same.
                      Got the basic shape out of that, then did boolean operations for grooves for the mouse wheel and its axes. Along with that also have 
                      an overlapping layer for the curved surface for representing mouse buttons etc. Exported the model to STL for rendering in 3DS Max.
                    </div>
                  </article>
                  <article className="theory-item">
                    <div className="theory-name">
                      <span className="chip white-text small pink lighten-1">3DS Max</span>
                    </div>
                    <div className="theory-explanation">
                      Imported the stl file and started orienting the models ( imported mouse wheel and body separately for materials ) and then added V-Ray materials 
                      to both. Apart from that added a plane for a nice light effect. Added V-Ray lights to light up the scene properly and rendered across various angles
                      using V-Ray Ray tracing.
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