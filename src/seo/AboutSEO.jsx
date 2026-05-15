// src/seo/AboutSEO.jsx

import { Helmet } from "react-helmet-async";

export default function AboutSEO() {
  return (
    <Helmet>
      <title>
        About FinliGen — Cross-Border Finance Experts
      </title>

      <meta
        name="description"
        content="Founded by CA Amit Kumar, FinliGen is a CA-led, tech-enabled accounting firm specializing in US compliance, CPA outsourcing, and global financial services."
      />

      <meta
        name="keywords"
        content="
        CA-led cross-border accounting firm India,
        US India accounting firm,
        offshore accounting company India,
        global accounting firm India,
        US tax experts India
        "
      />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href="https://finligen.com/about"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="About FinliGen — Cross-Border Finance Experts"
      />

      <meta
        property="og:description"
        content="Learn about FinliGen's CA-led expertise in US–India accounting, compliance, and offshore finance operations."
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://finligen.com/about"
      />

      {/* About Page Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About FinliGen",
          url: "https://finligen.com/about",
          description:
            "Cross-border accounting firm helping businesses manage US and India compliance.",
        })}
      </script>
    </Helmet>
  );
}