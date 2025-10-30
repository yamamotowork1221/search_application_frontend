import { getWeatherApi } from '@/utils/getWeatherApi';
import { M_PLUS_Rounded_1c } from 'next/font/google';

const mplus = M_PLUS_Rounded_1c({
    weight: ['400', '700'],
});

export const WeatherFeedCard = async () => {

    try {
        const data = await getWeatherApi();

        const items = [];
        for (let i = 0; i < data.forecasts.length; i++) {
            items.push(
                <li key={data.forecasts[i].dateLabel} className="flex items-center flex-col">
                    <h2 className='text-xl'>{data.forecasts[i].dateLabel}</h2>
                    <img src={data.forecasts[i].image.url} alt={data.forecasts[i].image.title} />
                    {data.forecasts[i].telop}
                </li >
            );
        };

        return (
            <>
                <h1 className={`${mplus.className} text-white w-full mb-4 text-center`}>{data.title}</h1 >
                <p className={`${mplus.className} text-white w-1/2`} style={{ textIndent: "1em" }} >{data.description.bodyText.replace(/\s+/g, "")}</p>
                <ul className={`${mplus.className} text-white w-1/3 flex justify-evenly`}>
                    {items}
                </ul>
            </>
        );
    } catch (error) {
        console.error('Error fetching weather data');
        return null;
    }
};