import React from 'react'
import './Contact.css'
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {GoSmiley} from 'react-icons/go'

export default function Contact(){
    return(
        <div className="contact-wrapper" id='contact'>
            <div className="contact-header">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-header-text">
                <p>Thanks for stopping by, I’m currently looking to join a new team of developers. If you think we might be a good fit for one another, send me an <span>email - queencobham@gmail.com </span></p>
            </div>
                        
            <div className="socials">
                <div className="socials-header">
                    <h2>Dont be a stranger!</h2>
                    <p>let's connect online</p>
                </div>
                <div className="contact-icons">
                          <div className="icons">
                            <a href="https://github.com/Queencobham"><FaGithub /></a>
                            <a href="https://ng.linkedin.com/in/queeneth-cobham-927ab8209"><FaLinkedinIn /></a>
                            <a href="https://twitter.com/CobhamQueen"><FaTwitter /></a>
                            </div>
                        </div>
            </div>
        </div>
    )
}
