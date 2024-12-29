import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience'
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    title: 'Secure',
    description: 'Enterprise-grade security for your peace of mind'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
    title: 'Responsive',
    description: 'Perfect experience on any device'
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    title: 'Global Scale',
    description: 'Ready to serve users worldwide'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600">
            Discover the advantages that set us apart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}