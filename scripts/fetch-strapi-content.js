#!/usr/bin/env node
/**
 * This script fetches content from Strapi CMS during the build process
 * and converts it to a format compatible with Astro content collections.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchStrapiPosts, convertStrapiToAstroFormat } from './strapi-utils.js';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log('🚀 Fetching content from Strapi CMS...');
  
  try {
    // Fetch posts from Strapi
    console.log('Fetching posts from Strapi API...');
    const strapiData = await fetchStrapiPosts();
    
    if (!strapiData || !strapiData.data || strapiData.data.length === 0) {
      console.warn('No posts found in Strapi or failed to fetch. Using local content only.');
      return;
    }
    
    // Convert Strapi posts to Astro format
    console.log(`Converting ${strapiData.data.length} Strapi posts to Astro format...`);
    const astroPosts = convertStrapiToAstroFormat(strapiData);
    
    // Create the strapi-posts directory in content
    const contentDir = path.join(process.cwd(), 'src', 'content');
    const strapiPostsDir = path.join(contentDir, 'strapi-posts');
    
    await fs.mkdir(strapiPostsDir, { recursive: true });
    
    // Write each post as a separate markdown file
    for (const post of astroPosts) {
      const frontmatter = `---
title: ${post.data.title}
description: ${post.data.description || ''}
pubDatetime: ${post.data.pubDatetime.toISOString()}
modDatetime: ${post.data.modDatetime ? post.data.modDatetime.toISOString() : null}
featured: ${post.data.featured}
draft: false
tags: ${JSON.stringify(post.data.tags)}
ogImage: ${post.data.ogImage || ''}
---`;
      
      const content = `${frontmatter}

${post.body || ''}`;
      const filePath = path.join(strapiPostsDir, `${post.slug}.md`);
      
      await fs.writeFile(filePath, content);
      console.log(`Created: ${filePath}`);
    }
    
    console.log(`✅ Successfully imported ${astroPosts.length} posts from Strapi`);
    
  } catch (error) {
    console.error('Error fetching Strapi content:', error);
    process.exit(1);
  }
}

// Execute the main function
main();
