import { FC } from 'react';
import { ButtonCode } from '@/types/calculate';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  val: ButtonCode;
  color: 'num' | 'symbol';
  isLarge?: boolean;
}

const Button: FC<ButtonProps> = ({ val, color, isLarge, ...props }) => {
  const bgColor =
    color === 'num'
      ? 'bg-gray-400 dark:bg-gray-600'
      : 'bg-orange-400 dark:bg-orange-600';
  const largeStyle = isLarge && 'col-span-2 w-full';

  return (
    <button
      className={`
      inline-flex items-center justify-center w-14 h-14 rounded-full transition-all outline-none text-2xl font-bold shadow-md
      hover:bg-opacity-80 dark:hover:bg-opacity-75 hover:shadow-none
      focus:outline-slate-400 ${bgColor} ${largeStyle}
      `}
      type="button"
      {...props}
    >
      <span
        className={`select-none ${color === 'symbol' && '-translate-y-0.5'}`}
      >
        {val}
      </span>
    </button>
  );
};

export default Button;
