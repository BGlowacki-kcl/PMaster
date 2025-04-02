/**
 * Base API request handler with common configuration
 * @param {string} endpoint - API endpoint
 * @param {string} method - HTTP method
 * @param {Object} [body] - Request body (optional)
 * @returns {Promise<Object>} - API response data
 * @throws {Error} - If request fails
 */
export async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            method: options.method, 
            headers: {
                "Content-Type": "application/json",
                ...options.headers, 
            },
            body: options.body ? JSON.stringify(options.body) : undefined, 
            });

        const result = await response.json();
  
        if (!response.ok) {
            return { success: false, error: result.message || "Unknown error" };
        }
    
        return { success: true, data: result };
    } catch (error) {
        return { success: false, error: error.message };
    }
  }
  