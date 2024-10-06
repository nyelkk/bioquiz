'use client'

import restartBtn from '@/assets/quiz/restart-btn.svg';
import homeBtn from '@/assets/quiz/home-btn.svg'
import Image from "next/image";
import Link from "next/link";
import { questions, IQuizGame } from './quizGame/types&array';
import { useState } from 'react';
import { Button } from '@/components/Button';

export function QuizGame({ name }: IQuizGame) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [points, setPoints] = useState(0);
    const quizQuestions = questions;

    const handlerAnswer = (isTrue: boolean) => {
        if (quizQuestions[currentQuestion].answer === isTrue) {
            setPoints(points + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowResults(true);
        }
    };


    return (
        <>
            <Link href="/" className='absolute top-10 left-0 z-[1] lg:w-52 w-14'>
                <Image
                    src={homeBtn}
                    alt="Ícone de volta para Home"
                    onClick={() => {
                        setCurrentQuestion(0);
                        setPoints(0);
                        setShowResults(false);
                    }}
                />
            </Link>
            
            <div className="flex flex-col items-center justify-center text-center gap-8">
            { showResults ?
                <>
                    <h1 className="font-crisis lg:text-4xl text-xl text-black">
                        <span className='text-greenDark'>
                            { name }
                        </span>  fez <br/>
                        { points }/{ quizQuestions.length } pontos! 
                    </h1>

                    <p className="lg:w-1/3 w-4/5 text-greenDark font-semibold">
                        Continue aprendendo, compartilhe o que descobriu e faça parte dessa mudança positiva para o meio ambiente. 🌍💚
                    </p>

                    <Link href='/quiz'>
                        <Image 
                            src={restartBtn}
                            alt="Recomeçar quiz"
                            onClick={() => {
                                setCurrentQuestion(0);
                                setPoints(0);
                                setShowResults(false);
                            }}
                        />
                    </Link>
                </>
                :
                <div className="flex flex-col items-center gap-8">
                    <span className='font-crisis text-3xl absolute right-0 top-10'>
                        { points }/{ quizQuestions.length }
                    </span>

                    <p className='font-sans font-bold bg-greenDark p-8 rounded-md text-white lg:text-4xl text-xl lg:w-1/2 w-4/5 min-w-[100px]'>
                        { questions[currentQuestion].question }
                    </p>

                    <div className="flex flex-col gap-8">
                        <Button isAnswer={true} onClick={() => handlerAnswer(true)}>
                            Verdadeiro
                        </Button>
                        <Button isAnswer={true} onClick={() => handlerAnswer(false)}>
                            Falso
                        </Button>
                    </div>
                </div>
            }
            </div>
        </>
    );
}