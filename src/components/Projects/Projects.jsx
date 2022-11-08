import React from 'react'
import './Projects.css'
import {Link} from 'react-router-dom'
import { FaGithubAlt } from "react-icons/fa";
import {BiError} from "react-icons/bi"
import {TbFaceIdError} from "react-icons/tb"

export default function About(){
    return(
        <div className="project" id='project'>
            <div className="project-header">
                <h1>Projects</h1>
            </div>
           <div className="project-header-text">
           <p>Here are some of my works</p>
           </div>
            <div className="projects">
                <div className="project-one card">
                    <div className="card-header">
                       <span><FaGithubAlt /></span> 
                        <h2>Github Portfolio</h2>
                    </div>
                    <div className="card-text">
                        <p>An API fetch of my github Portfolio, with a page showing a list of my repositories.</p>
                    </div>
                    <div className="card-link">
                    <Link to ='/github'>Visit site</Link>
                    </div>
                </div>
                <div className="project-two card">
                <div className="card-header">
                       <span><BiError /></span> 
                        <h2>Error Boundary</h2>
                    </div>
                    <div className="card-text">
                        <p>A single page with the implementation of error boundary</p>
                    </div>
                    <div className="card-link">
                    <Link to ='/error'>Visit site</Link>
                    </div>
                </div>
                <div className="project-three card">
                <div className="card-header">
                       <span><TbFaceIdError /></span> 
                        <h2>404 page</h2>
                    </div>
                    <div className="card-text">
                        <p>A single page with the implementation of 404 page</p>
                    </div>
                    <div className="card-link">
                        <Link to ='/page'>Visit site</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
   