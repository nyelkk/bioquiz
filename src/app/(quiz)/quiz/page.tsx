import globo from '@/assets/quiz/globo.svg';
// import { InitialForm } from '@/components/Quiz/initialForm';
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

            {/* <InitialForm /> */}
            <form className='flex flex-col gap-8 items-center z-[1]'>
                <h1 className={`text-5xl text-center font-crisis`}>
                    Insira seu <br/> nome:
                </h1>

                <label htmlFor="name">
                    <input 
                        className='p-4 rounded-xl border-[var(--gray)] border-2 text-2xl w-96'
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
