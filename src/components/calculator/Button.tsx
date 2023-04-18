import { FC } from 'react';

interface ButtonProps {
  value: number | string;
  mode: 'num' | 'symbol';
}

const Button: FC<ButtonProps> = ({ value, mode }) => {
  const bgColor =
    mode === 'num' ? 'bg-gray-400 dark:bg-gray-600' : 'bg-orange-400';
  const equalStyle = value === '=' && 'col-span-2 w-full';

  return (
    <button
      className={`
      inline-flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 outline-none text-2xl font-bold shadow-md
      hover:bg-opacity-80 dark:hover:bg-opacity-75 hover:shadow-none
      focus:outline-slate-400
      ${bgColor} ${equalStyle}
      `}
      type="button"
    >
      <span className={`${mode === 'symbol' && '-translate-y-0.5'}`}>
        {value}
      </span>
    </button>
  );
};

export default Button;
