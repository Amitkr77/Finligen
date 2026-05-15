// src/seo/ServicesSEO.jsx

import { Helmet } from "react-helmet-async";

export default function ServicesSEO() {
  return (
    <Helmet>
      <title>
        Accounting & Compliance Services — FinliGen
      </title>

      <meta
        name="description"
        content="Offshore bookkeeping, US sales tax, CPA outsourcing, virtual CFO, and cross-border compliance. Explore FinliGen's full-stack financial services."
      />

      <meta
        name="keywords"
        content="
        offshore accounting services,
        outsourced bookkeeping for CPA firms,
        US sales tax filing service,
        virtual CFO India,
        cross-border tax advisory,
        US LLC setup for foreigners,
        FEMA compliance India
        "
      />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href="https://finligen.com/services"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Accounting & Compliance Services — FinliGen"
      />

      <meta
        property="og:description"
        content="Explore offshore bookkeeping, CPA outsourcing, US tax compliance, and virtual CFO services."
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://finligen.com/services"
      />

      {/* Services Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Offshore Accounting & Compliance",
          provider: {
            "@type": "Organization",
            name: "FinliGen Solutions",
          },
          areaServed: ["US", "India"],
        })}
      </script>
    </Helmet>
  );
}