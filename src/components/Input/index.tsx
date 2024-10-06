import { FieldError } from 'react-hook-form';
import React from 'react';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  error?: FieldError | undefined;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ 
  label, 
  id, 
  type = 'text', 
  error, 
  required = true, 
  onChange 
}: InputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder="Digite aqui"
        maxLength={52}
        required={required}
        onChange={onChange}
        className={`p-4 rounded-xl border-2 text-2xl w-96 
          ${error ? 'border-red-600' : 'border-gray-300'} 
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
