interface SearchFeedProps {
    q?: string;
    p?: string;
};

export const SearchFeed = ({ q }: SearchFeedProps) => {

    return (
        <form className='w-[55%] md:w-[70%] h-12 border-2 border-blue-500 rounded-full flex items-center overflow-hidden' action="/search" method="get">
            <input className='w-full h-full pl-8 text-xl font-bold bg-white focus:outline-none tracking-wider' type="text" defaultValue={q} name="q" required maxLength={100}/>
            <button className='w-24 h-full bg-blue-500 font-bold text-white hover:cursor-pointer' type="submit">検索</button>
        </form>
    );
};