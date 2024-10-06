'use client'

import restartBtn from '@/assets/quiz/restart-btn.svg';
import homeBtn from '@/assets/quiz/home-btn.svg'
import Image from "next/image";
import Link from "next/link";
import { IQuizGame, questions } from './types&array';
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
        <Link href="/">
            <Image
                className='my-10'
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
                <h1 className="font-crisis text-4xl text-black">
                    { name } fez <br/> { points }/{ quizQuestions.length } pontos! 
                </h1>

                <p className="w-1/4">
                    Continue aprendendo, compartilhe o que descobriu e faça parte dessa mudança positiva para o meio ambiente. 🌍💚
                </p>

                <Link href='/'>
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
            <div className="flex flex-col gap-8">
                <span>
                    { points }/{ quizQuestions.length }
                </span>

                <p>
                    { questions[currentQuestion].question }
                </p>

                <Button isAnswer={true} onClick={() => handlerAnswer(true)}>
                    Verdadeiro
                </Button>
                <Button isAnswer={true} onClick={() => handlerAnswer(false)}>
                    Falso
                </Button>
            </div>
        }
        </div>
        </>
    );
}