import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Education & Certifications</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Formal Education */}
          <div className="bg-slate-800/30 rounded-xl p-8 backdrop-blur-sm border border-slate-700/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
            <h3 className="flex items-center text-xl font-bold mb-6 text-white">
              <GraduationCap className="mr-2 text-cyan-400" />
              Academic Education
            </h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l border-slate-700/50 last:border-0">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-cyan-500 transform -translate-x-1.5"></div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">Master of Science in Linguistics (Text Mining)</h4>
                <p className="text-slate-400 mb-1">Utrecht University</p>
                <div className="flex items-center text-slate-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>2018 - 2020</span>
                </div>
                <p className="text-slate-300 mb-2">GPA: 3.8/4.0</p>
                <p className="text-slate-400">
                  Specialized in advanced natural language processing techniques, focusing on information extraction from unstructured text and semantic web technologies.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-slate-700/50">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1.5"></div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">Bachelor of Science in Artificial Intelligence</h4>
                <p className="text-slate-400 mb-1">University of Amsterdam</p>
                <div className="flex items-center text-slate-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>2015 - 2018</span>
                </div>
                <p className="text-slate-300 mb-2">GPA: 3.7/4.0</p>
                <p className="text-slate-400">
                  Fundamental education in AI principles, machine learning algorithms, knowledge representation, and cognitive computing systems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-slate-800/30 rounded-xl p-8 backdrop-blur-sm border border-slate-700/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
            <h3 className="flex items-center text-xl font-bold mb-6 text-white">
              <Award className="mr-2 text-cyan-400" />
              Certifications & Additional Training
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-8 pb-6 border-l border-slate-700/50 last:border-0">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-purple-500 transform -translate-x-1.5"></div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">Advanced Natural Language Processing</h4>
                <p className="text-slate-400 mb-1">Stanford Online</p>
                <div className="flex items-center text-slate-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>2022</span>
                </div>
                <p className="text-slate-400">
                  Deep learning approaches for NLP including transformers, attention mechanisms, and transfer learning with language models.
                </p>
              </div>
              
              <div className="relative pl-8 pb-6 border-l border-slate-700/50 last:border-0">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-cyan-400 transform -translate-x-1.5"></div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">Knowledge Graphs: Essentials & Foundations</h4>
                <p className="text-slate-400 mb-1">Neo4j Graph Academy</p>
                <div className="flex items-center text-slate-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>2021</span>
                </div>
                <p className="text-slate-400">
                  Comprehensive training in knowledge graph design, implementation, and query optimization techniques.
                </p>
              </div>
              
              <div className="relative pl-8 pb-6 border-l border-slate-700/50 last:border-0">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-emerald-500 transform -translate-x-1.5"></div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">Machine Learning Engineering</h4>
                <p className="text-slate-400 mb-1">DeepLearning.AI</p>
                <div className="flex items-center text-slate-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>2020</span>
                </div>
                <p className="text-slate-400">
                  Building scalable ML pipelines, model deployment, and monitoring systems in production environments.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-slate-700/50">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1.5"></div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">Data Science Professional Certificate</h4>
                <p className="text-slate-400 mb-1">IBM</p>
                <div className="flex items-center text-slate-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>2019</span>
                </div>
                <p className="text-slate-400">
                  Comprehensive data science training covering statistical analysis, data visualization, machine learning, and data ethics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;