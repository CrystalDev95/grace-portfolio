import React from 'react'
import "./About.scss"
import profile from '../../assets/profile-img.jpeg'
import { bios } from '../../Data'
import { easeIn, motion } from 'framer-motion'

const About = () => {
  return (
    <div className='container' id="about">
      <motion.div
        iniital={{ x: 200, opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.5 }}
        className="title">
        <span>Who Am I?</span>
        <h1
          iniital={{ x: 200, opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        >About Me</h1>
      </motion.div>
      <div className="about_container">
        <div className="about_left">
          <img src={profile} alt="about-img" />
        </div>
        <div className="about_right">
          <p>I'm a Front End Developer working with Javascript, React, CSS, SASS to
            deliver exceptional customer experiences. Adept at contributing to a highly 
            collaborative work environment, finding solutions and determining customer satisfaction </p>
          {
            bios.map((bio) =>
              <div className="bio" kye={bio.id}>
                <span className='biokey'>
                  {bio.icon}{bio.key}
                </span>
                <span className="bioValue">
                  {bio.value}
                </span>
              </div>
            )
          }
          <motion.div
            className='about_right-button'
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#">
            Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About