import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import MyCv from './cv.pdf'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll"


const Home = ({theme,changeTheme})=>{
    return (
       <div className='container-fluid home' id='home'>

        <div className='theme-change'onClick={changeTheme}>
            {theme === "light" ? (<p><BsFillMoonStarsFill size={40}/></p>):(<p className='sun-theme-icon'><IoSunny size={40}/></p>)}
        </div>

        <div className='container home-content'>
        <Fade right>
            <h1 className="glitch-text">
                Hi I'm Ma. Donna Fidelino
            </h1>
            <h3>
                    <Typewriter
        options={{
            strings: ['From BSI/T -3F', 'Future Full Stack Developer', 'Future Software Engineer'],
            
            autoStart: true,
            loop: true, 
            delay:5

        }}
        />  
            </h3>

        </Fade>

        <Fade bottom>
    <div className='button-for-action'>
        <a href="#contact" className='hire-me-button'>Hire me</a>
        
        <div className='get-resume-button'>
            <a href={MyCv} download="madonna_cv">Get resume</a>
        </div>
    </div>
</Fade>



        </div>

       </div> 
    )
}

export default Home
