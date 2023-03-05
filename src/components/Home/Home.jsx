import React from 'react'
import './Home.scss'
import profile from '../../assets/profile-img.jpeg'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className='container'
      id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <div className="profile">
        <img src={profile} alt="portfolio-img" />
      </div>
      <div className="profile-text">
        <h3 className='name'>Hi, I'm <span>Grace Yeo</span></h3>
        <span className="job">Web developer based in Auckland</span>
        <span className="text">
          Front End<br />
          Web Developer<br />
        </span>
        <motion.a
          href="contacts"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          connect with me
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Home