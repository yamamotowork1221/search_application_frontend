import { LogoMark, NavServices, ControlMenu } from '@/components';

export const TopPageHeader = () => {
    return (
        <header className='flex justify-between px-10 py-4 bg-gradient-to-b from-white to-transparent items-center'>
            <LogoMark />
            <NavServices />
            <ControlMenu />
        </header>
    );
};