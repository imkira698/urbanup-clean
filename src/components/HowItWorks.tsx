const HowItWorks = () => {
  const taskerSteps = [
    {
      icon: "/images/mobile.jpg",
      description: "Create your task with details and budget"
    },
    {
      icon: "/images/mobile1.1.jpg",
      description: "Discuss details and agree on pricing"
    },
    {
      icon: "/images/mobile1.2.jpg",
      description: "Your task is live and ready for UrbanMates"
    }
  ];

  const urbanMateSteps = [
    {
      icon: "/images/mobile2.jpg",
      description: "Find tasks in your area that match your skills"
    },
    {
      icon: "/images/mobile2.1.jpg",
      description: "Complete the task and get approval"
    },
    {
      icon: "/images/mobile2.2.jpg",
      description: "Receive payment for completed tasks"
    }
  ];

  const PhoneMockup = ({ icon, description }: { icon: string; description: string }) => (
    <div className="flex flex-col items-center gap-4">
      <img src={icon} alt={description} className="w-64 h-auto object-contain rounded-xl shadow-lg" />
      <div className="text-white text-lg font-medium">{description}</div>
    </div>
  );

  return (
    <section id="how-it-works" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Taskers */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            How it works
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
            For Taskers
          </h3>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {taskerSteps.map((step, index) => (
              <div key={index}>
                <PhoneMockup icon={step.icon} description={step.description} />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-20"></div>

        {/* For UrbanMates */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
            For UrbanMates
          </h3>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {urbanMateSteps.map((step, index) => (
              <div key={index}>
                <PhoneMockup icon={step.icon} description={step.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;