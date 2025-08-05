import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MapPin, Calendar, Building2, GraduationCap } from 'lucide-react';

const ExperienceSection = ({ profileData }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-ibm-plex">
            Qualifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My educational background and professional experience in AI/ML engineering
          </p>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span>Experience</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-6">
            {profileData.education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-ibm-plex">
                          {edu.institution}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 mb-1">
                          {edu.degree}
                        </p>
                        {edu.focus && (
                          <p className="text-gray-600 mb-2">{edu.focus}</p>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700 font-semibold">{edu.details}</p>
                      {edu.additional && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {edu.additional}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            {profileData.experience.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-ibm-plex">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 mb-1">
                          {exp.position}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;