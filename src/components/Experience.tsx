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
      company: "Rijksoverheid",
      period: "Sept 2024 - Present",
      description: "Leading AI and NLP initiatives to improve data accessibility and information retrieval within large governmental datasets.",
      achievements: [
        "Completed an 8-month project involving web crawling, scraping, PDF-to-JSON text parsing, data anonymization, and integration with Elasticsearch to structure and search large volumes of unstructured data",
        "Developed two interactive dashboards using Streamlit and Elastic Search, designed for reusability and modularity across different datasets and use cases",
        "Architected a flexible, modular data pipeline to enable scalability and adaptability for future projects across departments",
        "Enhanced internal access to complex data by building tools aimed at making hidden insights easily discoverable within vast document collections"
      ],
      expanded: false
    },
    {
      id: 2,
      role: "Linked Data Consultant",
      company: "Taxonic",
      period: "June 2024 - Aug 2024",
      description: "Designed and implemented knowledge graph solutions for enterprise clients, focusing on data integration and semantic enrichment",
      achievements: [
        "Contributed to SPARQL query development for a large-scale medical project (Kik-V) involving 500+ connected hospitals, enabling semantic data access and integration for a major governmental healthcare organization",
        "Contributed to a research experiment exploring the use of Retrieval-Augmented Generation (RAG) systems for RDF-based knowledge graphs, investigating cutting-edge methods for enhancing language models with structured data"
      ],
      expanded: false
    },
    {
      id: 3,
      role: "Mathematics Tutor",
      company: "Johan de Witt Scholengroep",
      period: "Dec 2023 - May 2024",
      description: "Provided personalized mathematics instruction to high school and university students",
      achievements: [
        "Developed custom teaching materials for students with varying learning needs",
        "Tutored 50+ students with an average grade improvement of 1.0 - 1.5 points",
        "Focused on childeren lacking motivations and self-confidence, helping them to achieve their goals",
      ],
      expanded: false
    },
    {
      id: 4,
      role: "Teaching Assistant",
      company: "Vrije Universiteit Amsterdam",
      period: "Sept 2022 - July 2023",
      description: "Supported professors in delivering AI and programming courses to undergraduate students",
      achievements: [
        "Led tutorial sessions for multiple courses: Introduction to Data Science, Databases, Intelligent Systems and Computational Intelligence",
        "Graded assignments and provided detailed feedback for over 100 students",
        "Developed supplementary learning materials for complex algorithms",
        "Mentored students on research projects in machine learning"
      ],
      expanded: false
    },
    {
      id: 5,
      role: "Operational Management Assistant",
      company: "Nationale Nederlanden",
      period: "Aug 2021 - Nov 2021",
      description: "Supported operational workflows and data management processes",
      achievements: [
        "Automated dataworkflows using Power BI",
        "Created room reservation system for meeting rooms"
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