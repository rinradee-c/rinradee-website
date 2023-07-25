import React from 'react'
import './nav.css'
import { useState } from 'react'
import logopic from '../../img/logoR-white.png'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <div className='nav-left'>
                <img src={logopic} alt="proflie" className="logopic" />
                <a className="button-resume" href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf"><i class="fa fa-download"></i>Resume</a>
            </div>
            <div className='nav-right'>
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><i class="fas fa-home"></i></a>
                {/* <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>about</a> */}
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</a>
                <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}>Education</a>
            </div>
        </nav>
    );
}

export default Nav;