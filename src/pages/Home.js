import React, { useState } from 'react';

import AboutList from '../lists/AboutList';
import EducationList from '../lists/EducationList';
import ExperienceList from '../lists/ExperienceList';

import Profile from "../images/Knitted_Profile.jpg";


const Home = () => {
  /* var aboutLinks = document.getElementsByClassName('about-links');
    var aboutDes = document.getElementsByClassName('about-des');
    
    function opentab(element, tabname){
        for( const aboutLink of aboutLinks) {
            aboutLink.classList.remove("active-link")
        }
        for( const des of aboutDes) {
            des.classList.remove("active-des")
        }
       // event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-des");
    }*/

   const [active, setActive] = useState('');
    const handleClick = (index) => {
        setActive(index)
    };
  
  return (
    <div className='page'>
      
      <h2 id="hook">"You use a glass mirror to see your face. You use works of art to see your soul." 
    <br /><span>– George Bernard Shaw</span></h2>

    <div id="intro" >
      <h1>Welcome!</h1>
      <h2>I am Lyanis Barreto, Front-End Developer</h2>
    </div>
        
        <div id="about">
        <div className="row">
            <div className="about-col-1">
                <img src={Profile} height="100px" alt="Profile" />
            </div>
            
            <div className="about-col-2">
                <p>A current student at the University of Central Florida (UCF), I am learning to program while also enhancing my skills in art.</p>
                
                <p>I have developed many artworks—from practice, personal pleasure, to class projects-that have all helped me grow. I have been producing art since my childhood, and it is a great passion of mine. More recently, I have been getting into programming, currently learning HTML, CSS, and JavaScript to produce websites.</p>
          </div>
    </div>
    </div>

    <div className="about-header">

                    {EducationList.map((cat, index) => { //cat means category
                      return (
                        <div key={index}>
                          <p 
                            className="about-links"
                            >
                                {cat.title}
                            </p>
                            {cat.items.map((item, i) => {
                              return (
                                <div key={i} className='education-cloud'>
                                  <div className='education-text'>
                                      <div className='education-title'>
                                          <h1>{item.college}</h1>
                                          <h2>{item.degree}</h2>
                                      </div>
                                      <p>{item.courses}</p>
                                  </div>
                                </div>
                              )
                            })}
                        </div>
                      )
                    })}

                    {AboutList.map((cat, index) => {
                    return (
                        <div>
                            <p 
                            className="about-links"
                            key={index}>
                                {cat.title}
                            </p>
                           <ul className='cat-list'>
                            
                                {cat.items.map((item, i) => {
                                    return (
                                            <li
                                            key={i}
                                            className='skill'>
                                                {item}
                                            </li>
                                            )
                                })} 
                            </ul>
                        </div>
                    )})}


                    {ExperienceList.map((cat, index) => { //cat means category
                      return (
                        <div key={index}>
                          <p 
                            className="about-links">
                                {cat.title}
                            </p>

                            {cat.items.map((item, i) => {
                              return (
                                <div key={i} className='experience-block'>
                                  <div className='experience-title'>
                                    <div className='job'>
                                      {item.job}
                                      {item.company}
                                    </div>
                                    <div className='date'>
                                      {item.dates}
                                    </div>
                                    <ul>
                                    
                                      {item.bullets.map((bull, ind) => {
                                        return (
                                          <li key={ind}>{bull}</li>
                                        )
                                      
                                      })}
                                     </ul>
                                  </div>
                                  
                                  
                                </div>
                              )
                            })}
                        </div>
                      )
                    })}
                </div>
    </div>
  )
}

export default Home



