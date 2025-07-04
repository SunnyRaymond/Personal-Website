import React, { useState, useEffect } from "react";
import Preloader from "./primary/Pre";
import Navbar from "../components/common/Navbar";
import About from "./about/About";
import Projects from "./project/Projects";
import Resume from "./resume/Resume";
import Home from "./home/Home";
import Comment from "./comment/Comment";
import Footer from "../components/common/Footer";
import ScrollToTop from "../effect/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FadeIn from "../effect/FadeIn";
import ChatBot from "react-chatbotify";
import Love from "./love/Love";

function App() {
  const [load, updateLoad] = useState(true);
  window.addEventListener("scroll", FadeIn);
  window.addEventListener("resize", FadeIn);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/love" element={<Love />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
