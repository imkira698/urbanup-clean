import { Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Need to get{' '}
                <span className="text-green-400">something done</span> in{' '}
                <span className="text-green-400">Another city?</span>
              </h1>
              
              {/* Star Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-gray-700">
              <div className="flex items-start space-x-3 md:space-x-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                  alt="User"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                    "My car broke down in another state and I needed someone to coordinate 
                    with the mechanic. My UrbanMate handled everything, even sent pictures 
                    to update me."
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2 md:mt-4 font-medium">
                    Abhishek, Bangalore
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="group bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 text-sm md:text-base"
              >
                <span>How it works?</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 text-sm md:text-base"
              >
                <span>Post a task</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/7019962542"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25D366] hover:bg-[#128C7E] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 text-sm md:text-base"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
            {/* Thought bubbles */}
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 md:-top-10 md:-left-10 bg-white rounded-lg md:rounded-2xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg animate-bounce">
              <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">No Time?</p>
            </div>
            <div className="absolute -top-2 sm:-top-4 right-0 bg-white rounded-lg md:rounded-2xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg animate-bounce delay-300">
              <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">Too much hassle?</p>
            </div>
            <div className="absolute top-6 -left-8 sm:top-8 sm:-left-16 md:top-10 md:-left-20 bg-white rounded-lg md:rounded-2xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg animate-bounce delay-150">
              <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">Too expensive?</p>
            </div>
            <div className="absolute top-12 right-4 sm:top-16 sm:right-8 md:top-20 md:right-10 bg-white rounded-full w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl sm:text-2xl md:text-3xl">?</span>
            </div>

            {/* Character illustration */}
            <div className="relative flex justify-center items-center max-w-[80%] sm:max-w-full">
              <img 
                src="/images/thinking.png" 
                alt="Thinking person" 
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;