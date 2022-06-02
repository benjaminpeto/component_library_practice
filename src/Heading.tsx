import React, { HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontSize: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  text: string;
  textColor: 'blue-500' | 'red-300' | 'green-500' | 'black' | 'white';
  letterSpacing: 'tighter' | 'normal' | 'widest';
}

/** Heading element */
export const Heading = ({
  text,
  fontSize = '6xl',
  textColor = 'black',
  letterSpacing = 'normal',
  ...props
}: HeadingProps) => (
  <h1
    {...props}
    className={`text-${fontSize} text-${textColor} tracking-${letterSpacing}`}
  >
    {text}
  </h1>
);
