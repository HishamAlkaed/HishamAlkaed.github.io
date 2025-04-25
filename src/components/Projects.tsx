import React, { useState } from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const [projects] = useState<ProjectData[]>([
    {
      id: 1,
      title: "Knowledge Graph-Based Search Engine",
      description: "Developed a semantic search engine powered by knowledge graphs that improves search accuracy by understanding entity relationships and context. Built using Python, RDF technologies, and SPARQL.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      tags: ["Knowledge Graphs", "SPARQL", "Python", "Semantic Web"],
      githubLink: "https://github.com/hishamalkaed/kg-search-engine",
      demoLink: "https://kg-search-demo.hishamalkaed.com"
    },
    {
      id: 2,
      title: "Multilingual NLP Document Classifier",
      description: "Created a machine learning system that automatically classifies documents in multiple languages (English, Dutch, Arabic). Implemented using transformers with fine-tuning for domain-specific terminology.",
      image: "https://images.pexels.com/photos/4551916/pexels-photo-4551916.jpeg",
      tags: ["NLP", "Transformers", "Multilingual", "PyTorch", "Document Classification"],
      githubLink: "https://github.com/hishamalkaed/multilingual-classifier"
    },
    {
      id: 3,
      title: "Policy Data Dashboard",
      description: "Interactive visualization dashboard for monitoring and analyzing policy data metrics. Built with Python, Streamlit, and D3.js for dynamic data exploration and trend analysis.",
      image: "https://images.pexels.com/photos/920116/pexels-photo-920116.jpeg",
      tags: ["Data Visualization", "Python", "Streamlit", "D3.js", "Analytics"],
      demoLink: "https://policy-dashboard.hishamalkaed.com"
    },
    {
      id: 4,
      title: "ETL Pipeline for Knowledge Graphs",
      description: "Developed an Extract-Transform-Load pipeline that converts structured and unstructured data into knowledge graph triples. Handles diverse data sources with validation and quality checks.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      tags: ["ETL", "Python", "RDF", "Data Integration", "Knowledge Engineering"],
      githubLink: "https://github.com/hishamalkaed/knowledge-graph-etl"
    },
    {
      id: 5,
      title: "Automated Document Information Extraction",
      description: "AI system that extracts structured information from technical documents using NLP and computer vision. Processes PDFs, images, and text documents with high accuracy.",
      image: "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg",
      tags: ["NLP", "OCR", "Information Extraction", "TensorFlow", "Python"],
      githubLink: "https://github.com/hishamalkaed/doc-extraction",
      demoLink: "https://extract.hishamalkaed.com"
    },
    {
      id: 6,
      title: "Evolutionary Algorithm Simulator",
      description: "Educational tool that visualizes different evolutionary algorithms solving optimization problems. Includes genetic algorithms, particle swarm optimization, and simulated annealing.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      tags: ["Evolutionary Algorithms", "JavaScript", "React", "Visualization", "Education"],
      githubLink: "https://github.com/hishamalkaed/evo-simulator",
      demoLink: "https://evo-sim.hishamalkaed.com"
    }
  ]);

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Featured Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900/60 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-800/50 hover:shadow-xl hover:shadow-blue-900/10 hover:border-slate-700/50 transition-all duration-300 h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-slate-800 text-cyan-400"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3 mt-auto">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  )}
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;