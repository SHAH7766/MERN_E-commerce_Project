import React from "react";
import { motion } from "framer-motion";
import { Typewriter,Cursor } from 'react-simple-typewriter'
const DashBoard = () => {
  return <>
     <div className="container">
     <center>  <span className=' display-4 text-danger fw-bold' >
          <Typewriter
            words={['Welcome to Admin Panel']}
            loop={Infinity}
            cursor
            cursorStyle='!'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></center>

     </div>
        
  </>;
};

export default DashBoard;
