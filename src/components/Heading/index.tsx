import React, { HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontSize: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  text: string;
  textColor: 'blue-500' | 'gray-500' | 'green-500' | 'black' | 'white';
  letterSpacing: 'tighter' | 'normal' | 'widest';
  fontWeight: 'thin' | 'normal' | 'bold' | 'black';
  fontFamily: 'sans' | 'serif' | 'mono';
}

/** Heading element */
export const Heading = ({
  text,
  fontSize = '6xl',
  textColor = 'black',
  letterSpacing = 'normal',
  fontWeight = 'normal',
  fontFamily = 'sans',
}: HeadingProps) => (
  <h1
    className={`text-${fontSize} text-${textColor} tracking-${letterSpacing} font-${fontWeight} font-${fontFamily}`}
  >
    {text}
  </h1>
);
