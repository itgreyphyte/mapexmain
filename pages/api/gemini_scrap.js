// pages/api/geminitwo.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// Website scraping configuration
const WEBSITE_CONFIG = {
  baseUrl: 'http://localhost:3000', // Your localhost URL
  pages: [
    '/',
    '/about',
    '/services',
    '/our-services',
    '/solutions',
    '/contact',
    '/technology',
    '/portfolio',
    '/clients'
  ],
  maxRetries: 3,
  timeout: 10000
};

// Cache for scraped data to avoid repeated requests
let websiteDataCache = {
  data: null,
  timestamp: null,
  cacheValidityMs: 5 * 60 * 1000 // 5 minutes cache
};


// Company data in markdown format for better AI comprehension
const MAPEX_COMPANY_DATA = `
# Mapex - Geospatial Intelligence Solutions

## CORE COMPANY IDENTITY
**Mapex** is a leading provider of geospatial intelligence solutions, transforming industries through innovative GIS data engineering, mapping, surveying, CAD/BIM engineering, and AI/ML platforms.

- **Company Name:** Mapex (Azure Clouds now rebranded to Mapex)
- **Tagline:** Building a Smarter, More Connected World
- **About:** GIS Services wing of Azure Knowledge Corporation. Aims to be an irreplaceable GIS partner through centralized quality geospatial data, innovation, and high customer service.
- **Founded:** 2018
- **Headquarters:** Noida Delhi, India
**Industry:** Geospatial Intelligence & GIS Solutions
- **Mission:** To accelerate spatial digitization through technological innovations and deliver transformative geospatial solutions across diverse industries.

## Contact Information
- **Phone:** +91-1203130296
- **Email:** contact@mapex.ai
- **Website:** https://www.mapex.ai
- **LinkedIn:** https://www.linkedin.com/company/mapexai/
- **Address:** 8th Floor, Tower-A, Green Boulevard, Sector 62, Noida 201301, Uttar Pradesh, INDIA

---

### **Core Capabilities**

* UAV Survey
* Surface & Ground Water Survey
* Utility Survey
* Asset Geo-Tagging
* POI Collection
* AI-Powered Network Data Collection
* 2D/3D Map Digitization (Topographic, Cadastral, Parcel, Navigational)
* Indoor & Utility Mapping
* Photogrammetry
* 3D City Modeling
* BIM
* LiDAR & UAV Data Processing
* DSM/DTM/DEM
* Shaded Relief, Line of Sight, Visibility Analysis
* AI/ML Road Network Acquisition
* POA & POI Capture Platforms
* Mobile & In-Person Surveys

---

### **Solutions**

* Property Tax Information Management System (PTIMS)
* Utility Management (Electricity, Gas, Water, Oil)
* Cadastral Mapping with LRMS
* Navigation Solutions (360° Street View + Web App)
* Digital Twins (LOD1 to LOD5)
* AI/ML Object Detection (Buildings, Vehicles, Trees, etc.)
* Power DISCOM Mapping with Integrated Web GIS
* Integrated Tax Revenue Map using Satellite/Drone Imagery + DGPS
* Geo-enabled Land and Property Systems

---

### **Applications**

* Property Management
* Utility Management
* Waste Management
* Health & Crime Management
* Tourism Development
* Road Management
* Town Planning
* Fault Detection and Monitoring

---

### **Platform & Tools**

* Azure Mobile Apps:

  * Property Survey
  * Utility Mapping
  * 3D Street View POI Survey
  * Features: Geofencing, Layer Management, DGPS Integration, Real-time sync, Offline & Online Modes

* Web Dashboard:

  * Project tracking, status visualization, budget tracking
  * Data aggregation and management
  * Stakeholder-friendly, live updates, visual summaries

---

### **Technology Stack**

* OGC GIS Server
* Oracle, ArcGIS Server, PostgreSQL
* Virtual Earth, Google Earth, MapPoint
* Document Viewers and Management Systems
* Mobile frameworks with GNSS, accelerometer, gyroscope
* Tools: DGPS, Distometer, LiDAR, Satellite Imagery
* AI/ML: Image Segmentation, Object Detection, Classification

---

### **Geospatial Production Strength**

* World-class 2D/3D facility
* Secure environments
* Large skilled workforce
* Automated workflows
* Indian Mapping Standards compliance
* Independent Quality Engineering

---

### **POI Database Framework**

* Attributes: Name, Address, Coordinates, Category
* Normalization: Deduplication, Error Correction, Standard Formats
* Technologies: MySQL, PostgreSQL, MongoDB
* Update Mechanism: Real-time sync and scheduled refresh

---

Let me know if you'd like this converted into JSON, Markdown, or any other structured format.


## Services

### Surveying
- **UAV Survey** - High-resolution aerial surveys for topographic and planning applications
- **Surface and Ground Water Survey** - Mapping of surface and sub-surface water sources
- **Utility Survey** - Data collection for utility networks including gas, water, and electricity
- **Asset Geo-Tagging** - Tagging physical assets with spatial metadata for tracking and analysis
- **POI Collection** - Collection of points of interest data with geospatial precision
- **AI-powered Network Data Collection** - Machine learning-enhanced data acquisition for urban networks

### Mapping
- **2D and 3D Map Digitization** - Topographic, cadastral, parcel, and navigational digitization
- **Indoor and Utility Mapping** - Comprehensive mapping for interiors and utility infrastructure
- **Photogrammetry** - Image-based modeling for terrain and building data
- **3D City Modelling** - Detailed urban models for planning and visualization
- **LiDAR & UAV Data Processing** - Processing raw survey data into actionable layers
- **Line of Sight & Shaded Relief Analysis** - Terrain visibility calculations for planning

### Data Acquisition Solutions
- **AI Road Network Data Acquisition** - Automated road mapping using ML/AI
- **Advanced Acquisition Services Suite** - Integrated sensor-based data collection services
- **Advanced Data Processing Platform** - Scalable and automated processing architecture
- **Mobile and In-person Surveys** - On-field data collection through app-enabled teams
- **POI & POA Capture Platform** - Smart collection framework for locations and addresses

### Smart Solutions
- **Property Tax Information Management** - Web-based GIS PTIMS integrated with city planning
- **Utility Management** - Asset mapping and utility network management tools
- **360° Navigation & Street View** - Image collection, map enrichment, and immersive views
- **Cadastral Mapping** - Digital records for land management and property ownership
- **AI Object Detection** - AI/ML detection of buildings, trees, vehicles, and more
- **Digital Twins** - Virtual 3D replicas (LOD1–LOD5) for smart city planning

### Technology Platforms
- **POI Data Collection Portal** - Platform to track, validate, and visualize collected data
- **AI/ML Object Classification & Detection** - Bounding box-based analytics to detect real-world entities
- **Mobile App Suite** - Survey apps with geofencing, offline mode, and DGPS tools
- **Web-based Dashboard** - Real-time project and data management with visualization

## Key Solutions
- **Azureport** — Automated Report Service: Serverless engine for custom report automation
- **Post Processing Platform** - Streamlines geospatial data QC and conversion workflows
- **Manual POI Collection Tool** - For validated, categorized, and normalized POI capture
- **AI POI Platform** - Enables high-accuracy POI and POA segmentation and tagging

## Clients
Government of India, Urban Local Bodies, Smart Cities Mission, Telecommunications Companies, Utility Providers, Agricultural Technology Firms, Real Estate Developers, Construction Companies, Transportation and Logistics Firms, Environmental Agencies

## Awards & Recognition
- Excellence in GIS Innovation Award 2023
- Top Geospatial Solutions Provider 2022
- Smart Cities Technology Innovator 2021

## Applications
Property Management, Utility Management, Waste Management, Health Management, Crime Management, Tourism Management, Road Management, Town Planning, Fault Management

## Technology Stack
OGC GIS Server, Oracle, ArcGIS Server, PostgreSQL, Virtual Earth, Google Earth Integration, Document Management Systems, Map Server, ESRI, QGIS, MapPoint, GDAL, Python, DGPS, Distometer, LiDAR Scanners, Mobile app frameworks with GNSS sensors

### 🛰️ **Focus Geospatial Solutions**

* **Property Tax Information Management**
  MPHS, GIS Mapping, and web-based PTIMS.

* **Utility Management**
  Management of electricity, gas, water, and oil pipeline infrastructure.

* **Navigation**
  360° Street View Image Collection, image processing, and web application development.

* **Cadastral Mapping**
  Digital land records survey and management, including web-based LRMS development.

* **Drone & LiDAR Mapping**
  2D/3D Mapping, Point Cloud generation, DEM/DTM, Shaded Relief, Line-of-Sight (LOS), ORI generation.

* **Azure Clouds Portal**
  POI data collection, web GIS app development, dashboard development.

* **AI/ML-based Object Detection**
  Detects buildings, vehicles, trees, and other man-made/natural features.

* **3D Mapping & Digital Twins**
  Creation of virtual city models from LOD1 to LOD5.

---

### 🗺️ **Property Tax Revenue Mapping**

* Geo-enabled integrated property tax database and information system.
* Orthorectified high-resolution satellite imagery and drone data collection.
* AI/ML-based building footprint, road network extraction, LU/LC (Land Use/Land Cover) mapping.
* Plugins to integrate Digital Twin / HD / 360° map layers.
* Smart governance through a city-wide planning framework.

---

### ⚡ **Utility Asset Mapping – Power DISCOM**

* Large-scale land mapping for power infrastructure.
* Integration of spatial and non-spatial data (feeders, HT/LT networks, meters).
* Web GIS for mapping, consumer indexing, bill generation, and asset tagging.

---

### 🧭 **GIS-Based Land & Cadastral Mapping**

* Automation from FMB (Field Measurement Book) records.
* Large-scale topographic mapping.
* Web-based map distribution platform.

---

### 🗺️ **360° Mapping and Navigation**

* Indoor/outdoor map localization.
* Hyperlocal data collection.
* Road network data enrichment and navigation.
* Administrative boundary mapping.
* 360/3D visualization.

---

### 🔍 **Image Intelligence & Object Recognition**

* **Image Segmentation:** Breaks down images by region for semantic labeling.
* **Object Classification:** Determines class/category of objects (buildings, cars, etc.).
* **Object Detection:** Localizes objects within images using bounding boxes.

---

### 📌 **POI Collection and Classification**

* Standardized structure: name, address, coordinates, category.
* Assigns latitude/longitude geocodes.
* Data cleanup: deduplication, normalization, and error correction.
* Stored in MySQL, PostgreSQL, MongoDB, etc.
* Includes mechanisms for real-time updates in dynamic environments.

---

### 📱 **Mobile App Solutions**

* **Apps Offered:**

  * Property Survey App
  * Utility Mapping App
  * POI Collection App (with 3D Street View support)

* **Key Features:**

  * Geofencing and real-time location tracking
  * Layer management and offline survey support
  * Integrated DGPS & Distometer support
  * Geometry creation and editing
  * Geo-tagged image capture, validation, and attribute entry

---

### 📊 **Web-Based Dashboard**

* Project and task management with real-time tracking.
* Aggregate and organize project data in one location.
* Facilitates executive decision-making without micromanagement.
* Promotes better communication, accuracy, and efficiency.

---

### 🔧 **Technology Platform Stack (Expanded)**

* GIS Servers: OGC, ArcGIS Server, Oracle, PostgreSQL
* Web Mapping: Virtual Earth, Google Earth, MapPoint
* Systems: Document Management Systems, Map Server
* Mobile: GNSS, accelerometer, gyroscope integration
* Data Tools: DGPS, Distometer, LiDAR
* AI/ML: Image segmentation, object detection/classification pipelines

---

Would you like this exported to JSON, Markdown, Word format, or integrated into a backend schema?


`;

