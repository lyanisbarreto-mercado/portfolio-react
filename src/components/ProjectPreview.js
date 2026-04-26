import React from 'react'


const ProjectPreview = ({name, summary, url, image }) => {
          
  return (
    
    <div className='project_showcase'>
        <h1>{name}</h1>
        <h3>{summary}</h3>
        <p><a href={url} target='_blank' rel="noreferrer">Look at the page here</a></p>
        <img src={image} alt={name} />
    </div>
  )
}

export default ProjectPreview