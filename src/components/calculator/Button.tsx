import { FC } from 'react';

interface ButtonProps {
  value: number | string;
  mode: 'num' | 'symbol';
  active?: boolean;
}

const Button: FC<ButtonProps> = ({ value, mode, active }) => {
  const bgColor =
    mode === 'num' ? 'bg-gray-400 dark:bg-gray-600' : 'bg-orange-400';
  const equalStyle = value === '=' && 'col-span-2 w-full';
  const symbolAcive = active && 'outline-slate-400';

  return (
    <button
      className={`
      inline-flex items-center justify-center w-14 h-14 rounded-full transition-all outline-none text-2xl font-bold shadow-md
      hover:bg-opacity-80 dark:hover:bg-opacity-75 hover:shadow-none
      focus:outline-slate-400
      ${bgColor} ${equalStyle} ${symbolAcive}
      `}
      type="button"
    >
      <span
        className={`select-none ${mode === 'symbol' && '-translate-y-0.5'}`}
      >
        {value}
      </span>
    </button>
  );
};

export default Button;
