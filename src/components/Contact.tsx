import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = 'FVUiRdCSOHrvACvJc';
const EMAILJS_SERVICE_ID = 'service_q818m0m';
const EMAILJS_TEMPLATE_ID = 'template_wserbxa';

// Validate EmailJS configuration
if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
  console.error('EmailJS configuration is incomplete');
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
      setErrorMessage('Email service initialization failed');
    }
  }, []);

  const validatePhone = (phone: string) => {
    // Allow Indian phone numbers (10 digits, optionally prefixed with +91 or 0)
    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setPhoneError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const phone = formData.get('phone') as string;

    if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid Indian phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Validate form data
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const message = formData.get('message') as string;

      if (!name || !email || !phone || !message) {
        throw new Error('Please fill in all fields');
      }

      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_message: message,
        to_name: 'UrbanUP Team',
      };

      console.log('Attempting to send email with service:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);
      console.log('Parameters:', templateParams);
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY // Add public key here for explicit authentication
      );

      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error details:', error);
      
      let message = 'An unexpected error occurred';
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        if (error.message.includes('invalid public key')) {
          message = 'Email service configuration error';
        } else if (error.message.includes('network')) {
          message = 'Network connection error. Please check your internet connection';
        } else {
          message = error.message;
        }
      }
      
      setSubmitStatus('error');
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to UrbanUP
          </h2>
          <p className="text-gray-300 text-xl mb-2">
            Simplifying your city life.
          </p>
          <div className="space-y-2">
            <p className="text-green-400 text-lg">
              Sign-up to get Early Access
            </p>
            <p className="text-green-400 text-lg">
              And Let's be part of Revolution
            </p>
          </div>
        </div>

        <form 
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          <div>
            <label htmlFor="name" className="block text-white text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-6 py-4 bg-transparent border-2 border-green-500 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-lg font-medium mb-2">
              Email id
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-6 py-4 bg-transparent border-2 border-green-500 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white text-lg font-medium mb-2">
              Phone no
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="^(\+91|0)?[6-9]\d{9}$"
              className={`w-full px-6 py-4 bg-transparent border-2 ${
                phoneError ? 'border-red-500' : 'border-green-500'
              } rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300`}
              placeholder="Enter your phone number"
            />
            {phoneError && (
              <p className="text-red-400 text-sm mt-2">{phoneError}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-white text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-6 py-4 bg-transparent border-2 border-green-500 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300 resize-none"
              placeholder="Tell us about your interest in UrbanUP"
            />
          </div>

          <div className="text-center space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full 
                font-semibold transition-all duration-300 flex items-center justify-center space-x-2 
                hover:scale-105 mx-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
              <Send className={`w-5 h-5 ${isSubmitting ? '' : 'group-hover:translate-x-1'} transition-transform`} />
            </button>

            {submitStatus === 'success' && (
              <div className="text-green-400 animate-fade-in p-4 rounded-lg bg-green-500/10">
                <p>Thank you for your interest in UrbanUP!</p>
                <p className="text-sm mt-1">We'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-red-400 animate-fade-in p-4 rounded-lg bg-red-500/10">
                <p className="font-medium">Oops! Something went wrong.</p>
                <p className="text-sm mt-2">{errorMessage}</p>
                <p className="text-sm mt-1">Please try again or contact us on WhatsApp.</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;