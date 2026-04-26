import React, { useState } from 'react'

import Resume from '../images/Lyanis__Resume.pdf'

const Contact = () => {
  

    //The next code snippet was taken from Web3Forms
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a3c15306-43fb-42cf-93b8-497eaf9c3135");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message Processed. Thank you for reaching out, and I will get to you as soon as possible!" : "Error, please try again");
  };
//End of code snippet


  return (

    
    <div className='page'>
        <div id="contact">
        <div className="row">
            <div className="contact-resources">
                <h1 className="subtitle">Here are some ways to contact me!</h1>
                <p>lyanis.barreto@gmail.com</p>
                <p>407-821-9626 </p>
                <div className="social-icons">
                    <p><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lyanis-rubí-barreto-mercado-6aa606289">LinkedIn</a></p>
                    <p><a target="_blank" rel="noreferrer" href="https://dot.cards/lyanisbarretomercado">DotCard</a></p>
                    
                    <p className="resume"><a target="_blank" rel="noreferrer" className="button" download="Lyanis_Barreto.pdf" href={Resume}><i className="fa-regular fa-file"></i> Download Resume</a></p>
            </div>
               <br />
                <div className="contact-form">
                    <h3>You can also contact me here:</h3>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="Name" id="name" placeholder="Your Name" required />
                        <input type="email" name="Email" id="email" placeholder="Your Email" required />
                        <textarea name="Message" row="6" id="message" placeholder="Your Message" required></textarea>
                        <br />
                        <button className="button" type="submit">Submit</button>
                    </form>
                    <p>{result}</p>
                </div>
        </div>
     </div>
</div>
    </div>
  )
}

export default Contact