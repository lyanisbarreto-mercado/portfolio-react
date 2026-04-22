import React from 'react'

import Resume from '../images/Lyanis__Resume.pdf'

const Contact = () => {
  return (
    <div classNameName='page'>
        <div id="contact">
        <div className="row">
            <div className="contact-resources">
                <h1 className="subtitle">Here are some ways to contact me!</h1>
                <p>lyanis.barreto@gmail.com</p>
                <p>407-821-9626 </p>
                <div className="social-icons">
                    <p><a target="_blank" href="https://www.linkedin.com/in/lyanis-rubí-barreto-mercado-6aa606289">LinkedIn</a></p>
                    <p><a target="_blank" href="https://dot.cards/lyanisbarretomercado">DotCard</a></p>
                    
                    <p className="resume"><a target="_blank" className="button" download="Lyanis_Barreto.pdf" href={Resume}><i className="fa-regular fa-file"></i> Download Resume</a></p>
            </div>
               <br />
                <div className="contact-form">
                    <h3>You can also contact me here:</h3>
                    <form onsubmit="processInput(event)">
                        <input type="text" name="Name" id="name" placeholder="Your Name" required />
                        <input type="email" name="Email" id="email" placeholder="Your Email" required />
                        <textarea name="Message" row="6" id="message" placeholder="Your Message"></textarea>
                        <br />
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
        </div>
     </div>
</div>
    </div>
  )
}

export default Contact