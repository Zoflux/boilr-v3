import { useLocation } from "react-router-dom";

const CALENDLY_BASE_URL = "https://calendly.com/felix-boilr/demo";

interface UseCalendlyUrlOptions {
    /** Author slug for attribution (e.g., "sofia", "jamie") */
    author?: string;
    /** Custom campaign name (overrides auto-detected slug) */
    campaign?: string;
    /** Button/link identifier for A/B testing (e.g., "header-cta", "footer-cta") */
    content?: string;
}

/**
 * Hook that generates a Calendly URL with automatic UTM parameters
 * based on the current page location.
 * 
 * UTM Parameters generated:
 * - utm_source: "blog" or "website" (auto-detected)
 * - utm_medium: "cta" (call-to-action)
 * - utm_campaign: page slug (auto-detected from URL)
 * - utm_term: author slug (if provided)
 * - utm_content: button identifier (if provided)
 */
export function useCalendlyUrl(options: UseCalendlyUrlOptions = {}): string {
    const location = useLocation();
    const { author, campaign, content } = options;

    // Extract the page slug from the pathname
    const pathParts = location.pathname.split("/").filter(Boolean);
    const autoSlug = pathParts[pathParts.length - 1] || "homepage";

    // Detect if we're on a blog page
    const isBlog = location.pathname.includes("/blog");
    const source = isBlog ? "blog" : "website";

    // Build UTM parameters
    const params = new URLSearchParams();
    params.set("utm_source", source);
    params.set("utm_medium", "cta");
    params.set("utm_campaign", campaign || autoSlug);

    // Add author for blog posts (for revenue attribution)
    if (author) {
        params.set("utm_term", author);
    }

    // Add content identifier if provided
    if (content) {
        params.set("utm_content", content);
    }

    return `${CALENDLY_BASE_URL}?${params.toString()}`;
}

/**
 * Standalone function to generate Calendly URL with UTM params
 * Use this when you can't use the hook (e.g., in event handlers outside components)
 */
export function getCalendlyUrl(
    pathname: string,
    options: UseCalendlyUrlOptions = {}
): string {
    const { author, campaign, content } = options;

    const pathParts = pathname.split("/").filter(Boolean);
    const autoSlug = pathParts[pathParts.length - 1] || "homepage";
    const isBlog = pathname.includes("/blog");
    const source = isBlog ? "blog" : "website";

    const params = new URLSearchParams();
    params.set("utm_source", source);
    params.set("utm_medium", "cta");
    params.set("utm_campaign", campaign || autoSlug);

    if (author) {
        params.set("utm_term", author);
    }

    if (content) {
        params.set("utm_content", content);
    }

    return `${CALENDLY_BASE_URL}?${params.toString()}`;
}
