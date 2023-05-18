import { useState } from "react";

import { ButtonCode, CalculateState } from "@/types/calculate";
import { useForm } from "react-hook-form";
import { tv } from "tailwind-variants";

import Button from "./Button";
import { calculate, isNumber } from "./calculate";

const calculatorBody = tv({
  base: "flex flex-col items-center max-w-xs p-6 rounded-lg shadow-lg bg-orange-6 dark:bg-sand-4",
});

const displayInput = tv({
  base: "w-full p-2 mb-4 rounded-lg text-4xl text-right shadow-sm outline-none outline-2 caret-orange-8 focus:outline-orange-10",
});

const buttonGroup = tv({
  base: "inline-grid grid-cols-4 gap-3",
});

const btnValues: ButtonCode[][] = [
  ["AC", "+-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", "00", ".", "="],
];

const CalculatorBody = () => {
  const { register, setValue, getValues } = useForm({
    defaultValues: {
      calculator: "0",
    },
  });
  const [state, setState] = useState<CalculateState>({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  });

  const handle = (val?: ButtonCode) => {
    // as assertionはzodでschema作ったら修正
    const inputValue = getValues("calculator").replace(/,/g, "") as ButtonCode;
    const commaRegex = /(\d)(?=(\d\d\d)+(?!\d))/g;
    if (!val && state.current === inputValue) {
      return null;
    } else if (inputValue.length === 0) {
      setState({
        ...state,
        current: "0",
      });
      setValue("calculator", "0");
      return null;
    }

    const calculateValue = val ? val : inputValue;
    const nextState = calculate(calculateValue, state);

    setState(nextState);

    const commaValue = nextState.current.replace(commaRegex, "$1,");
    setValue("calculator", commaValue);
  };

  return (
    <div className={calculatorBody()}>
      <input
        {...register("calculator")}
        className={displayInput()}
        type="text"
        aria-label="計算結果"
        onBlur={() => {
          handle();
        }}
        onFocus={(e) => e.currentTarget.select()}
        onPaste={() =>
          setState({
            ...state,
            current: "0",
          })
        }
        onChange={(e) => {
          setState({
            ...state,
            current: "0",
          });
          setValue("calculator", e.target.value);
        }}
      />

      <div className={buttonGroup()}>
        {btnValues.flat().map((val) => (
          <Button
            key={val}
            val={val}
            onClick={() => handle(val)}
            buttonVariants={{
              color: isNumber(val) ? "num" : "symbol",
            }}
            buttonValueVariants={{ symbol: !isNumber(val) && true }}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorBody;
