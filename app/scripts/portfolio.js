import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems, linkItems } from "./data/menu_items";

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar menuItems={menuItems} location="left" linkItems={linkItems}/>
        <div className="container portfolio-container">
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="portfolio-header animate fadeInUp one">
                <h2>
                  Projects
                </h2>
              </div>
            </div>

            <div className="col s12 m4 l4">
              <div className="card animate fadeInUp one">
                <div className="card-image">
                  <img className="img-height-limit" src="https://dl.dropbox.com/s/x0tbcarvbli9btf/3d-printed-mouse-1.jpg?dl=0"/>
                  <span className="card-title">
                    <Link to="/cad" className="white-text">
                      3D  Fabrication
                    </Link>
                  </span>
                  <Link to="/cad" className="btn-floating halfway-fab waves-effect waves-light teal">
                    <i className="material-icons">arrow_forward</i>
                  </Link>
                </div>
                <div className="card-content">
                  <div className="card-content-text">
                    <p>Some 3D CAD design and fabrication</p>
                  </div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/cad">#cad</a></div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/design">#design</a></div>
                </div>
              </div>
            </div>

            <div className="col s12 m4 l4">
              <div className="card animate fadeInUp one">
                <div className="card-image">
                  <img className="img-height-limit" src="https://dl.dropbox.com/s/4anzwjq76989hl4/fabrication-box1.jpeg?dl=0"/>
                  <span className="card-title">
                    <Link to="/fabrication" className="white-text">
                      2D Fabrication
                    </Link>
                  </span>
                  <Link to="/fabrication" className="btn-floating halfway-fab waves-effect waves-light teal">
                    <i className="material-icons">arrow_forward</i>
                  </Link>
                </div>
                <div className="card-content">
                  <div className="card-content-text">
                    <p>Some 2D fabrication and fun with designing stuff !</p>
                  </div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/fabricaiton">#arduino</a></div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/design">#design</a></div>
                </div>
              </div>
            </div>


            <div className="col s12 m4 l4">
              <div className="card animate fadeInUp one">
                <div className="card-image">
                  <img className="img-height-limit" src="https://dl.dropbox.com/s/k61t57eyooj48lu/sipper-concept-1.jpg?dl=0"/>
                  <span className="card-title">
                    <Link to="/sipper" className="white-text">
                      A Sensible Sipper
                    </Link>
                  </span>
                  <Link to="/sipper" className="btn-floating halfway-fab waves-effect waves-light teal">
                    <i className="material-icons">arrow_forward</i>
                  </Link>
                </div>
                <div className="card-content">
                  <div className="card-content-text">
                    <p>A one handed sipper, because it makes sense !</p>
                  </div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/designFlaws">#designFlaws</a></div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/simplicity">#simplicity</a></div>
                </div>
              </div>
            </div>


            <div className="col s12 m4 l4">
              <div className="card animate fadeInUp one">
                <div className="card-image">
                  <img className="img-height-limit" src="https://dl.dropbox.com/s/kfbh3srw55wbr7p/animated-leds.gif?dl=0"/>
                  <span className="card-title">
                    <Link to="/arduino" className="white-text">
                      Arduino
                    </Link>
                  </span>
                  <Link to="/arduino" className="btn-floating halfway-fab waves-effect waves-light teal">
                    <i className="material-icons">arrow_forward</i>
                  </Link>
                </div>
                <div className="card-content">
                  <div className="card-content-text">
                    <p>Some fun with LEDs, patterns and light painting with Arduino Uno !</p>
                  </div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/designFlaws">#arduino</a></div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/simplicity">#design</a></div>
                </div>
              </div>
            </div>


            <div className="col s12 m4 l4">
              <div className="card animate fadeInUp two">
                <div className="card-image card-height-limit">
                  <img src="https://dl.dropbox.com/s/uks95cgkdfg3s5z/bq.jpg?dl=0"/>
                  <span className="card-title blue-text text-darken-3"><a href="http://www.bloombergquint.com">BloombergQuint</a></span>
                  <a href="http://www.bloombergquint.com" className="btn-floating halfway-fab waves-effect waves-light teal">
                    <i className="material-icons">arrow_forward</i>
                  </a>
                </div>
                <div className="card-content">
                  <div className="card-content-text">
                    <p>A Rails app on top of a SaaS platform <a href="https://twitter.com/quintype_inc">@Quintype</a> written in Clojure.</p>
                  </div>
                  <div className="chip"><a href="https://twitter.com/hashtag/pubTech">#pubTech</a></div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/technology">#technology</a></div>
                </div>
              </div>
            </div>
            

            <div className="col s12 m4 l4">
              <div className="card animate fadeInUp three">
                <div className="card-image card-height-limit">
                  <img src="https://dl.dropbox.com/s/iezbdrz8xwultq0/ubs.jpg?dl=0"/>
                  <span className="card-title blue-text text-darken-3"><a href="https://uberstudies.com">UberStudies</a></span>
                  <a href="http://uberstudies.com" className="btn-floating halfway-fab waves-effect waves-light teal">
                    <i className="material-icons">arrow_forward</i>
                  </a>
                </div>
                <div className="card-content">
                  <div className="card-content-text">
                    <p> Online peer to peer live tutoring from the right people at the right time.</p>
                  </div>
                  <div className="chip"><a href="https://twitter.com/hashtag/edTech">#edTech</a></div>
                  <div className="chip"><a href="https://www.twitter.com/hashtag/live">#live</a></div>
                </div>
              </div>
            </div>


          </div>
        </div>
              
      </div>
    )
  }
};