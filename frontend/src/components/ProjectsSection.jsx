import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSection = ({ profileData }) => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-ibm-plex">
            Recent Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of AI/ML projects that demonstrate my expertise in building intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors font-ibm-plex">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    {project.liveUrl !== '#' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </Button>
                    )}
                    
                    {project.githubUrl !== '#' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center space-x-2 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Button>
                    )}

                    <div className="flex-grow"></div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-ibm-plex">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, especially in AI/ML development, 
              prompt engineering, and building intelligent systems that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                View All Projects
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;