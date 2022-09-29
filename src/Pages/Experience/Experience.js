import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <>
      <section className="experience active section" id="experience">
        <div className="container">
          <div className="row padd-15">
            <div className="section-title padd-15">
              <h2>My Education & Experience</h2>
            </div>
          </div>

          <div className="experience-content padd-15">
            <div className="row exp-resp">
              <div className="education padd-15">
                
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* <!-- ===== Timeline Item ===== --> */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2021
                        </h3>
                        <h4 className="timeline-title">Bachelors's of Computer Applications</h4>
                        <p className="timeline-text">Dev Bhoomi Uttarakhand University</p>
                        <p className="timeline-text">66%</p>
                      </div>
                      {/* <!-- ===== Timeline Item ===== --> */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2017
                        </h3>
                        <h4 className="timeline-title">Sr. Secondary</h4>
                        <p className="timeline-text">Bhartiya Shiksha Sansthan Uttar Pradesh</p>
                        <p className="timeline-text">60%</p>
                      </div>
                      {/* <!-- ===== Timeline Item ===== --> */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2015
                        </h3>
                        <h4 className="timeline-title">Secondary</h4>
                        <p className="timeline-text">Govt. Inter Collage Dewalthal Pithoragarh</p>
                        <p className="timeline-text">53%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* <!-- ===== Timeline Item ===== --> */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> Jan 2022 - June 2022
                        </h3>
                        <h4 className="timeline-title">Front-End Developer <span><h3 className="timeline-date">
                          Full Time
                        </h3></span></h4>
                        <p className="timeline-text">Developed user interface by using the HTML/CSS/Bootstrap and JavaScript. <br />
                        Experience to make components. <br />
                        Familiar with Responsive web designs. <br />
                        Experience in using Bootstrap which can easily manipulate modal windows alerts, tooltips, scroll spy, Pop over, button, type head, etc.. <br />
                        Collaborate with other team members and stakeholders.
                        </p>
                        
                        <p className="timeline-text" style={{marginTop: '10px', fontWeight: 'bold', color:'var(--text-black-900)'}}>Skills: 
                          <span style={{ fontSize: '14px',fontWeight: '400', color: 'var(--text-black-700)'}}> HTML, CSS, Bootstrap, JavaScript, GIT / GITHUB, Bit Bucket, VS Code, Figma, Windows.</span>
                        </p>
                      </div>
                      {/* <!-- ===== Timeline Item ===== --> */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> Aug 2021 - Nov 2021 
                        </h3>
                        <h4 className="timeline-title">US IT Technical Recruiter <span><h3 className="timeline-date">
                          Full Time
                        </h3></span></h4>
                        <p className="timeline-text">Responsible for handling IT requirements from US based Clients.
                        </p>
                        <p className="timeline-text">Having Experience in performing need Analysis, requirement definition, recruiting, screening, Scheduling Interviews.
                        </p>
                        <p className="timeline-text">Well Versed experience US Tex terms Full Time, W2, C2C, 1099 and US Visa’s.
                        </p>
                        <p className="timeline-text">Responsible to work Contract, Permanent and Contract to Hire Positions.
                        </p>
                      </div>
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

export default Experience;