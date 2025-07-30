import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const AllCasesPage = () => {
  const cases = [
    {
      title: "Drug Expiry Tracker for Rural Pharmacies",
      description:
        "Urchman Medicines & Stores, Nigeria: Designed a lightweight app tailored to rural pharmacy operations. It collects, stores, and tracks expiry data to prevent unsafe drug sales and improve stock control.",
      image: "/images/cases/drug-expiry.png",
      tags: ["Streamlit", "Supabase", "Data Visualization"],
      metrics: "30% reduction in expired stock",
      link: "/cases/drug-expiry",
    },
    {
      title: "Sales Dashboard for a Sales Organization",
      description:
        "Alonso Business Inc., United States: Developed an interactive sales reporting dashboard for daily, monthly, and territory performance tracking. Enabled teams to monitor KPIs in real-time and make faster decisions.",
      image: "/images/cases/sales-dashboard.png",
      tags: ["Power BI", "Excel", "SQL"],
      metrics: "2x faster reporting",
      link: "/cases/sales-dashboard",
    },
    {
      title: "Customer Return Analysis for Online Retail",
      description:
        "Lusty Chic Wears, United Kingdom: Built a predictive model and visual dashboard to analyze return patterns, identify at-risk products, and improve customer satisfaction. Integrated directly with their order pipeline.",
      image: "/images/cases/Return-Analysis1.png",
      tags: ["Python", "Logistic Regression", "Tableau"],
      metrics: "18% drop in avoidable returns",
      link: "/cases/return-analysis",
    },
    {
      title: "Fleet Decision Dashboard for Spotter Transportation",
      description:
        "Spotter Inc., United States: Developed a truck-level evaluation model combining maintenance, mileage, revenue, and resale data to recommend which trucks to keep, sell, or inspect. Delivered via audit-ready Excel and dashboards.",
      image: "/images/cases/truck1.png",
      tags: ["Python", "Excel", "Logistics"],
      metrics: "102 trucks flagged for sale",
      link: "/cases/truck-eval",
    },
    {
      title: "Seller Risk Framework for AfriMarket (E-Commerce)",
      description:
        "AfriMarket, Nigeria & Ghana: Built a fraud detection and seller profiling system using ML + dashboards. It flags fake reviews, return-heavy sellers, and risky products across regions and categories.",
      image: "/images/cases/e_commerce1.png",
      tags: ["Python", "Streamlit", "NLP", "E-Commerce"],
      metrics: "5 risky sellers identified",
      link: "/cases/afrimarket-risk",
    },
  ];

  return (
    <section id="cases" className="py-24 px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            All Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all our case studies to see the impactful solutions we have
            delivered across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Image container with fixed 16:9 aspect ratio */}
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="object-cover absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#001288] to-[#0257a6] rounded-lg px-3 py-1">
                  <span className="text-white font-bold text-sm">
                    {caseStudy.metrics}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {caseStudy.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link to={caseStudy.link}>
                    <Button
                      variant="outline"
                      className="w-full justify-center font-semibold"
                    >
                      View case study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <Link to="/">
            <Button className="text-lg font-bold px-6 py-3">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllCasesPage;
