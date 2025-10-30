import { fetchJson } from '@/service/fetchJson';
import { env } from '@/config/env';

export const getWeatherApi = async () => {
  try {
    const endpointHostAddress: string = env.ENDPOINT_HOST_ADDRESS || 'https://';
    const weatherApiPath: string = env.WEATHER_API_PATH || '/';
    const url: string = endpointHostAddress + weatherApiPath;
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