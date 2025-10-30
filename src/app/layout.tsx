import type { Metadata } from "next";
import { cookies } from 'next/headers';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "検索サービスポートフォリオ",
    template: "%s | 検索サービスポートフォリオ",
  },
};

export const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const className = "bg-[url('/topPageBgImage.jpg')] bg-fixed bg-cover bg-top bg-no-repeat"
  const cookieStore = await cookies();
  const currentPath = cookieStore.get('current-path')?.value || '/';
  const isHome = currentPath === '/';
  const bkclassName = isHome ? className : undefined;

  return (
    <html lang="ja">
      <body className={`${bkclassName} tracking-tight`} >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;