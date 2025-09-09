import React from 'react';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = ({ profileData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Column */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold font-ibm-plex">
                {profileData.name}
              </h3>
              <p className="text-gray-300 max-w-md leading-relaxed">
                AI/ML-focused Software Engineer specializing in prompt engineering, NLP, and RAG systems. 
                Passionate about creating intelligent systems that make a difference.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={profileData.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={profileData.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${profileData.contact.email}`}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-ibm-plex">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Experience', id: 'experience' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-ibm-plex">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">{profileData.contact.email}</span>
                </p>
                <p className="flex items-start space-x-2">
                  <div className="w-4 h-4 mt-1 flex-shrink-0 text-center">📍</div>
                  <span className="text-sm">{profileData.contact.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} {profileData.name}. Made with{' '}
              <Heart className="w-4 h-4 inline-block text-red-500 mx-1" />{' '}
              and passion for AI/ML
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;