import React from 'react';
import ProjectPreview from '../components/ProjectPreview';

import ProjectList from '../lists/ProjectList';

const Projects = () => {
  return (
    <div className='page'>
      <h1 className="subtitle">I have been consistently coding since 2025. Here is a showcase of some of my favorite projects!</h1>
      <div id='project-list'>
      {ProjectList.map((list, index) => {
          return (
            <div key={index} >
              <ProjectPreview 
              name={list.name}
              summary={list.summary}
              url={list.url}
              image={list.image}/>
            </div>
          ) 
    
          })}
      </div>
    </div>
  )
}

export default Projects