import { getSearchApi } from '@/utils/getSearchApi';
import Image from 'next/image';
import { M_PLUS_Rounded_1c } from 'next/font/google';

interface SearchPageHeaderProps {
    q: string;
    p?: string;
};

const mplus = M_PLUS_Rounded_1c({
    weight: ['400', '700'],
});

export const SearchPageCard = async ({ q, p }: SearchPageHeaderProps) => {

    try {
        const pageNumber: string = String(isNaN(Number(p)) || Number(p) <= 0 ? 1 : Number(p));
        const data = await getSearchApi(q, pageNumber);
        console.log('log', data);
        const searchResults = [];
        for (let i = 0; i < data.items.length; i++) {
            searchResults.push(
                <li key={data.items[i].htmlTitle} className='mb-12'>
                    <a className='hover:cursor-pointer' href={data.items[i].link} target="_blank" rel="noopener noreferrer">
                        <span className='flex text-sm items-center'>
                            <img className='h-8 w-8 mr-2 rounded-full' src={`https://www.google.com/s2/favicons?domain=${data.items[i].displayLink}&sz=64`} alt={data.items[i].pagemap.metatags?.[0]?.['og:site_name']} />
                            <span>
                                <h3>{data.items[i].pagemap.metatags?.[0]?.['og:site_name']}</h3>
                                <p>{data.items[i].displayLink}</p>
                            </span>
                        </span>
                        <span className='flex justify-between'>
                            <span className='w-[70%]'>
                                <h2 className='text-xl font-bold text-blue-700 hover:border-b hover:border-blue-700'>{data.items[i].title}</h2>
                                <p className="text-gray-600">{data.items[i].snippet}</p>
                            </span>
                            <span className='flex justify-center w-[25%] h-full'><img className='w-full' src={data.items[i].pagemap.cse_thumbnail?.[0]?.src && data.items[i].pagemap.cse_thumbnail?.[0]?.src || `https://www.google.com/s2/favicons?domain=${data.items[i].displayLink}&sz=64]`} alt={data.items[i].snippet} /></span>
                        </span>
                    </a>
                </li >
            );
        };

        return (
            <>
                <p className='w-[80%] mb-8 font-bold text-gray-600'>約{data.searchInformation.formattedTotalResults}件の結果</p>
                <ul className={`${mplus.className} w-[70%]`}>
                    {searchResults}
                </ul>
            </>
        );

    } catch (error) {
        console.error('Error fetching Search data');
        return (
            <p className='w-full'>検索できません</p>
        );
    }
};