import React from 'react';
import Ocean from '../images/ocean.jpg';


const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Ocean})`,
    backgroundSize: 'cover',
    
  }
  return (
    <div className='page'>
      
      <h2 id="hook">"You use a glass mirror to see your face. You use works of art to see your soul." 
    <br /><span>– George Bernard Shaw</span></h2>

    <div id="intro" >
      <h1>Welcome!</h1>
      <h2>I am Lyanis Barreto, Front-End Developer</h2>
    </div>
        
    </div>
  )
}

export default Home