import React, { useState } from 'react';
import { Calendar, Building2, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceData {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  expanded: boolean;
}

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceData[]>([
    {
      id: 1,
      role: "Rijks-I Traineeship",
      company: "Rijkswaterstaat",
      period: "2023 - Present",
      description: "Leading AI and NLP initiatives to improve information retrieval and data accessibility within the Dutch government's water management infrastructure.",
      achievements: [
        "Developed a knowledge graph-based search system that reduced time to locate critical policy data by 80%",
        "Created an automated information extraction pipeline for technical documents using LLMs",
        "Designed and implemented multilingual data classification models with 95% accuracy",
        "Developed dashboards for real-time monitoring of data quality metrics"
      ],
      expanded: false
    },
    {
      id: 2,
      role: "Linked Data Consultant",
      company: "Taxonic",
      period: "2021 - 2023",
      description: "Designed and implemented knowledge graph solutions for enterprise clients, focusing on data integration and semantic enrichment.",
      achievements: [
        "Built ontology-based data access systems that integrated 5+ disparate data sources",
        "Led knowledge engineering workshops for cross-functional teams",
        "Implemented SPARQL-based query interfaces that improved data access response times by 65%",
        "Developed ETL pipelines for knowledge graph population from heterogeneous data sources"
      ],
      expanded: false
    },
    {
      id: 3,
      role: "Mathematics Tutor",
      company: "StudyWorks",
      period: "2019 - 2021",
      description: "Provided personalized mathematics instruction to high school and university students.",
      achievements: [
        "Developed custom teaching materials for students with varying learning needs",
        "Tutored 20+ students with an average grade improvement of 1.5 points",
        "Created analytical problem-solving frameworks that improved student comprehension",
        "Implemented data-driven assessment methods to track student progress"
      ],
      expanded: false
    },
    {
      id: 4,
      role: "Teaching Assistant",
      company: "Utrecht University",
      period: "2018 - 2019",
      description: "Supported professors in delivering AI and programming courses to undergraduate students.",
      achievements: [
        "Led tutorial sessions for 'Introduction to Artificial Intelligence' course",
        "Graded assignments and provided detailed feedback for over 100 students",
        "Developed supplementary learning materials for complex algorithms",
        "Mentored students on research projects in NLP and machine learning"
      ],
      expanded: false
    },
    {
      id: 5,
      role: "Operational Management Assistant",
      company: "GlobalSign",
      period: "2016 - 2017",
      description: "Supported operational workflows and data management processes for digital certificate issuance.",
      achievements: [
        "Automated routine reporting processes, saving 15+ hours weekly",
        "Improved data validation procedures resulting in 40% fewer errors",
        "Collaborated with IT team to optimize database queries for faster processing",
        "Implemented data visualization dashboards for operational metrics"
      ],
      expanded: false
    }
  ]);

  const toggleExpand = (id: number) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, expanded: !exp.expanded } : exp
    ));
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Professional Experience</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900 transform -translate-x-1/2 mt-5"></div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center text-slate-400 mb-2">
                          <Building2 size={16} className="mr-1" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center text-slate-500 text-sm mb-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleExpand(exp.id)}
                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                        aria-label={exp.expanded ? "Collapse details" : "Expand details"}
                      >
                        {exp.expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    <p className="text-slate-400 mb-4">{exp.description}</p>

                    {exp.expanded && (
                      <div className="space-y-2 mt-4 border-t border-slate-700/50 pt-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-cyan-500 mr-2">•</span>
                              <span className="text-slate-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;