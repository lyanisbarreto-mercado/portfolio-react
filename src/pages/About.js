import React, { useState } from 'react'
import List from '../lists/List';

const About = () => {
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
        <div id="about">
        <div className="row">
            <div className="about-col-1">
                <img src="photos/Lyanis Profile Dress.jpg" height="600px" alt="Profile photo" />
            </div>
            <div className="about-col-2">
                <p>A current student at the University of Central Florida (UCF), I am learning to program while also enhancing my skills in art.</p>
                
                <p>I have developed many artworks—from practice, personal pleasure, to class projects-that have all helped me grow. I have been producing art since my childhood, and it is a great passion of mine. More recently, I have been getting into programming, currently learning HTML, CSS, and JavaScript to produce websites.</p>

                 <div className="about-header">
                    {List.map((cat, index) => {
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
                                            className='about-des active-des'>
                                                {item}
                                            </li>
                                            )
                                })}
                            </ul>
                        </div>
                    )})}
                </div>
        </div>
    </div>
    </div>
</div>


    
  )
}

export default About