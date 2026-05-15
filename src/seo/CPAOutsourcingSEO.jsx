// src/seo/CPAOutsourcingSEO.jsx

import { Helmet } from "react-helmet-async";

export default function CPAOutsourcingSEO() {
  return (
    <Helmet>
      <title>CPA Firm Outsourcing — Offshore Accounting Support</title>

      <meta
        name="description"
        content="Trusted by US CPA firms. FinliGen's offshore team handles bookkeeping, workpapers, and tax return prep — CA-reviewed, deadline-driven, and white-label ready."
      />

      <meta
        name="keywords"
        content="
        outsource accounting to India for CPA firms,
        offshore CPA support India,
        outsource tax prep to India,
        accounting outsourcing for US CPA firms,
        white label bookkeeping service
        "
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://finligen.com/cpa-outsourcing" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="CPA Firm Outsourcing — Offshore Accounting Support"
      />

      <meta
        property="og:description"
        content="Scale your CPA practice with CA-reviewed offshore bookkeeping and tax preparation support."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://finligen.com/cpa-outsourcing" />

      {/* Professional Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "CPA Firm Outsourcing — FinliGen",
          serviceType: "Offshore Accounting Outsourcing",
          provider: {
            "@type": "Organization",
            name: "FinliGen Solutions",
          },
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
        })}
      </script>
    </Helmet>
  );
}
