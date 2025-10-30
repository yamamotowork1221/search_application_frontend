import { NavPublicity,NavPolicy } from '@/components';

export const TopPageFooter = () => {
    return (
        <header className='flex justify-evenly py-4 bg-gray-800 border-t border-gray-400'>
            <NavPublicity />
            <NavPolicy />
        </header>
    );
};