import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider"; // Optional if you use a theme context

const faqItems = [
  {
    question: "Why choose Direct Insights Tech?",
    answer:
      "Direct Insights Tech is powered by a seasoned team of data specialists with years of hands-on experience across industries. From data infrastructure to strategic analytics, we bring leadership and depth to every engagement. Our client base spans regions and sectors — feel free to explore our recent projects for tangible results and impact stories.",
  },
  {
    question: "What does Data Analytics involve?",
    answer:
      "Data analytics is the science of transforming raw data into valuable insights. It includes interpreting patterns, identifying trends, and driving actionable conclusions using statistics, data modeling, and interactive dashboards to guide informed decision-making.",
  },
  {
    question: "How do you define Data Engineering?",
    answer:
      "Data engineering is the backbone of your digital intelligence. It focuses on architecting systems to collect, clean, move, and store information efficiently. This includes building scalable pipelines, ensuring data reliability, and creating seamless integrations between tools and sources.",
  },
  {
    question: "What is the Analytics Stack?",
    answer:
      "The analytics stack is a curated suite of software and technologies used to manage data pipelines, perform analysis, and visualize outcomes. It's tailored to your goals — built to scale and adjust as your business evolves.",
  },
  {
    question: "How can Direct Insights Tech support my business?",
    answer:
      "Our analytics services empower you to decode customer needs, optimize operations, and make confident, data-backed decisions. Whether you’re aiming to increase efficiency, track performance, or develop new strategies — we provide the insights that move your business forward.",
  },
  {
    question: "When should I consider Advanced Analytics?",
    answer: (
      <>
        <p>
          Advanced analytics is ideal when you're ready to move beyond basic
          reporting and start predicting trends, automating decisions, or
          personalizing experiences. Consider it if you want to:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Anticipate future behavior through forecasting</li>
          <li>Apply machine learning to improve targeting</li>
          <li>Optimize workflows and cut inefficiencies</li>
          <li>Build intelligent recommendation engines</li>
          <li>Test and validate hypotheses with precision</li>
        </ul>
      </>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 bg-gradient-to-r from-[#001288] via-[#0257a6] to-[#93cbff] dark:from-[#050505] dark:via-[#111] dark:to-[#222] transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white dark:text-white">
          FAQ
        </h2>
        <ul className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-white/20 dark:border-white/10 rounded-lg overflow-hidden bg-white/5 dark:bg-white/10"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-lg text-white dark:text-white hover:bg-white/10 dark:hover:bg-white/5 transition"
              >
                <span className="flex gap-2 items-center">
                  <HelpCircle className="w-5 h-5 text-white/80 dark:text-white/60" />
                  <span className="text-white/50">{index + 1}.</span>{" "}
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 text-white/80 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="px-6 text-white/90 dark:text-white/70 overflow-hidden"
              >
                <div className="py-4">{item.answer}</div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default FAQ;
