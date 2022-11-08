

import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { RiGitRepositoryLine } from "react-icons/ri";
import "./Repo.css"

const RepoList = ({repos}) => {
  return (
    <div className='repolist-wrapper'>
    <div className='main'>
        {repos.map((repo) => {
              return (
                <div key={repo.name} className="aaa">
                <ul>
                <li>
                <span><RiGitRepositoryLine/></span><Link to={`/repo/${repo.name}`}>{repo.name}</Link>
                </li>
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
