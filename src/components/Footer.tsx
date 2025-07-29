import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Let’s build intelligent solutions together with data that drives impact
            </h3>
            <p className="text-background/80 text-lg mb-8 leading-relaxed">
              Ready to turn your data into a competitive advantage? Get in touch and let’s unlock insights together.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpDLExZBa4Ssw6hTM09-PszkikdtnXHwNBCtRFEMs8sUYZuw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary">
                Start your project
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-background/60" />
                  <span className="text-background/80">directinsightstechnologies@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-background/60" />
                  <span className="text-background/80">+2348031899153</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-background/60" />
                  <span className="text-background/80">Lagos, NG</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                <Twitter className="h-5 w-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Github className="h-5 w-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              Direct Insights Technologies
            </div>
            <div className="text-background/60 text-sm">
              © 2025 Direct Insights Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
