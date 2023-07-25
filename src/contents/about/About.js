// import React, { useState } from 'react'
import './about.css'
import Social from '../../components/Social'
import profilepic from '../../img/propic.jpg'
import ReactTypingEffect from 'react-typing-effect'
// import Heart from 'react-animated-heart'


const About = () => {
    // const [isClick, setClick] = useState(false);
    return (
        <section id='#'>
            <div className='con-about'>
                <div className='row-about'>
                    <div className='col-about1'>
                        <div className='information-about'>
                            <h1>Hi, I am Rinradee</h1>
                            <img src={profilepic} alt="proflie" className="profilepic" />
                            <ReactTypingEffect text={['Hello World!', 'I am Rinradee', 'I am Developer']} speed={100} eraseDelay={200} className="typingeffect" />
                            <Social />
                            <div className='heart'>
                                {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-about2'>
                        <div className='text-about'>
                            <h5>objective</h5>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default About;