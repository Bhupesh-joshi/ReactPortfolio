import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import MainImg from '../../Assets/main-img.jpg'
import Resume from '../../Assets/MY_Resume.docx'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="home active section" id="home">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello">Hello, my name is <span className="name">Bhupesh Joshi</span> </h3>
                            <h3 className="my-profession">I' am a <span className="typing">
                                <Typewriter
                                loop
                                cursor
                                cursorStyle=''
                                typeSpeed={100}
                                deleteSpeed={55}
                                delaySpeed={500}
                                words={['Frond End Developer', 'React Developer']}
                                />
                                
                                </span>I</h3>
                            <p> I am a Front-End Developer and my expertise is to create Responsive web pages and
                                Components by some popular web technologies</p>
                            <a href={Resume} download className="btn">Download CV</a>
                        </div>
                        <div className="home-img padd-15">
                            <img className='animated' src={MainImg} alt="mainIimg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
