import React from "react";

const features = [
  {
    title: "High-Resolution Outputs",
    description:
      "Download your final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.",
    buttonText: "Get Started",
    image: "3.png", 
    reverse: false,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.",
    buttonText: "Get Started",
    image: "3.png", 
    reverse: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              feature.reverse ? "md:flex-row-reverse" : ""
            } mb-16`}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p className="text-gray-400 mt-4">{feature.description}</p>
              <button className="mt-6 px-6 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition">
                {feature.buttonText}
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-80 md:w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
