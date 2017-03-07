import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems, linkItems } from "./data/menu_items";

export default class FormBand extends React.Component {
  render() {
    return (
      <div className="sketch-home">
        <div className="header">
          <div className="back"><Link to="/"><i className="material-icons medium">flip_to_back</i></Link></div>
          <div className="brand"><h1> formBand </h1></div>
          <Navbar menuItems={menuItems} location="right" textColor="teal-text text-darken-1" hoverClass="hover-teal" appendClasses="navbar"/>
        </div>
        <div className="container sketch-container animate fadeInUp one">
          
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="pacifico">
                Why can't your fitness band tell you if you are working out right ?
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/3mmh6gpytewpape/iOSapp.png?dl=0" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s6 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/9xsuux2bidjtvzp/formband_1.JPG?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>

            <div className="col s6 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/tl2a1hdp887nc1k/formband_2.JPG?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
            
            <div className="col s6 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/lviz8hvp9ojq913/formband_3.JPG?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>

            <div className="col s6 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/jnhwdlg6dudggvb/formband_4.JPG?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12 abstract">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div className="intro">
                      <span className="bold">Problem - </span>
                      Exercise products these days do not provide the user with enough feedback.
                    </div>
                    <div className="question"> <span className="bold">Solution :</span></div>
                    <div className="answer"> Current exercise products (Move, fitbit, Apple Watch) dutifully track things like calories spent, 
                      duration of exercise and heart rate. While these data are definitely important, they do not fully quantify the success of a workout. 
                      These types of statistics can tell a user if they have been improving their stamina; however, they cannot provide feedback on technique. 
                      In most sports or workouts, technique is critical and bad technique can lead to decreased performance and even injury.
                       As such, we propose a fitness product that is trained to identify whether an exercise is done correctly or not. 
                       Some such trainable exercises can be workouts like pushups or burpees as well as more complex movements like tennis strokes
                        (forehand, backhand) and boxing punches (jab, cross, hook, uppercut). We propose these exercises as options, we hope to implement a subset of these examples.
                    </div>
                    <div className="answer">
                      Our implementation of this solution is an iOT armband named formBand that comprises of a small microcontroller (arduino or rpi) that relays accel/sensor data to the iOS device. 
                      The iOS device analyses the sensor data and classifies the movement as good form or bad form. If the form is bad, the user can be notified via a vibration through the formBand that their last repetition was not up to scratch.
                       By trial and error, or by instruction, this conditioning will teach the user how to keep their form consistent through the workout. Apart from that there will be a companion app for getting workout / sports statistics along with feedbacks.
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