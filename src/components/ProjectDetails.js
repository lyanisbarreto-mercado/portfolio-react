import React, { useState } from 'react';
import ProjectList from '../lists/ProjectList';

import { XCircle } from 'react-bootstrap-icons';

const ProjectDetails = ({name, summary, image, url, why, challenge, conclusion, closeModal}) => {
  
    const [imageModal, setImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (data) => {
        setSelectedImage(data);
        setImageModal(true);
    }

    const closeImageModal = () => {
        setImageModal(false);
        setSelectedImage(null);
    }
    return (
    <div className="modal-overlay">
        <div className="project-modal">
            <div className='project-modal-content'>
                <div className='project-modal-top'>
                    <h1>{name}</h1>
                    <XCircle onClick={closeModal}/>
                </div>
                    <h2>Purpose</h2>
                        <p>{why}</p>
                    <h2>Challenge</h2>
                        <p>{challenge}</p>
                    <h2>Conclusion</h2>
                        <p>{conclusion}</p>
                    <h2>Where to view</h2>
                    <p>{url}</p>

                    <img src={image} 
                    alt={name} 
                    onClick={() => openImageModal(image)}
                    />
            </div>
      </div>
            {imageModal && (
                <div className="image-modal-overlay" onClick={closeImageModal}>
                    <img
                    src={selectedImage}
                    alt={name}
                    className="image-modal"
                    />
                </div>
            )}
    </div>
  )
}

export default ProjectDetails