import { useParams } from "react-router-dom";

const CaseDetailPage = () => {
  const { caseId } = useParams();

  // Define case data for each case (this can be fetched from an API in real projects)
const caseDetails = {
  "drug-expiry": {
    title: "Pharmacy Expiry Tracker for Urchman Pharmacy & Stores",
    description: `
      **Client**  
      Urchman Pharmacy & Stores Nigeria is a rural-based pharmaceutical retail store committed to serving its local community with quality healthcare products. The owner approached us with a need for a simple yet powerful digital tool to handle expiry tracking without hiring an in-house analyst.

      **Problem**  
      The pharmacy staff relied heavily on notebooks and memory to track drug expiry dates. This manual system frequently led to expired drugs being left on shelves, resulting in health risks, financial waste, and reputational harm. With increasing stock volume, it became impractical to keep up. The client needed an automated solution to monitor expirations, store structured data, and generate reports — without requiring data analysis expertise.

      **Goal**  
      To build an intelligent expiry tracking tool that:
      - Allows manual data entry of inventory (drug name, batch number, expiry date)
      - Stores all data securely and persistently
      - Displays visual summaries of expiring items
      - Offers a one-click download of structured inventory reports in CSV
      - Runs smoothly on low-bandwidth internet in rural areas

      **Solution**  
      We developed a full-stack analytical web app built on Streamlit and Supabase.  
      The application begins with a simple form to collect inventory data. Submissions are sent to a Supabase PostgreSQL database in real time, ensuring consistent and secure storage.

      📷 ![Form Input](/images/cases/drug-expiry.png)

      Once data is entered, a live dashboard displays metrics such as:
      - Drugs expiring soon (within 30 days)
      - Inventory summary by category and quantity
      - High-risk batches flagged for review

      📷 ![Dashboard Summary](/images/cases/drug-expiry.png)

      A CSV export feature allows staff to download structured data for offline review, audits, or submission to regulators — removing the need for manual reporting or an in-house analyst.

      📷 ![CSV Export](/images/cases/drug-expiry.png)

      **Results**  
      - Eliminated expired drug losses within the first month of use  
      - Improved operational efficiency and compliance  
      - Enabled store manager to track expiry dates independently  
      - Increased community trust and reduced customer complaints  

      **Technologies**  
      - Streamlit  
      - Supabase  
      - Python  
      - PostgreSQL  

      **Client Feedback**  
      “This app helped transform our inventory tracking with zero technical complexity. Even our assistants now know when drugs are about to expire.”  
      — Chijioke U., Manager, Urchman Pharmacy & Stores Nigeria
    `,
    image: "/images/cases/drug-expiry.png",
  },
    "sales-dashboard": {
      title: "Sales Dashboard for a Sales Organization",
      description:
        "Alonso Business Inc. needed an efficient way to track sales performance across different territories and timeframes. This case study involves building an interactive dashboard that helps the sales team quickly monitor KPIs and make informed decisions.",
      image: "/images/cases/sales-dashboard.png",
    },
    "return-analysis": {
      title: "Customer Return Analysis for Online Retail",
      description:
        "E-commerce platforms often face challenges with high return rates, which can hurt profits. This case study outlines the development of a predictive model and dashboard to analyze return patterns, reduce unnecessary returns, and improve customer satisfaction for Lusty Chic Wears.",
      image: "/images/cases/Return-Analysis.png",
    },
  };

  // Get the specific case details using caseId from the URL
  const caseDetail = caseDetails[caseId];

  if (!caseDetail) {
    return <div>Case not found.</div>;
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#001288] via-[#0257a6] to-[#93cbff] p-6"
      style={{ backgroundSize: "cover", backgroundAttachment: "fixed" }}
    >
      <div className="max-w-4xl mx-auto bg-white/60 p-8 rounded-lg shadow-xl backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-[#001288] mb-4">{caseDetail.title}</h1>
        <div className="flex justify-center mb-6">
          {/* Capped Image */}
          <img
            src={caseDetail.image}
            alt={caseDetail.title}
            className="max-w-full h-[300px] object-contain rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-800 leading-relaxed">{caseDetail.description}</p>
      </div>
    </div>
  );
};

export default CaseDetailPage;
