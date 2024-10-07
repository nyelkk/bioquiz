// Fonts
import { climateCrisis, poppins } from '@/assets/fonts/fonts';
// Images
import logoBioQuiz from '@/assets/logo-black.svg';
// Component
import Image from "next/image";
import Link from 'next/link';
// Styles and config's
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "BioQuiz",
  description: "Biologia mais divertida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className='relative !overflow-hidden'>
      <body className={`${poppins.variable} ${climateCrisis.variable} font-sans antialiased relative !overflow-hidden`}>
        <header className='bg-header w-full flex lg:justify-start justify-center p-10 px-24'>
          <Link href='/'>
            <Image 
              className='max-w-[140px] lg:max-w-[200px]'
              src={logoBioQuiz} 
              alt="Logo do BioQuiz"
            />
          </Link>
        </header>

        <main className='lg:mx-24 mx-12 h-[80vh] flex lg:justify-start justify-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
