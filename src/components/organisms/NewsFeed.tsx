import { NewsFeedCard } from '@/components';

export const NewsFeed = () => {
    return (
        <section className='w-[85%] bg-gray-300/50 rounded-md p-4'>
            <h1 className='mb-2 ml-1 font-bold'>おすすめのニュース</h1>
            <NewsFeedCard />
        </section>
    );
};