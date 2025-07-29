import { LineChart, Lock, Users2, TrendingUp } from "lucide-react";

const ValuePropositions = () => {
  const features = [
    {
      icon: LineChart,
      title: "Insight-Driven",
      description:
        "Our solutions focus on surfacing actionable insights that improve business performance.",
    },
    {
      icon: Lock,
      title: "Data Security First",
      description:
        "We implement best-in-class data protection protocols to ensure client trust and compliance.",
    },
    {
      icon: Users2,
      title: "Industry Expertise",
      description:
        "You’ll work with professionals who have deep knowledge in data science, analytics, and infrastructure.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description:
        "We build scalable systems designed to grow alongside your business and analytics maturity.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why choose us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            At Beckley Jones Analytics, we combine advanced technical capability with sharp business insight to deliver data systems that move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
