import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: '500' });

export const LogoSymbol = () => {
  return (
    <span className={`${outfit.className} w-8 h-8 flex justify-center items-center text-xl text-blue-500 border-4 border-blue-500`}>F</span>
  );
};