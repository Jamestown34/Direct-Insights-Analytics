import React from "react";

const steps = [
  {
    title: "1. Prepare",
    image: "/images/how_it_works1.jpg", // Place your image in public/images/
    description:
      "We interview your team and key stakeholders to gather requirements, understand task specifics, and establish a roadmap for subsequent steps.",
  },
  {
    title: "2. Build",
    image: "/images/how_it_works2.jpg",
    description:
      "Based on prep stage results, we design and develop warehouses or data pipelines, set up essential tools, and optimize data sources for visualization to align with your goals.",
  },
  {
    title: "3. Test",
    image: "/images/how_it_works3.jpg",
    description:
      "We develop your reports and dashboards, assess your data quality, and configure report automation settings. We cross-check it with a master system to ensure flawless performance.",
  },
  {
    title: "4. Benefit",
    image: "/images/how_it_works4.jpg",
    description:
      "You get the first insights and can adjust your strategy, or orchestrate newly updated pipeline processes. This way you naturally cultivate a desire for greater success—and we’re happy to fine-tune your data processes further.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        How our analytics outsourcing works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
