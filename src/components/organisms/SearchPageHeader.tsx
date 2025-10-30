import { LogoMark, SearchFeed, ControlMenu } from '@/components';

interface SearchPageHeaderProps {
    q: string;
};

export const SearchPageHeader = ({ q }: SearchPageHeaderProps) => {
    return (
        <header className='flex justify-between md:px-10 pt-12 pb-8 px-5 items-center'>
            <LogoMark />
            <SearchFeed q={q} />
            <ControlMenu />
        </header>
    );
};