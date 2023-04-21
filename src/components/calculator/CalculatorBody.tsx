import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input/Input';
import Button from './Button';
import { calculate, isNumber } from './calculate';
import { ButtonCode, CalculateState } from '@/types/calculate';

const btnValues: ButtonCode[][] = [
  ['AC', '+-', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '00', '.', '='],
];

const CalculatorBody = () => {
  const { register, setValue, getValues } = useForm({
    defaultValues: {
      calculator: '0',
    },
  });
  const [state, setState] = useState<CalculateState>({
    current: '0',
    operand: 0,
    operator: null,
    isNextClear: false,
  });

  const handle = (val?: ButtonCode) => {
    // as assertionはzodでschema作ったら修正
    const inputValue = getValues('calculator') as ButtonCode;
    const commaRegex = /(\d)(?=(\d\d\d)+(?!\d))/g;
    const isInputValueChange =
      state.current.replace(commaRegex, '$1,') === inputValue;
    if (!val && isInputValueChange) {
      return null;
    }

    const calculateValue = val ? val : inputValue;
    const nextState = calculate(calculateValue, state);
    setState(nextState);

    const commaValue = nextState.current.replace(commaRegex, '$1,');
    setValue('calculator', commaValue);
  };

  return (
    <div className="flex flex-col items-center max-w-xs p-6 rounded-lg shadow-lg bg-opacity-40 bg-orange-200 dark:bg-gray-800">
      <div className="mb-4">
        <input
          {...register('calculator')}
          className="w-full p-2 rounded-lg text-4xl text-right shadow-sm outline-none outline-2 caret-slate-400 focus:outline-slate-400"
          type="text"
          // button押下後、blurしたら値がバグる。判定が甘いのでblurをやめるなど根本的に別の実装の方がいいかも
          onBlur={() => {
            handle();
          }}
        />
      </div>

      <div className="inline-grid grid-cols-4 gap-3 ">
        {btnValues.flat().map((val) => (
          <Button
            key={val}
            val={val}
            color={isNumber(val) ? 'num' : 'symbol'}
            onClick={() => handle(val)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorBody;
