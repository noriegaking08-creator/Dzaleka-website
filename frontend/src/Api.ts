// API helper with TypeScript
const BASE = (process.env.REACT_APP_API_BASE || "http://localhost:5000") + "/api";

// Simple in-memory cache
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export interface ContactPayload {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}

export interface ApiResponse<T> {
  status: string;
  data?: T;
  message?: string;
}

export async function fetchJSON<T = any>(path: string): Promise<ApiResponse<T>> {
  const cacheKey = BASE + path;
  
  // Check cache first
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const res = await fetch(BASE + path, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    const data = await res.json();
    
    // Cache the result
    cache.set(cacheKey, { data, timestamp: Date.now() });
    
    return data;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
}

export async function postContact(payload: ContactPayload): Promise<ApiResponse<any>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
  
  try {
    const res = await fetch(BASE + "/contact", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      const j = await res.json().catch(() => ({ message: "Network error" }));
      throw new Error(j.message || "Contact failed");
    }
    
    return await res.json();
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
}

// Function to clear cache
export const clearCache = () => {
  cache.clear();
};