import React, {useState, useEffect} from 'react'
import './Navbar.scss'
import { navLinks, socialIcons } from '../../Data'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }

    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7,
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        })
    })

    return (
        <div className={scroll ? "header active" : "header"}>
            <div className='Nav_container'>
                <div className="logo">
                    <h3>A</h3>
                </div>
                <ul className="nav_links">
                    {
                        navLinks.map((nav, i) =>
                            <li key={i}>
                                <a href={`#${nav}`}></a>
                                {nav}
                            </li>
                        )
                    }
                </ul>
                <div className="social_icons">
                    {
                        socialIcons.map((social, i) =>
                            <div key={i}>
                                {social}
                            </div>
                        )
                    }
                </div>
                <div className="menu">
                    <HiMenuAlt4 onClick={()=> {
                        setToggle(true)
                    }}
                    />
                </div>
                <motion.div className="closeMenu"
                    variants={menuVariants}
                    initial="hidden"
                    animate={toggle ? "visible" : "hidden"}
                    >
                </motion.div>
                <motion.div 
                className="menuX"
                variants={navLinkVariants}
                animate={toggle ? "visible" : "hidden"}
                >
                    <HiX onClick={() => {
                        setToggle(false)
                    }}
                    />
                    {
                    navLinks.map((nav, i) => 
                    <li 
                    key={i}
                    onClick={() => {
                        setToggle(false);
                    }}
                    >
                        <a href={`${nav}`}>
                            {nav}
                        </a>
                    </li>
                    )
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar