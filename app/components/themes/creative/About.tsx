'use client';

import { skillCategories } from '@/app/lib/data/skills';

// Service cards data
const services = [
  {
    id: 'backend',
    icon: '</> ',
    title: 'Backend Development',
    description: "I'm expert in web & system development",
    skills: ['Node.js', 'PHP/Laravel', 'Go', 'Python', 'API Design'],
  },
  {
    id: 'devtools',
    icon: '⚡',
    title: 'Developer Tools',
    description: "Building tools that make developers' lives easier",
    skills: ['CLI Tools', 'Rust Libraries', 'VS Code Extensions', 'Automation'],
  },
  {
    id: 'architecture',
    icon: '◇',
    title: 'System Architecture',
    description: "Designing scalable and maintainable systems",
    skills: ['Microservices', 'Database Design', 'Cloud Architecture', 'Performance'],
  },
];

export default function About() {
  return (
    <section 
      id="about"
      className="w-full px-6 lg:px-12 py-16 lg:py-24"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            All kinds of coding<br/>
            <span style={{ fontStyle: 'italic' }}>solutions.</span>
          </h2>
          <a 
            href="#projects"
            className="text-sm no-underline"
            style={{ color: 'var(--color-accent)' }}
          >
            Explore All →
          </a>
        </div>
        
        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex flex-col gap-6 p-8 rounded-2xl"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)'
              }}
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 flex items-center justify-center rounded-xl text-xl"
                style={{ 
                  backgroundColor: 'var(--color-accent-secondary)',
                  color: '#fff'
                }}
              >
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 
                className="text-xl"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)'
                }}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {service.description}
              </p>
              
              {/* Skills list */}
              <div className="flex flex-col gap-2 flex-1">
                {service.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <span style={{ color: 'var(--color-accent-secondary)' }}>✓</span>
                    <span 
                      className="text-sm"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Arrow link */}
              <a 
                href="#projects"
                className="w-10 h-10 flex items-center justify-center rounded-full no-underline transition-all"
                style={{ 
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)'
                }}
              >
                ↗
              </a>
            </div>
          ))}
        </div>
        
        {/* Bio Section */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl"
          style={{ 
            backgroundColor: 'var(--color-bg-tertiary)'
          }}
        >
          {/* Main bio - spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 
              className="text-2xl lg:text-3xl"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)'
              }}
            >
              About Me
            </h3>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Software engineer blending engineering discipline with startup execution speed. 
              Known for taking products from concept to scale — from 0 to 100,000+ users — 
              while ensuring security, maintainability, and developer efficiency.
            </p>
            <p 
              className="leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Currently serving as Founding Engineer at AwaDoc, an AI-driven health assistant 
              empowering Nigerians to access reliable medical insights via WhatsApp. Beyond my 
              professional work, I'm passionate about open source development.
            </p>
          </div>
          
          {/* Stats sidebar */}
          <div className="flex flex-col gap-6">
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <span 
                className="text-4xl font-bold"
                style={{ color: 'var(--color-accent)' }}
              >
                6+
              </span>
              <p 
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Years Experience
              </p>
            </div>
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <span 
                className="text-4xl font-bold"
                style={{ color: 'var(--color-accent)' }}
              >
                100k+
              </span>
              <p 
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Users Reached
              </p>
            </div>
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
              <span 
                className="text-4xl font-bold"
                style={{ color: 'var(--color-accent)' }}
              >
                12k+
              </span>
              <p 
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Package Downloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
