import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

// Import components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Import mock data
import profileData from "./data/mock";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header profileData={profileData} />
      
      {/* Main Content */}
      <main>
        <HeroSection profileData={profileData} />
        <AboutSection profileData={profileData} />
        <ExperienceSection profileData={profileData} />
        <SkillsSection profileData={profileData} />
        <ProjectsSection profileData={profileData} />
        <TestimonialsSection profileData={profileData} />
        <ContactSection profileData={profileData} />
      </main>
      
      {/* Footer */}
      <Footer profileData={profileData} />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;