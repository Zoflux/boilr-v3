import { useCalendlyUrl } from "@/hooks/useCalendlyUrl";

interface CalendlyButtonProps {
    children: React.ReactNode;
    className?: string;
    /** Author slug for attribution (e.g., "sofia", "jamie") */
    author?: string;
    /** Custom campaign name (overrides auto-detected slug) */
    campaign?: string;
    /** Button identifier for tracking (e.g., "header-cta", "article-cta") */
    content?: string;
}

/**
 * A button that links to Calendly with automatic UTM tracking.
 * 
 * Usage:
 * ```tsx
 * // Basic - auto-detects page for campaign
 * <CalendlyButton className="btn-primary">Book Demo</CalendlyButton>
 * 
 * // With author attribution (for blog posts)
 * <CalendlyButton author="sofia">Book Demo</CalendlyButton>
 * 
 * // With content identifier (for A/B testing)
 * <CalendlyButton content="header-cta">Book Demo</CalendlyButton>
 * ```
 */
export function CalendlyButton({
    children,
    className,
    author,
    campaign,
    content,
}: CalendlyButtonProps) {
    const calendlyUrl = useCalendlyUrl({ author, campaign, content });

    return (
        <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    );
}

/**
 * A text link that opens Calendly with automatic UTM tracking.
 * Use this for inline links in text, footers, etc.
 */
export function CalendlyLink({
    children,
    className,
    author,
    campaign,
    content,
}: CalendlyButtonProps) {
    const calendlyUrl = useCalendlyUrl({ author, campaign, content });

    return (
        <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    );
}
