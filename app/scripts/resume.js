import React from 'react';
import * as _ from 'lodash';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Navbar from "./navbar";
import { menuItems, linkItems, resumeLinkItems } from "./data/menu_items";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume-home">
        <div className="header">
          <div className="back"><Link to="/"><i className="material-icons medium">flip_to_back</i></Link></div>
          <Navbar menuItems={menuItems} location="right" textColor="light-blue-text text-darken-1" hoverClass="hover-light-blue" appendClasses="navbar"/>
        </div>
        <div className="container resume-container animate fadeInUp one">
          <div className="row">
            <div className="col s12 m6 l6 intro">
              <div className="row">
                <div className="name col s12 m12 l12">
                  <span>Souranil</span>
                  <span>Sen</span>
                </div>
                <div className="col s12 m12 l12">
                  <nav className="transparent z-depth-0 navbar">
                    <div className="nav-wrapper">
                      <ul className="resume-link-items nav-item">
                        {_.map(resumeLinkItems, resumeLinkItem => (
                          <li key={resumeLinkItem.link}>
                            <a href={resumeLinkItem.link}>
                              <i className={"mdi mdi-" + resumeLinkItem.icon + " mdi-dark mdi-36px"}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="description col s12 m12 l12">
                  <div className="white">
                    <div className="black-text text-darken-1">
                      I’m a Fullstack Developer with a craving for scalable systems and data analytics. 
                      I build resilient web-products, and love solving programming problems. 
                      I code in ruby, nodejs and now getting my hands dirty on Clojure and Elixir.
                    </div>
                  </div>
                </div>
                
                <div className="links col s12 m12 l12">
                  <a href="http://www.sladebot.com">http://www.sladebot.com</a>
                  <a href={"mailto:souranil@gmail.com"}>souranil@gmail.com</a>
                  <a href={"tel:+1-631-452-6565"}>+1-631-452-6565</a>
                </div>
                <div className="skills col s12 m12 l12">
                  <h2 className="light-blue-text text-darken-3">Skills</h2>
                  <div className="row">
                    <div className="col s12 m6 l6">
                      <div className="card-panel white">
                        <div className="black-text text-darken-1">
                          <h6 className="light-blue-text text-darken-1">Programming</h6>
                          <ul>
                            <li className="skill-element">Ruby</li>
                            <li className="skill-element">Javascript</li>
                            <li className="skill-element">Node.js</li>
                            <li className="skill-element">Clojure</li>
                            <li className="skill-element">React.js</li>
                            <li className="skill-element">HTML & CSS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6 l6">
                      <div className="card-panel white">
                        <div>
                          <h6 className="light-blue-text text-darken-1">Tools</h6>
                          <ul>
                            <li className="skill-element">Docker</li>
                            <li className="skill-element">Kubernetes</li>
                            <li className="skill-element">Ansible</li>
                            <li className="skill-element">Shell</li>
                            <li className="skill-element">Amazon Web Services</li>
                            <li className="skill-element">Redis, PostgreSQL</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6 l6">
                      <div className="card-panel white">
                        <div className="">
                          <h6 className="light-blue-text text-darken-1">Research</h6>
                          <ul>
                            <li className="skill-element">Sentiment Analysis</li>
                            <li className="skill-element">Concurrency</li>
                            <li className="skill-element">Compettitive Analysis</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6 l6">
                      <div className="card-panel white">
                        <div className="">
                          <h6 className="light-blue-text text-darken-1">Methodologies</h6>
                          <ul>
                            <li className="skill-element">Agile Methodologies</li>
                            <li className="skill-element">Kanban</li>
                            <li className="skill-element">Test Driven Development</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l6 experience">
              <div className="row">
                <div className="col s12 m12 l12 education">
                  <h6 className="light-blue-text text-darken-3">Education</h6>
                  <div className="row">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Jan 2017</span>
                      <span className="date">Present</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">Stony Brook University | New York</div>
                      <div className="description">Masters in Computer Science</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Aug 2008</span>
                      <span className="date">May 2012</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">Techno India, WBUT | INDIA</div>
                      <div className="description">Bachelors in Information Technology</div>
                    </div>
                  </div>
                </div>

                <div className="col s12 m12 l12 work">
                  <h6 className="light-blue-text text-darken-3">Work Experience</h6>
                  
                  <div className="row">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Mar 2016</span>
                      <span className="date">Dec 2016</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">Quintype Inc. | Bangalore, INDIA</div>
                      <div className="role">Software Engineer</div>
                      <div className="description">
                        <p>
                          Was working as an engineer towards building a platform for digital publishers, 
                          enabling them to take their publishing house online along with ad-ops, 
                          data analytics and data driven publishing.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Dec 2015</span>
                      <span className="date">Mar 2016</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">Uberstudies. | Bangalore, INDIA</div>
                      <div className="role">Co-Founder</div>
                      <div className="description">
                        <p>
                          Was working towards building a platform for connecting students and tutors online
                          with a one-to-one live workspace for tutoring. 
                          Contributed towards building the product from scratch and scaling the same.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="row work">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Aug 2014</span>
                      <span className="date">Jun 2015</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">ThoughtWorks Inc. | Bangalore, INDIA</div>
                      <div className="role">Consultant</div>
                      <div className="description">
                        <p>
                          Worked as a consultant for McKinsey Solutions, 
                          developed a couple of their products like RedE. 
                          Helped in product scalability by optimizing performance and migrated their applications to AWS.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Sep 2012</span>
                      <span className="date">Aug 2014</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">TCS Innovation Labs | Chennai, INDIA</div>
                      <div className="role"></div>
                      <div className="description">
                        <p>
                          Developed key modules for an enterprise social networking application. 
                          Was a part of the research team for doing sentiment analysis with R. 
                          Also contributed to Open Source Software.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="col s12 m12 l12 recognitions">
                  <h6 className="light-blue-text text-darken-3">Recognitions</h6>

                  <div className="row">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Dec 2017</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">HACK@CEWIT</div>
                      <div className="description">Most Original Idea - Alexa Fitness Pal</div>
                      <a href="https://devpost.com/software/alexa-fitness-pal" className="link">https://devpost.com/software/alexa-fitness-pal</a>
                    </div>
                  </div>
                </div>

                <div className="col s12 m12 l12 leadership">
                  <h6 className="light-blue-text text-darken-3">Leadership</h6>
                  <div className="row">
                    <div className="col s12 m2 l2 light-blue-text text-darken-3">
                      <span className="date">Aug 2014</span>
                    </div>
                    <div className="col s12 m10 l10">
                      <div className="title">ThoughtWorks Inc.</div>
                      <div className="description">Organised conferences hosted by ThoughtWorks</div>
                    </div>
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