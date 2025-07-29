import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const caseDetails = {
  "drug-expiry": {
    title: "Drug Expiry Tracker for Rural Pharmacies",
    client: "Urchman Pharmacy & Stores Nigeria",
    image: "/images/cases/drug-expiry.png",
    description: `
**Client**  
Urchman Pharmacy & Stores Nigeria is a local pharmaceutical provider in Eastern Nigeria focused on delivering affordable medicine to underserved communities.

**Problem**  
Manual drug tracking systems often led to expired drugs remaining in stock, posing health risks to customers and financial losses for the business. The client lacked technical personnel to monitor stock health and required a lightweight system that handled everything from data collection to analysis without the need for an in-house data analyst.

**Goal**  
To build a complete analytical web tool that would streamline the tracking of drug expiry dates. The solution needed to:
- Enable real-time drug data collection.
- Store and structure expiry data.
- Visualize stock health on a dashboard.
- Allow easy CSV download of inventory data.

**Results**  
- A responsive web app with expiry alert dashboard.
- Integrated data collection and cloud storage.
- CSV download for audits and reporting.
- No need for dedicated data personnel.

**Client Feedback**  
> "This tool has transformed how we manage our pharmacy. No more manual inventory tracking. We can now spot issues before they become problems."  
> — Chinedu U., Owner, Urchman Pharmacy

**Tech Stack**  
React · TailwindCSS · Supabase · Streamlit (Prototype Phase)

![App Overview](/images/cases/drug-expiry.png)
![Dashboard View](/images/cases/drug-expiry.png)
![CSV Export UI](/images/cases/drug-expiry.png)
    `,
  },

  "telecom-tableau": {
    title: "Data-rich Tableau Dashboards for Telecom Insights",
    client: "Wing Telecom, New York",
    image: "/images/cases/telecom-tableau.png",
    description: `
**Client**  
Wing is a New York-based telecom provider offering flexible data plans and services.

**Problem**  
Wing issues a large number of credits every month and wanted to understand discrepancies, detect fraud, and analyze metrics like ARPU and total revenue by state/zip. They lacked the in-house expertise to build effective Tableau dashboards.

**Goal**  
- Build dynamic Tableau dashboards.
- Visualize credit issuance, plan allocation, revenue, and delivery patterns.
- Help identify fraudulent activity and optimize operations.

**Results**  
- Comprehensive Tableau reports by state/zip.
- Data-driven insights for shipping decisions.

**Client Feedback**  
> "Nikolay’s team has been phenomenal to work with... we look forward to more data science projects together."  
> — Nick Lowry, Chief Growth Officer

**Tech Stack**  
Tableau · PostgreSQL · Google Sheets · Python

![State Breakdown Chart](/images/cases/telecom-tableau.png)
![Revenue Visualization](/images/cases/telecom-tableau.png)
![Plan Allocation Table](/images/cases/telecom-tableau.png)
    `,
  },

  "inventory-predictor": {
    title: "Inventory Demand Predictor for FMCG Startup",
    client: "ShelfSmart Nigeria",
    image: "/images/cases/inventory-predictor.png",
    description: `
**Client**  
ShelfSmart is a fast-growing FMCG distributor looking to optimize inventory across their warehouse network.

**Problem**  
They suffered frequent under/overstock situations due to lack of predictive planning and granular demand insights across locations.

**Goal**  
- Use historical sales to train ML models for demand prediction.
- Help business managers stock based on forecast.
- Build a visual dashboard to monitor stock and accuracy.

**Results**  
- Achieved 85% forecast accuracy within 3 months.
- Reduced overstocking by 30%.
- Improved daily operational efficiency and saved working capital.

**Client Feedback**  
> "Your solution is saving us time, money, and stress. Thank you for making this simple and useful!"  
> — Mojisola A., Inventory Lead, ShelfSmart

**Tech Stack**  
Python · scikit-learn · Power BI · PostgreSQL

![Prediction Dashboard](/images/cases/inventory-predictor.png)
![Sales Forecast Trends](/images/cases/inventory-predictor.png)
![Stock Deviation Table](/images/cases/inventory-predictor.png)
    `,
  },
};

const CaseDetailPage = () => {
  const { caseId } = useParams();
  const caseDetail = caseDetails[caseId];

  if (!caseDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-white bg-gray-800">
        Case not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#001288] via-[#0257a6] to-[#93cbff] p-6">
      <div className="max-w-4xl mx-auto bg-white/60 p-8 rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-3xl font-bold text-[#001288] mb-4">{caseDetail.title}</h1>

        {/* Image with fixed 16:9 aspect ratio */}
        <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden shadow-lg">
          <img
            src={caseDetail.image}
            alt={caseDetail.title}
            className="w-full h-full object-cover"
          />
        </div>

        <ReactMarkdown
          className="prose max-w-none text-gray-800"
          children={caseDetail.description}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};

export default CaseDetailPage;
