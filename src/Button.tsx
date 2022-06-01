import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Providing text for the button */
  children: ReactNode;

  /** Different variants for specific use cases */
  variant: 'primary' | 'secondary';
}

/** Button element itself, you can choose between two different variants. */
export const Button = ({ children, variant = 'primary', ...props }: Props) => (
  <button
    {...props}
    className={
      variant === 'primary'
        ? 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        : 'bg-blue-500 text-white py-2 px-4 rounded hover:bg-transparent hover:text-blue-700 hover:border hover:border-blue-700'
    }
  >
    {children}
  </button>
);
