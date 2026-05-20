import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { motion } from "framer-motion";

// ─── Constants ───────────────────────────────────────────────────────────────

const FINLIGEN_BLOG_DATA = [
  {
    _id: "1",
    title: "US Sales Tax Nexus: The 6-Figure Mistake Most Foreign Founders Don't See Coming",
    excerpt:
      "In 2009, an Indian tech company was selling to US customers for three years with zero sales tax registration. The liability when discovered? Six figures. Here's how to avoid it.",
    content: "Full article content here...",
    author: "CA Amit Kumar",
    tags: ["US Tax", "Compliance"],
    image_url:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=900&q=80",
    url_handle: "us-sales-tax-nexus-mistake",
    word_count: 1800,
    created_at: "2024-01-15",
    is_featured: true,
  },
  {
    _id: "2",
    title: "IRS Penalty Abatement: Why 'We Didn't Know' is Not a Defense",
    excerpt:
      "Most cross-border businesses don't discover compliance gaps until the notice arrives. By then, penalties are already accruing. Here's what actually works for abatement.",
    content: "Full article content here...",
    author: "CA Rahul Singh",
    tags: ["IRS", "Penalties"],
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    url_handle: "irs-penalty-abatement-guide",
    word_count: 2100,
    created_at: "2024-01-10",
    is_featured: true,
  },
  {
    _id: "3",
    title: "Offshore Bookkeeping Done Right: Why CA Review Matters",
    excerpt:
      "Every file gets CA review before it reaches your clients. That's not a feature. It's the difference between 'good enough' and 'actually defensible.'",
    content: "Full article content here...",
    author: "Naveen Singh",
    tags: ["Bookkeeping", "Outsourcing"],
    image_url:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    url_handle: "offshore-bookkeeping-ca-review",
    word_count: 1950,
    created_at: "2024-01-05",
    is_featured: false,
  },
  {
    _id: "4",
    title: "FEMA ODI & APR: What Every US-India Business Needs to Know",
    excerpt:
      "Foreign investment reporting isn't optional. Here's the exact deadline, penalty structure, and the three forms you need to file to stay clean.",
    content: "Full article content here...",
    author: "CA Amit Kumar",
    tags: ["Cross-Border", "Compliance"],
    image_url:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    url_handle: "fema-odi-apr-guide",
    word_count: 2200,
    created_at: "2023-12-28",
    is_featured: false,
  },
  {
    _id: "5",
    title: "CPA Outsourcing Red Flags: How to Spot a Bad Offshore Firm Before You Send a File",
    excerpt:
      "We see it every week: firms burned by offshore vendors. Here are the exact questions to ask before you commit to an engagement.",
    content: "Full article content here...",
    author: "Sumit Singh",
    tags: ["Outsourcing", "Best Practices"],
    image_url:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    url_handle: "cpa-outsourcing-red-flags",
    word_count: 1700,
    created_at: "2023-12-20",
    is_featured: false,
  },
  {
    _id: "6",
    title: "The 15th of the Month: How We Guarantee Books Closed on Time, Every Month",
    excerpt:
      "Most accounting firms say 'we try.' We say 'the 15th.' Here's the ops structure and redundancy that makes that commitment real.",
    content: "Full article content here...",
    author: "Sumit Singh",
    tags: ["Operations", "Bookkeeping"],
    image_url:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80",
    url_handle: "books-closed-15th-guarantee",
    word_count: 1850,
    created_at: "2023-12-12",
    is_featured: false,
  },
  {
    _id: "7",
    title: "Economic Nexus in All 50 States: The State Tax Filing Roadmap for Ecommerce Founders",
    excerpt:
      "Selling on Amazon or Shopify? You probably have sales tax obligations in more states than you think. Here's the filing schedule by state.",
    content: "Full article content here...",
    author: "CA Rahul Singh",
    tags: ["Ecommerce", "Sales Tax"],
    image_url:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    url_handle: "economic-nexus-50-states",
    word_count: 2300,
    created_at: "2023-12-05",
    is_featured: false,
  },
  {
    _id: "8",
    title: "Why US GAAP Matters (Even If You're Based in India)",
    excerpt:
      "Your bookkeeper says 'Ind-AS compliant.' Your US clients need 'US GAAP.' These are not the same thing. Here's what each is, and when you need which.",
    content: "Full article content here...",
    author: "Naveen Singh",
    tags: ["Accounting Standards", "Compliance"],
    image_url:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80",
    url_handle: "us-gaap-vs-ind-as",
    word_count: 1600,
    created_at: "2023-11-28",
    is_featured: false,
  },
];

