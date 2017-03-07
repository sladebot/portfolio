import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems, linkItems } from "./data/menu_items";

export default class Sipper extends React.Component {
  render() {
    return (
      <div className="sketch-home">
        <div className="header">
          <div className="back"><Link to="/"><i className="material-icons medium">flip_to_back</i></Link></div>
          <div className="brand"><h1> Sipper </h1></div>
          <Navbar menuItems={menuItems} location="right" textColor="teal-text text-darken-1" hoverClass="hover-teal" appendClasses="navbar"/>
        </div>
        <div className="container sketch-container animate fadeInUp one">
          
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="pacifico">
                Why does a sipper have to be so difficult to operate ?
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m7 l7">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/k61t57eyooj48lu/sipper-concept-1.jpg?dl=0" />
                  <span className="card-title pacifico">A one handed sipper</span>
                </div>
              </div>
            </div>

            <div className="col s12 m5 abstract">
              <div className="card-panel teal">
                <span className="white-text">
                  <article>
                    <div className="intro">
                      The simplest solution to this design flaw is to enable us to operate the sipper with one hand.
                    </div>
                    <div className="question"> How ? </div>
                    <div className="answer"> A "Press To Open" design, which helps us to open the sipper by simply pressing where we hold it.</div>
                    <div className="question"> Reason ? </div>
                    <div className="">Because it's Natural ! On the theory of ecological psychology we as humans acts on affordances.
                      This design presents multiple signifiers which triggers the user to use it as intended.
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
                  <img className="materialboxed" src="https://dl.dropbox.com/s/wggtscmgo9j1hk1/sipper-action.jpg?dl=0" />
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed image-height-limit" src="https://dl.dropbox.com/s/i8mbx7kpa4f1dyu/sipper-lid.jpg?dl=0" />
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src="https://dl.dropbox.com/s/xh6b28dl3t7n18f/sipper-lid-2.jpg?dl=0" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6 affordance-items">
              <div className="card-panel teal">
                <h4 className="white-text">Affordances</h4>
                <ul className="collection with-header">
                  <li className="collection-item"><span className="affordance-item-header">Hold</span> - The middle grip clearly provides an affordance which allows users to hold it.</li>
                  <li className="collection-item"><span className="affordance-item-header">Press</span> - The big "PRESS" text indicates an action of pressing that part of the sipper.</li>
                  <li className="collection-item"><span className="affordance-item-header">Lock</span> - A Lock button makes it easy for the user to understand that the PUSH TO OPEN feature can be locked up.</li>
                  <li className="collection-item"><span className="affordance-item-header">Analyze LEDs</span>- There are LED indicators which show amount of water intake pending. This can be set via an app, but this affordances trigger the user's thoughts which leads him to check out the app.</li>
                  <li className="collection-item"><span className="affordance-item-header">Connect</span> - The buttons on the lids with Bluetooth/NFC icons makes it clear that they can be connected.</li>
                </ul>
              </div>
            </div>
            
            <div className="col s12 m6 l6 signifiers-items">
              <div className="card-panel teal">
                <h4 className="white-text">Signifiers</h4>
                <ul className="collection with-header">
                  <li className="collection-item"><span className="signifier-item-header">PRESS Text</span> - The big "PRESS" text wrapper around the sipper acts as a signifier which leads people to actually press it.</li>
                  <li className="collection-item"><span className="signifier-item-header">LOCK button with indicators</span> - The lock/unlock button with text is pretty self explanatory which signifies that the "PRESS TO OPEN" feature can be locked.</li>
                  <li className="collection-item"><span className="signifier-item-header">Wrap-around LEDs</span>- The wrap around LEDs show how much % water intake is remaining, it's a wrap around so that it's visible from any angle while holding with one hand.</li>
                  <li className="collection-item"><span className="signifier-item-header">Bluetooth & NFC buttons</span> - Dedicated buttons for Bluetooth & NFC makes it clear for the user that it can be connected.</li>
                  <li className="collection-item"><span className="signifier-item-header">Mouth colour</span> - When OPEN the mouth of the sipper color changes.</li>
                  <li className="collection-item"><span className="signifier-item-header">External Feedback</span> - This can be connected to fitbit/Apple Watch and provide feedback on water intake status there.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12 theories">
              <div className="card-panel teal">
                <span className="white-text">
                  <h4 className="white-text">Theories I considered.</h4>
                  <article className="theory-item">
                    <div className="theory-name">
                      <span>Ecological Psychology</span>
                    </div>
                    <div className="theory-explanation">
                      As mentioned earlier we as humans majorly act on observing actionable items, after chalking out a mental plan and course of action. This design provides multiple
                      signifiers to help the users use it intuitively.
                    </div>
                  </article>
                  <article className="theory-item">
                    <div className="theory-name">
                      <span>Into The Wild Theory</span>
                    </div>
                    <div className="theory-explanation">
                      People generally donot know what they want or rather what is best for them. This is majorly because they're used to doing things in a rigid way 
                      for a long time. The <span className="chip white-text small pink lighten-1">Into the Wild Theory</span> takes a different step from <span className="chip white-text small pink lighten-1">User Centered Design</span> and helps put 
                      new designs and interactions to them and then iterate based on feedback.
                    </div>
                  </article>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12 theories">
              <div className="card-panel teal">
                <span className="white-text">
                  <h4 className="white-text">Testing the design.</h4>
                  <article className="theory-item">
                    <div className="theory-name">
                      <span>Into The Wild</span>
                    </div>
                    <div className="theory-explanation">
                      Inspired by the Into the Wild theory I would get this tested from different sets of people, for instance, from athletes, students etc. who use 
                      this everyday and do a field study for their feedback. Based on the feedback I would consider iterating depending on the value the next iteration brings on the table.
                    </div>
                    <div className="theory-explanation">
                      Additionally, I would consider it to be a successful design if the feedback I get from multiple sources and field studies shows that people
                      feel that this really helps them and they consider actually moving to this from the conventional design. It is defnitely hard for getting people 
                      to adopt new things but then again if there is value it might be adopted much faster. On the contrary, in case of a less positive feedback, I would
                      use those feedback to analyze the problems again and restart the process of designing a simpler and sensible sipper.
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