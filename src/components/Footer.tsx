import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-8 h-8 text-green-500" />
              <span className="text-white text-xl font-bold">UrbanUp</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Simplifying your city life by connecting you with verified local helpers 
              to get things done remotely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors block">
                Home
              </a>
              <a href="#features" className="text-gray-400 hover:text-green-400 transition-colors block">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors block">
                How it Works
              </a>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors block">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Iabhishek552@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">+91 7019962542</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 UrbanUP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;