// Component
import Link from 'next/link';
// Images
import logoBioQuiz from '@/assets/logo-black.svg'
import Image from "next/image";
// Styles and config's
import type { Metadata } from "next";
import "../styles/globals.css";
import { climateCrisis, poppins } from '@/assets/fonts/fonts';

// Fonts


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
      <body className={`${poppins.variable} ${climateCrisis.variable} font-sans antialiased h-full`}>
        <header className='bg-header w-full flex justify-start p-10 px-24'>
          <Link href='/'>
            <Image 
              className='w-[170px]'
              src={logoBioQuiz} 
              alt="Logo do BioQuiz"
            />
          </Link>
        </header>

        <main className='mx-24 h-[80vh]'>
          {children}
        </main>
      </body>
    </html>
  );
}
