import React from 'react'

import { motion } from "motion/react"

const Hook = () => {
  return (
    <motion.div 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{
            duration: 1,
            ease: "easeOut",
        }}
    >
        <div id="hook">
  
            <div id="quote">
            <motion.h2 
            initial={{ x: -200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{
                duration: 2,
                ease: "easeOut",
            }}
            >
                <h2>Facing</h2>
            </motion.h2>
            <motion.h2 
            initial={{ x: -200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{
                duration: 2.2,
                ease: "easeOut",
            }}
            >
                <h2>every</h2>
            </motion.h2>
            <motion.h2 
            initial={{ x: -200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{
                duration: 2.4,
                ease: "easeOut",
            }}
            >
                <h2>challenge</h2>
            </motion.h2>
            </div>
            
        </div>
      </motion.div>
  )
}

export default Hook