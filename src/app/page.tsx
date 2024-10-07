import bgElements from '@/assets/bgHero-elements.svg';
import logoBioQuiz from '@/assets/logo-black.svg';
import { Button } from '@/components/Button';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-full flex flex-col justify-center lg:items-start items-center'>
      <div className='flex flex-col justify-center lg:items-start items-center gap-10'>

        <Image
          className='absolute lg:right-0 right-[-120px] lg:h-[850px] h-[450px] bottom-0 w-auto z-[-1]'
          src={bgElements}
          alt="Elementos do background"
        />
      
        <Image 
          className='lg:w-2/5 lg:min-w-[400px] w-full min-w-[250px]'
          src={logoBioQuiz} 
          alt="Logo do BioQuiz"
        />

        <Link href={'/quiz'} className='lg:w-auto'>
          <Button>Começar</Button>
        </Link>
      </div>

      <Link href='/qrcode' className='lg:text-base text-xs font-crisis underline uppercase text-gray-600 hover:text-gray-500 transition-all duration-150 absolute bottom-4'>
        Mostrar QRCode
      </Link>
    </div>
  );
}
