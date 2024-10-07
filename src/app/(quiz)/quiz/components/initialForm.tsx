'use client'

import { FormEvent, useState } from 'react';
import { Button } from '@/components/Button';
import Input from '@/components/Input';
import globo from '@/assets/quiz/globo.svg';
import Image from 'next/image';
import { QuizGame } from './quizGame';

export function InitialForm() {
    const [isSubmitting, setIsSubmitting] = useState(true);
    const [startedQuiz, setStartedQuiz] = useState(false);
    const [name, setName] = useState('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('é cricou')
        setStartedQuiz(true);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        
        if (value.length >= 3) {
            setIsSubmitting(false);
            setName(value);
        }
        else {
            setIsSubmitting(true);
        }
    };

    return (
        <>
        { !startedQuiz ? (
            <>
            <Image
                className='min-w-[250px] w-[400px] lg:order-1 order-2'
                src={globo} 
                alt="Globo"
            />
            <form onSubmit={onSubmit} className='flex flex-col gap-8 items-center z-[1] order-1'>
                <h1 className={`font-crisis lg:text-5xl text-3xl text-center`}>
                    Insira seu <br/> nome:
                </h1>

                <Input
                    label=''
                    id="name"
                    onChange={onChange}
                />

                <Button disabled={isSubmitting}>
                    {isSubmitting ? 'Aguardando...' : 'Prosseguir'}
                </Button>
            </form>
            </>
            ) : (<QuizGame name={name}/>)
        }
        </>
    );
}