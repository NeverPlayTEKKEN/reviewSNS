import { Inter } from "next/font/google";
import "./globals.css";
import { Noto_Sans_JP } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "review SNS",
  description: "ものをレビューするためのSNSです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={clsx(notoSansJP.variable, 'font-sans')}>{children}</body>
    </html>
  );
}

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});