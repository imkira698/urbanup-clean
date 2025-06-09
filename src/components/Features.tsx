import React from 'react';
import { MapPin, Shield, DollarSign, MessageCircle, Lock, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Get Things Done Remotely",
      description: "Assign task in any city without being physically there.",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Verified UrbanMates", 
      description: "Every UrbanMate is Identity-Verified, so your Tasks are in Trusted Hands.",
      color: "text-green-400"
    },
    {
      icon: DollarSign,
      title: "Escrow Payments",
      description: "Funds are held in escrow until the task is completed and approved. Ensuring secure and reliable transactions.",
      color: "text-green-400"
    },
    {
      icon: MessageCircle,
      title: "Set your price, chat, and agree",
      description: "When you post a task, you decide the budget. Urbanmates can accept your offer or counteroffer.",
      color: "text-green-400"
    },
    {
      icon: Lock,
      title: "Protected",
      description: "We protect your data with care always private.",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      title: "Earn money",
      description: "Earn money by completing local tasks.",
      color: "text-green-400"
    }
  ];

  return (
    <section id="features" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Features</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Simplify your life with UrbanUP Get task done efficiently with help of verified locals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;