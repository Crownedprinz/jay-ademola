import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Code, 
  Brain, 
  Server, 
  Cloud, 
  Database, 
  Tool
} from 'lucide-react';

const SkillsSection = ({ profileData }) => {
  const skillCategories = {
    programming: { icon: Code, color: 'bg-blue-100 text-blue-800', title: 'Programming' },
    ai: { icon: Brain, color: 'bg-purple-100 text-purple-800', title: 'AI/ML' },
    backend: { icon: Server, color: 'bg-green-100 text-green-800', title: 'Backend' },
    cloud: { icon: Cloud, color: 'bg-orange-100 text-orange-800', title: 'Cloud & DevOps' },
    database: { icon: Database, color: 'bg-red-100 text-red-800', title: 'Database' },
    tools: { icon: Tool, color: 'bg-gray-100 text-gray-800', title: 'Tools' }
  };

  const skillsByCategory = profileData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-ibm-plex">
            Professional Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build innovative AI/ML solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, skills]) => {
            const categoryInfo = skillCategories[category];
            const IconComponent = categoryInfo.icon;
            
            return (
              <Card key={category} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${categoryInfo.color.split(' ')[0]} ${categoryInfo.color.split(' ')[1].replace('text-', 'bg-').replace('800', '200')}`}>
                    <IconComponent className={`w-5 h-5 ${categoryInfo.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-ibm-plex">
                    {categoryInfo.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`${categoryInfo.color} hover:opacity-80 transition-opacity cursor-default`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Skills - Similar to the reference site's skill icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 font-ibm-plex">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'PyTorch', icon: '🔥' },
              { name: 'LangChain', icon: '🔗' },
              { name: 'Hugging Face', icon: '🤗' },
              { name: 'FastAPI', icon: '⚡' },
              { name: 'Azure', icon: '☁️' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'Docker', icon: '🐳' }
            ].map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-default group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;