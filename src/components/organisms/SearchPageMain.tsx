import { SearchPageCard, SearchNav } from '@/components';

interface SearchPageHeaderProps {
    q: string;
    p?: string;
};

export const SearchPageMain = ({ q, p }: SearchPageHeaderProps) => {
    return (
        <main className="mt-8 mb-16 flex flex-wrap justify-center">
            <SearchPageCard q={q} p={p} />
            <SearchNav q={q} p={p} />
        </main>
    );
};