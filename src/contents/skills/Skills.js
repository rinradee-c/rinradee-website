import React from 'react'
import './skills.css'
import java from '../../img/java.png'
import python from '../../img/Python.png'
import php from '../../img/php.png'
import hcs from '../../img/html-css-js.png'
import ruby from '../../img/ruby.png'


const Skills = () => {
    return (
        <section id='skills'>
            <div className='con-s'>
                <h1>Skills</h1>
                <div className='row-s'>
                    <div className='col-s'>
                        <img src={python} className="pic-skills" />
                    </div>
                    <div className='col-s'>
                        <img src={java} className="pic-skills" />
                    </div>
                    <div className='col-s'>
                        <img src={ruby} className="pic-skills" />
                    </div>
                </div>
                <div className='row-s'>
                    <div className='col-s'>
                        <img src={php} className="pic-skills" />
                    </div>
                    <div className='col-s'>
                        <img src={hcs} className="pic-skills" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;