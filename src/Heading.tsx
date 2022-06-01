import React, { HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/** Heading element */
export const Heading = ({ children, ...props }: HeadingProps) => (
  <h1 {...props}>{children}</h1>
);
