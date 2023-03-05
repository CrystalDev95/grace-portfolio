import React, { useState, useEffect } from 'react'
import './Portfolio.scss'
import { workNavs } from '../../Data'
import { worksImages } from '../../Data'
import { FiGithub, FiEye } from "react-icons/fi"
import { motion } from "framer-motion"

const Portfolio = () => {
  const [tab, setTab] = useState({name: "all"})
  const [works, setWorks] = useState([])
  const [active, setActive] = useState(0)


  useEffect(() => {
    if (tab.name === "all") {
      setWorks(worksImages);
    } else {
      const newWork = worksImages.filter
        ((worksImage) => {
          return worksImage.category.toLowerCase() === tab.name;
        });
      setWorks(newWork);
    }
  }, [tab])

  const activeTab = (e, i) => {
    setTab({ name: e.target.textContent.toLowerCase() })
    setActive(i)
  }


  return (
    <div className='container' id="portfolio">
      <div className="title">
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </div>
      <div className="buttons">
        {workNavs.map((workNav, i) =>
          <button
            onClick={(e) =>
              activeTab(e, i)
            }
            key={i}
            className={`${active === i ? "active" : ""}`}
          >{workNav}</button>
        )}
      </div>
      <div className="workImages">
        {works.map((work) =>
          <motion.div 
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="workImage" 
          key={work.id}>

          <img src={work.img} alt="work-img" />
          <div className="mobileProjects">
          <div className='mobileProjects__items'>
            <a>Github<FiGithub /></a>
            </div>
          <div className='mobileProjects__items'>
            <a href={work.view}>View<FiEye />
            </a>
            </div>
          </div>

            <motion.div
              className="hoverLayer"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: .3, ease: "easeInOut" }}
            >
              <motion.a
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.5] }}
                transition={{ duration: .3 }}
                href="#"
              ><FiGithub />
              </motion.a>

              <motion.a
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.5] }}
                transition={{ duration: .3 }}
                href="#"
              ><FiEye />
              </motion.a>
            </motion.div>
            
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Portfolio