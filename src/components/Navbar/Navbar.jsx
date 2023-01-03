import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import './Navbar.css'
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

export default function Navbar(){
   return(
   <div className="navbar" id='nav'>
    <div className="nav-wrapper">
      <div className="nav-wrapper-left">
        <div className="nav-name">Queen <br/> Cobham</div>
      </div>
      <div className="nav-wrapper-right">
        <ul className='mobile'>
        <Link  to='#nav' smooth><AiFillHome /></Link>
        <Link  to='#about' smooth><SiAboutdotme /></Link>
        <Link  to='#project' smooth><BsFillBriefcaseFill /></Link>
        {/* <Link  to='#contact' smooth><MdContactPhone /></Link> */}
        </ul>

        <ul className='desktop'>
        <Link spy ={true} to='#nav' smooth activeClass="activeClass"> Home</Link>
        <Link spy ={true} to='#about' smooth>About</Link>
        <Link spy ={true} to='#project' smooth>Portfolio</Link>
        {/* <Link spy ={true} to='#contact' smooth>Contact</Link> */}
        </ul>
      </div>
   </div>
   </div>
   )
}