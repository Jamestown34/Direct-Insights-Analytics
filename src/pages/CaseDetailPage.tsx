import { useParams } from "react-router-dom";

const CaseDetailPage = () => {
  const { caseId } = useParams();

  // Define case data for each case (this can be fetched from an API in real projects)
  const caseDetails = {
    "drug-expiry": {
      title: "Drug Expiry Tracker for Rural Pharmacies",
      description:
        "In rural areas, pharmacies often struggle with tracking the expiration dates of medicines, leading to health risks from expired drugs. This case study focuses on building a lightweight app to help pharmacies in Nigeria track drug expiration dates and improve stock management.",
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
