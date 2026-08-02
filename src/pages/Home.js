import React, { useState } from 'react';
import { easeIn, motion } from "motion/react"

import AboutList from '../lists/AboutList';
import EducationList from '../lists/EducationList';
import ExperienceList from '../lists/ExperienceList';

import Profile from "../images/Knitted_Profile.jpg";
import SmallCloud from "../components/clouds/small_cloud.png"
import EducationCloud from "../components/clouds/education_cloud.png"
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
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center pb-[80px]">
            <div className="lg:col-span-2 flex justify-center">
                <img
                    src={Profile}
                    alt="Profile"
                    className="w-4/5 rounded-2xl shadow-lg"
                />
            </div>
           
            <div className="space-y-6 lg:col-span-3 text-[16px] md:text-[18] leading-[28px]"> 
              <h2 className='font-bold'>Who am I?</h2>
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
                        <div key={index} className='pb-[80px]'>
                          <p className="mb-8 border-b-4 border-[#B5DFD1] pb-2 text-[26px] md:text-[34px] font-bold">
                                {cat.title}
                            </p>
                            {cat.items.map((item, i) => {
                              return (
                                <motion.div
                                  key={i}
                                  whileHover={{ rotate: 3 }}
                                  transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                  <div className="relative mx-auto w-full max-w-[1200px] ">

                                    <img
                                      src={EducationCloud}
                                      alt=""
                                      className="w-full h-auto drop-shadow-lg hidden md:block"
                                    />

                                    <img
                                      src={SmallCloud}
                                      alt=""
                                      className="w-full h-auto max-h-[250px] drop-shadow-lg block md:hidden"
                                    />

                                    <div
                                      className="
                                        absolute inset-0
                                        flex flex-col
                                        items-center
                                        justify-center
                                        text-center

                                        px-8
                                        sm:px-12
                                        md:px-20
                                      "
                                    >
                                      <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-bold">
                                        {item.college}
                                      </h1>

                                      <h2 className="mt-1 text-[16px] sm:text-[20px] md:text-[24px]">
                                        {item.degree}
                                      </h2>

                                      <p className="mt-5 max-w-[75%] text-[13px] sm:text-[15px] md:text-[18px] leading-relaxed">
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
                    
                        <div className='pb-[80px]'>
                            <p 
                            className="about-links mb-8 border-b-4 border-[#B5DFD1] pb-2 text-[26px] md:text-[34px] font-bold"
                            key={index}>
                                {cat.title}
                            </p>
                           <ul className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
                            
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
                                                  backgroundImage: `url(${SmallCloud})`,
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
                            className="about-links mb-8 border-b-4 border-[#B5DFD1] pb-2 text-[26px] md:text-[34px] font-bold">
                                {cat.title}
                            </p>

                            {cat.items.map((item, i) => {
                              return (
                                <motion.div 
                                whileHover={ {scale: 1.015}}
                                transition={{
                                  duration: 0.3
                                }}>
                                <div key={i} className="mb-6 rounded-3xl bg-[#C6D5FB] p-6 mb-4 shadow-md">
                                  <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
                                    <div className="flex flex-col">
                                      <span className='text-[20px] md:text-[24px] font-bold'>{item.job}</span>
                                      <span className='font-semibold text-[14px] md:text-[16px]'>{item.company}</span>
                                    </div>
                                    <div className="font-semibold text-[#3C493F] text-[14px] md:text-[16px]">
                                      {item.dates}
                                    </div>
                                  </div>
                                    <ul className="ml-6 list-disc space-y-2" >
                                      
                                    
                                      {item.bullets.map((bull, ind) => {
                                        return (
                                          <li key={ind}
                                          className='text-[14px] md:text-[16px]'>{bull}</li>
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



