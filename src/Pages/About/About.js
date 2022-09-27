import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
      <section className="about active section" id="about">
        <div className="container">
          <div className="row padd-15">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>I'm Bhupesh joshi and <span>Frontend Developer</span></h3>
                <p>I am a Front-End Developer and my expertise is to create Responsive web pages and
                  Components by some popular web technologies. I have a Good Understanding of <span style={{fontWeight: 'bold',}}> [HTML] [CSS] [JavaScript] [ReactJS] and [Bootstrap] [Fetch API] [GIT/GITHUB] </span>
                  I want to pursue my dream as a React Developer and I'm curious about that field</p>
              </div>
            </div>
            <div className="row res-about">
              <div className="personal-info padd-15">
                <div className="row padd-15">
                  <div className="info-item">
                    <p>Current Location : <span>Noida</span></p>
                  </div>
                  <div className="info-item">
                    <p>Opportunities : <span>Looking For</span></p>
                  </div>
                  <div className="info-item">
                    <p>Email : <span>bhupeshj237@gmail.com</span></p>
                  </div>
                  <div className="info-item">
                    <p>Phone : <span>+91 7451 838 027</span></p>
                  </div>
                  <div className="info-item">
                    <p>Degree : <span>BCA</span></p>
                  </div>
                  <div className="info-item">
                    <p>Birthday : <span>05 june 2000</span></p>
                  </div>
                  <div className="info-item">
                    <p>Home Town : <span>Pithoragarh</span></p>
                  </div>
                  <div className="info-item">
                    <p> Preferences : <span> Anywhere in India </span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <NavLink to='/contact' data-section-index="1" className="btn hire-me N__link">Hire Me</NavLink>
                  </div>
                </div>

              </div>

              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>HTML</h5>
                    <div className="progress">
                      <div className="progress-in skill-one"></div>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>CSS</h5>
                    <div className="progress">
                      <div className="progress-in skill-two"></div>
                      <div className="skill-percent">86%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>JavaScript</h5>
                    <div className="progress">
                      <div className="progress-in skill-three"></div>
                      <div className="skill-percent">60%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>React JS</h5>
                    <div className="progress">
                      <div className="progress-in skill-four"></div>
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Bootstrap</h5>
                    <div className="progress">
                      <div className="progress-in skill-five"></div>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
