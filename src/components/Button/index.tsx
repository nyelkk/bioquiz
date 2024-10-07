import React, { ReactNode } from 'react';

export interface IButton {
    children: ReactNode;
    type?: 'button' | 'submit';
    className?: string;
    isAnswer?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ 
    children, 
    type = 'submit',
    className = '',
    isAnswer = false,
    disabled = false,
    onClick
}: IButton) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`lg:px-12 px-4 py-2 lg:text-2xl text-xl rounded-md uppercase font-crisis transition-all duration-150 active:scale-[0.98]
                ${isAnswer ? `shadow-Answer bg-white text-black` : 'shadow-NotAnswer bg-greenDark text-white hover:bg-greenDarker hover:scale-[1.01]'}
                ${disabled ? '!text-gray-200 !bg-gray-400 !shadow-gray-500 !cursor-not-allowed hover:scale-[1]' : ''}
                ${className}
            `}
        >
            { children }
        </button>
    );
}
