import bgElements from '@/assets/bgHero-elements.svg';
import logoBioQuiz from '@/assets/logo-black.svg';
import { Button } from '@/components/Button';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-full flex flex-col justify-center'>
      <Image
        className='absolute right-0 bottom-0 w-auto z-[-1] h-[850px]'
        src={bgElements}
        alt="Elementos do background"
      />

      <div className='flex flex-col justify-center items-start gap-10'>
        <Image 
          className='w-1/3'
          src={logoBioQuiz} 
          alt="Logo do BioQuiz"
        />

        <Link href={'/quiz'}>
          <Button>Começar</Button>
        </Link>
      </div>

      <Link href='/qrcode' className='font-crisis underline uppercase text-gray-600 hover:text-gray-500 transition-all duration-150 absolute bottom-4'>
        Mostrar QRCode
      </Link>
    </div>
  );
}
