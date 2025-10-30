import { fetchJson } from '@/service/fetchJson';
import { env } from '@/config/env';

export const getSearchApi = async (q: string, p: string) => {
    try {
        const endpointHostAddress: string = env.ENDPOINT_HOST_ADDRESS || 'https://';
        const searchApiPath: string = env.SEARCH_API_PATH || '/';
        const qWord: string = q;
        const pNo: string = p;
        const url: string = endpointHostAddress + searchApiPath + '?q=' + qWord + '&p=' + pNo;
        console.log(url);
        const response = await fetchJson(url);
        if (!response) throw new Error('ネットワークエラー');
        const json = await response;
        return json;
    } catch (error) {
        console.error('Error fetching weather data:');
        return null;
    }
};