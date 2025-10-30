import { SearchPageHeader, SearchPageNav, SearchPageMain, TopPageFooter } from '@/components';
import { redirect } from 'next/navigation';

interface HomeProps {
  searchParams: { q?: string | string[], p?: string};
}

export const Home = async ({ searchParams }: HomeProps) => {

  const params = await searchParams;
  const q = Array.isArray(params.q) ? params.q[0] : params.q || '';
  const p = params.p;

  !q && redirect('/');

  return (
    <>
      <SearchPageHeader q={q} />
      <SearchPageNav/>
      <SearchPageMain q={q} p={p} />
      <TopPageFooter />
    </>
  );
};

export default Home;