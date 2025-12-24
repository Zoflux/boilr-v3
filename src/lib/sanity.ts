import { createClient } from "@sanity/client";

// Sanity client configuration - Project: boilr-blog
export const sanityClient = createClient({
  projectId: "vdu66rd4",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // Enable CDN for faster reads
});

// Type definitions for blog posts
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  author?: {
    name: string;
    role?: string;
    image?: { asset: { url: string } };
  };
  categories?: { title: string; slug: { current: string } }[];
  publishedAt: string;
  body?: any[]; // Portable Text blocks
  readingTime?: number;
}

// GROQ queries
export const blogQueries = {
  // Get all published blog posts (for listing page)
  allPosts: `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    author-> {
      name,
      role,
      image {
        asset-> { url }
      }
    },
    categories[]-> {
      title,
      slug
    },
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 200)
  }`,

  // Get single post by slug
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    author-> {
      name,
      role,
      image {
        asset-> { url }
      }
    },
    categories[]-> {
      title,
      slug
    },
    publishedAt,
    body[] {
      ...,
      _type == "image" => {
        ...,
        asset-> {
          _id,
          url
        }
      },
      _type == "ctaCard" => {
        ...,
        icon {
          asset-> {
            _id,
            url
          }
        }
      }
    },
    "readingTime": round(length(pt::text(body)) / 5 / 200)
  }`,

  // Get all categories
  allCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }`,
};

// Fetch functions
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    return await sanityClient.fetch(blogQueries.allPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await sanityClient.fetch(blogQueries.postBySlug, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function getRelatedPosts(currentSlug: string, limit: number = 2): Promise<BlogPost[]> {
  try {
    const query = `*[_type == "post" && defined(slug.current) && slug.current != $currentSlug] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]-> {
        title,
        slug
      },
      publishedAt,
      "readingTime": round(length(pt::text(body)) / 5 / 200)
    }`;
    return await sanityClient.fetch(query, { currentSlug, limit: limit - 1 });
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

// Helper to generate Sanity image URLs
export function urlFor(source: any): string {
  if (!source?.asset?.url) return "";
  return source.asset.url;
}

// Format date helper
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

