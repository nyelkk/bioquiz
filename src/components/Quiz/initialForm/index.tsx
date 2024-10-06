import { Button } from '@/components/Button';

export function InitialForm() {
    return(
        <>
        <form className='flex flex-col gap-8 items-center z-[1]'>
            <h1 className={`font-crisis text-5xl text-center`}>
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
        </>
    );
}