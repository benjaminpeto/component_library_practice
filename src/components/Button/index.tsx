import React, { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Providing text for the button */
  children?: string;

  /** Different variants for specific use cases */
  variant?: 'primary' | 'secondary' | 'danger' | 'green';
}

/** Button element itself, you can choose between 4 different variants. */
export const Button = ({
  children = 'Primary',
  variant = 'primary',
}: ButtonProps) => (
  <button
    className={`py-2 px-4 rounded hover:bg-transparent hover:border text-white
      ${
        variant === 'secondary' &&
        'bg-blue-500 hover:text-blue-700 hover:border-blue-700'
      }
      ${
        variant === 'danger' &&
        'bg-red-500 hover:text-red-700  hover:border-red-700'
      }
      ${
        variant === 'green' &&
        'bg-green-700 hover:text-green-700 hover:border-green-700'
      }
      ${
        variant === 'primary' &&
        'hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 text-inherit'
      }
      `}
  >
    {children}
  </button>
);
