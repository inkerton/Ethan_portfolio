import React, { useState} from "react";

//framer-motion
import {animate, motion} from 'framer-motion'
import { fadeIn } from "../../variants";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="1"/>,
          <FaCss3 key="2"/>,
          <FaJs key="3"/>,
          <FaReact key="4"/>,
          <SiNextdotjs key="5"/>,
          <SiFramer key="6"/>,
          <FaWordpress key="7"/>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="first" />, <SiAdobexd key="second"/>, <SiAdobephotoshop key="third" />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];


//components
import Avatar from "../../components/Avatar";
import Circles from '../../components/Circles';

const About = () => {
  const [Index, setIndex] = useState(0);
  return <div>
    <Circles />
    {/* avatar img */}
    <motion.div 
    variants={fadeIn('right', 0.2)} 
    initial="hidden" 
    animate="show" 
    exit="hidden" 
    className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto">
      <div>text</div>
      <div>about 1:17:59</div>
    </div>
  </div>;
};

export default About;
