import { useState } from 'react';
import Input from '../ui/Input/Input';
import Button from './Button';
import { calculate, isNumber } from './calculate';
import { ButtonCode, CalculateState } from '@/types/calculate';

const btnValues: ButtonCode[][] = [
  ['AC', '%', '/'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '00', '.', '='],
];

const CalculatorBody = () => {
  const [state, setState] = useState<CalculateState>({
    current: '0',
    operand: 0,
    operator: null,
    isNextClear: false,
  });

  const handle = (val: ButtonCode) => {
    const nextState = calculate(val, state);
    setState(nextState);
  };

  return (
    <div className="flex flex-col items-center max-w-xs p-6 rounded-lg shadow-lg bg-opacity-40 bg-orange-200 dark:bg-gray-800">
      {/* <form className="mb-4">
        <Input />
      </form> */}
      <div className="w-full bg-white dark:bg-gray-600 p-2 rounded-md mb-4">
        <p className="text-right text-5xl -mt-1">
          {Number.isNaN(state.current) ? 'エラー' : state.current}
        </p>
      </div>

      <div className="inline-grid grid-cols-4 gap-3 ">
        {btnValues.flat().map((val) => (
          <Button
            key={val}
            val={val}
            mode={isNumber(val) ? 'num' : 'symbol'}
            onClick={() => handle(val)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorBody;
