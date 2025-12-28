import { useEffect, useState, useRef, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { NavigationHeader } from "@/components/NavigationHeader";
import { getPostBySlug, getRelatedPosts, BlogPost as BlogPostType, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Linkedin, Twitter, Link2, BookOpen } from "lucide-react";
import { getCalendlyUrl } from "@/hooks/useCalendlyUrl";
import { CalendlyButton } from "@/components/CalendlyButton";

// Demo post content for when Sanity is not configured
const demoPostContent = {
    title: "How AI is Transforming Recruitment in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing the way recruitment agencies find and engage with top talent before competitors.",
    publishedAt: new Date().toISOString(),
    readingTime: 5,
    categories: [{ title: "Industry Insights", slug: { current: "industry-insights" } }],
    author: { name: "Sofia", role: "Growth Content Editor" },
    body: [
        {
            _type: "block",
            _key: "intro",
            children: [{ _type: "span", text: "AI note takers are the fastest way to get clean meeting notes without typing. Over the past few weeks, I tested dozens of best AI note-taking tools to see which ones actually capture calls, transcribe accurately, and generate summaries you can trust. I focused on free AI note takers that work right out of the box, since most people just want reliable documentation without adding another subscription." }],
            style: "normal",
        },
        {
            _type: "block",
            _key: "p1b",
            children: [{ _type: "span", text: "From that testing, I narrowed the field to " }, { _type: "span", text: "7 free AI note takers", marks: ["strong"] }, { _type: "span", text: " that consistently delivered. Each tool recorded my meetings automatically, produced time-stamped transcripts, and created concise action-oriented recaps. I could jump back to key moments, search for decisions, and share highlights in seconds." }],
            style: "normal",
        },
        {
            _type: "block",
            _key: "h2-1",
            children: [{ _type: "span", text: "What is an AI Note Taker?" }],
            style: "h2",
        },
        {
            _type: "block",
            _key: "p2",
            children: [{ _type: "span", text: "An AI note taker is software that automatically records, transcribes, and summarizes meetings. Instead of manually typing notes, the AI captures everything said, identifies speakers, and extracts key action items — all in real-time or immediately after the meeting ends." }],
            style: "normal",
        },
        {
            _type: "block",
            _key: "h2-2",
            children: [{ _type: "span", text: "How We Chose The Best Free AI Note Generators" }],
            style: "h2",
        },
        {
            _type: "block",
            _key: "p3",
            children: [{ _type: "span", text: "To make this useful, I evaluated every AI note taker across three meeting types, multiple accents, and technical conversations. I scored transcription accuracy, summary quality, task extraction, and how easy it was to find details later. Some apps excelled at speaker labeling and punctuation. Others stood out for structured follow-ups, tags, and topic links." }],
            style: "normal",
        },
        {
            _type: "block",
            _key: "h2-3",
            children: [{ _type: "span", text: "What Are The Best AI Note Taker Apps?" }],
            style: "h2",
        },
        {
            _type: "block",
            _key: "p4",
            children: [{ _type: "span", text: "Based on our extensive testing, here are the top 7 AI note taker apps that consistently delivered high-quality results across various meeting scenarios:" }],
            style: "normal",
        },
        {
            _type: "block",
            _key: "h3-1",
            children: [{ _type: "span", text: "1. Boilr - The All-Round Note Taker for Every Team" }],
            style: "h3",
        },
        {
            _type: "block",
            _key: "p5",
            children: [{ _type: "span", text: "Boilr stands out for recruitment agencies specifically. While it's not just a note-taker, it integrates signal detection with meeting insights, helping teams identify hiring opportunities before they become public. The platform monitors 10,000+ sources and delivers enriched leads directly to your inbox." }],
            style: "normal",
        },
        {
            _type: "block",
            _key: "h2-4",
            children: [{ _type: "span", text: "The Bottom Line" }],
            style: "h2",
        },
        {
            _type: "block",
            _key: "p6",
            children: [{ _type: "span", text: "The best AI note taker for you depends on your specific needs. For general meetings, any of the top picks will serve you well. For recruitment-specific use cases, consider tools like Boilr that combine meeting insights with market intelligence." }],
            style: "normal",
        },
        {
            _type: "block",
            _key: "demo-note",
            children: [{ _type: "span", text: "This is a demo article. Connect Sanity CMS to see your real blog content here." }],
            style: "normal",
        },
    ],
};

// Extract headings from body for Table of Contents
const extractHeadings = (body: any[]) => {
    if (!body) return [];
    return body
        .filter(block => block.style === "h2" || block.style === "h3")
        .map(block => ({
            id: block._key || block.children?.[0]?.text?.toLowerCase().replace(/\s+/g, "-").slice(0, 40),
            text: block.children?.[0]?.text || "",
            level: block.style === "h2" ? 2 : 3,
        }));
};

// Portable Text components - Clean, minimal styling
const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?.url) return null;
            return (
                <figure className="my-8">
                    <img
                        src={value.asset.url}
                        alt={value.alt || ""}
                        className="w-full rounded-xl"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        code: ({ value }: any) => {
            return (
                <pre className="my-6 p-4 bg-gray-900 text-gray-100 rounded-xl overflow-x-auto text-sm font-mono">
                    <code>{value.code}</code>
                </pre>
            );
        },
        ctaCard: ({ value }: any) => {
            // Fixed templates
            const templates: Record<string, { title: string; body: string }> = {
                template1: {
                    title: "Find hiring signals in seconds",
                    body: "Boilr scans thousands of job postings daily and alerts you when target companies start hiring.",
                },
                template2: {
                    title: "Spot your next client before competitors",
                    body: "Boilr uses AI to find companies that are actively hiring so you can reach out at the right time.",
                },
                template3: {
                    title: "Automate your lead generation",
                    body: "Boilr automatically finds companies with open roles matching your expertise. Delivered fresh to your inbox.",
                },
            };

            const template = templates[value.template] || templates.template1;
            // Note: CTA cards in content use window.location for UTM since they don't have direct access to author
            const calendlyUrl = typeof window !== "undefined"
                ? getCalendlyUrl(window.location.pathname, { content: "inline-cta" })
                : "https://calendly.com/felix-boilr/demo";

            return (
                <div className="my-8 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-[#dcfce7]">
                    {/* Boilr Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/boilr-icon.png"
                            alt="Boilr"
                            className="w-10 h-10"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                            {template.title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            {template.body}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <a
                            href={calendlyUrl}
                            className="text-gray-500 text-xs hover:text-gray-900 flex items-center gap-1 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more
                            <span>→</span>
                        </a>
                        <a
                            href={calendlyUrl}
                            className="px-4 py-2 rounded-lg bg-[#48ee8d] text-black text-xs font-medium hover:bg-[#3dd97a] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start Boilr
                        </a>
                    </div>
                </div>
            );
        },
        table: ({ value }: any) => {
            if (!value?.rows || value.rows.length === 0) return null;
            return (
                <div className="my-8 overflow-x-auto">
                    <table className="w-full border-collapse">
                        {value.rows.map((row: any, rowIndex: number) => {
                            const isHeader = value.hasHeaderRow && rowIndex === 0;
                            const Tag = isHeader ? 'th' : 'td';
                            return (
                                <tr
                                    key={rowIndex}
                                    className={isHeader ? 'bg-gray-100' : 'border-b border-gray-100'}
                                >
                                    {row.cells?.map((cell: string, cellIndex: number) => (
                                        <Tag
                                            key={cellIndex}
                                            className={`px-4 py-3 text-left text-sm ${isHeader
                                                ? 'font-semibold text-gray-900'
                                                : 'text-gray-600'
                                                }`}
                                        >
                                            {cell}
                                        </Tag>
                                    ))}
                                </tr>
                            );
                        })}
                    </table>
                </div>
            );
        },
    },
    block: {
        h1: ({ children, value }: any) => (
            <h1 id={value._key} className="text-3xl font-bold mt-12 mb-6 text-gray-900 scroll-mt-24">
                {children}
            </h1>
        ),
        h2: ({ children, value }: any) => (
            <h2 id={value._key} className="text-2xl font-bold mt-10 mb-4 text-gray-900 scroll-mt-24">
                {children}
            </h2>
        ),
        h3: ({ children, value }: any) => (
            <h3 id={value._key} className="text-xl font-semibold mt-8 mb-3 text-gray-900 scroll-mt-24">
                {children}
            </h3>
        ),
        normal: ({ children }: any) => (
            <p className="text-gray-600 text-[17px] leading-[1.8] mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-2 border-gray-300 pl-6 my-8 italic text-gray-500 text-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-600 text-[17px]">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-600 text-[17px]">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="leading-[1.8]">{children}</li>,
        number: ({ children }: any) => <li className="leading-[1.8]">{children}</li>,
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
        code: ({ children }: any) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
        link: ({ children, value }: any) => (
            <a href={value.href} className="text-gray-900 underline underline-offset-2 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
    },
};

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [activeHeading, setActiveHeading] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchPost() {
            if (!slug) return;
            setLoading(true);
            const fetchedPost = await getPostBySlug(slug);
            const related = await getRelatedPosts(slug, 2);
            setRelatedPosts(related);
            if (!fetchedPost) {
                setPost({
                    _id: "demo",
                    slug: { current: slug },
                    ...demoPostContent,
                } as BlogPostType);
            } else {
                setPost(fetchedPost);
            }
            setLoading(false);
        }
        fetchPost();
    }, [slug]);

    // Track active heading for TOC
    useEffect(() => {
        if (!post?.body) return;

        const headings = extractHeadings(post.body);
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -80% 0px" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [post]);

    // Get author slug for UTM tracking (revenue attribution)
    const authorSlug = post?.author?.name?.toLowerCase().replace(/\s+/g, "-") || undefined;

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShareLinkedIn = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
    };

    const handleShareTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post?.title || "")}`, "_blank");
    };

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const headings = post?.body ? extractHeadings(post.body) : [];

    // Format date like jamie: "29.12.2025"
    const formatDateShort = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#fafafa]">
                <NavigationHeader />
                <div className="max-w-4xl mx-auto px-4 py-32">
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-6 rounded w-24 mb-6" />
                        <div className="bg-gray-200 h-12 rounded w-3/4 mb-4" />
                        <div className="bg-gray-200 h-6 rounded w-1/3 mb-12" />
                        <div className="bg-gray-100 aspect-[2/1] rounded-xl mb-8" />
                    </div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-[#fafafa]">
                <NavigationHeader />
                <div className="max-w-3xl mx-auto px-4 py-32 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
                    <p className="text-gray-500 mb-8">The article you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate("/blog")}
                        className="px-6 py-3 rounded-full font-medium bg-gray-900 text-white hover:bg-gray-800 transition"
                    >
                        Back to Blog
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] text-gray-900">
            <NavigationHeader />

            <main>
                {/* Article Layout with Sidebar */}
                <section className="-mt-20 pt-32 sm:-mt-24 sm:pt-40 bg-[#fafafa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-[240px_1fr] gap-12">

                            {/* Sticky Sidebar - Left */}
                            <aside className="hidden lg:block">
                                <div className="sticky top-24">
                                    {/* Back Link */}
                                    <button
                                        onClick={() => navigate("/blog")}
                                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors text-sm"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        All blogs
                                    </button>

                                    {/* TOC */}
                                    {headings.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 mb-4">
                                                Table of Contents
                                            </h4>
                                            <nav className="space-y-2.5">
                                                {headings.map((heading) => (
                                                    <button
                                                        key={heading.id}
                                                        onClick={() => scrollToHeading(heading.id)}
                                                        className={`block text-left text-sm leading-snug transition-colors ${heading.level === 3 ? "pl-3" : ""
                                                            } ${activeHeading === heading.id
                                                                ? "text-gray-900 font-medium"
                                                                : "text-gray-400 hover:text-gray-600"
                                                            }`}
                                                    >
                                                        {heading.text}
                                                    </button>
                                                ))}
                                            </nav>
                                        </div>
                                    )}
                                </div>
                            </aside>

                            {/* Main Content */}
                            <div className="max-w-3xl">
                                {/* Meta - Date & Reading Time */}
                                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                                    <span>{formatDateShort(post.publishedAt)}</span>
                                    {post.readingTime && (
                                        <>
                                            <span>•</span>
                                            <span>{post.readingTime} min</span>
                                        </>
                                    )}
                                </div>

                                {/* Title - Large */}
                                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-6">
                                    {post.title}
                                </h1>

                                {/* Author */}
                                {post.author?.name && (
                                    <div className="flex items-center gap-3 mb-10">
                                        {post.author.image?.asset?.url ? (
                                            <img
                                                src={post.author.image.asset.url}
                                                alt={post.author.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                <span className="text-gray-500 font-medium text-sm">
                                                    {post.author.name.split(" ").map(n => n[0]).join("")}
                                                </span>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">By {post.author.name}</p>
                                            <p className="text-xs text-gray-400">{post.author.role || 'Content Team'}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Featured Image */}
                                <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-12 bg-gradient-to-br from-gray-100 to-gray-50">
                                    {post.mainImage?.asset?.url ? (
                                        <img
                                            src={urlFor(post.mainImage)}
                                            alt={post.mainImage.alt || post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                                <BookOpen className="w-10 h-10 text-gray-300" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Article Content */}
                                <article ref={contentRef} className="mb-16">
                                    {post.body && (
                                        <PortableText value={post.body} components={portableTextComponents} />
                                    )}
                                </article>

                                {/* Share Section */}
                                <div className="py-8 border-t border-gray-200 mb-12">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-gray-500">Share</span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={handleShareLinkedIn}
                                                className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                                aria-label="Share on LinkedIn"
                                            >
                                                <Linkedin className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button
                                                onClick={handleShareTwitter}
                                                className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                                aria-label="Share on Twitter"
                                            >
                                                <Twitter className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button
                                                onClick={handleCopyLink}
                                                className={`p-2.5 rounded-lg transition-colors ${copied ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200"
                                                    }`}
                                                aria-label="Copy link"
                                            >
                                                <Link2 className={`w-4 h-4 ${copied ? "text-white" : "text-gray-600"}`} />
                                            </button>
                                        </div>
                                        {copied && <span className="text-xs text-gray-500">Copied!</span>}
                                    </div>
                                </div>

                                {/* CTA Card */}
                                <div className="p-8 rounded-2xl bg-white border border-gray-100 mb-16">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Get hiring signals 48-72 hours early
                                    </h3>
                                    <p className="text-gray-500 mb-6">
                                        See how boilr monitors 10,000+ sources to deliver qualified opportunities before they hit job boards.
                                    </p>
                                    <CalendlyButton
                                        author={authorSlug}
                                        content="article-bottom-cta"
                                        className="inline-block px-6 py-3 rounded-full font-semibold text-black bg-[#48ee8d] hover:bg-[#3dd97a] transition-all"
                                    >
                                        Book a Demo →
                                    </CalendlyButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Read More Section */}
                {relatedPosts.length > 0 && (
                    <section className="py-16 bg-[#fafafa]">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Read more</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <article
                                        key={relatedPost._id}
                                        onClick={() => navigate(`/blog/${relatedPost.slug.current}`)}
                                        className="group cursor-pointer"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[16/9] max-h-44 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-gray-100 to-gray-50">
                                            {relatedPost.mainImage?.asset?.url ? (
                                                <img
                                                    src={urlFor(relatedPost.mainImage)}
                                                    alt={relatedPost.mainImage.alt || relatedPost.title}
                                                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                                        <BookOpen className="w-6 h-6 text-gray-300" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Category */}
                                        {relatedPost.categories?.[0] && (
                                            <p className="text-xs text-gray-400 mb-2">
                                                {relatedPost.categories[0].title}
                                            </p>
                                        )}

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                                            {relatedPost.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span>{formatDateShort(relatedPost.publishedAt)}</span>
                                            {relatedPost.readingTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{relatedPost.readingTime} min</span>
                                                </>
                                            )}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Bottom CTA */}
                <section className="py-20 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Ready to get ahead of the competition?
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
                            Book a demo and see how boilr delivers hiring signals 48-72 hours before job boards.
                        </p>
                        <CalendlyButton
                            author={authorSlug}
                            content="article-footer-cta"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black bg-[#48ee8d] hover:bg-[#3dd97a] transition-all duration-200"
                        >
                            Book a Demo →
                        </CalendlyButton>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
