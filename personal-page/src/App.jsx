import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Work />
          <Testimonials />
        </main>
        <Footer />
        <ScrollUp />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
