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
      
      

        {/*ABOUT SECTION*/}

        <div className="py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-2 flex justify-center">
                <img
                    src={Profile}
                    alt="Profile"
                    className="w-4/5 rounded-2xl shadow-lg"
                />
            </div>
            
            <div className="space-y-6 lg:col-span-3 text-[16px] md:text-[18] leading-[28px]">
                <p>A current student at the University of Central Florida (UCF), I am learning to program while also enhancing my skills in art.</p>
                
                <p>I have developed many artworks—from practice, personal pleasure, to class projects-that have all helped me grow. I have been producing art since my childhood, and it is a great passion of mine. More recently, I have been getting into programming, currently learning React to produce websites — much like this one.</p>

                <p>I take into consideration what users notice when reviewing sites. They are the most important feedback one will get when designing a site, as they will be noting their first impressions. Learning to create the best first impression for a user is my ultimate goal!</p>
          </div>
    </div>
    </div>


      {/*ABOUT HEADER*/}
    <div className="about-header">

                    {EducationList.map((cat, index) => { //cat means category
                      return (
                        <div key={index}>
                          <p className="mb-8 border-b-4 border-[#B5DFD1] pb-2 text-[26px] md:text-[34px] font-bold">
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
                                <div
                                    className="
                                        mb-8
                                        bg-contain
                                        bg-no-repeat
                                        drop-shadow-lg
                                    "
                                    style={{
                                        backgroundImage: "url(/components/clouds/education_cloud.png)",
                                    }}
                                >
                                  <div className="px-24 py-16">
                                      <div className="mb-4">
                                          <h1 className="text-3xl font-bold">
                                              {item.college}
                                          </h1>
                                          <h2 className="text-2xl font-medium">
                                              {item.degree}
                                          </h2>
                                      </div>
                                      <p className="text-lg leading-7">
                                          {item.courses}
                                      </p>
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
                           <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                            
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
                                              className="
                                                  flex
                                                  h-36
                                                  w-52
                                                  items-center
                                                  justify-center
                                                  bg-contain
                                                  bg-center
                                                  bg-no-repeat
                                                  text-center
                                                  text-xl
                                                  font-bold
                                                  drop-shadow-lg
                                              "
                                              style={{
                                                  backgroundImage: "url(/components/clouds/small_cloud.png)",
                                              }}
                                          >
                                                {item}
                                            </li>
                                            </motion.div>
                                            )
                                })} 
                            </ul>
                        </div>
                    )})}

                {/*EXPERIENCE LIST */}
                    {ExperienceList.map((cat, index) => { //cat means category
                      return (
                        <div key={index}>
                          <p 
                            className="text-[26px] md:text-[34px]">
                                {cat.title}
                            </p>

                            {cat.items.map((item, i) => {
                              return (
                                <motion.div 
                                whileHover={ {scale: 1.015}}
                                transition={{
                                  duration: 0.3
                                }}>
                                <div key={i} className="mb-6 rounded-3xl bg-[#C6D5FB] p-6 shadow-md">
                                  <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
                                    <div className="flex flex-col">
                                      <span className='text-[22px] md:text-[28px] font-bold'>{item.job}</span>
                                      <span className='font-semibold text-[16px]'>{item.company}</span>
                                    </div>
                                    <div className="font-semibold text-[#3C493F] text-[16px]">
                                      {item.dates}
                                    </div>
                                  </div>
                                    <ul className="ml-6 list-disc space-y-2" >
                                      
                                    
                                      {item.bullets.map((bull, ind) => {
                                        return (
                                          <li key={ind}
                                          className='text-[16px] md:text-[18px]'>{bull}</li>
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



