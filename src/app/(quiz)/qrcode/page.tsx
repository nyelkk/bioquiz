import homeBtn from '@/assets/quiz/home-btn.svg'; 
import qrCode from '@/assets/quiz/qr-code.svg';
import Image from "next/image";
import Link from "next/link";

export default function QRCodePage() {
    return (
        <>
            <Link href="/">
                <Image
                    className='my-10'
                    src={homeBtn}
                    alt="Ícone de volta para Home"
                />
            </Link>

            <div className="flex flex-col justify-center items-center gap-6">
                <Image
                    className='w-1/5'
                    src={qrCode}
                    alt='Imagem do QRCode'
                />

                <h1 className='font-crisis uppercase text-center text-6xl text-greenDark'>
                    Acesse <br/> o BioQuiz!
                </h1>
            </div>
        </>
    );
} 