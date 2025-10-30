import { fetchJson } from '@/service/fetchJson';
import { env } from '@/config/env';

export const getNewsApi = async () => {
    try {
        const endpointHostAddress: string = env.ENDPOINT_HOST_ADDRESS || 'https://';
        const newsApiPath: string = env.NEWS_API_PATH || '/';
        const url: string = endpointHostAddress + newsApiPath;
        console.log(url);
        const response = await fetchJson(url);
        if (!response) throw new Error('ネットワークエラー');
        const json = await response;
        return json;
    } catch (error) {
        console.error('Error fetching weather data:');
        return null;
    };
};