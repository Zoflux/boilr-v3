import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { NavigationHeader } from "@/components/NavigationHeader";
import { getAllPosts, BlogPost, urlFor, formatDate } from "@/lib/sanity";
import { Search, BookOpen } from "lucide-react";

// Demo posts for when Sanity is not configured yet
const demoPosts: BlogPost[] = [
    {
        _id: "demo-1",
        title: "How AI is Transforming Recruitment in 2024",
        slug: { current: "ai-transforming-recruitment-2024" },
        excerpt: "Discover how artificial intelligence is revolutionizing the way recruitment agencies find and engage with top talent before competitors even know about the opportunity.",
        publishedAt: new Date().toISOString(),
        readingTime: 5,
        categories: [{ title: "Industry Insights", slug: { current: "industry-insights" } }],
        author: { name: "Felix Boilr" },
    },
    {
        _id: "demo-2",
        title: "5 Signals That Predict Company Hiring Before Job Posts",
        slug: { current: "5-signals-predict-hiring" },
        excerpt: "Learn the key indicators that reveal when a company is about to hire — funding rounds, leadership changes, expansion plans, and more.",
        publishedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
        readingTime: 7,
        categories: [{ title: "Tips & Tricks", slug: { current: "tips-tricks" } }],
        author: { name: "Team Boilr" },
    },
    {
        _id: "demo-3",
        title: "The Complete Guide to Intent-Based Recruiting",
        slug: { current: "intent-based-recruiting-guide" },
        excerpt: "Move from reactive to proactive recruiting. This guide shows you how to use hiring signals to identify opportunities 48-72 hours before competitors.",
        publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
        readingTime: 12,
        categories: [{ title: "Guides", slug: { current: "guides" } }],
        author: { name: "Felix Boilr" },
    },
    {
        _id: "demo-4",
        title: "10 Best Tools for Recruitment Agencies in 2024",
        slug: { current: "best-tools-recruitment-agencies-2024" },
        excerpt: "A comprehensive comparison of the top recruitment tools including CRMs, sourcing platforms, and AI-powered lead generation solutions.",
        publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
        readingTime: 15,
        categories: [{ title: "Tool Reviews", slug: { current: "tool-reviews" } }],
        author: { name: "Team Boilr" },
    },
    {
        _id: "demo-5",
        title: "How to Use Funding Signals to Win More Clients",
        slug: { current: "funding-signals-win-clients" },
        excerpt: "When a company raises capital, they typically need to hire fast. Here's how to leverage funding announcements to get ahead.",
        publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
        readingTime: 6,
        categories: [{ title: "Tips & Tricks", slug: { current: "tips-tricks" } }],
        author: { name: "Felix Boilr" },
    },
    {
        _id: "demo-6",
        title: "Building a Modern BD Playbook for Recruiters",
        slug: { current: "modern-bd-playbook-recruiters" },
        excerpt: "The traditional cold-calling approach is dead. Here's how today's top-performing recruitment agencies are winning new business.",
        publishedAt: new Date(Date.now() - 86400000 * 21).toISOString(),
        readingTime: 10,
        categories: [{ title: "Guides", slug: { current: "guides" } }],
        author: { name: "Team Boilr" },
    },
];

