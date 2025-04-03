import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Check if we're in a production Netlify environment
const isNetlify = process.env.NODE_ENV === 'production' && 
                 (window.location.hostname.includes('.netlify.app') || 
                  !window.location.hostname.includes('localhost'));

// Helper to rewrite API URLs for Netlify deployment
const getApiUrl = (url: string): string => {
  // If we're in Netlify environment and it's an API call
  if (isNetlify && url.startsWith('/api/')) {
    // URL format changed - the endpoint paths in the Netlify function are without the '/api' prefix
    const endpoint = url.substring(5); // Remove '/api/' prefix
    return `/.netlify/functions/api/${endpoint}`;
  }
  return url;
};

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Use the helper to transform the URL if needed
  const apiUrl = getApiUrl(url);
  
  const res = await fetch(apiUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Transform the URL for Netlify if needed
    const url = getApiUrl(queryKey[0] as string);
    
    const res = await fetch(url, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
