import React, { useEffect, useRef } from 'react';

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
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "SPARQL", level: 80 },
        { name: "Prolog", level: 75 },
        { name: "GOAL", level: 70 }
      ]
    },
    {
      name: "AI & Machine Learning",
      skills: [
        { name: "Natural Language Processing", level: 95 },
        { name: "Large Language Models", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "Transformers", level: 85 }
      ]
    },
    {
      name: "Tools & Libraries",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "Hugging Face", level: 85 },
        { name: "Pandas", level: 95 }
      ]
    },
    {
      name: "Data Engineering",
      skills: [
        { name: "Data Cleaning", level: 90 },
        { name: "ETL Pipelines", level: 85 },
        { name: "Knowledge Graphs", level: 95 },
        { name: "Data Visualization", level: 80 },
        { name: "Linked Data Platforms", level: 85 }
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
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills & Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" ref={chartRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300"
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
                          background: `linear-gradient(90deg, var(--tw-gradient-from, #06b6d4), var(--tw-gradient-to, #3b82f6) ${skill.level}%, transparent ${skill.level}%)`,
                          width: '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6 text-white">Other Technical Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Mining", "Information Retrieval", "Recommender Systems", "BERT", "GPT Models",
              "Docker", "Git", "Semantic Web", "Ontology Engineering", "Prompt Engineering",
              "Neo4j", "PostgreSQL", "Text Classification", "Named Entity Recognition", "Sentiment Analysis",
              "Web Scraping", "REST APIs", "Graph Databases", "Data Annotation", "Model Deployment"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 text-sm border border-slate-700/50 hover:bg-slate-700/70 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;