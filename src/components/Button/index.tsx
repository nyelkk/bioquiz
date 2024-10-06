import React, { ReactNode } from 'react';

export interface IButton {
    children: ReactNode;
    type?: 'button' | 'submit';
    isAnswer?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

export function Button({ 
    children, 
    type = 'submit',
    isAnswer = false,
    onClick,
    disabled = false
}: IButton) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`px-12 py-2 text-xl rounded-md uppercase font-crisis
                ${isAnswer ? 'shadow-Answer bg-white text-black' : 'shadow-NotAnswer bg-greenDark text-white'}
                ${disabled ? '!text-gray-200 !bg-gray-400 !shadow-gray-500 !hover:cursor-not-allowed' : ''}
            `}
        >
            { children }
        </button>
    );
}
