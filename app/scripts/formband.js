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
                  <img className="materialboxed" src="https://dl.dropbox.com/s/srvjvl892z8sklp/iOSapp.jpg?dl=0" />
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
            <div className="col s8 m8 l8 abstract">
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
            <div className="col s4 m4 l4">
              <div className="card-panel teal">
                <div className="white-text">
                  <h4 className="white-text">Team</h4>
                  <div className="card-action">
                    <div className="team">
                      <ul>
                        <li>1. Amit</li>
                        <li>2. Leixiang</li>
                        <li>3. Souranil</li>
                        <li>4. Varun</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col s12 m12 l12 part-1">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div className="intro">
                      <span className="bold">Assignment 1 - </span>
                      Visualizing sensor data for project using Processing
                    </div>
                    <div className="answer">
                      For this assignment, we connected our accelerometer (MPU-6050) with an arduino and printed the readings. We used a library for the MPU-6050 <a href="https://github.com/jrowberg/i2cdevlib/tree/master/Arduino/MPU6050" className="link white-blue">https://github.com/jrowberg/i2cdevlib/tree/master/Arduino/MPU6050</a> to convert the raw readings to meaningful data, such as x, y, and z rotation. 
                      With this data, we sent it to processing via serial port (baud rate 115200) and created a live visualization of the signal. The visualization is a simple scatterplot of the readings, where the y value is scaled to fit the window. 
                      The red line is x, green line is y, and blue line is z, and the x interval is set to be screen width / 100 (100 readings on the screen).

                      As shown below, rotating the accelerometer over x and y axes shows a corresponding affect on the 'line', created by the plotted points. We isolated the x and y line first for clarity.
                      
                    </div>

                    <p>
                      Change in X Axis
                    </p>
                    
                    <div className="wrapper">
                      <div className="videocontent">
                        <video id="my-video" className="video-js vjs-default-skin vjs-16-9" controls preload="auto" width="900" data-setup="{}">
                          <source src="https://dl.dropbox.com/s/rydh232f3itz1ww/xgraph.mp4?dl=0" type='video/mp4'/>
                        </video>
                      </div>
                    </div>
                    
                    <p>
                      Change in Y Axis
                    </p>

                    <div className="wrapper">
                      <div className="videocontent">
                        <video id="my-video" className="video-js vjs-default-skin vjs-16-9" controls preload="auto" width="900" data-setup="{}">
                          <source src="https://dl.dropbox.com/s/2033jyf5bgebp5x/ygraph.mp4?dl=0" type='video/mp4'/>
                        </video>
                      </div>
                    </div>

                    <p>
                      Below is the graph for the x, y, and z readings when moving the accelerometer.
                    </p>

                    <div className="wrapper">
                      <div className="videocontent">
                        <video id="my-video" className="video-js vjs-default-skin vjs-16-9" controls preload="auto" width="900" data-setup="{}">
                          <source src="https://dl.dropbox.com/s/vuck78ns6i4ydla/xyzgraph.mp4?dl=0" type='video/mp4'/>
                        </video>
                      </div>
                    </div>
                    
                    <br/>
                    <br/>

                    <div className="answer">
                      One of the challenges we ran into was Processing's graph being a little too slow, and causing a delay from the action to plotting on the graph. 
                      We introduced a small delay on the arduino so that Processing has more time to plot the points, but there is still a slightly noticeable delay.

                      Overall, we are able to properly show a real time visualization of the signal, which will be useful in later stages of prototyping.
                    </div> 
                    <div className="answer">
                      Source Code for Processing: 
                      
                      <p>
                        <a href="https://dl.dropbox.com/s/it472a2nwxj8gn2/accel_graph.pde?dl=0" className="link waves-effect waves-light white teal-text btn">Processing code</a>
                      </p>
                    </div>

                    <div className="answer">
                      Resources:
                      <br/>
                      <br/>
                      <a href="https://diyhacking.com/arduino-mpu-6050-imu-sensor-tutorial/" className="link">https://diyhacking.com/arduino-mpu-6050-imu-sensor-tutorial/</a>  
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