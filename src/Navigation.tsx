import React from 'react';

export interface NavProps {}

/** Button element itself, you can choose between 4 different variants. */
export const Navigation = ({ ...props }: NavProps) => <nav {...props}></nav>;
