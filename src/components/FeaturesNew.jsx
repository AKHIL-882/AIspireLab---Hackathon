import { FaCogs, FaLayerGroup, FaReact, FaCss3Alt, FaCode, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaLayerGroup size={40} className="text-blue-500" />,
    title: "Crafted for Startups",
    description: "Tuæ nam ex similique incidunt expedita exercit tationem laudantium. Repellendus quisquam.",
  },
  {
    icon: <FaReact size={40} className="text-blue-500" />,
    title: "High-quality Design",
    description: "Tuæ nam ex similique incidunt expedita exercit tationem laudantium. Repellendus quisquam.",
  },
  {
    icon: <FaCogs size={40} className="text-blue-500" />,
    title: "Next.js 13 (Latest)",
    description: "Tuæ nam ex similique incidunt expedita exercit tationem laudantium. Repellendus quisquam.",
  },
  {
    icon: <FaCss3Alt size={40} className="text-blue-500" />,
    title: "Tailwind CSS",
    description: "Tuæ nam ex similique incidunt expedita exercit tationem laudantium. Repellendus quisquam.",
  },
  {
    icon: <FaCode size={40} className="text-blue-500" />,
    title: "Fully Customizable",
    description: "Tuæ nam ex similique incidunt expedita exercit tationem laudantium. Repellendus quisquam.",
  },
  {
    icon: <FaGlobe size={40} className="text-blue-500" />,
    title: "Free and Open-Source",
    description: "Tuæ nam ex similique incidunt expedita exercit tationem laudantium. Repellendus quisquam.",
  },
];

export default function FeaturesNew() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Main Features</h2>
        <p className="text-gray-400 mt-2">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 px-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="bg-gray-700 p-4 rounded-lg mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
