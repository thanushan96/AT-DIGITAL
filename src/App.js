import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ContentSection from "./Components/ContentSection";
import ContentSection2 from "./Components/ContentSection2";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <ContentSection />
      <ContentSection2 />
      <Footer />
    </div>
  );
}
