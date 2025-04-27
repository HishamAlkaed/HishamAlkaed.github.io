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
  paper?: string;
}

const Projects: React.FC = () => {
  const [projects] = useState<ProjectData[]>([
    {
      id: 1,
      title: "From Words to Images: Exploring the Crucial Role of Textual Modality in Multimodal Hate Speech Detection.",
      description: "Engineered a multimodal hate speech detection system for memes, fusing text embeddings with visual embeddings via late fusion and utilizing ensemble modeling. ",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      tags: ["Python", "NLP", "LLMs", "Fine-Tuning", "ML", "Ensemble", "Image Processing", "ResNet", "Late Fusion", "Early Fusion", ],
      githubLink: "https://github.com/HishamAlkaed/Master_Thesis",
      paper: "https://github.com/HishamAlkaed/Master_Thesis/raw/main/Thesis_paper_Hisham_Alkaed.pdf"
    },
    {
      id: 2,
      title: "Entity Prediction Tasks with an open-world assumption and noisy environment.",
      description: "Contributed to a research project on entity prediction tasks, focusing on open-world assumptions and noisy environments. Developed a 20-questions game using Python, Yago knowledge graph and SPARQL queries.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      tags: ["SPARQL", "Python", "Knowledge Graphs", "GraphDB", "Protege", "RDF"],
      githubLink: "https://github.com/hasan-sh/20-questions"
    },
    {
      id: 3,
      title: "Book Recommender application.",
      description: "Used SPARQL, GraphDB, SQL and React to develop a modular book recommender application that can be connected to any knowledge graph.",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
      tags: ["SPARQL", "Python", "Knowledge Graphs", "GraphDB", "Protege", "RDF", "SQL", "React"],
      githubLink: "https://github.com/HishamAlkaed/RecommendingBooks"
    },
    {
      id: 4,
      title: "PDFs to Insights: Infromation Exraction Pipeline.",
      description: "Completed an 8-month project involving web crawling, scraping, PDF-to-JSON text parsing, data anonymization, and integration with Elasticsearch to structure and search large volumes of unstructured data. Developed two interactive dashboards using Streamlit and Elastic Search, designed for reusability and modularity across different datasets and use cases.",
      image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316/free-photo-of-options-on-device-screen.jpeg",
      tags: ["Python", "NLP", "Information Extraction", "Web Scraping", "Streamlit", "Elasticsearch", "Data Anonymization"],
    },
    {
      id: 5,
      title: "Simulation of Covid19 infection behaviour",
      description: "Using Python and Pygame an engine has been made that simulates the behaviour of Covid19 in infecting people.",
      image: "https://images.pexels.com/photos/7722850/pexels-photo-7722850.jpeg",
      tags: ["Python", "Pygame", "Simulation"],
      githubLink: "https://github.com/HishamAlkaed/embodied_ai"
    },
    
    // {
    //   id: 6,
    //   title: "Evolutionary Algorithm Simulator",
    //   description: "Educational tool that visualizes different evolutionary algorithms solving optimization problems. Includes genetic algorithms, particle swarm optimization, and simulated annealing.",
    //   image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    //   tags: ["Evolutionary Algorithms", "JavaScript", "React", "Visualization", "Education"],
    //   githubLink: "https://github.com/hishamalkaed/evo-simulator",
    //   demoLink: "https://evo-sim.hishamalkaed.com"
    // }
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
                  {project.paper && (
                    <a 
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Paper
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