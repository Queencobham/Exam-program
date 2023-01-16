import React from 'react'
import {useEffect, useState} from 'react'
import './Github.css'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet-async'

export default function Github(){
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState();
    const [bio, setBio] = useState();
    const [followers, setFollowers] = useState();
    const [following, setFollowing] = useState();
    const [repo, setRepo] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://api.github.com/users/queencobham")
        .then((res) => res.json())
        .then(
          (result) => {
            setAvatar(result.avatar_url);
            setName(result.name);
            setBio(result.bio)
            setFollowers(result.followers)
            setFollowing(result.following)
            setRepo(result.public_repos)
            setLoading(false)
          },
         
          (error) => {
            console.log(error);
          }
        );
    }, []);
    return (
      <>
       <Helmet>
        <title>Github Profile</title>
        <meta name="description" content='github profile'/>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="canonical" href="/github" />
       </Helmet>
       
       {loading ? <p className='loading'>Loading....</p> :
       <>
       <nav>
        <Link to="/">Go back to the Homepage</Link>
       </nav>
        <div className="github-wrapper">
        <div className="github-img">
            <img src={avatar} alt="my-image"/>
        </div>
        <div className="github-name">
            <h1>{name}</h1>
            <h2>{bio}</h2>
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
       }
      
      </>
    );
}
