import './globals.css';
import { Merienda } from 'next/font/google';

const font = Merienda({ subsets: ['latin'] });

const metadata = {
  title: 'Mahdi Khosravi',
  description: 'Mahdi Khosravi&amp;s personal website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${font.className} bg-zinc-800 container m-auto`}>{children}</body>
  </html>
);

export { RootLayout as default, metadata };
