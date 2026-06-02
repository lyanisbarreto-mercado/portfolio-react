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
            <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{
                duration: 1.5,
                ease: "easeOut",
            }}
            >
                <div id="hook-name">
                <h2>Lyanis</h2>
                <h2>Barreto</h2>
                <h2>Mercado</h2>
                </div>
            </motion.div>

            <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{
                duration: 2,
                ease: "easeOut",
            }}
            >
            <div id="quote">
            <h2>Facing</h2>
            <h2>every</h2>
            <h2>challenge</h2>
            </div>
            </motion.div>
        </div>
      </motion.div>
  )
}

export default Hook