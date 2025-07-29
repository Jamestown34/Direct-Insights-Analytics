import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sliderRef = useRef(null);
  const [keenSliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    duration: 1500,
  });

  // Autoplay effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
      timeout = setTimeout(run, 2000);
    };
    run();
    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#001288] via-[#0257a6] to-[#93cbff] min-h-screen flex items-center px-6 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text and Buttons */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Data Driven <span className="text-white font-extrabold">solutions</span> that grow your business
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Transform your data into actionable insights with expert solutions in analytics, automation, and strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpDLExZBa4Ssw6hTM09-PszkikdtnXHwNBCtRFEMs8sUYZuw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group bg-white text-[#001288] hover:bg-gray-100 font-semibold"
              >
                Start your project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Autoplaying Carousel */}
        <div className="relative">
          <div
            ref={keenSliderRef}
            className="keen-slider aspect-video bg-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            {["slide1", "slide2", "slide3", "slide4", "slide5", "slide6"].map((slide, index) => (
              <div className="keen-slider__slide" key={index}>
                <img
                  src={`/images/${slide}.png`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
