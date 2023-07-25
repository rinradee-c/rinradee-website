import React from 'react'
import './projects.css'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
import monpic from '../../img/Monsters_saber_pic.png'
import etfpic from '../../img/ETF.png'
import syspic from '../../img/system.png'

const Projects = () => {
    return (
        <section id='projects'>
            <div className='con-pro'>
                <h1>Projects</h1>
                <div className='row-pro'>
                    <div className='col-pro'>
                        <div className='text-pro'>
                            <h3>
                                Monster Saber Game
                            </h3>
                            <h6>
                                2023
                            </h6>
                            <p>
                                Designed and Developed a VR game with Unity and C#.
                            </p>
                            <img src={monpic} className="pic" />
                        </div>
                    </div>
                    <div className='col-pro'>
                        <div className='text-pro'>
                            <h3>
                                Internship and Cooperative Training Processing System
                            </h3>
                            <h6>
                                2021
                            </h6>
                            <p>
                                Developed an Internship and Cooperative Training Processing System website 
                                using PHP, HTML, XAMPP with Apache and MySQL.
                            </p>
                            <img src={syspic} className="pic" />
                        </div>
                    </div>
                    <div className='col-pro'>
                        <div className='text-pro'>
                            <h3>
                                Escape The Forest Game
                            </h3>
                            <h6>
                                2020
                            </h6>
                            <p>
                                Developed a Pacman game in Snow White theme using Java and
                                Object Oriented Programming.
                            </p>
                            <img src={etfpic} className="pic" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;