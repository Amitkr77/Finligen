import { Helmet } from "react-helmet-async";

export default function HomeSEO() {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>
        FinliGen — Offshore Accounting & US Tax Compliance
      </title>

      <meta
        name="description"
        content="FinliGen delivers offshore accounting, US tax compliance, and CPA firm outsourcing for global founders and US businesses. Scalable. Trusted. Tech-enabled."
      />

      <meta
        name="keywords"
        content="
        offshore accounting services for US businesses,
        US tax compliance for Indian companies,
        CPA firm outsourcing India,
        bookkeeping for startups,
        cross-border accounting firm,
        US LLC setup for non-residents,
        virtual CFO services,
        sales tax compliance USA,
        global accounting firm India
        "
      />

      <meta name="author" content="FinliGen Solutions" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link rel="canonical" href="https://finligen.com/" />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0A66C2" />

      {/* Open Graph / Facebook */}
      <meta
        property="og:title"
        content="FinliGen — Offshore Accounting & US Tax Compliance"
      />

      <meta
        property="og:description"
        content="CA-led offshore accounting, US tax compliance, bookkeeping, and CPA outsourcing services for startups, ecommerce brands, and global businesses."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://finligen.com/" />

      <meta
        property="og:image"
        content="https://finligen.com/og-image.jpg"
      />

      <meta property="og:site_name" content="FinliGen" />

      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="FinliGen — Offshore Accounting & US Tax Compliance"
      />

      <meta
        name="twitter:description"
        content="Offshore accounting and US tax compliance services for US businesses, CPA firms, startups, and global founders."
      />

      <meta
        name="twitter:image"
        content="https://finligen.com/og-image.jpg"
      />

      {/* Geo / Local SEO */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi" />
      <meta name="language" content="English" />

      {/* Business Contact */}
      <meta name="contact" content="contact@finligen.com" />
      <meta name="telephone" content="+91-8287512393" />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "FinliGen Solutions",
          url: "https://finligen.com",
          logo: "https://finligen.com/photos/finlogo.jpeg",
          image: "https://finligen.com/og-image.jpg",
          description:
            "CA-led offshore accounting firm specializing in US tax compliance, CPA outsourcing, bookkeeping, and cross-border financial services for global businesses.",
          telephone: "+91-8287512393",
          email: "contact@finligen.com",
          founder: {
            "@type": "Person",
            name: "CA Amit Kumar",
            jobTitle: "Founder & Global Compliance Advisor",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "A-1192, Main Market, Mayur Vihar Phase-III",
            addressLocality: "Delhi",
            postalCode: "110096",
            addressCountry: "IN",
          },
          areaServed: [
            {
              "@type": "Country",
              name: "United States",
            },
            {
              "@type": "Country",
              name: "India",
            },
          ],
          sameAs: [
            "https://www.linkedin.com/",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Financial & Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "US Sales Tax Compliance",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "CPA Firm Outsourcing",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Offshore Bookkeeping",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Virtual CFO Services",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "US LLC Setup for Non-Residents",
                },
              },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "85",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What makes FinliGen different from other accounting firms?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "FinliGen specializes in US–India cross-border finance with expertise in IRS compliance, US sales tax, FEMA, and CPA outsourcing.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with US businesses or Indian businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We work with US businesses, Indian companies expanding into the US market, CPA firms, startups, and ecommerce brands.",
              },
            },
            {
              "@type": "Question",
              name: "Can you help set up a US LLC for non-US residents?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We handle LLC formation, EIN registration, operating agreements, and first-year compliance for international founders.",
              },
            },
            {
              "@type": "Question",
              name: "What accounting software do you support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We primarily work with QuickBooks Online, QuickBooks Desktop, and Xero for bookkeeping and accounting workflows.",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
}