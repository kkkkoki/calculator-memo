import React, { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  calcValue?: string | number;
}

const Input: FC<InputProps> = ({ calcValue, ...props }) => {
  return (
    <input
      className="w-full p-2 rounded-lg text-4xl text-right shadow-sm outline-none outline-2 caret-slate-400 focus:outline-slate-400"
      type="number"
      {...props}
    />
  );
};

export default Input;
