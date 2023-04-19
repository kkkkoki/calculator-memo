import { useEffect, useState } from 'react';
import Input from '../ui/Input/Input';
import Button from './Button';

const CalculatorBody = () => {
  const [inputNum, setInputNum] = useState<number>(0);
  const [monitor, setMonitor] = useState<number>(0);
  const [decimal, setDecimal] = useState<boolean>(false);
  const [decimalcount, setDecimalCount] = useState<number>(1);
  const [operator, setOperator] = useState<string>('');
  const [calculatednum, setCalculatednum] = useState<number>(0);

  const btnValues = [
    ['AC', '+-', '%', '/'],
    [7, 8, 9, '×'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  useEffect(() => {
    console.log('input');

    setMonitor(inputNum);
  }, [inputNum]);

  useEffect(() => {
    console.log('calc');

    setMonitor(calculatednum);
  }, [calculatednum]);

  const handleClick = (val: string | number) => {
    if (typeof val === 'number') {
      inputNumTotal(val);
    } else {
      switch (val) {
        case '=':
          equal();
          break;
        case '.':
          setDecimal(true);
          break;
        case 'AC':
          clearAll();
          break;
        default:
          inputOperator(val);
          break;
      }
    }
  };

  // 計算
  const calculate = () => {
    // 小数点リセット
    setDecimal(false);
    setDecimalCount(1);

    // 0で0を割ろうとした時の例外処理
    if (operator === '/' && inputNum === 0) {
      setCalculatednum(NaN);
      setInputNum(0);
      return;
    }

    if (calculatednum === 0 && inputNum === 0) {
      return;
    }

    switch (operator) {
      case '+':
        setCalculatednum(calculatednum + inputNum);
        break;
      case '/':
        setCalculatednum(calculatednum / inputNum);
        break;
      case '×':
        setCalculatednum(calculatednum * inputNum);
        break;
      case '-':
        setCalculatednum(calculatednum - inputNum);
        break;
    }

    operator === '' ? setCalculatednum(inputNum) : setInputNum(0);
  };

  const inputNumTotal = (num: number) => {
    if (decimal) {
      num = num / Math.pow(10, decimalcount);
      setDecimalCount(decimalcount + 1);
      setInputNum(parseFloat((inputNum + num).toFixed(decimalcount)));
    } else {
      setInputNum(inputNum * 10 + num);
    }
  };

  const inputOperator = (operator: string) => {
    setOperator(operator);
    calculate();
    setInputNum(0);
  };

  const equal = () => {
    calculate();
    setOperator('');
  };

  const clearAll = () => {
    setInputNum(0);
    setCalculatednum(0);
    setMonitor(0);
    setOperator('');
    setDecimal(false);
    setDecimalCount(1);
  };

  return (
    <div className="flex flex-col items-center max-w-xs p-6 rounded-lg shadow-lg bg-opacity-40 bg-orange-200 dark:bg-gray-800">
      {/* <form className="mb-4">
        <Input />
      </form> */}
      <div className="w-full bg-white dark:bg-gray-600 p-2 rounded-md mb-4">
        <p className="text-right text-5xl -mt-1">
          {Number.isNaN(monitor) ? 'エラー' : monitor}
        </p>
      </div>

      <div className="inline-grid grid-cols-4 gap-3 ">
        {btnValues.flat().map((val) => (
          <Button
            key={val}
            value={val}
            mode={typeof val === 'number' ? 'num' : 'symbol'}
            onClick={() => handleClick(val)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorBody;
