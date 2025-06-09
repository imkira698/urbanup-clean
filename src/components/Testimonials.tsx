import { User } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

const TestimonialCard = ({ name, role, content }: TestimonialProps) => (
  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110">
    <div className="flex items-center mb-4">
      <div className="bg-green-400 rounded-full p-2">
        <User className="w-6 h-6 text-black" />
      </div>
      <div className="ml-3">
        <h4 className="text-white font-semibold">{name}</h4>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-gray-300">{content}</p>
  </div>
);

const Testimonials = () => {  const testimonials = [
    {
      name: "Ankit Sharma",
      role: "Bangalore",
      content: "I couldn't travel to Pune just to check a second-hand car. My UrbanMate there inspected it and sent me detailed photos and a video call update saved me a trip and helped me decide faster!"
    },
    {
      name: "Ritika Das",
      role: "Bangalore",
      content: "I had to urgently send signed papers to Mumbai for a legal matter as I could not travel, UrbanUp found someone who delivered it the same day. Super fast and reliable!"
    },
    {
      name: "Rajiv Menon",
      role: "Bangalore",
      content: "While I was out of town, my elderly father needed someone to accompany him to a hospital visit. The UrbanMate showed up on time, was respectful, and kept me informed throughout. Truly grateful!"
    },
    {
      name: "Rahul Sharma",
      role: "Bangalore",
      content: "Urgent tasks pay better, and I get to choose them. When someone needs something done fast, I earn good money and help people in real need. It's rewarding and flexible."
    },
    {
      name: "Aarushi Jain",
      role: "Bangalore",
      content: "At first I thought it'd be like other gig apps, but UrbanUP is different. I can actually talk to the task poster, negotiate, and make sure my time is valued. It adds up quickly!"
    },
    {
      name: "Rohit S.",
      role: "Bangalore",
      content: "I'm not doing this full time, but even with 2–3 tasks a week, I earn a solid side income. And the best part? I don't have to accept anything underpaid I decide what's worth my time."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our users about their experiences with UrbanUp's services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
