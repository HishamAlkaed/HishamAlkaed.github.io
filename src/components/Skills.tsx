import React, { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 85 },
        { name: "SPARQL", level: 85 },
        { name: "R", level: 65 },
        { name: "Prolog", level: 60 },
        { name: "GOAL", level: 60 },
        { name: "MATLAB", level: 60 }
      ]
    },
    {
      name: "AI & Machine Learning",
      skills: [
        { name: "Natural Language Processing", level: 95 },
        { name: "Large Language Models", level: 95 },
        { name: "Deep Learning", level: 85 },
        { name: "Computer Vision", level: 85 },
        { name: "Transformers", level: 90 }
      ]
    },
    {
      name: "Tools & Libraries",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "Git", level: 95 },
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 85 },
        { name: "SKlearn", level: 90 },
        { name: "Hugging Face", level: 90 },
        { name: "Streamlit", level: 85 },
        { name: "Elasticsearch", level: 75 },
        { name: "Docker", level: 70 },
      ]
    },
    {
      name: "Data Engineering",
      skills: [
        { name: "Data Cleaning", level: 90 },
        { name: "ETL Pipelines", level: 85 },
        { name: "Knowledge Graphs", level: 95 },
        { name: "Data Visualization", level: 95 },
        { name: "Linked (open) Data Platforms", level: 85 },
        { name: "Fuseki", level: 85 },
        { name: "Protege", level: 85 },
        { name: "GraphDB", level: 85 },
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!chartRef.current) return;
      
      const chartPosition = chartRef.current.getBoundingClientRect();
      
      // If chart is in view
      if (chartPosition.top < window.innerHeight && chartPosition.bottom > 0) {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach((bar) => {
          if (bar instanceof HTMLElement) {
            bar.style.width = bar.dataset.level + '%';
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load to handle case when component is in view on initial render
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatedSection id="skills" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills & Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" ref={chartRef}>
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedCard
              key={categoryIndex}
              className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/30 hover:shadow-lg hover:shadow-blue-900/10"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-white">{category.name}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar h-full w-0 rounded-full transition-all duration-1000 ease-out"
                        data-level={skill.level}
                        style={{
                          background: `linear-gradient(90deg, 
                            rgba(59, 130, 246, 0.8) 0%,
                            rgba(6, 182, 212, 0.8) 50%,
                            rgba(34, 211, 238, 0.8) 100%)`,
                          width: '0%',
                          boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)',
                          animation: 'pulse 2s infinite'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6 text-white">Other Technical Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Mining", "Information Retrieval", "Recommender Systems", "BERT", "GPT Models",
              "Docker", "Git", "Semantic Web", "Ontology Engineering", "Prompt Engineering",
              "Neo4j", "PostgreSQL", "Text Classification", "Named Entity Recognition", "Sentiment Analysis",
              "Web Scraping", "REST APIs", "npm", "Graph Databases", "Data Annotation", "Model Deployment",
              "Gensim", "spaCy", "NLTK", "Stanza", 
              "Calculus", "Linear Algebra", "Statistics" 
            ].map((skill, index) => (
              <AnimatedCard
                key={index}
                className="px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 text-sm border border-slate-700/50 hover:bg-slate-700/70"
              >
                {skill}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
            }
            50% {
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
            }
            100% {
              box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
            }
          }
          .skill-bar {
            position: relative;
            overflow: hidden;
          }
          .skill-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            animation: shimmer 2s infinite;
          }
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </AnimatedSection>
  );
};

export default Skills;