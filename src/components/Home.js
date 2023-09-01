import React, {useState} from 'react';
import TravelImg1 from '../assets/images/portfolioImage1.jpg';
import TravelImg2 from '../assets/images/travel2.jpg';
import CatDad from '../assets/images/cheddaranddad.jpg';
import Proj1 from '../assets/images/project1POC.png';
import Proj2 from '../assets/images/Proj2.png';
import Proj3 from '../assets/images/SokobanP.png';
export default function Home () {
    const [showAbout, setshowAbout] = useState(false);
    const toggleAbout = () => {
        setshowAbout(true);
    };
    return(
        <div className="home">
            <div className="intro fade-in">
                <p className="Paragraph1">Hi, my name is</p>
                <h1 className="Title1">SEAN DIAZ</h1>
                <h2 className="Undertitle">I am an aspiring Software Engineer</h2>
                <p className="undertitle-2">Im a software developer who specializes in Python, C++, and React JS to build powerful programs</p>
                <div className='Work-Button'><button className = "AboutButton" onClick={toggleAbout}>View Work</button></div>
            </div>
            {showAbout && (
            <div>
                <h1 className="AboutTitle"> About Me</h1>
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
                <div className='ProjContainter'>
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
                            <button className='SourceCodeBtn'>Source Code</button>
                        </container>
                    </div>
                    
                    <h3 className='ProjectHeading'>Python Virtual Assistant</h3>
                    <div className='DescWImg'>
                        
                        <container>
                            <p className='ProjDescText'>My first project using Python, This project taught me a ton about the 
                                    importance of packages and how much faster it could make my work flow. On top of this, I learned about Numpy arrays and 
                                    how data is normalized in machine learning.</p>
                            <button className='SourceCodeBtn'>Source Code</button>
                        </container>
                        <img src={Proj2} alt = "Project2" width={"400px"}/>
                    </div>
                        <h3 className='ProjectHeading'>Sokoban Game (C++)</h3>
                        <div className='DescWImg'>
                            <img src={Proj3} alt = "Project3" width={"400px"}/>
                            <container>
                                <p className='ProjDescText'>My first project using Python, This project taught me a ton about the 
                                importance of packages and how much faster it could make my work flow. On top of this, I learned about Numpy arrays and 
                                how data is normalized in machine learning.</p>
                                <button className='SourceCodeBtn'>Source Code</button>
                            </container>
                    </div>
                </section>
                <h1 className='ProjectTitle'>Contact</h1>
                <section>

                </section>
                
            </div>
            )}
        </div>
        
        
    )
}