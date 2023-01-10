

import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import "./Repo.css"

const RepoList = ({repos}) => {
  const [search, setSearch] = useState("")

  return (
    <div className='repolist-wrapper'>
    <div className="search">
    <input type="text" placeholder="🔍 Find a repository..." onChange={(e) => setSearch(e.target.value)} />
    </div>
    <div className='main'>
        {repos
        .filter((value) => {
          if (search === ""){
            return value;
          } else if (
            value.name.toLowerCase().includes(search.toLowerCase())
          ){
            return value;
          }
        })
        .map((repo) => {
              return (
                <div key={repo.name} className="aaa">
                <ul>
                <li>
                <span><RiGitRepositoryLine/></span><Link to={`/repo/${repo.name}`}>{repo.name}</Link>
                </li>
                <li className='public'>{repo.visibility}</li>
                </ul> 
                </div>
              );
            })
            }
    </div>
    </div>
  )
}

export default RepoList
