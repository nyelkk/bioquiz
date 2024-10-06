import React, { ReactNode } from 'react';

export interface IButton {
    children: ReactNode;
    type?: 'button' | 'submit';
    isAnswer?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ 
    children, 
    type = 'submit',
    isAnswer = false,
    onClick
}: IButton) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`px-12 py-2 text-xl rounded-md uppercase font-crisis 
                ${isAnswer ? 
                    'shadow-Answer bg-[var(--white)] text-[var(--black)]' 
                    : 'shadow-NotAnswer bg-[var(--green-dark)] text-[var(--white)]'}`}
        >
            { children }
        </button>
    );
}
