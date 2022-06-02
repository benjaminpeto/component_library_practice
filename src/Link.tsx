import React, { ReactNode, AnchorHTMLAttributes } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Providing text for the link */
  children: ReactNode;
  /** Providing the url for the button */
  url: string;

  /** Different variants for specific use cases */
  variant: 'primary' | 'secondary';
  /** Events which takes place when the link gets clicked */
  onClick: () => void;
}

/** Anchor element itself with customisable url and text */
export const Link = ({
  children,
  variant = 'primary',
  url = '#',
  onClick,
}: LinkProps) => (
  <a
    href={url}
    onClick={onClick}
    className={
      variant === 'primary' ? 'text-blue-500' : 'text-gray-600 underline'
    }
  >
    {children}
  </a>
);
