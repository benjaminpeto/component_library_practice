import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Providing text for the button */
  children: ReactNode;

  /** Different variants for specific use cases */
  variant: 'primary' | 'secondary' | 'danger' | 'green';
}

/** Button element itself, you can choose between two different variants. */
export const Button = ({ children, variant = 'primary', ...props }: Props) => (
  <button
    {...props}
    className={
      variant === 'secondary'
        ? 'bg-blue-500 text-white py-2 px-4 rounded hover:bg-transparent hover:text-blue-700 hover:border hover:border-blue-700'
        : variant === 'danger'
        ? 'bg-red-500 text-white py-2 px-4 rounded hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700'
        : variant === 'green'
        ? 'bg-green-700 text-white py-2 px-4 rounded hover:bg-transparent hover:text-green-700 hover:border hover:border-green-700'
        : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
    }
  >
    {children}
  </button>
);
