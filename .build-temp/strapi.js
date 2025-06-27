var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Utility functions for fetching data from Strapi API at build time
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
// Load environment variables from .env file during build
dotenv.config();
// Get the Strapi API URL from environment variables
var getStrapiUrl = function () {
    return process.env.STRAPI_API_URL || 'http://localhost:1337/api';
};
// Get the API token from environment variables
var getStrapiToken = function () {
    return process.env.STRAPI_API_TOKEN;
};
/**
 * Fetch blog posts from Strapi API during build time
 * @returns {Promise<StrapiResponse>} Response from Strapi API
 */
export function fetchStrapiPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, apiToken, response, data, contentDir, writeError_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    apiUrl = getStrapiUrl();
                    apiToken = getStrapiToken();
                    console.log("[Build] Fetching blog posts from: ".concat(apiUrl, "/posts?populate=*"));
                    return [4 /*yield*/, fetch("".concat(apiUrl, "/posts?populate=*"), {
                            headers: {
                                'Authorization': "Bearer ".concat(apiToken)
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        console.error('[Build] Failed to fetch blog posts:', response.status);
                        return [2 /*return*/, { data: [], meta: {} }];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log('[Build] Fetched blog posts:', data.data.length);
                    contentDir = path.join(process.cwd(), 'src', 'content');
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    return [4 /*yield*/, fs.mkdir(path.join(contentDir, 'strapi'), { recursive: true })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, fs.writeFile(path.join(contentDir, 'strapi', 'posts.json'), JSON.stringify(data, null, 2))];
                case 5:
                    _a.sent();
                    console.log('[Build] Saved Strapi posts to local file');
                    return [3 /*break*/, 7];
                case 6:
                    writeError_1 = _a.sent();
                    console.error('[Build] Error saving Strapi data:', writeError_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, data];
                case 8:
                    error_1 = _a.sent();
                    console.error('[Build] Error fetching blog posts:', error_1);
                    return [2 /*return*/, { data: [], meta: {} }];
                case 9: return [2 /*return*/];
            }
        });
    });
}
/**
 * Convert Strapi posts to Astro content collection format
 * @param {StrapiResponse} strapiData - Data from Strapi API
 * @returns {AstroPost[]} Formatted posts for Astro
 */
export function convertStrapiToAstroFormat(strapiData) {
    if (!strapiData || !strapiData.data || !Array.isArray(strapiData.data)) {
        console.error('[Build] Invalid Strapi data format');
        return [];
    }
    return strapiData.data.map(function (post) {
        var _a, _b, _c, _d;
        return ({
            id: post.id.toString(),
            slug: post.attributes.slug,
            data: {
                title: post.attributes.title,
                description: post.attributes.description || '',
                pubDate: new Date(post.attributes.publishedAt || post.attributes.createdAt),
                updatedDate: new Date(post.attributes.updatedAt),
                featured: post.attributes.featured || false,
                draft: false,
                tags: ((_a = post.attributes.tags) === null || _a === void 0 ? void 0 : _a.split(',').map(function (tag) { return tag.trim(); })) || [],
                ogImage: ((_d = (_c = (_b = post.attributes.ogImage) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.attributes) === null || _d === void 0 ? void 0 : _d.url) || '',
            },
            body: post.attributes.content || ''
        });
    });
}
