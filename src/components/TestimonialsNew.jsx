import React from "react";

const testimonials = [
  {
    name: "Musharof Chy",
    role: "Founder @TailGrids",
    image: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png", // Replace with actual image path
    feedback:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    name: "Devid Weilium",
    role: "Founder @UIdeck",
    image: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png", // Replace with actual image path
    feedback:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    name: "Lethium Frenci",
    role: "Founder @LineIcons",
    image: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png", // Replace with actual image path
    feedback:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
];

export default function TestimonialsNew() {
  return (
    <section className="bg-[#0b0f19] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <p className="text-gray-400 mt-3">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#131722] p-6 rounded-lg shadow-lg border border-gray-800"
            >
              <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <p className="text-gray-300">“{testimonial.feedback}”</p>
              <hr className="border-gray-700 my-4" />
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
