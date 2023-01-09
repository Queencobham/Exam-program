import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import {Helmet} from "react-helmet-async"
      

export default function Home() {
  return (
   <>
     <Helmet>
        <title>Home page</title>
        <meta name="description" content='Home page'/>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="canonical" href="/" />
      </Helmet>
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
   </>
  )
}