const API_BASE = "https://caster-backend.onrender.com/api/blog";
const ORG = "finligen";
const WORDS_PER_MIN = 200;
const CARDS_PER_PAGE = 6;

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Utilities ───────────────────────────────────────────────────────────────

const readTime = (wordCount) =>
  `${Math.ceil((wordCount || 0) / WORDS_PER_MIN)} min read`;

const formatDate = (dateStr, options) =>
  new Date(dateStr).toLocaleDateString("en-US", options);

// ─── Sub-components (memoised) ───────────────────────────────────────────────

const Skeleton = memo(({ className }) => (
  <div className={`rounded-sm animate-pulse bg-gray-200 ${className ?? ""}`} />
));
Skeleton.displayName = "Skeleton";

const BlogFeedItem = memo(({ item, index }) => (
  <motion.a
    href={`/blog/${item.url_handle}`}
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 + index * 0.06, duration: 0.5 }}
    className="group flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 border-b border-gray-100 hover:bg-white transition-all duration-200"
  >
    <span className="min-w-6 font-mono text-[10px] md:text-[11px] text-gray-300 group-hover:text-[#06363c] transition-colors duration-300">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="flex-1 min-w-0">
      <p className="text-[12px] md:text-[13px] font-medium tracking-[-0.01em] text-gray-400 group-hover:text-gray-900 truncate transition-colors duration-300">
        {item.title}
      </p>
    </div>
    <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.12em] text-[#06363c] bg-[#7ecfc0]/10 border border-[#06363c]/20 px-1.5 py-0.5 rounded-[1px]">
        {item.tags?.[0] ?? "Blog"}
      </span>
      <svg
        className="w-2.5 h-2.5 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </motion.a>
));
BlogFeedItem.displayName = "BlogFeedItem";

