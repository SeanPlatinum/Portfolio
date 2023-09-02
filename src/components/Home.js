import React, {useState} from 'react';
import TravelImg1 from '../assets/images/portfolioImage1.jpg';
import TravelImg2 from '../assets/images/travel2.jpg';
import CatDad from '../assets/images/cheddaranddad.jpg';
import Proj1 from '../assets/images/project1POC.png';
import Proj2 from '../assets/images/Proj2.png';
import Proj3 from '../assets/images/SokobanP.png';
import Navbar from './Navbar';
import GitHubLogo from '../assets/images/GithubLogo.png';
import LinkedInLogo from '../assets/images/LinkedinLogo.png';
import HandshakeLogo from '../assets/images/handshakeLogo.jpg';
export default function Home () {
    const [showAbout, setshowAbout] = useState(false);
    const toggleAbout = () => {
        setshowAbout(true);
        setWorkButtonClicked(true);
    };
    const [WorkButtonClicked, setWorkButtonClicked] = useState(false);

    return(
        <div className="home">
            <Navbar onNavLinkClick={toggleAbout} />
            <div className="intro fade-in">
                <p className="Paragraph1">Hi, my name is</p>
                <h1 className="Title1">SEAN DIAZ</h1>
                <h2 className="Undertitle">I am an aspiring Software Engineer</h2>
                <p className="undertitle-2">Im a software developer who specializes in Python, C++, and React JS to build powerful programs</p>
                
            </div>
            <div className='Work-Button'><button className = {WorkButtonClicked ? 'AboutButton fadeOut': 'AboutButton'} onClick={toggleAbout}>View Work</button></div>
            {showAbout && (
            <div>
                <h1 className="AboutTitle" id = "About"> About Me</h1>
                <div className="About fade-in">
                        
                        <p className='AboutInfo'> Attending the University of Massachusetts Lowell, I started off learning C and C++
                        now with a deeper understanding of programming ive moved into web developement and python developement but I dont plan on
                        stopping here, by 2024 I hope to be able to teach myself more about AI as well as mobile application developement. Below are some of the technologies I know...
                        </p>
                        <img className='TravImg'width={'200px'} src={TravelImg1} />
                        <img className='TravImg'width={'200px'} src={TravelImg2} />
                        <img className='TravImg'width={'200px'} src={CatDad} />
                        <hr></hr>
                </div>
                
                <div className='TechnologyDiv'>
                    <h3 className='Technologies-header'>Technologies</h3>
                    <ul>
                        <li className='Technologies'>Python</li>
                        <li className='Technologies'>C++</li>
                        <li className='Technologies'>ReactJS</li>
                        <li className='Technologies'>Javascript</li>
                        <li className='Technologies'>HTML</li>
                        <li className='Technologies'>CSS</li>
                    </ul>
                     
                </div>
                <div className='ProjContainter' id='Projects'>
                    <h1 className='ProjectTitle'>Projects</h1>
                    <p className='ProjHeadingText'>Below are some projects that ive worked on using ReactJS, Python, and C++</p>
                </div>
                <section className='ProjSection'>
                    <h3 className='ProjectHeading'>Facial Recognition With Python</h3>
                    <div className='DescWImg'>
                        <img src={Proj1} alt = "Project1" width={"400px"}/>
                        <container>
                            <p className='ProjDescText'>My first project using Python, This project taught me a ton about the 
                            importance of packages and how much faster it could make my work flow. On top of this, I learned about Numpy arrays and 
                            how data is normalized in machine learning.</p>
                            <a href='https://github.com/SeanPlatinum/FacialRecog/blob/main/main.py' target="_blank" rel="noopener noreferrer">
                                <button className='SourceCodeBtn'>Source Code</button>
                            </a>
                        </container>
                    </div>
                    
                    <h3 className='ProjectHeading'>Python Virtual Assistant</h3>
                    <div className='DescWImg'>
                        
                        <container>
                            <p className='ProjDescText'>Using Tkinter and Python packages such as Speech Recognition
                            and pyttsx3 for the response voice, I was able to create a simple but powerful virtual assistant
                            that can detect a voice input, translate it to text, interpret that text, before returning a response 
                            based on what was given. The bot can send an email and a text (using twilio), it can also make a list
                            and has a section that revolves with suggested commands.</p>
                            <a href='https://github.com/SeanPlatinum/Virtual-Assistant/blob/main/main.py' target="_blank" rel="noopener noreferrer">
                                <button className='SourceCodeBtn'>Source Code</button>
                            </a>
                        </container>
                        <img src={Proj2} alt = "Project2" width={"400px"}/>
                    </div>
                        <h3 className='ProjectHeading'>Sokoban Game (C++)</h3>
                        <div className='DescWImg'>
                            <img src={Proj3} alt = "Project3" width={"400px"}/>
                            <container>
                                <p className='ProjDescText'>This project given to me by my Computing 4 professor proved to be quite the challenge
                                and required me to use deep problem solving skills to solve an issue with movement of a sprite and more
                                importantly, the loading of a map in a world with sprites. Over several iterations it 
                                occured to me to use a map and an array holding symbols of what the game world should look like 
                                then translating those symbols to sprites and textures was the solution to the problem of loading a 2D world.  </p>
                                <a href='https://github.com/SeanPlatinum/Sokoban/blob/main/Sokoban.cpp' target="_blank" rel="noopener noreferrer">
                                    <button className='SourceCodeBtn'>Source Code</button>
                                </a>
                            </container>
                    </div>
                </section>
                <h1 className='ProjectTitle' id="Contact">Contact</h1>
                <section className='ContactSection'>
                    <p className='ContactText'>
                        Interested in my work? Have any questions? Business inquiry? Please 
                        feel free to email me!
                    </p>
                    <a href='mailto:seandiaz6561@gmail.com'>
                        <button className='SourceCodeBtn'>Contact Me</button> 
                    </a>
                </section>
                
            </div>
            )}
            <footer className='footer'>
                <a href="https://github.com/SeanPlatinum" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubLogo} alt="GitHub" className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/seandiaz123/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInLogo} alt="LinkedIn" className="footer-icon" />
                </a>
                <a href="https://app.joinhandshake.com/stu/users/34487191" target="_blank" rel="noopener noreferrer">
                    <img src={HandshakeLogo} alt="Handshake" className="footer-icon" />
                </a>
            </footer>
        </div>
        
        
    )
}