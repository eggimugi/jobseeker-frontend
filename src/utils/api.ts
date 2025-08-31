export const API_BASE = 'http://localhost:8080';

export const apiRequest = async (
  endpoint: string, 
  options: RequestInit = {},
  token?: string
) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // Add existing headers if any
  if (options.headers) {
    Object.assign(headers, options.headers);
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  console.log("Requesting:", API_BASE + endpoint);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};