const FeaturedCard = memo(({ blog, onClick }) => (
  <motion.div
    variants={scaleIn}
    onClick={() => onClick(blog.url_handle)}
    className="group relative h-[400px] md:h-[440px] cursor-pointer overflow-hidden border-r border-gray-200 last:border-r-0"
  >
    <img
      src={blog.image_url}
      referrerPolicy="no-referrer"
      alt={blog.title}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {blog.tags?.map((tag) => (
          <span
            key={tag}
            className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mb-2 text-xl sm:text-[22px] md:text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-white whitespace-pre-line group-hover:text-[#7ecfc0] transition-colors duration-300">
        {blog.title}
      </h2>
      <p className="mb-3 text-[12px] sm:text-[13px] md:text-sm text-white/90 line-clamp-2">
        {blog.excerpt}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
          {blog.author}
        </span>
        <Dot />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
          {readTime(blog.word_count)}
        </span>
        <Dot />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
          {formatDate(blog.created_at)}
        </span>
        <div className="ml-auto flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/30 group-hover:border-[#7ecfc0]/50 group-hover:bg-[#7ecfc0]/10 transition-all duration-300">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  </motion.div>
));
FeaturedCard.displayName = "FeaturedCard";

const Dot = () => (
  <span className="h-0.5 w-0.5 rounded-full bg-white/50" />
);

const ArrowUpRight = () => (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
    <path
      d="M2 8L8 2M8 2H3M8 2v5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className="text-white/60 group-hover:text-[#7ecfc0] transition-colors"
    />
  </svg>
);

// ─── Skeleton Blocks ──────────────────────────────────────────────────────────

const FeedSkeleton = () => (
  <div className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-gray-50 border-t lg:border-t-0 border-gray-200 flex flex-col justify-end mt-8 lg:mt-0">
    <div className="px-6 md:px-8 py-4 md:py-5 border-b border-gray-200">
      <Skeleton className="h-3 w-24" />
    </div>
    <div className="flex-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3.5 md:py-4 border-b border-gray-200"
        >
          <Skeleton className="h-4 w-4 shrink-0" />
          <Skeleton className="h-3.5 w-full max-w-[80%]" />
        </div>
      ))}
    </div>
    <div className="h-10 sm:h-12 border-t border-gray-200 bg-white flex items-center px-6 md:px-8">
      <Skeleton className="h-3.5 w-28" />
    </div>
  </div>
);

const FeaturedSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-200">
    {[0, 1].map((i) => (
      <div
        key={i}
        className="relative h-[400px] md:h-[440px] bg-gray-100 p-6 md:p-8 flex flex-col justify-end border-r border-gray-200 last:border-r-0"
      >
        <div className="flex gap-2 mb-3">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-9" />
        </div>
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-5" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-1.5 w-1.5 rounded-full" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    ))}
  </div>
);

const WideCardSkeleton = () => (
  <div className="relative h-64 md:h-80 bg-gray-100 border-b border-gray-200">
    <div className="absolute inset-y-0 left-0 flex w-full sm:w-[60%] flex-col justify-center px-6 sm:px-11 py-8 sm:py-10">
      <Skeleton className="h-3 w-20 mb-4" />
      <Skeleton className="h-8 w-4/5 mb-5" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-2">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-1.5 w-1.5 rounded-full" />
        <Skeleton className="h-3 w-14" />
      </div>
    </div>
  </div>
);

const GridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b border-gray-200">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="bg-gray-100 p-6 md:p-8 border-r border-gray-200 last:border-r-0"
      >
        <Skeleton className="h-32 md:h-36 w-full rounded-sm mb-5" />
        <Skeleton className="h-3 w-16 mb-3" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-3/4 mb-5" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-5" />
        <Skeleton className="h-3 w-16" />
      </div>
    ))}
  </div>
);

const ArticlesSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="flex items-start gap-4 md:gap-5 px-6 md:px-11 py-5 md:py-7 border-b border-gray-100 sm:border-b-0 sm:border-r border-gray-200 last:border-r-0"
      >
        <Skeleton className="h-16 w-16 shrink-0 rounded-sm" />
        <div className="flex-1 flex flex-col gap-2 mt-1">
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

