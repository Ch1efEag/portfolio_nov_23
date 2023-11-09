import React from 'react'
import { skills } from '../data'
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
    {skills.map(({title,percentage,url}, index) =>{
        return (
            <div className="progress__box" key={index}>
                  <h3 className="skills__title">{title}</h3>

                <div className="progress__circle">
                  {url}
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Skills
