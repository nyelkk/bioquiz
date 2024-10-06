import { climateCrisis } from '@/app/layout';
import globo from '@/assets/quiz/globo.svg'
import { Button } from '@/components/Button';
import Image from "next/image";

export default function Quiz() {
    return (
        <div className='flex justify-around h-full items-center'>
            <Image
                className='w-[500px]'
                src={globo} 
                alt="Globo"
            />

            <form className='flex flex-col gap-8 items-center z-[1]'>
                <h1 className={`${climateCrisis.className}  text-4xl text-center`}>Insira seu <br/> nome:</h1>

                <label htmlFor="name">
                    <input 
                        className='p-4 rounded-xl border-[var(--gray)] border-2 text-xl w-96'
                        type="text" 
                        placeholder='Digite aqui' 
                        maxLength={52} 
                        required 
                        id="name" 
                        name="name"
                    />
                </label>

                <Button>Prosseguir</Button>
            </form>
        </div>
    );
}