'use client'

import restartBtn from '@/assets/quiz/restart-btn.svg';
import homeBtn from '@/assets/quiz/home-btn.svg'
import Image from "next/image";
import Link from "next/link";
import { questions, IQuizGame } from './quizGame/types&array';
import { useState } from 'react';
import { Button } from '@/components/Button';
import confetti from 'canvas-confetti';

export function QuizGame({ name }: IQuizGame) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [points, setPoints] = useState(0);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

    const quizQuestions = questions;
    // audio
    const correctAudio = new Audio('/audio/correct.mp3');
    const wrongAudio = new Audio('/audio/wrong.mp3');

    const handlerAnswer = (isTrue: boolean) => {
        setIsAnswerSelected(true);
        setSelectedAnswer(isTrue);

        if (quizQuestions[currentQuestion].answer === isTrue) {
            setPoints(points + 1);
            correctAudio.play();
            conffetisExplosion();
        } else {
            wrongAudio.play();
        }
        
        setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) 
            setCurrentQuestion(nextQuestion);
        else 
            setShowResults(true);
        
            setIsAnswerSelected(false);
            setSelectedAnswer(null);
        }, 1500);
    };

    const getButtonClass = (isTrue: boolean) => {
        if (!isAnswerSelected) return '';
        if (selectedAnswer === isTrue) {
            return quizQuestions[currentQuestion].answer === isTrue
                ? '!bg-greenDark !shadow-greenDark' // correct answer
                : '!bg-redDark !shadow-redDark'; // wrong answer
        }
        return ''; 
    };

    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    interface IOpts {
        spread?: number;
        decay?: number;
        scalar?: number;
        startVelocity?: number;
    } 

    function fire(particleRatio: number, opts: IOpts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    const conffetisExplosion = () => {
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
            });
            fire(0.2, {
            spread: 60,
            });
            fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
            });
            fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
            });
            fire(0.1, {
            spread: 120,
            startVelocity: 45,
            });
    }
    
    return (
        <>
            <Link href="/" className='absolute top-10 left-0 z-[1] lg:w-52 w-14 active:scale-[0.98]'>
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
                            className='active:scale-[0.98]'
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
                        { currentQuestion + 1 }/{ quizQuestions.length }
                    </span>

                    <p className='font-sans font-bold bg-greenDark p-8 rounded-md text-white lg:text-4xl text-xl lg:w-1/2 w-4/5 min-w-[100px]'>
                        { questions[currentQuestion].question }
                    </p>

                    <div className="flex flex-col gap-8">
                        <Button 
                            isAnswer={true} 
                            disabled={isAnswerSelected} 
                            onClick={() => handlerAnswer(true)}
                            className={getButtonClass(true)}
                        >
                            Verdadeiro
                        </Button>
                        <Button 
                            isAnswer={true} 
                            disabled={isAnswerSelected}
                            onClick={() => handlerAnswer(false)}
                            className={getButtonClass(false)}
                        >
                            Falso
                        </Button>
                    </div>
                </div>
            }
            </div>
        </>
    );
}