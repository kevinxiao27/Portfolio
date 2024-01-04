import { AboutMe, Footer, NavBar, Projects, Experience, Home} from "./index"
import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/experience" element={<Experience />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
