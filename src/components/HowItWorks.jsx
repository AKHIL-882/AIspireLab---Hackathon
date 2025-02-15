import { FaDownload, FaUser, FaHeart } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaDownload className="text-blue-500 text-4xl" />, 
      title: "Install the App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    },
    {
      icon: <FaUser className="text-blue-500 text-4xl" />, 
      title: "Setup your profile",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    },
    {
      icon: <FaHeart className="text-blue-500 text-4xl" />, 
      title: "Enjoy the features!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">How it Works?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
        Phasellus aliquam ante in maximus.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm">
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
