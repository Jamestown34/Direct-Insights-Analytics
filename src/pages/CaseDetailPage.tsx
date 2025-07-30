import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const CaseDetailPage = () => {
  const { caseId } = useParams();

  const caseDetails = {
    "drug-expiry": {
      title: "Pharmacy Expiry Tracker for Urchman Pharmacy & Stores",
      description: `
**Client**  
Urchman Pharmacy & Stores Nigeria is a rural-based pharmaceutical retail store committed to serving its local community with quality healthcare products.

**Problem**  
They relied on notebooks and memory to track expiry dates. This led to health risks, wasted inventory, and compliance issues.

**Solution**  
We built a full-stack expiry tracker using **Streamlit** + **Supabase**. Features include:
- Manual inventory entry
- Expiry alerts & batch summary
- One-click CSV report download

📷 ![Form Input](/images/cases/drug-expiry.png)  
📷 ![Dashboard Summary](/images/cases/drug-expiry.png)

**Results**  
- 100% reduction in expired stock  
- Improved compliance and reporting  
- Empowered rural staff with zero technical knowledge

**Tools Used**  
Streamlit, Supabase, PostgreSQL, Python
      `,
      image: "/images/cases/drug-expiry.png",
    },
    "sales-dashboard": {
      title: "Sales Dashboard for a Sales Organization",
      description: `
**Client**  
Alonso Business Inc., United States

**Problem**  
Their sales team lacked real-time visibility into KPIs across territories and timeframes.

**Solution**  
We created a live Power BI dashboard tracking:
- Monthly, daily, and territory performance
- Sales by category, region, and rep
- Real-time metrics for leadership

📷 ![Dashboard](/images/cases/sales-dashboard.png)

**Impact**  
- 2× faster sales reporting  
- Smarter team decision-making

**Tools Used**  
Power BI, Excel, SQL
      `,
      image: "/images/cases/sales-dashboard.png",
    },
    "return-analysis": {
      title: "Customer Return Analysis for Online Retail",
      description: `
**Client**  
Lusty Chic Wears, United Kingdom

**Problem**  
They faced high return rates hurting margins and customer experience.

**Solution**  
We built a logistic regression model and dashboard to:
- Predict return likelihood
- Spot risky SKUs
- Guide improvements in product and logistics

📷 ![Return Dashboard](/images/cases/Return-Analysis.png)

**Results**  
- 18% reduction in avoidable returns  
- Better logistics and happier customers

**Tools Used**  
Python, Logistic Regression, Tableau
      `,
      image: "/images/cases/Return-Analysis.png",
    },
"truck-eval": {
  title: "Fleet Decision Dashboard for Spotter Transportation",
  description: `
**Client**  
Spotter is a U.S.-based long-haul transportation company managing a large fleet across multiple states.

**Problem**  
The company faced growing repair costs and underutilized trucks. Without integrated analytics, they struggled to decide which trucks to keep, sell, or inspect — risking unnecessary spend and compliance issues.

**Solution**  
We built a data-driven fleet evaluation model using **Python + Excel Dashboarding**. The analysis integrated 6 internal datasets and Truck Paper listings to:
- Score every truck by maintenance, mileage, resale, and usage
- Recommend **Keep / Sell / Inspect**
- Export audit-ready reports with reasoning for each decision

📷 ![Fleet Dashboard](/images/cases/truck-eval.png)

**Results**  
- 102 trucks flagged for sale — $1.1M in avoidable repairs  
- 61 trucks validated to keep in rotation  
- 120 flagged for inspection due to data gaps or borderline metrics  
- Gave execs clear insight into fleet health in one glance

**Tools Used**  
Python (Pandas), Excel, Truck Paper® Listings
  `,
  image: "/images/cases/truck-eval.png",
},
  };

  const caseDetail = caseDetails[caseId];

  if (!caseDetail) {
    return <div className="p-10 text-center text-white">Case not found.</div>;
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#001288] via-[#0257a6] to-[#93cbff] p-6"
      style={{ backgroundSize: "cover", backgroundAttachment: "fixed" }}
    >
      <div className="max-w-4xl mx-auto bg-white/60 p-6 rounded-xl shadow-xl backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-[#001288] mb-6">
          {caseDetail.title}
        </h1>
        <div className="w-full aspect-video mb-6 overflow-hidden rounded-lg shadow-md">
          <img
            src={caseDetail.image}
            alt={caseDetail.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown>{caseDetail.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailPage;
