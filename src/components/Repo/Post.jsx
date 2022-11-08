import * as React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Repo() {
  const { repoName } = useParams();
  const [repo, setRepo] = React.useState(null);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    console.log(repoName);
    fetch(`https://api.github.com/repos/queencobham/${repoName}`)
      .then((res) => res.json())
      .then((userRepo) => {
        setRepo(userRepo);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [repoName]);

  return (
    <>
     {loading ? <p className="loading">Loading....</p> : 
     <>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/repo">Back</Link>
      </nav>
    <section className="post-wrapper">
      <h1>More Info:</h1>
      <div className="post-info">{repo!=null ? (
        <>
        <p>Description: {repo.description==null?"None" : (repo.description)}</p>
        <p>Language used: {repo.language}</p>
        <p>Size: {repo.size} KB</p>
        <p>Date created: {repo.created_at.slice(0, 10)}</p>
        <p><a href={`${repo.html_url}`}>Click to view repo on github</a></p>
        </>
      ) : ""}
      </div>
    </section> 
    </>
    }
    </>
  );
}
