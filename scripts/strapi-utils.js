/**
 * Simplified Strapi utilities for build-time content fetching
 */
import axios from 'axios';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

// Normalize the Strapi API base URL (without /api)
let STRAPI_API_URL = process.env.STRAPI_API_URL || 'http://5.161.95.205:1337';
if (STRAPI_API_URL.endsWith('/api')) {
  STRAPI_API_URL = STRAPI_API_URL.slice(0, -4);
}
if (STRAPI_API_URL.endsWith('/')) {
  STRAPI_API_URL = STRAPI_API_URL.slice(0, -1);
}
// Try both authentication methods
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const PUBLIC_STRAPI_API_KEY = process.env.PUBLIC_STRAPI_API_KEY;

if (!STRAPI_API_TOKEN && !PUBLIC_STRAPI_API_KEY) {
  console.error('Error: Neither STRAPI_API_TOKEN nor PUBLIC_STRAPI_API_KEY is defined in environment variables');
  process.exit(1);
}

/**
 * Fetch posts from Strapi API
 * @returns {Promise<Object>} Strapi API response with posts data
 */
export async function fetchStrapiPosts() {
  try {
    // Construct the API path correctly
    let apiPath = `${STRAPI_API_URL}/api/posts?populate=*`;
    
    // Try with PUBLIC_STRAPI_API_KEY first if available
    if (PUBLIC_STRAPI_API_KEY) {
      apiPath += `&publicationState=live&apiKey=${PUBLIC_STRAPI_API_KEY}`;
      console.log(`Fetching posts with API key from ${apiPath}`);
      
      try {
        const response = await axios.get(apiPath);
        console.log('Successfully fetched posts with API key');
        return response.data;
      } catch (apiKeyError) {
        console.error('Error fetching with API key:', apiKeyError.message);
        // Fall through to try bearer token if API key fails
      }
    }
    
    // Try with bearer token if API key failed or not available
    if (STRAPI_API_TOKEN) {
      console.log(`Fetching posts with bearer token from ${STRAPI_API_URL}/api/posts?populate=*`);
      
      const response = await axios.get(`${STRAPI_API_URL}/api/posts?populate=*`, {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`
        }
      });
      
      console.log('Successfully fetched posts with bearer token');
      return response.data;
    }
    
    throw new Error('Both authentication methods failed');
  } catch (error) {
    console.error('Error fetching posts from Strapi:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    return { data: [] };
  }
}

/**
 * Convert Strapi post data to Astro-compatible format
 * @param {Object} strapiData - Data from Strapi API
 * @returns {Array} Array of posts in Astro format
 */
export function convertStrapiToAstroFormat(strapiData) {
  if (!strapiData || !strapiData.data || !Array.isArray(strapiData.data)) {
    console.warn('Invalid or empty Strapi data');
    return [];
  }

  return strapiData.data.map(post => {
    const attributes = post.attributes || {};
    
    // Extract image URL if available
    let ogImage = '';
    if (attributes && attributes.coverImage && 
        attributes.coverImage.data && 
        attributes.coverImage.data.attributes && 
        attributes.coverImage.data.attributes.url) {
      ogImage = attributes.coverImage.data.attributes.url;
    }
    
    // Extract tags if available
    let tags = ['strapi'];
    if (attributes && attributes.categories && 
        attributes.categories.data && 
        Array.isArray(attributes.categories.data)) {
      const categoryTags = attributes.categories.data.map(
        category => category.attributes?.name || 'uncategorized'
      );
      tags = [...tags, ...categoryTags];
    }
    
    // Create slug from title or use provided slug
    const slug = (attributes && attributes.slug) || 
      ((attributes && attributes.title) ? attributes.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : `post-${post.id || Date.now()}`);
    
    // Ensure we have a valid description (required by schema)
    const description = (attributes && attributes.description) || (attributes && attributes.excerpt) || 'No description available';
    
    // Ensure we have a valid ogImage (required by schema)
    // Use a data URL for the placeholder image to avoid file dependencies
    const safeOgImage = ogImage || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
    
    return {
      slug,
      data: {
        title: (attributes && attributes.title) || 'Untitled',
        description: description,
        pubDatetime: new Date((attributes && attributes.publishedAt) || (attributes && attributes.createdAt) || Date.now()),
        modDatetime: new Date((attributes && attributes.updatedAt) || Date.now()),
        featured: (attributes && attributes.featured) || false,
        tags,
        ogImage: safeOgImage,
        author: (attributes && attributes.author?.data?.attributes?.name) || 'Admin'
      },
      body: (attributes && attributes.content) || ''
    };
  });
}
