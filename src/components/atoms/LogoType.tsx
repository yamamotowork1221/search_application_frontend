import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: '500' });

export const LogoType = () => {
  return (
    <span className={`${outfit.className} text-xl text-blue-500`}>Foogle</span>
  );
};