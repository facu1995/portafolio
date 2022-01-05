import React from 'react'
/* import { Link } from 'react-router-dom' */

export const Contact = () => {
    return (
        <div id="contact" className='Contact body-padding'>
            <div className='contact '>
                {/*  <h1>Contact</h1> */}
                <a  href="https://www.linkedin.com/in/facundo-perez-agustin/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
                <a  href="https://github.com/facu1995" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i></a>
               {/*  <a href="mailto:facuunion13@gmail.com?Subject=Consulta" > <i className="fas fa-envelope"></i></a>
                <a  href="https://api.whatsapp.com/send?phone=542235290769&text=" target="_blank" rel="noopener noreferrer"><i className="whatsapp fab fa-whatsapp"></i></a> */}
                {/* <a  href="" target="_blank"><i className="fas fa-user-circle"></i></a> */}



            </div>
        </div>
    )
}

export default Contact;