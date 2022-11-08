import React from 'react'
import './About.css'
import { ImHtmlFive } from "react-icons/im";
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
export default function About(){
    return(
        <div className="about" id="about">
            <div className="about-header">
                <h1>About</h1>
            </div>
            <div className="about-flex">

                <div className="about-left">
                <p>Hello 👋 My name is Queeneth, a graduate of computer science and I enjoy creating things that live on the internet. I'd call myself a frontend developer. Being a diligent and hardworking individual, i'm always ready to learn and try new things in performing tasks to its full height.</p>
                </div>
                <div className="about-right">
                    <div className="main-circle">
                        <div className="subcircle-diff">Skills</div>
                        <div className="subcircle">< ImHtmlFive /></div>
                        <div className="subcircle"><IoLogoCss3 /></div>
                        <div className="subcircle"><IoLogoJavascript /></div>
                        <div className="subcircle"><FaReact /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}