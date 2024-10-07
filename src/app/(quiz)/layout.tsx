import leftShapes from '@/assets/quiz/left-shapes.svg'
import rightShape from '@/assets/quiz/right-shape.svg'
import Image from "next/image";

export default function QuizLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Image
            className='absolute z-[-1] lg:left-0 left-[-50px] lg:top-20 top-40 w-[500px]'
            src={leftShapes} 
            alt="Shapes"
        />
        <Image
            className='absolute z-[-1] right-0 bottom-0 w-[300px] lg:block hidden'
            src={rightShape} 
            alt="Shapes"
        />

        { children }
      </>
    );
  }
  