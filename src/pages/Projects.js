import React from 'react';
import ProjectPreview from '../components/ProjectPreview';

import ProjectList from '../lists/ProjectList';

const Projects = () => {
  return (
    <div className='page'>
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