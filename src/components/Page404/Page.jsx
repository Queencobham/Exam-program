import React from 'react'
import './Page.css'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet-async'

export default function Page(){
    return(
        <>
        <Helmet>
        <title>404 page</title>
        <meta name="description" content='404 page'/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="canonical" href="/page" />
      </Helmet>
        <div className="page-not-found">
        <div className="page-text-top">
          <h1>Oops!</h1>
          <p>404 - page not found</p>
        </div>
        <div className="page-text-bottom">
          <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
          <Link to="/">Go to Homepage</Link>
        </div>
      </div> 
      </>
    )
}