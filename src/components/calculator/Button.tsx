import { FC } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { ButtonCode } from '@/types/calculate';

const button = tv({
  base: 'inline-flex items-center justify-center w-14 h-14 rounded-full transition-all outline-none text-2xl font-bold shadow-md hover:bg-opacity-80 dark:hover:bg-opacity-75 hover:shadow-none focus:outline-slate-400',
  variants: {
    color: {
      num: 'bg-gray-400 dark:bg-gray-600',
      symbol: 'bg-orange-400 dark:bg-orange-600',
    },
    large: {
      true: 'col-span-2 w-full',
    },
  },
});

const buttonValue = tv({
  base: 'select-none',
  variants: {
    symbol: {
      true: '-translate-y-0.5',
    },
  },
});

type ButtonVariants = VariantProps<typeof button>;
type TextVariants = VariantProps<typeof buttonValue>;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  val: ButtonCode;
  buttonVariants: ButtonVariants;
  buttonValueVariants: TextVariants;
}

const Button: FC<ButtonProps> = ({
  val,
  buttonVariants,
  buttonValueVariants,
  ...props
}) => {
  return (
    <button className={button({ ...buttonVariants })} type="button" {...props}>
      <span className={buttonValue({ ...buttonValueVariants })}>{val}</span>
    </button>
  );
};

export default Button;
