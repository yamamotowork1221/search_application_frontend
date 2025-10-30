interface Env {
    ENDPOINT_HOST_ADDRESS: string;
    WEATHER_API_PATH: string;
    NEWS_API_PATH: string;
    SEARCH_API_PATH: string;
};

export const env: Env = {
    ENDPOINT_HOST_ADDRESS: process.env.ENDPOINT_HOST_ADDRESS || 'https://',
    WEATHER_API_PATH: process.env.WEATHER_API_PATH || '/',
    NEWS_API_PATH: process.env.NEWS_API_PATH || '/',
    SEARCH_API_PATH: process.env.SEARCH_API_PATH || '/',
} as const;