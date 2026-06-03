import React from 'react'
import { motion } from 'motion/react'


const ProjectPreview = ({name, summary, url, image }) => {
          
  return (
    <motion.div 
      whileHover={ {scale: 1.05}}
      transition={{
        duration: 0.3
      }}>
      <div className='project_showcase'>
          <h1>{name}</h1>
          <h3>{summary}</h3>
          <p><a href={url} target='_blank' rel="noreferrer">Look at the page here</a></p>
          <img src={image} alt={name} />
      </div>
    </motion.div>
  )
}

export default ProjectPreview