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
            
                <div id="hook-name">
                <motion.h2 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                }}
                >
                    <h2>Lyanis</h2>
                </motion.h2>
                <motion.h2 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{
                    duration: 1.7,
                    ease: "easeOut",
                }}
                >
                    <h2>Barreto</h2>
                </motion.h2>
                <motion.h2 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{
                    duration: 1.9,
                    ease: "easeOut",
                }}
                >
                    <h2>Mercado</h2>
                </motion.h2>
                </div>
            

            
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
                <h2>Every</h2>
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