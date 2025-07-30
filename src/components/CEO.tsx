import { FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const CEO = () => {
  return (
    <section
      id="ceo"
      className="py-20 px-6"
      style={{ backgroundColor: "#93cbff" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center backdrop-blur-lg bg-black/20 p-10 rounded-2xl shadow-xl">
        {/* CEO Image and Text */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/ceo-image.png"
            alt="CEO Image"
            className="w-48 h-60 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
          />
          <h2 className="text-4xl font-bold text-white mb-2">Atumonye James</h2>
          <p className="text-xl text-gray-100 mb-4">
            CEO & Founder, Direct Insights Technologies
          </p>
          <p className="text-lg text-gray-100">
            Welcome to Direct Insights Technologies! We're here to help you turn
            data into real business solutions.
          </p>
          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://x.com/AtumonyeJ1795"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#001288] p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/atumonye-james-a81147267/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#001288] p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:chumes05@gmail.com"
              className="bg-white text-[#001288] p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a
              href="https://wa.me/234801234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#001288] p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
          {/* Optional Button */}
          <a href="#contact">
            <button className="mt-6 bg-white text-[#001288] px-6 py-2 font-semibold rounded-full shadow-md hover:scale-105 transition">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CEO;
