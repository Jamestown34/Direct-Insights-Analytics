import Header from "@/components/Header"; // Adjust path if needed

const About = () => {
  return (
    <>
      <Header />

      <section
        className="py-20 px-6 min-h-screen text-white"
        style={{
          background: "linear-gradient(90deg, #001288, #0257a6, #93cbff)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg">
          <h2 className="text-4xl font-bold mb-6">About Direct Insights Technologies</h2>

          <p className="text-lg mb-4">
            Direct Insights Technologies is a data consulting firm helping small and medium-sized businesses unlock the full value of their data.
            We deliver practical analytics solutions designed to drive real business outcomes and simplify decision-making.
          </p>

          <p className="text-lg mb-4">
            We support a wide range of clients including digital startups, growing enterprises, and purpose-driven organizations across industries such as e-commerce, finance, healthcare, logistics, and technology.
          </p>

          <p className="text-lg mb-4">
            Our services span strategy, data science, engineering, business intelligence, and ongoing data governance. Each solution is tailored to the client's goals, combining technical depth with a clear focus on results.
          </p>

          <p className="text-lg mb-4">
            As a remote-first company, we work with clients across North America, Europe, and Africa. Our team combines deep expertise with a commitment to transparency, agility, and long-term growth.
          </p>

          <p className="text-lg mb-6">
            Ready to turn your data into an engine for growth? Let’s build something powerful together.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpDLExZBa4Ssw6hTM09-PszkikdtnXHwNBCtRFEMs8sUYZuw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-[#001288] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              Let's talk
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
