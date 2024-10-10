import homeBtn from '@/assets/quiz/home-btn.svg'; 
import qrCode from '@/assets/quiz/qr-code.svg';
import Image from "next/image";
import Link from "next/link";

export default function QRCodePage() {
    return (
        <div className='w-full relative grid items-center'>
            <Link href="/" className='absolute top-10 left-0 z-[1] lg:w-52 w-14 active:scale-[0.98]'>
                <Image
                    className=''
                    src={homeBtn}
                    alt="Ícone de volta para Home"
                />
            </Link>

            <div className="flex flex-col justify-center items-center gap-6">
                <Image
                    className='lg:w-1/5 w-2/3'
                    src={qrCode}
                    alt='Imagem do QRCode'
                />

                <h1 className='font-crisis uppercase text-center lg:text-6xl text-2xl text-greenDark'>
                    Acesse <br/> o BioQuiz!
                </h1>
            </div>
        </div>
    );
} 