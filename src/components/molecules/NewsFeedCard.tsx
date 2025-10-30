import { getNewsApi } from '@/utils/getNewsApi';
import Image from 'next/image';
import { M_PLUS_Rounded_1c } from 'next/font/google';

const mplus = M_PLUS_Rounded_1c({
    weight: ['400', '700'],
});

export const NewsFeedCard = async () => {

    try {
        const data = await getNewsApi();

        const items = [];
        for (let i = 0; i < data.results.length; i++) {
            items.push(
                <li key={data.results[i].title} className='bg-white flex items-center flex-col rounded-md overflow-hidden'>
                    <a className='w-full' href={data.results[i].link} target="_blank" rel="noopener noreferrer">
                        <span className='flex justify-center w-full'><img className='w-full ' src={data.results[i].image_url && data.results[i].image_url || data.results[i].source_icon} alt={data.results[i].title} /></span>
                        <span className='m-2 ml-4 flex items-center'><img className='w-8 mr-2 rounded-full' src={data.results[i].source_icon} alt={data.results[i].source_name} />{data.results[i].source_name}</span>
                        <h2 className='m-2'>{data.results[i].title}</h2>
                    </a>
                </li >
            );
        };

        return (
            <>
                <ul className={`${mplus.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
                    {items}
                </ul>
            </>
        );
    } catch (error) {
        console.error('Error fetching News data');
        return null;
    }
};