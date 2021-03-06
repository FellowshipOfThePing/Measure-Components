import React, { FC, HTMLAttributes, ReactChild } from 'react';

import './tailwind.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto text-2xl text-center text-pink-700 uppercase bg-yellow-300 shadow-xl rounded-3xl">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
};
