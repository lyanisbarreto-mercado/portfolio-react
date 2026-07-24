import React, { useRef, useState } from 'react';
import ProjectPreview from '../components/ProjectPreview';

import ProjectList from '../lists/ProjectList';
import ProjectDetails from '../components/ProjectDetails';

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  

  const openModal = (data) => {
    setSelectedProject(data);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
    setSelectedProject(null);
  }

  return (
    <div className='page pb-[120px]'>
      <div className='grid md:grid-cols-3 gap-10'>
      
      {ProjectList.map((list, index) => {
          return (
            <div className='project-button' key={index}>
              <button  onClick={() => openModal(list)}>
                <ProjectPreview 
                name={list.name}
                summary={list.summary}
                url={list.url}
                image={list.image}/>
              </button>
            </div>
            
          ) 
    
          })}
      </div>
          
          {modal && selectedProject && (
            <ProjectDetails
            {...selectedProject}
            closeModal={closeModal} />
          )}
      
    </div>

    
  )
}

export default Projects