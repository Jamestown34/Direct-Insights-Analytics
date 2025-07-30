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
          <h1 className="text-3xl lg:text-4xl font-semibold leading-snug"">
            Unlock Business <span className="text-white font-extrabold">Growth Through</span> Intelligent Data Analytics
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Advanced analytics & consulting services to drive strategic decisions and digital transformation for forward thinking businesses.
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
            {["slide1.png", "slide2.png", "slide3.png", "slide5.png", "slide6.png", "slide7.jpg", "slide8.png", "slide9.jpg", "slide10.jpg", "slide12.png", "slide13.png"].map((slide, index) => (
              <div className="keen-slider__slide" key={index}>
                <img
                  src={`/images/${slide}`}
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