// Function to scrape a single page with retry logic
async function scrapePage(url, retries = 0) {
  try {
    console.log(`Scraping: ${url} (attempt ${retries + 1})`);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), WEBSITE_CONFIG.timeout);
    
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'MapexAI-Bot/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Remove script and style elements
    $('script, style, nav, footer, .advertisement, .cookie-banner').remove();
    
    // Extract meaningful content
    const pageData = {
      url,
      title: $('title').text().trim() || $('h1').first().text().trim(),
      headings: [],
      content: [],
      meta: {
        description: $('meta[name="description"]').attr('content') || '',
        keywords: $('meta[name="keywords"]').attr('content') || ''
      }
    };
    
    // Extract headings (h1-h6)
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      const heading = $(el).text().trim();
      if (heading && heading.length > 0) {
        pageData.headings.push({
          level: el.tagName.toLowerCase(),
          text: heading
        });
      }
    });
    
    // Extract paragraphs and meaningful content
    $('p, .content, .description, .service-item, .feature, .benefit, li').each((i, el) => {
      const text = $(el).text().trim();
      if (text && text.length > 20 && !text.includes('cookie') && !text.includes('javascript')) {
        pageData.content.push(text);
      }
    });
    
    // Extract contact information if present
    const contactInfo = {};
    const phoneRegex = /(\+91[\s-]?\d{10}|\d{10})/g;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    const fullText = $.text();
    const phones = fullText.match(phoneRegex);
    const emails = fullText.match(emailRegex);
    
    if (phones) contactInfo.phones = [...new Set(phones)];
    if (emails) contactInfo.emails = [...new Set(emails)];
    
    pageData.contactInfo = contactInfo;
    
    console.log(`✓ Successfully scraped: ${url} (${pageData.content.length} content blocks)`);
    return pageData;
    
  } catch (error) {
    console.error(`✗ Error scraping ${url}:`, error.message);
    
    if (retries < WEBSITE_CONFIG.maxRetries) {
      console.log(`Retrying ${url} in 2 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return scrapePage(url, retries + 1);
    }
    
    return {
      url,
      error: error.message,
      title: '',
      headings: [],
      content: [],
      contactInfo: {}
    };
  }
}

// Function to scrape the entire website
async function scrapeWebsite() {
  console.log('🚀 Starting website scraping...');
  const startTime = Date.now();
  
  const scrapingPromises = WEBSITE_CONFIG.pages.map(page => {
    const fullUrl = `${WEBSITE_CONFIG.baseUrl}${page}`;
    return scrapePage(fullUrl);
  });
  
  const results = await Promise.all(scrapingPromises);
  const validResults = results.filter(result => !result.error);
  const errorResults = results.filter(result => result.error);
  
  console.log(`✅ Scraping completed in ${Date.now() - startTime}ms`);
  console.log(`   Successfully scraped: ${validResults.length} pages`);
  console.log(`   Failed: ${errorResults.length} pages`);
  
  if (errorResults.length > 0) {
    console.log('   Failed URLs:', errorResults.map(r => r.url));
  }
  
  return {
    pages: validResults,
    errors: errorResults,
    scrapedAt: new Date().toISOString(),
    totalPages: validResults.length
  };
}

// Function to get website data (with caching)
async function getWebsiteData() {
  const now = Date.now();
  
  // Check if cached data is still valid
  if (websiteDataCache.data && 
      websiteDataCache.timestamp && 
      (now - websiteDataCache.timestamp) < websiteDataCache.cacheValidityMs) {
    console.log('📋 Using cached website data');
    return websiteDataCache.data;
  }
  
  console.log('🔄 Cache expired or empty, scraping fresh data...');
  
  try {
    const websiteData = await scrapeWebsite();
    
    // Update cache
    websiteDataCache.data = websiteData;
    websiteDataCache.timestamp = now;
    
    return websiteData;
  } catch (error) {
    console.error('❌ Failed to scrape website:', error);
    
    // Return cached data if available, even if expired
    if (websiteDataCache.data) {
      console.log('⚠️  Using expired cached data due to scraping error');
      return websiteDataCache.data;
    }
    
    // Return empty data structure if no cache available
    return {
      pages: [],
      errors: [],
      scrapedAt: new Date().toISOString(),
      totalPages: 0,
      error: 'Failed to scrape website data'
    };
  }
}

// Function to search website data for relevant information
function searchWebsiteData(websiteData, query) {
  if (!websiteData || !websiteData.pages) {
    return { relevantPages: [], searchResults: [] };
  }
  
  const queryLower = query.toLowerCase();
  const searchTerms = queryLower.split(/\s+/).filter(term => term.length > 2);
  
  const relevantPages = [];
  const searchResults = [];
  
  websiteData.pages.forEach(page => {
    let relevanceScore = 0;
    const matchedContent = [];
    
    // Check title
    if (page.title && searchTerms.some(term => page.title.toLowerCase().includes(term))) {
      relevanceScore += 10;
      matchedContent.push(`Title: ${page.title}`);
    }
    
    // Check headings
    page.headings.forEach(heading => {
      if (searchTerms.some(term => heading.text.toLowerCase().includes(term))) {
        relevanceScore += 5;
        matchedContent.push(`${heading.level.toUpperCase()}: ${heading.text}`);
      }
    });
    
    // Check content
    page.content.forEach(content => {
      const contentLower = content.toLowerCase();
      const matchCount = searchTerms.filter(term => contentLower.includes(term)).length;
      if (matchCount > 0) {
        relevanceScore += matchCount * 2;
        // Add snippet of matched content
        if (matchedContent.length < 5) { // Limit to avoid too much content
          matchedContent.push(content.substring(0, 200) + (content.length > 200 ? '...' : ''));
        }
      }
    });
    
    if (relevanceScore > 0) {
      relevantPages.push({
        ...page,
        relevanceScore,
        matchedContent: matchedContent.slice(0, 3) // Limit matched content
      });
    }
  });
  
  // Sort by relevance score
  relevantPages.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  return {
    relevantPages: relevantPages.slice(0, 3), // Top 3 most relevant pages
    searchResults: relevantPages.slice(0, 5).map(page => ({
      url: page.url,
      title: page.title,
      snippet: page.matchedContent[0] || page.content[0] || '',
      relevanceScore: page.relevanceScore
    }))
  };
}

// Main API handler
export default async function handler(req, res) {
  const { query, context, chatHistory } = req.method === 'GET' ? req.query : req.body;

  if (!query) {
    res.status(400).json({ message: 'Query parameter is required' });
    return;
  }

  try {
    // Setup SSE headers
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no' // Important for Nginx hosts
    });

    // Send initial status
    res.write(`data: ${JSON.stringify({
      status: 'Fetching latest website data...',
      loading: true
    })}\n\n`);

    // Get fresh website data
    const websiteData = await getWebsiteData();
    
    // Search website for relevant information
    const searchResults = searchWebsiteData(websiteData, query);
    
    res.write(`data: ${JSON.stringify({
      status: 'Analyzing your question...',
      loading: true,
      searchResults: searchResults.searchResults
    })}\n\n`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Parse chat history if provided
    let parsedChatHistory = [];
    if (chatHistory) {
      try {
        parsedChatHistory = JSON.parse(chatHistory);
      } catch (e) {
        console.log('Could not parse chat history:', e);
      }
    }

    // Build enhanced context with website data
    let websiteContext = '';
    if (searchResults.relevantPages.length > 0) {
      websiteContext = `
## CURRENT WEBSITE DATA (Scraped from ${WEBSITE_CONFIG.baseUrl}):
${searchResults.relevantPages.map(page => `
### ${page.title} (${page.url})
**Headings:** ${page.headings.map(h => h.text).join(', ')}
**Content:** ${page.matchedContent.join('\n')}
`).join('\n')}
`;
    }

    const systemPrompt = `You are MapexAI, an intelligent and friendly assistant for **Mapex**, a leading geospatial intelligence company.

## Company Information:
${MAPEX_COMPANY_DATA}

${websiteContext}

## Response Guidelines:
1. **Priority Data Sources:**
   - FIRST: Use the current website data above if it contains relevant information
   - SECOND: Use the company data provided
   - Always mention if information is from the current website

2. **Personality & Tone:**
   - Be conversational, helpful, and professional
   - Show enthusiasm about geospatial technology and solutions
   - Maintain context from previous messages in the conversation

3. **Contact Information Responses:**     
   - Phone inquiries: [+91-1203130296](tel:+911203130296)
   - Email inquiries: [contact@mapex.ai](mailto:contact@mapex.ai)
   - Address inquiries: "We're located at 8th Floor, Tower-A, Green Boulevard, Sector 62, Noida 201301, Uttar Pradesh, INDIA"
   - Website: "Visit our website at https://www.mapex.ai"
   - If user asks for contact then also provide services link: **[Our Services](https://www.mapex.ai/our-services)**

4. **Service Inquiries:**
   - Be specific about our capabilities and services
   - Use the latest website data when available
   - Explain technical concepts in accessible language
   - Relate services to real-world applications and benefits
   - Suggest relevant services based on user needs
   - If user asks for services then also provide link: **[Our Services](https://www.mapex.ai/our-services)**

5. **General Guidelines:**
   - If a question is **unrelated** to Mapex or the geospatial/GIS domain, **politely respond only with a creative refusal**
   - Do **not** suggest services or include links for unrelated queries
   - Stay focused only on geospatial intelligence, mapping, surveying, GIS/AI/ML, or Mapex company services and solutions

6. **Website Data Usage:**
   - When referencing website data, mention "According to our latest website information..."
   - If website data is unavailable, mention "Based on our company information..."
   - Prefer fresh website data over static company data when available

Current conversation context: ${context || 'General inquiry about Mapex services'}
Website data last updated: ${websiteData.scrapedAt}
Total pages analyzed: ${websiteData.totalPages}
`;

    // Build conversation history for context
    let conversationHistory = [
      { role: 'user', parts: [{ text: systemPrompt }] }
    ];

    // Add previous chat messages for context (last 8 messages to avoid token limits)
    if (parsedChatHistory.length > 0) {
      const recentHistory = parsedChatHistory.slice(-8);
      recentHistory.forEach(msg => {
        if (msg.role === 'user') {
          conversationHistory.push({
            role: 'user',
            parts: [{ text: msg.content }]
          });
        } else if (msg.role === 'assistant') {
          conversationHistory.push({
            role: 'model',
            parts: [{ text: msg.content }]
          });
        }
      });
    }

    // Add current user query
    conversationHistory.push({
      role: 'user',
      parts: [{ text: query }]
    });

    const generationConfig = {
      temperature: 0.7,
      topP: 0.85,
      topK: 40,
      maxOutputTokens: 1500,
    };

    const result = await model.generateContentStream({
      contents: conversationHistory,
      generationConfig,
    });

    let fullResponse = '';

    // Stream each chunk as it arrives
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      if (chunkText) {
        fullResponse += chunkText;
        // Send the chunk as an SSE message
        res.write(`data: ${JSON.stringify({
          text: chunkText,
          fullResponse: fullResponse
        })}\n\n`);
      }
    }

    // Signal completion with final response
    res.write(`event: done\ndata: ${JSON.stringify({
      text: '',
      fullResponse: fullResponse,
      completed: true,
      websiteData: {
        scrapedAt: websiteData.scrapedAt,
        totalPages: websiteData.totalPages,
        relevantPages: searchResults.relevantPages.length
      }
    })}\n\n`);
    res.end();

  } catch (error) {
    console.error('API Error:', error);

    // Send error message as stream
    const errorMessage = "I apologize, but I'm experiencing technical difficulties. Please try again in a moment, or contact us directly at contact@mapex.ai for immediate assistance.";

    res.write(`data: ${JSON.stringify({
      text: errorMessage,
      error: true
    })}\n\n`);
    res.write(`event: done\ndata: ${JSON.stringify({
      completed: true,
      error: true
    })}\n\n`);
    res.end();
  }
}