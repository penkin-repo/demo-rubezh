import React from 'react';
import { PROJECTS } from '../constants';
import { MapPin } from 'lucide-react';

const Projects = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Наши работы</h1>
          <p className="mt-2 text-lg text-gray-600">Примеры реализованных проектов ООО Рубеж</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex justify-between items-end">
                        <div>
                             <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                             <div className="flex items-center text-gray-300 text-sm">
                                <MapPin className="h-4 w-4 mr-1 text-brand-cyan" />
                                {project.location}
                             </div>
                        </div>
                        <span className="text-brand-cyan font-bold text-lg">{project.year}</span>
                    </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;