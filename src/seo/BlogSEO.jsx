// src/seo/BlogSEO.jsx

import { Helmet } from "react-helmet-async";

export default function BlogSEO({
  title,
  description,
  keywords,
  slug,
  image,
  publishedDate,
  modifiedDate,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={`https://finligen.com/blog/${slug}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="article" />

      <meta property="og:url" content={`https://finligen.com/blog/${slug}`} />

      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      {/* Blog Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          image,
          datePublished: publishedDate,
          dateModified: modifiedDate,
          author: {
            "@type": "Organization",
            name: "FinliGen Solutions",
          },
          publisher: {
            "@type": "Organization",
            name: "FinliGen",
            logo: {
              "@type": "ImageObject",
              url: "https://finligen.com/photos/finlogo.jpeg",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://finligen.com/blog/${slug}`,
          },
        })}
      </script>
    </Helmet>
  );
}