const Blog = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            const fetchedPosts = await getAllPosts();
            setPosts(fetchedPosts.length > 0 ? fetchedPosts : demoPosts);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    // Get unique categories
    const categories = [...new Set(posts.flatMap(post => post.categories?.map(c => c.title) || []))];

    // Filter posts
    const filteredPosts = posts.filter(post => {
        const matchesCategory = !selectedCategory || post.categories?.some(c => c.title === selectedCategory);
        const matchesSearch = !searchQuery ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Featured post is the first one
    const featuredPost = filteredPosts[0];
    const remainingPosts = filteredPosts.slice(1);

    const handleDemo = () => window.open("https://calendly.com/felix-boilr/demo", "_blank");

    // Format date like jamie: "29.12.2025"
    const formatDateShort = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    return (
        <div className="min-h-screen bg-[#fafafa] text-gray-900">
            <NavigationHeader />

            <main>
                {/* Hero Section with Featured Post - Jamie Style */}
                <section className="-mt-20 pt-32 pb-12 sm:-mt-24 sm:pt-40 sm:pb-16 bg-[#fafafa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {loading ? (
                            <div className="animate-pulse">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div className="aspect-[4/3] bg-gray-200 rounded-2xl" />
                                    <div className="space-y-4">
                                        <div className="h-4 bg-gray-200 rounded w-24" />
                                        <div className="h-10 bg-gray-200 rounded w-full" />
                                        <div className="h-20 bg-gray-200 rounded w-full" />
                                    </div>
                                </div>
                            </div>
                        ) : featuredPost && (
                            <article
                                onClick={() => navigate(`/blog/${featuredPost.slug.current}`)}
                                className="group cursor-pointer"
                            >
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    {/* Featured Image - No border, subtle rounded corners */}
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                                        {featuredPost.mainImage?.asset?.url ? (
                                            <img
                                                src={urlFor(featuredPost.mainImage)}
                                                alt={featuredPost.mainImage.alt || featuredPost.title}
                                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                                                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                                    <BookOpen className="w-10 h-10 text-gray-300" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        {/* Category - Simple gray text */}
                                        {featuredPost.categories?.[0] && (
                                            <p className="text-sm text-gray-500 mb-4">
                                                {featuredPost.categories[0].title}
                                            </p>
                                        )}

                                        {/* Title */}
                                        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-4 group-hover:text-gray-700 transition-colors">
                                            {featuredPost.title}
                                        </h1>

                                        {/* Excerpt */}
                                        <p className="text-gray-500 text-lg leading-relaxed mb-6">
                                            {featuredPost.excerpt}
                                        </p>

                                        {/* Meta - Date & Reading Time */}
                                        <div className="flex items-center gap-3 text-sm text-gray-400">
                                            <span>{formatDateShort(featuredPost.publishedAt)}</span>
                                            {featuredPost.readingTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{featuredPost.readingTime} min</span>
                                                </>
                                            )}
                                        </div>

                                        {/* Author */}
                                        {featuredPost.author?.name && (
                                            <div className="flex items-center gap-3 mt-6">
                                                {featuredPost.author.image?.asset?.url ? (
                                                    <img
                                                        src={featuredPost.author.image.asset.url}
                                                        alt={featuredPost.author.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                        <span className="text-gray-500 font-medium text-sm">
                                                            {featuredPost.author.name.split(" ").map(n => n[0]).join("")}
                                                        </span>
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">By {featuredPost.author.name}</p>
                                                    <p className="text-xs text-gray-400">Content Team</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        )}
                    </div>
                </section>

                {/* Category Filter & Search - Clean, minimal */}
                <section className="py-8 bg-[#fafafa] border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            {/* Category Pills - Black/gray only, no colors */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!selectedCategory
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    All
                                </button>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-500 hover:text-gray-900"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Search */}
                            <div className="relative w-full sm:w-auto">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search blogs"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full sm:w-56 pl-10 pr-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-12 bg-[#fafafa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {filteredPosts.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg">No articles found.</p>
                                <button
                                    onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}
                                    className="mt-4 text-gray-900 font-medium hover:underline"
                                >
                                    View all articles
                                </button>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                {remainingPosts.map((post) => (
                                    <article
                                        key={post._id}
                                        onClick={() => navigate(`/blog/${post.slug.current}`)}
                                        className="group cursor-pointer"
                                    >
                                        {/* Image - Clean, no border */}
                                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-gray-100 to-gray-50">
                                            {post.mainImage?.asset?.url ? (
                                                <img
                                                    src={urlFor(post.mainImage)}
                                                    alt={post.mainImage.alt || post.title}
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

                                        {/* Category - Simple gray text */}
                                        {post.categories?.[0] && (
                                            <p className="text-xs text-gray-400 mb-2">
                                                {post.categories[0].title}
                                            </p>
                                        )}

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span>{formatDateShort(post.publishedAt)}</span>
                                            {post.readingTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{post.readingTime} min</span>
                                                </>
                                            )}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section - Clean */}
                <section className="py-20 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Ready to get ahead of the competition?
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
                            Book a demo and see how boilr delivers hiring signals 48-72 hours before job boards.
                        </p>
                        <button
                            onClick={handleDemo}
                            className="px-8 py-4 rounded-full font-semibold text-black bg-[#48ee8d] hover:bg-[#3dd97a] transition-all duration-200"
                        >
                            Book a Demo →
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
