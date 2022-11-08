import React from 'react'
import {useEffect, useState} from 'react'
import './Github.css'
import {GoLocation, GoCalendar} from 'react-icons/go'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet-async'

export default function Github(){
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState();
    const [bio, setBio] = useState();
    const [location, setLocation] = useState();
    const [created, setCreated] = useState();
    const [followers, setFollowers] = useState();
    const [following, setFollowing] = useState();
    const [repo, setRepo] = useState();
    
  
    useEffect(() => {
      fetch("https://api.github.com/users/queencobham")
        .then((res) => res.json())
        .then(
          (result) => {
            setAvatar(result.avatar_url);
            setName(result.name);
            setBio(result.bio)
            setLocation(result.location)
            setCreated(result.created_at.slice(0, 10))
            setFollowers(result.followers)
            setFollowing(result.following)
            setRepo(result.public_repos)
          },
          (error) => {
            console.log(error);
          }
        );
    }, []);
    return (
      <>
      <Helmet>
        <title>Github page</title>
        <meta name="description" content='github profile'/>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="canonical" href="/github" />
      </Helmet>
      
      <div className="github-wrapper">
        <div className="github-img">
            <img src={avatar} alt="my-image"/>
        </div>
        <div className="github-name">
            <h1>{name}</h1>
            <h2>{bio}</h2>
        </div>
        <div className="github-lo-cr">
            <div className="location">
            <span><GoLocation /></span><p>{location}</p>
            </div>
            <div className="created">
            <span><GoCalendar /></span><p>Joined {created}</p>
            </div>
        </div>
        <div className="github-cards">
         <div className="repository">
           <span>{repo}</span>
           <p>Repositories</p>
          </div>
          <div className="followers">
            <span>{followers}</span>
            <p>Follower</p>
          </div>
          <div className="following">
            <span>{following}</span>
            <p>Following</p>
          </div>
        </div>
        <div className="github-repo-link">
        <Link to ='/repo'>View Repo</Link>
        </div>
      </div>
      </>
    );
  }
