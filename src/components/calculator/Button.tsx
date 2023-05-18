import { FC } from "react";

import { ButtonCode } from "@/types/calculate";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center w-14 h-14 rounded-full transition-all outline-none text-2xl font-bold shadow-md hover:shadow-none",
  variants: {
    color: {
      num: "bg-slate-9 hover:bg-slate-10 focus:outline-orange-10",
      symbol: "bg-orangeA-9 hover:bg-orangeA-10 focus:outline-sand-10",
    },
    large: {
      true: "col-span-2 w-full",
    },
  },
});

const buttonValue = tv({
  base: "select-none",
  variants: {
    symbol: {
      true: "-translate-y-0.5",
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

const Button: FC<ButtonProps> = ({ val, buttonVariants, buttonValueVariants, className, ...props }) => {
  return (
    <button className={button({ ...buttonVariants })} type="button" {...props}>
      <span className={buttonValue({ ...buttonValueVariants })}>{val}</span>
    </button>
  );
};

export default Button;
