import { WeatherFeedCard } from '@/components/molecules/WeatherFeedCard';

export const WeatherFeed = () => {
    return (
        <section className="w-[85%] bg-gray-900/80 rounded-md p-6 pb-10 flex flex-wrap justify-evenly items-center">
            <WeatherFeedCard />
        </section>
    );
};