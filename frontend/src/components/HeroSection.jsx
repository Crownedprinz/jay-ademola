import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Mail, ArrowRight } from 'lucide-react';

const HeroSection = ({ profileData }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg text-gray-600 font-ibm-plex">Hello</span>
                <div className="w-8 h-px bg-blue-600"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-ibm-plex">
                I'm <span className="text-blue-600">{profileData.name.split(' ')[0]}</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-normal">
                  {profileData.title}
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {profileData.heroDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  AI Enthusiast
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  Prompt Engineer
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  NLP Specialist
                </Badge>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-6">
                "{profileData.quote}"
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 font-ibm-plex">4.0</div>
                <div className="text-sm text-gray-600">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 font-ibm-plex">6+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 font-ibm-plex">4+</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/bloydintelligi/image/upload/v1754363471/Jay/IMG_0498_gnbsjx.jpg"
                  alt={profileData.name}
                  className="w-80 h-96 object-cover rounded-xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;