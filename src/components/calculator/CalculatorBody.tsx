import Input from '../ui/Input/Input';
import Button from './Button';

const CalculatorBody = () => {
  const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  return (
    <div className="flex flex-col items-center max-w-xs p-6 rounded-lg shadow-lg bg-opacity-40 bg-orange-200 dark:bg-gray-800">
      <form className="mb-4">
        <Input />
      </form>
      <div className="inline-grid grid-cols-4 gap-3 ">
        {btnValues.flat().map((val) => (
          <Button
            key={val}
            value={val}
            mode={typeof val === 'number' ? 'num' : 'symbol'}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorBody;
