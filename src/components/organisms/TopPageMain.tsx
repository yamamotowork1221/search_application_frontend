import { TopPageHeroe, WeatherFeed, NewsFeed } from '@/components';

export const TopPageMain = () => {
    return (
        <main className="mb-4 flex flex-wrap justify-center gap-y-3">
            <TopPageHeroe />
            <WeatherFeed />
            <NewsFeed />
        </main>
    );
};