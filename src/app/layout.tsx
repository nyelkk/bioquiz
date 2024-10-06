// Fonts
import { Poppins, Climate_Crisis } from 'next/font/google';
// Images
import logoBioQuiz from '@/assets/logo-black.svg'
import Image from "next/image";
// Styles and config's
import type { Metadata } from "next";
import "../styles/globals.css";
// Component
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

export const climateCrisis = Climate_Crisis({
  subsets: ['latin'],
  weight: ['400']
});

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
    <html lang="pt-br" className='h-full'>
      <body className={`${poppins.className} antialiased h-full`}>
        <header className='bg-header w-full flex justify-start p-10 px-24 absolute top-0'>
          <Link href='/'>
            <Image 
              className='w-[170px]'
              src={logoBioQuiz} 
              alt="Logo do BioQuiz"
            />
          </Link>
        </header>

        <main className='mx-24 h-full'>
          {children}
        </main>
      </body>
    </html>
  );
}
