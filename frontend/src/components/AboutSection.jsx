import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download, MapPin, Mail, Phone, User } from 'lucide-react';

const AboutSection = ({ profileData }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-ibm-plex">
                {profileData.aboutTitle}
              </h2>
              
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                {profileData.aboutDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Personal Details */}
            <Card className="p-6 bg-gray-50 border-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Name:</div>
                    <div className="font-semibold text-gray-900">{profileData.personalDetails.name}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-600 flex items-center justify-center">
                    🎓
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Status:</div>
                    <div className="font-semibold text-gray-900">{profileData.personalDetails.age}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">From:</div>
                    <div className="font-semibold text-gray-900">{profileData.personalDetails.from}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Email:</div>
                    <div className="font-semibold text-gray-900 text-sm">{profileData.personalDetails.email}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Download Resume Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </Button>
          </div>

          {/* Right Content - Achievements */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-ibm-plex">Key Achievements</h3>
              <div className="space-y-4">
                {profileData.achievements.map((achievement, index) => (
                  <Card key={index} className="p-4 border-l-4 border-l-blue-600 bg-blue-50/50 border-blue-100">
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* AI Fun Section - Similar to "What AI thinks of me" */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-ibm-plex">AI/ML Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm font-semibold text-gray-700">Prompt Engineering</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🧠</div>
                  <div className="text-sm font-semibold text-gray-700">Neural Networks</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-sm font-semibold text-gray-700">NLP Systems</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="text-sm font-semibold text-gray-700">RAG Systems</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;