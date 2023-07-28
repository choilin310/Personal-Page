import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work"
import Testimonials from "./components/testimonials/Testimonials";
import Footer from './components/footer/Footer';
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <>
    <Header />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <Testimonials />
      <Work />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App
