// Utility functions for fetching data from Strapi API at build time
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

// Define types for Strapi API responses
interface StrapiPost {
  id: number;
  attributes: {
    title: string;
    description?: string;
    content?: string;
    slug: string;
    publishedAt?: string;
    createdAt: string;
    updatedAt: string;
    featured?: boolean;
    tags?: string;
    ogImage?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
  };
}

interface StrapiResponse {
  data: StrapiPost[];
  meta?: any;
}

interface AstroPost {
  id: string;
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate: Date;
    featured: boolean;
    draft: boolean;
    tags: string[];
    ogImage: string;
  };
  body: string;
}

// Load environment variables from .env file during build
dotenv.config();

// Get the Strapi API URL from environment variables
const getStrapiUrl = (): string => {
  return process.env.STRAPI_API_URL || 'http://localhost:1337/api';
};

// Get the API token from environment variables
const getStrapiToken = (): string | undefined => {
  return process.env.STRAPI_API_TOKEN;
};

/**
 * Fetch blog posts from Strapi API during build time
 * @returns {Promise<StrapiResponse>} Response from Strapi API
 */
export async function fetchStrapiPosts(): Promise<StrapiResponse> {
  try {
    const apiUrl = getStrapiUrl();
    const apiToken = getStrapiToken();
    
    console.log(`[Build] Fetching blog posts from: ${apiUrl}/posts?populate=*`);
    
    const response = await fetch(`${apiUrl}/posts?populate=*`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`
      }
    });
    
    if (!response.ok) {
      console.error('[Build] Failed to fetch blog posts:', response.status);
      return { data: [], meta: {} };
    }
    
    const data = await response.json();
    console.log('[Build] Fetched blog posts:', data.data.length);
    
    // Save the fetched data to a local file for debugging
    const contentDir = path.join(process.cwd(), 'src', 'content');
    try {
      await fs.mkdir(path.join(contentDir, 'strapi'), { recursive: true });
      await fs.writeFile(
        path.join(contentDir, 'strapi', 'posts.json'),
        JSON.stringify(data, null, 2)
      );
      console.log('[Build] Saved Strapi posts to local file');
    } catch (writeError) {
      console.error('[Build] Error saving Strapi data:', writeError);
    }
    
    return data;
  } catch (error) {
    console.error('[Build] Error fetching blog posts:', error);
    return { data: [], meta: {} };
  }
}

/**
 * Convert Strapi posts to Astro content collection format
 * @param {StrapiResponse} strapiData - Data from Strapi API
 * @returns {AstroPost[]} Formatted posts for Astro
 */
export function convertStrapiToAstroFormat(strapiData: StrapiResponse): AstroPost[] {
  if (!strapiData || !strapiData.data || !Array.isArray(strapiData.data)) {
    console.error('[Build] Invalid Strapi data format');
    return [];
  }
  
  return strapiData.data.map((post: StrapiPost) => ({
    id: post.id.toString(),
    slug: post.attributes.slug,
    data: {
      title: post.attributes.title,
      description: post.attributes.description || '',
      pubDate: new Date(post.attributes.publishedAt || post.attributes.createdAt),
      updatedDate: new Date(post.attributes.updatedAt),
      featured: post.attributes.featured || false,
      draft: false,
      tags: post.attributes.tags?.split(',').map((tag: string) => tag.trim()) || [],
      ogImage: post.attributes.ogImage?.data?.attributes?.url || '',
    },
    body: post.attributes.content || ''
  }));
}
