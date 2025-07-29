import {
  BarChart2,
  Cpu,
  Brain,
  TrendingUp,
  LayoutDashboard,
  LifeBuoy,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart2,
      title: "Data Analytics",
      description:
        "Turn your raw data into actionable insights that drive smarter decisions.",
      features: [
        "Descriptive & Predictive Analytics",
        "Custom Dashboards & Reports",
        "Business Intelligence Tools",
        "Real-Time Data Visualization",
      ],
    },
    {
      icon: Cpu,
      title: "Data Science",
      description:
        "Extract deep insights using scientific methods, statistics, and programming.",
      features: [
        "Exploratory Data Analysis",
        "Feature Engineering",
        "A/B Testing & Experimentation",
        "Decision Science",
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Build smart systems that learn from data and improve automatically.",
      features: [
        "Model Development & Evaluation",
        "Classification & Regression",
        "ML Pipelines & Deployment",
        "AI Use Case Consulting",
      ],
    },
    {
      icon: TrendingUp,
      title: "Strategy & Consulting",
      description:
        "Leverage expert guidance to shape your long-term data roadmap.",
      features: [
        "Data Maturity Assessment",
        "Stack Recommendations",
        "Process Automation Strategy",
        "Growth & Optimization Planning",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Reporting & Dashboards",
      description:
        "Deliver visually compelling reports that make sense to stakeholders.",
      features: [
        "KPI-Driven Dashboards",
        "Looker, Power BI, Tableau",
        "Custom Report Automation",
        "User Access & Governance",
      ],
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support",
      description:
        "Continuous support to keep your analytics systems secure, stable, and evolving.",
      features: [
        "System Monitoring",
        "Scheduled Maintenance",
        "Performance Tuning",
        "Data Governance & Compliance",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive data services from actionable analytics to business intelligence so you can focus entirely on results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
