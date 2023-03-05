import React, { useState } from 'react'
import './Skills.scss'
import { icons, experience } from '../../Data'
import { motion } from 'framer-motion'

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className='container' id="skills">
      <motion.div
        iniital={{ x: 200, opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.5 }}
        className="title">
        <span>What I Expert</span>
        <h1>Skills and Experience</h1>
      </motion.div>
      <div className="select">
        <button
          onClick={() => { setActive(1) }}
          className={active === 1 ? "active" : ""}
        >Skills
        </button>

        <button
          onClick={() => { setActive(2) }}
          className={active === 2 ? "active" : ""}
        >Experience
        </button>
      </div>
      <div className="skills">
        {
          active === 1 && icons.map((icon, i) =>
            <div className="icon" key={i}>
              {icon}
            </div>
          )
        }
      </div>
      <div className="experiences">
        {
          active === 2 && experience.map(exp =>
            <div className="experience" key={exp.id}>
              <span>{exp.year}</span>
              <div className="position">
                <h3>{exp.course}</h3>
                <p>{exp.college}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Skills