
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Repo.css"
import { useState } from "react";
import Pagination from "./Pagination";
import RepoList from "./RepoList";

export default function Repos() {
  const [repos, setRepos] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8); 
  const [loading, setLoading] = useState(true);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = repos.slice(firstPostIndex, lastPostIndex);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/queencobham/repos`)
      .then((res) => res.json())
      .then((userRepos) => {
        setRepos(userRepos);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
     {loading ? <p className="loading">Loading....</p> : 
     <>
     <nav>
        <Link to="/">Home</Link>
        <Link to="/github">Back</Link>
      </nav>
      <section className="bbb">
        <h1>My Repos</h1>
        <div className="repos-wrapper">
        <RepoList repos={currentPosts} />
        </div>
        <Outlet />
        <Pagination
          totalPosts={repos.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
     </>
      }
    </>
  );
}
