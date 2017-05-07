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
                    <div>
                      <h4 className="white-text">User Study</h4>
                    </div>
                    <div className="answer">
                      <h6 className="user-study--header">Research Question</h6>
                      <div>
                        Does FormBand help people do exercises more correctly?
                      </div>
                      <h6 className="user-study--header">Independent Variables</h6>
                      <div>
                        <ul>
                          <li>
                            1. Show/Not show participants that the number of correct exercises they perform
                          </li>
                          <li>
                            2. Participant Gender
                          </li>
                          <li>
                            3. The type of exercise
                          </li>
                        </ul>
                      </div>
                      <h6 className="user-study--header">Dependent Variables</h6>
                      <div>
                        <ul>
                          <li>1. How accurate participants perform a type of exercise</li>
                          <li>2. The time it takes to complete one exercise</li>
                          <li>3. The time it takes to complete a set of exercises</li>
                        </ul>
                      </div>
                      <h6 className="user-study--header">Control Variables</h6>
                      <div>
                        <ul>
                          <li>1. Standard procedure to do a good exercise</li>
                          <li>2. iOS app interface</li>
                          <li>3. Wrist band location</li>
                        </ul>
                      </div>
                      <h6 className="user-study--header">Random Variables</h6>
                      <div>
                        <ul>
                          <li>1. Prior experience doing exercises</li>
                          <li>2. Prior experience of using other exercise IT equipment.</li>
                          <li>3. Willingness to do exercises</li>
                        </ul>
                      </div>
                      <h6 className="user-study--header">Experimental</h6>
                      <div>
                        For our project feedback is a critical element towards the goal of formband which is to help people achieve better quality workouts. 
                        So we have thought to design our primary User Study around that. We will have a group of people wearing the formband and performing workouts
                        with feedback provided by formband and a group of people who will do exactly the same but without the feedbacks. After that we will compare
                        the data for both the groups and check if feedbacks actually helped.
                      </div>
                      <h6 className="user-study--header">Participants</h6>
                      <div>
                        CSE592 HCI students and professor.
                      </div>
                      <div className="row">
                        <div className="col s12 m12 l12 user-study--results">
                          <div className="results">
                            <p>
                              One of our hypothesis was that feedback would help the user perform more correct jabs. 
                              For the first test we collected 8 samples of jabs done with feedback and 7 samples of jabs done without feedback. Each sample was the number of correct jabs done out of 10.
	                            This test yields a t-value of 2.16 (13 degrees of freedom). After computing the t-score using our mean and variance we yielded 0.4026511258. This means we are forced to accept the null hypothesis which states that feedback did not create tangible improvement in correct jabs. This is not the ideal result.
                            </p>

                          </div>
                        </div>
                        <div className="col s12 m12 l12 usr-study--experimental">
                          <div className="card">
                            <div className="card-image">
                              <img className="materialboxed" src="https://dl.dropbox.com/s/nn9sr5ulvg4o272/user-analysis-1.png?dl=0" />
                              <span className="card-title pacifico"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="answer">
                      <h6 className="user-study--header white-text">Correlational</h6>
                      <div>
                        Well this was an interesting idea that spawned up our minds, what if feedbacks by the formband also acts as an indicator to the person
                        doing well and that motivates them to actually workout more. We can also observe the amount of workout done by the group with and without
                        feedbacks and what is the difference between the amount of workouts done. This is also biased by the fact that each person have their own 
                        limits for workouts.
                      </div>
                      <div className="results">
                        After doing the user study and survey we found actually the feedbacks help people be consious about doing the right workouts. It also helps 
                        motivate few people to do it correctly for most of the users while a few users were neutral to it. One valuable suggestion was not to give
                        visual feedback but some feedback like vibration on the band itself so that the user doesn't have to look at the app itself.
                      </div>
                    </div>
                    <div className="answer">
                      <h6 className="user-study--header white-text">Demographics</h6>
                      <div>
                        A user study can also be designed for formband around gender. We will have groups of different genders and further divide them into two groups, 
                        one with feedback and the later without it. We then get 4 groups with different combinations of gender and feedbacks to run our study on. 
                        Additionally the user group under study will be in a fixed age (20-30) range which will act as a control variable.
                      </div>
                      <h6 className="user-study--header white-text">Results</h6>
                      <div className="row">
                        <div className="col s12 m12 l12 usr-study--experimental">
                          <div className="results">
                            <p>
                              The second hypothesis was that males and female’s should both benefit equally from FormBand.
                              For this test we collected 4 samples from men and 4 from women. Each sample was the number of correct jabs done out of 10 with feedback.
                              The mean of doing correct # of jabs is 7.5 with standard deviation 1 for male and 7 with standard deviation 0.8165 for females.
                              This test yields a t-value of 2.45 (6 degrees of freedom). After computing the t-score using our mean and variance we yielded 0.774. This means that our hypothesis that men and women receive the same benefit was correct.
                              This is a good result.
                            </p>
                          </div>

                          <div className="card">
                            <div className="card-image">
                              <img className="materialboxed" src="https://dl.dropbox.com/s/wmrmjf8iukko4x3/user-analysis-2.png?dl=0" />
                              <span className="card-title pacifico"></span>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m12 l12 usr-study--experimental">
                          <div className="card">
                            <div className="card-image">
                              <img className="materialboxed" src="https://dl.dropbox.com/s/wb0fef5n4k5x0d0/chart.png?dl=0" />
                              <span className="card-title pacifico"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="answer">
                      <h6 className="user-study--header white-text">Questionnaires / Poll</h6>
                      <div>
                        For formband a simple Yes/No poll based questionnaire can be used for getting an idea how the people think this might help
                        them even before using it, just because of the fact that people think first how it might help them and then go and use / buy
                        something like this. This data can also be easily sliced by demographics, age group, gender etc. This can also give us enough 
                        information as to where can formband fit in more and why people that this might not work and thus use these information to 
                        make it better.
                      </div>
                      <div className="row">
                        <div className="col s12 m12 l12 user-study--results">
                          <div className="results">
                            We did a survey on few users on what they think about this idea and their views on such a product. We found some interesting insights
                            from it -  

                          </div>
                        </div>
                        <div className="col s6 m6 l6 usr-study--experimental">
                          <div className="card">
                            <div className="card-image">
                              <img className="materialboxed" src="https://dl.dropbox.com/s/cij50r0fvxgld4m/user-survey-1.png?dl=0" />
                              <span className="card-title pacifico"></span>
                            </div>
                          </div>
                        </div>
                        <div className="col s6 m6 l6 usr-study--experimental">
                          <div className="card">
                            <div className="card-image">
                              <img className="materialboxed" src="https://dl.dropbox.com/s/n309kpge04r1di8/user-survey-2.png?dl=0" />
                              <span className="card-title pacifico"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s6 m6 l6 usr-study--experimental">
                          <div className="card">
                            <div className="card-image">
                              <img className="materialboxed" src="https://dl.dropbox.com/s/8jyh04uhgs0qoxi/user-survey-3.png?dl=0" />
                              <span className="card-title pacifico"></span>
                            </div>
                          </div>
                        </div>
                        <div className="col s6 m6 l6 usr-study--experimental">
                          <div className="card">
                            <div className="card-image">
                              <img className="materialboxed" src="https://dl.dropbox.com/s/2tryldk5ztu5h0e/user-survey-4.png?dl=0" />
                              <span className="card-title pacifico"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="disclaimer white-text">
                      <h6>Disclaimer :</h6>
                      <div>
                        These tests will be carried out in the same environment with similar test conditions. There may be independent variables like some people
                        might have prior experience with the workouts and might perform comparatively better even without feedbacks.
                      </div>

                    </div>

                  </article>
                </span>
              </div>
            </div>


            <div className="col s12 m12 l12 part-1">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div>
                      <h4 className="white-text">Machine Learning, 3D fabricated case & communicating with the pi with the App</h4>
                    </div>
                    <div className="answer">
                      We used an ad-hoc network to communicate between the phone and raspberry pi for simplicity. The raspberry pi will listen to a specific port for connections. 
                      When the user initiates a specific workout through the app, a message is sent to the raspberry pi and it will record data for that workout. 
                      All machine learning and data filtering is done on the pi, and the pi will give periodically send feedback to the phone about the workout. 
                      This feedback can vary with exercise but will give an indication of how well the user is performing the exercise. This feedback is displayed on the phone and the connection is terminated when the user presses the "Stop" button on the app.
                      The communication protocol with the pi is completed, and we are working on analyzing the data from our accelerometer sensor. 
                      Currently, the data being sent is accelerometer data, which is plotted on the phone. This visualization will help us in the development process to analyze the data and make models. 
                      In the video, the x_rotation data is being sent to the phone which is useful in classifying pushups, because the sensor is moved on this axis during the exercise. 
                      The demo shows that rotating the sensor on the x axis produces measurable readings while rotating on other axis' do not really affect the x_rotation data, which is expected. 
                      By isolating certain readings we get from the accelerometer + gyro, we can make reliable models to detect different exercises.
                    </div>
                    <div className="results">
                      We used Multi Variate Dynamic Time Warping with some training data and trained a model for matching the sampled data coming from the user's workouts. We trained with 
                      good jabs, bad jabs and also with data for doing nothing or standing still and some datasets of starting position for jabs. This helped us get better ratings for getting 
                      good jabs from the algorithm.
                    </div>
                    <div className="wrapper">
                      <div className="videocontent">
                        <video id="my-video" className="video-js vjs-default-skin vjs-16-9" controls preload="auto" width="900" data-setup="{}">
                          <source src="https://dl.dropbox.com/s/jqkywv8aibjqfp2/formband-vid-02.mov?dl=0" type='video/mp4'/>
                        </video>
                      </div>
                    </div>
                  </article>
                </span>
              </div>
            </div>

            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/75cb6b9vi2c4vh8/form-band-01.jpg?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/0qlzxd85pgqjmie/form-band-02.jpg?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/jw779m0ya2efjur/form-band-03.jpg?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>


            <div className="col s12 m12 l12 part-1">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div>
                      <h4 className="white-text">Physical Prototype & Data analysis</h4>
                    </div>
                    <div className="answer">
                      To make the prototyping easier, we wanted to ditch the breadboard to wire the accelerometer and place the 
                      accelerometer directly on the GPIO pins of the raspberry pi. Specifically, we wanted to place the accelerometer 
                      on physical pins 4,6,8,10 since 4 and 6 are already power and ground, so the only change would involve 8 and 10 
                      becoming SDA and SCL. Reconfiguring the GPIO requires recompiling a config file, so we followed 
                      <u><a href="https://www.raspberrypi.org/documentation/configuration/pin-configuration.md"> this </a></u> tutorial. 
                      However, even after making the desired changes and recompiling, the raspberry pi seems to still use the default 
                      configuration. We are still working on this issue, experimenting with changing different GPIO pins.
                    </div>
                    <div className="answer">
                      Apart from that we have accumulated the gyroscope and accelerometer data and working on a classifier which should 
                      be able to detect the workouts.
                    </div>
                  </article>
                </span>
              </div>
            </div>
            {/*<div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed limit-height" src="https://dl.dropbox.com/s/pfqgbde9or1qef8/IMG_1800.jpg?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/ee2hw7lpte1r5fo/IMG_1801.jpg?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/z1sywjgh3ymc59x/IMG_1802.jpg?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>*/}
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed limit-height" src="https://dl.dropbox.com/s/wg8wldkxi38k418/proto-1.png?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed limit-height" src="https://dl.dropbox.com/s/yqyqjojiq9tnbpn/proto-2.png?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/s4j9i8cc2xylw7c/proto-3.png?dl=0" />
                  <span className="card-title pacifico"></span>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col s12 m12 l12 part-1">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div>
                      <h4 className="white-text">Sensor data in mobile app</h4>
                    </div>
                    <div className="answer">
                      For this part we are sending the data to an iOS mobile app which is then changing the values of three sliders based on the accelerometer(MPU-6050) readings sent by the raspberry pi zero.
                      We also calculated the ranges for the accelerometer data, gyro rotations etc. and are currently using only accelerometer data for the app. We plan to filter the data more and 
                      calibrate the data flow more to optimize visualizing it on the app.
                    </div>

                    <p>
                      Here's a sneak peak of how sensor readings are being reflected in the app - 
                    </p>
                    
                    <div className="wrapper">
                      <div className="videocontent">
                        <video id="my-video" className="video-js vjs-default-skin vjs-16-9" controls preload="auto" width="900" data-setup="{}">
                          <source src="https://dl.dropbox.com/s/cp8p4crni61j91s/accelerometer.mp4?dl=0" type='video/mp4'/>
                        </video>
                      </div>
                    </div>
                  </article>
                </span>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col s12 m12 l12 part-1">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div>
                      <h4 className="white-text">Visualizing sensor data for project using Processing</h4>
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