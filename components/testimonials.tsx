import Image from 'next/image';
import TestimonialImage from '@/public/images/testimonial.jpg';

export default function UpcomingFeatures() {
  const features = [
    {
      quote: "📂 Multiple Files Support: Seamlessly work with multiple files at once.",
      name: "Multiple Files Support",
      company: "BizAI",
    },
    {
      quote: "🔄 Seamless CRM Integrations: Easily integrate with your CRM systems.",
      name: "Seamless CRM Integrations",
      company: "BizAI",
    },
    {
      quote: "📧 Gmail and Calendar Integrations: Connect with Gmail and calendar for efficient data management.",
      name: "Gmail and Calendar Integrations",
      company: "BizAI",
    },
    {
      quote: "📱 WhatsApp Integration: Interact with BizAI through WhatsApp for convenience.",
      name: "WhatsApp Integration",
      company: "BizAI",
    },
    {
      quote: "✍️ Natural Language Database Editing: Edit your database using natural language commands.",
      name: "Natural Language Database Editing",
      company: "BizAI",
    },
    {
      quote: "📅 Scheduled Daily Data Analysis: Set up automatic daily data analysis.",
      name: "Scheduled Daily Data Analysis",
      company: "BizAI",
    },
    {
      quote: "🧠 Automatic Insights: Get valuable insights without manual analysis.",
      name: "Automatic Insights",
      company: "BizAI",
    },
    {
      quote: "💡 Feature Requests: Share your ideas and suggestions with us at founder@mail.com",
      name: "Feature Requests",
      company: "BizAI",
    },
  ];

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Exciting Upcoming Features</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              We're constantly innovating to make your experience even better!
            </p>
          </div>

          {/* Features Cards */}
          <div className="max-w-2xl mx-auto mt-15 grid gap-6 md:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start border-2 border-gray-200 rounded bg-white"
              >
                {/* Feature */}
                <div className="text-center p-6 md:p-8">
                  <blockquote className="text-xl font-medium mb-4">
                    {feature.quote}
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">
                    {feature.name}
                  </cite>
                  <div className="text-gray-600">
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
