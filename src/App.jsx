import Home from "./Home"
import Page from "./components/Page404/Page"
import Github from "./components/Github/Github"
import Repo from "./components/Repo/Repo"
import Post from "./components/Repo/Post"
import ErrorPage from "./components/ErrorBoundary/ErrorPage"
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <> 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='github' element={<Github />} />
      <Route path='repo' element={<Repo />} />
      <Route path="/repo/:repoName" element={<Post />} />
      <Route/>
      <Route path="error" element={<ErrorPage />} />
      <Route path='*' element={<Page />} />
    </Routes>

    </>
  )
}

export default App
