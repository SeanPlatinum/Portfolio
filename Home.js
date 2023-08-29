import React, {useState} from 'react';
import TravelImg1 from '../assets/images/portfolioImage1.jpg';
import TravelImg2 from '../assets/images/travel2.jpg';
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
            </div>
            )}
        </div>
        
        
    )
}