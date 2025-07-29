import { TwitterIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

const CEO = () => {
  return (
    <section id="ceo" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex items-start justify-start space-x-12">
        {/* CEO Image and Info */}
        <div className="flex flex-col items-start w-1/4">
          <img
            src="/images/ceo-image.png"
            alt="Atumonye James"
            className="w-48 h-60 rounded-full object-cover mb-4"
          />
          <h2 className="text-4xl font-bold mb-2">Atumonye James</h2>
          <p className="text-xl text-muted-foreground mb-4">
            CEO & Founder, Direct Insights Technologies
          </p>
          <p className="text-lg text-muted-foreground">
            Welcome to Direct Insights Technologies! We're here to help you turn data into real business solutions.
          </p>

          {/* Contact Button */}
          <a href="#contact">
            <button className="btn btn-primary mt-6">Get in Touch</button>
          </a>

          {/* Social Icons */}
          <div className="flex items-center mt-6 space-x-4 text-muted-foreground">
            <a
              href="https://x.com/AtumonyeJ1795"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <TwitterIcon className="w-5 h-5 hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/atumonye-james-a81147267/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 hover:text-primary" />
            </a>
            <a
              href="mailto:chuksjames05@gmail.com"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5 hover:text-primary" />
            </a>
            <a
              href="https://wa.me/2348031899153"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <PhoneIcon className="w-5 h-5 hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
