import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import work1 from './assets/work1.png'
import work2 from './assets/work2.png'
import work3 from './assets/work3.png'

export const navLinks = ["Home", "About", "Skills", "Portfolio", "contact"]

export const socialIcons = [
    <FaDribbble />,
    <FaInstagram />,
    <FaLinkedin />,
    <BsMedium />
  ]

  export const bios = [
    {
      id: 1,
      icon: <FaUser />,
      key: "Name",
      value: "Grace Yeo"
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      key: "Phone",
      value: "021-0808-3395"
    },
    {
      id: 3,
      icon: <FaPaperPlane />,
      key: "Email",
      value: "graceyeo123@hotmail.com"
    }
  ];

  export const experience = [
    {
      id: 1,
      year: 2022,
      college: "Yoobee Collegge",
      course: "Web design and development level 6"
    },

    {
      id: 2,
      college: "Industry Connect",
      year: 2022,
      course: "Software developer internship"
    }
  ]


  export const workNavs = ["All", "Web", "App"]


  export const worksImages = [
    {
      id: 1,
      img: work1,
      name: "project 1",
      category: "App",
      view: '#'
    },
    {
      id: 2,
      img: work2,
      name: "project 2",
      category: "Web",
      view: '#'
    },
    {
      id: 3,
      img: work3,
      name: "project 3",
      category: "Web",
      view: 'https://crystaldev95.github.io/musinsa/'
    }
  ]

  export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]




