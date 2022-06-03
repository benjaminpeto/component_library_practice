import React, { HTMLAttributes, ReactNode } from 'react';

export interface NavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  height: '20' | '12';
  background: 'white' | 'black';
  position: 'fixed' | 'sticky';
  contentPosition: 'start' | 'center' | 'end';
}

export const Navigation = ({
  children,
  height = '20',
  background = 'white',
  position = 'fixed',
  contentPosition = 'center',
}: NavProps) => (
  <nav
    className={`container flex w-full m-4 space-x-6 px-6 ${position} justify-${contentPosition} items-center bg-${background} h-${height} rounded-xl`}
  >
    {children}
  </nav>
);
