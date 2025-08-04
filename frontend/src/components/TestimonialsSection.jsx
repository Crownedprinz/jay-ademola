import React from 'react';
import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = ({ profileData }) => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-ibm-plex">
            What People Say About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from colleagues, supervisors, and collaborators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 font-ibm-plex">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-blue-600 font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional testimonial banner */}
        <div className="mt-12">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
            <blockquote className="text-lg md:text-xl leading-relaxed mb-4 italic">
              "John's expertise in AI/ML development and his dedication to creating human-friendly AI interactions 
              make him an exceptional engineer and collaborator."
            </blockquote>
            <div className="font-semibold">
              — Collective feedback from academic and industry peers
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;