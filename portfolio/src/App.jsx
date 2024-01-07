import { AboutMe, Footer, NavBar, Projects, Experience, Home3d } from "./index";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home3d />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
