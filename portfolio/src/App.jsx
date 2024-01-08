import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Home3d from "./components/Home";
import "./App.css";
import transition from "./utils/transition";

function App() {
  const location = useLocation();
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname} initial={false}>
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