function FinliGenBlog() {
  const [blogs, setBlogs] = useState(FINLIGEN_BLOG_DATA);
  const [loading, setLoading] = useState(false);
  const [gridPage, setGridPage] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}?organization=${ORG}`);
        if (res.ok) {
          const data = await res.json();
          if (!cancelled && data.success) setBlogs(data.data);
        }
      } catch (err) {
        console.error("Failed to load blogs, using default data:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    // Uncomment to enable API calls:
    // load();

    return () => {
      cancelled = true;
    };
  }, []);

  const featuredBlogs = useMemo(() => blogs.filter((b) => b.is_featured), [blogs]);

  const nonFeaturedBlogs = useMemo(
    () => blogs.filter((b) => !b.is_featured),
    [blogs]
  );

  const allGridCards = useMemo(() => {
    const grouped = blogs.reduce((acc, blog) => {
      const tag = blog.tags?.[0] ?? "General";
      (acc[tag] ??= []).push(blog);
      return acc;
    }, {});

    return Object.entries(grouped).flatMap(([tag, items]) =>
      items.map((item) => ({ ...item, tag }))
    );
  }, [blogs]);

  const totalPages = Math.ceil(allGridCards.length / CARDS_PER_PAGE);
  const gridCards = allGridCards.slice(
    gridPage * CARDS_PER_PAGE,
    gridPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const navigateToBlog = useCallback((slug) => {
    window.location.href = `/blog/${slug}`;
  }, []);

  return (
    <div className="mx-auto max-w-7xl overflow-hidden bg-white font-sans text-gray-900 pt-2 sm:pt-4 md:pt-6 lg:pt-8">
      {/* ── HERO ── */}
      <section className="flex flex-col lg:flex-row overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-24 border-b border-gray-200">
        {/* Left Panel */}
        {/* <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-start relative lg:border-r border-gray-200 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="space-y-5 sm:space-y-6 mb-7 sm:mb-8 md:mb-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 md:gap-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px w-7 md:w-8 bg-[#06363c] origin-left block"
              />
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400">
                The Resource Center
              </span>
            </motion.div>

            <div className="space-y-[-0.04em]">
              {[
                { text: "Compliance", delay: 0.3 },
              ].map(({ text, delay }) => (
                <div key={text} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[clamp(1.5rem,6vw,5rem)] font-black leading-[0.85] tracking-[-0.04em] text-gray-900"
                  >
                    {text}
                  </motion.h1>
                </div>
              ))}

              <div className="overflow-hidden flex items-center gap-3 md:gap-6">
                {["&", "cross-border"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.4 + i * 0.05,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className={`relative text-[clamp(1.5rem,6vw,5rem)] font-black leading-[0.85] tracking-[-0.04em] text-gray-300 ${
                      word === "cross-border" ? "italic" : ""
                    }`}
                  >
                    {word === "&" ? "& " : word}
                    {word === "cross-border" && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 1.2,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="absolute left-0 top-3/4 w-full h-[2px] sm:h-[3px] md:h-1 bg-[#06363c]/60 origin-left -rotate-2"
                      />
                    )}
                  </motion.span>
                ))}
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(1.5rem,6vw,5rem)] font-black leading-[0.85] tracking-[-0.04em] text-gray-900"
                >
                  insights.
                </motion.h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 border-t border-gray-200 pt-6 md:pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.8] text-gray-500 font-light max-w-md"
            >
              Field notes on US tax compliance, cross-border operations, offshore
              bookkeeping, and the operational architecture that keeps
              international businesses clean. No fluff — just what actually moves
              the needle.
            </motion.p>
          </div>
        </motion.div> */}
        <motion.div
  initial="hidden"
  animate="visible"
  className="flex-1 flex flex-col justify-start relative lg:border-r border-gray-200 px-4 sm:px-6 md:px-8 lg:px-10"
>
  <div className="space-y-5 sm:space-y-6 mb-7 sm:mb-8 md:mb-10">
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex items-center gap-3 md:gap-4"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        // className="h-px w-7 md:w-8 bg-[#06363c] origin-left block"
      />
      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400">
        FinliGen Insights
      </span>
    </motion.div>

    <div className="space-y-2">
      {/* Main Heading - Tax & Compliance */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="text-[clamp(1.5rem,6vw,4.5rem)] font-black leading-[0.9] tracking-[-0.03em] text-gray-900"
        >
          Tax & Compliance
        </motion.h1>
      </div>

      {/* Subheading - Insights */}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="text-[clamp(1.5rem,6vw,4.5rem)] font-black leading-[0.9] tracking-[-0.03em] text-gray-400"
        >
          <span className="relative inline-block">
            Insights
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute left-0 bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 w-full h-[2px] sm:h-[3px] bg-[#7ecfc0]/60 origin-left"
            />
          </span>
        </motion.h2>
      </div>


      {/* Additional line */}
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="text-[clamp(1.2rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-600"
        >
          for India–US Businesses
        </motion.p>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 gap-6 md:gap-8 border-t border-gray-200 pt-6 md:pt-8">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.8] text-gray-500 max-w-md"
    >
      Expert insights on US tax compliance, sales tax nexus, cross-border 
      regulations, and practical strategies for businesses operating between 
      India and the United States. Real compliance guidance from CA-led experts.
    </motion.p>

    {/* Stats / Features */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex flex-wrap gap-4 sm:gap-6"
    >
      {[
        { number: "500+", label: "Businesses Helped" },
        { number: "50", label: "States Covered" },
        { number: "Weekly", label: "Updates" },
      ].map((stat, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#06363c]" />
            <span className="text-[16px] sm:text-[18px] font-bold text-gray-900">
              {stat.number}
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-gray-400">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
</motion.div>

        {/* Right Panel: Data Feed */}
        {loading ? (
          <FeedSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-gray-50 border-t lg:border-t-0 border-gray-200 mt-8 lg:mt-0"
          >
            <div className="px-6 md:px-8 py-4 md:py-5 border-b border-gray-200 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-gray-400">
                Active Feed
              </span>
              <span className="font-mono text-[10px] text-gray-300">
                // Latest
              </span>
            </div>

            <div
              className="flex-1 max-h-[320px] md:max-h-[400px] overflow-y-auto scrollbar-hide"
              role="feed"
              aria-label="Latest articles"
            >
              {blogs.slice(0, 7).map((item, i) => (
                <BlogFeedItem key={item._id} item={item} index={i} />
              ))}
            </div>

            <div className="h-10 sm:h-12 border-t border-gray-200 bg-white flex items-center px-6 md:px-8">
              <div className="flex items-center gap-2 text-gray-400">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[#06363c] animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-mono text-[9px] md:text-[10px] tracking-wider">
                  UPDATED WEEKLY
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* ── FEATURED GRID ── */}
      {loading ? (
        <FeaturedSkeleton />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-200"
        >
          {featuredBlogs.map((blog) => (
            <FeaturedCard
              key={blog._id}
              blog={blog}
              onClick={navigateToBlog}
            />
          ))}
        </motion.div>
      )}

      {/* ── WIDE CARD ── */}
      {loading ? (
        <WideCardSkeleton />
      ) : (
        nonFeaturedBlogs.slice(0, 1).map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => navigateToBlog(item.url_handle)}
            className="group relative h-60 sm:h-64 md:h-72 lg:h-80 cursor-pointer overflow-hidden border-b border-gray-200"
          >
            <img
              src={item.image_url}
              referrerPolicy="no-referrer"
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex w-full sm:w-[55%] flex-col justify-center px-6 sm:px-11 py-8 sm:py-10">
              <p className="mb-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#7ecfc0]">
                {item.tags?.[0] ?? "Featured"}
              </p>
              <h2 className="mb-4 text-xl sm:text-[28px] md:text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-white group-hover:text-[#7ecfc0] transition-colors duration-300">
                {item.title}
              </h2>
              <p className="mb-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-white/90 line-clamp-2">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                  {item.author}
                </span>
                <Dot />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                  {readTime(item.word_count)}
                </span>
                <Dot />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                  {formatDate(item.created_at, {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ))
      )}

      {/* ── RECENT ARTICLES GRID ── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-b border-gray-200"
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 sm:px-6 md:px-8 lg:px-11 py-6 sm:py-7 md:py-8">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-gray-400">
            Recent articles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {loading ? (
            <ArticlesSkeleton />
          ) : (
            blogs.slice(0, 6).map((item) => (
              <motion.div
                key={item.url_handle}
                variants={fadeUp}
                onClick={() => navigateToBlog(item.url_handle)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigateToBlog(item.url_handle)
                }
                className="group flex cursor-pointer items-start gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-11 py-5 md:py-7 transition-colors duration-200 hover:bg-gray-50 border-b border-gray-100 sm:border-b-0 sm:border-r border-gray-200 last:border-r-0"
              >
                <img
                  src={item.image_url}
                  referrerPolicy="no-referrer"
                  alt={item.title}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-sm object-cover transition-opacity duration-300"
                />
                <div className="flex-1">
                  <p className="mb-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#06363c]">
                    {item.tags?.[0] ?? "Blog"}
                  </p>
                  <p className="mb-1.5 text-[13px] sm:text-[14px] md:text-[15px] font-extrabold leading-[1.28] sm:leading-[1.3] tracking-[-0.01em] text-gray-500 transition-colors duration-200 group-hover:text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    {item.author} · {readTime(item.word_count)}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* ── QUOTE BAND ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 lg:gap-12 border-y border-gray-200 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-10 md:py-12 lg:py-14"
      >
        <div
          className="shrink-0 text-[60px] sm:text-[70px] md:text-[80px] font-black leading-[0.7] text-[#06363c]/10 -mt-2 font-serif"
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <p className="flex-1 font-serif text-[17px] sm:text-[20px] md:text-[23px] lg:text-[26px] italic leading-normal text-gray-400">
          We caught a <em className="text-gray-700">six-figure sales tax liability</em>{" "}
          before the state found it. Most firms wouldn't have seen it until the notice
          arrived. That's what one team for both sides of the border actually buys you.
        </p>
        <div className="min-w-0 sm:min-w-36 md:min-w-40 text-left md:text-right">
          <p className="mb-1 text-[12px] sm:text-[13px] font-bold text-gray-900">
            Indian Tech Founder
          </p>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-gray-400">
            FinliGen Client · 2009
          </p>
        </div>
      </motion.div>

      {/* ── THREE GRID ── */}
      <div className="border-b border-gray-200">
        <motion.div
          key={`grid-${gridPage}`}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {loading ? (
            <GridSkeleton />
          ) : gridCards.length === 0 ? (
            <div className="col-span-3 py-20 text-center text-[13px] text-gray-400">
              No articles found.
            </div>
          ) : (
            gridCards.map((card) => (
              <motion.div
                key={card._id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                onClick={() => navigateToBlog(card.url_handle)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigateToBlog(card.url_handle)
                }
                className="group cursor-pointer border-t-2 border-transparent bg-gray-50 p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-t-[#06363c] hover:bg-white hover:shadow-lg hover:shadow-[#06363c]/5 border-r border-gray-200 last:border-r-0"
              >
                <img
                  src={card.image_url}
                  referrerPolicy="no-referrer"
                  alt={card.title}
                  loading="lazy"
                  className="mb-4 sm:mb-5 h-32 md:h-36 w-full rounded-sm object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                />
                <p className="mb-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#06363c]">
                  {card.tag}
                </p>
                <p className="mb-2.5 text-[14px] sm:text-[15px] md:text-base font-extrabold tracking-[-0.015em] leading-[1.28] sm:leading-[1.3] text-gray-700 group-hover:text-[#06363c] transition-colors duration-300">
                  {card.title}
                </p>
                <p className="mb-4 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.68] sm:leading-[1.7] text-gray-400 line-clamp-3">
                  {card.excerpt}
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                  {readTime(card.word_count)}
                </p>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Pagination controls */}
        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-11 py-4 sm:py-5 border-t border-gray-100">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setGridPage((p) => Math.max(0, p - 1))}
              disabled={gridPage === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-sm border border-gray-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:border-gray-300 hover:text-gray-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Prev
            </motion.button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setGridPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === gridPage
                      ? "bg-[#06363c] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setGridPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={gridPage === totalPages - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-sm border border-gray-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:border-gray-300 hover:text-gray-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        )}
      </div>

      {/* ── NEWSLETTER ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 border-t border-gray-200 bg-white px-4 sm:px-6 md:px-8 lg:px-11 py-10 sm:py-12 md:py-14 lg:py-16 items-center"
      >
        <div>
          <p className="mb-3 sm:mb-3.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-gray-500">
            Stay ahead
          </p>
          <h3 className="mb-3 text-[26px] sm:text-[28px] md:text-[31px] lg:text-[34px] font-black leading-[1.1] tracking-[-0.03em] text-gray-900">
            Compliance insights,
            <br />
            delivered monthly.
          </h3>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-gray-500">
            Field notes on US tax compliance, cross-border operations, and the
            regulatory changes that actually affect your business — from a
            CA-led team that's seen everything.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-0">
            <input
              type="email"
              aria-label="Email address"
              className="flex-1 border border-gray-200 bg-gray-50 px-4 py-3 sm:py-3.5 text-[13px] sm:text-[14px] text-gray-900 outline-none font-sans placeholder:text-gray-400 focus:border-[#06363c] focus:ring-1 focus:ring-[#06363c]/10 transition-all rounded-sm"
              placeholder="your@email.com"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0 bg-[#06363c] px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white hover:bg-[#052f35] transition-colors rounded-sm"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-[9px] sm:text-[10px] tracking-wider text-gray-400">
            No spam. Unsubscribe anytime. 500+ businesses subscribed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default FinliGenBlog;