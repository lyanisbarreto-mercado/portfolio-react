import React, { useState } from 'react';
import { easeIn, motion } from "motion/react"

import AboutList from '../lists/AboutList';
import EducationList from '../lists/EducationList';
import ExperienceList from '../lists/ExperienceList';

import Profile from "../images/Knitted_Profile.jpg";
import Hook from '../components/Hook';



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
   
  
  return (

    <div>
      
      <Hook />

    <motion.div className='page'
      initial={{opacity: 0, y: 50}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition= {{
        duration: 0.8,
        ease: "easeIn"
      }}>
      
      

        
        <div id="about">
        <div className="row">
            <div className="about-col-1">
                <img src={Profile} height="100px" alt="Profile" />
            </div>
            
            <div className="about-col-2">
                <p>A current student at the University of Central Florida (UCF), I am learning to program while also enhancing my skills in art.</p>
                
                <p>I have developed many artworks—from practice, personal pleasure, to class projects-that have all helped me grow. I have been producing art since my childhood, and it is a great passion of mine. More recently, I have been getting into programming, currently learning React to produce websites — much like this one.</p>

                <p>I take into consideration what users notice when reviewing sites. They are the most important feedback one will get when designing a site, as they will be noting their first impressions. Learning to create the best first impression for a user is my ultimate goal!</p>
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
                                <motion.div                              
                                    whileHover= {{rotate: 3}}
                                    transition= {{
                                      duration: 0.5,
                                      ease: "easeInOut"
                                    }}
                                  >
                                <div key={i} className='education-cloud'>
                                  <div className='education-text'>
                                      <div className='education-title'>
                                          <h1>{item.college}</h1>
                                          <h2>{item.degree}</h2>
                                      </div>
                                      <p>{item.courses}</p>
                                  </div>
                                </div>
                                </motion.div>
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
                                       <motion.div                              
                                    whileHover= {{rotate: -5}}
                                    transition= {{
                                      duration: 0.5,
                                      ease: "easeInOut"
                                    }}
                                  >
                                            <li
                                            key={i}
                                            className='skill'>
                                                {item}
                                            </li>
                                            </motion.div>
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
                                <motion.div 
                                whileHover={ {scale: 1.05}}
                                transition={{
                                  duration: 0.3
                                }}>
                                <div key={i} className='experience-block'>
                                  <div className='experience-title'>
                                    <div className='job'>
                                      <span>{item.job}</span>
                                      <span>{item.company}</span>
                                    </div>
                                    <div className='date'>
                                      {item.dates}
                                    </div>
                                  </div>
                                    <ul>
                                      
                                    
                                      {item.bullets.map((bull, ind) => {
                                        return (
                                          <li key={ind}>{bull}</li>
                                        )
                                      
                                      })}
                                     </ul>
                                  
                                  
                                  
                                </div>
                                </motion.div>
                              )
                            })}
                        </div>
                      )
                    })}
                </div>
    </motion.div>
    </div>
  )
}

export default Home



