import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-64 h-64 mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-cyan-500/20 p-1">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-purple-600/20 rounded-full animate-pulse"></div>
                <img
                  // src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  src="https://media.licdn.com/dms/image/v2/D4E03AQEsZ3UzzrLiFA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727854347860?e=1750896000&v=beta&t=SQh7pGyNWH8GLC7wVg2LPzASfK0eQrAhV2vVo2cDiyM"
                  alt="Hisham Alkaed"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">About Me</span>
              <span className="ml-4 h-px flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></span>
            </h2>
            
            <p className="text-slate-400 mb-6">
              I'm a passionate Data Scientist and AI Engineer with expertise in building intelligent systems that solve real-world problems. With a background in Artificial Intelligence and Text Mining, I combine technical expertise with creative problem-solving to deliver impactful solutions.
            </p>
            
            <p className="text-slate-400 mb-6">
              My work focuses on Natural Language Processing, Machine Learning, and Knowledge Graphs, where I enjoy developing systems that can understand, interpret, and generate human language. I'm particularly interested in how these technologies can transform businesses and enhance human-computer interaction.
            </p>
            
            <p className="text-slate-400 mb-10">
              I'm multilingual (English, Dutch, Arabic) and believe that diversity of thought and experience leads to better solutions. When I'm not coding or analyzing data, I enjoy exploring new AI technologies and possibilities.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2"></div>
                <span className="text-slate-300">NLP Enthusiast</span>
              </div>
              
              <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-slate-300">Machine Learning</span>
              </div>
              
              <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-slate-300">Data Visualization</span>
              </div>
              
              <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></div>
                <span className="text-slate-300">Knowledge Graphs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;