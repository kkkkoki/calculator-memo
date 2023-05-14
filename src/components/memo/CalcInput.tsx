import { FC } from 'react';
import { useMemoItems } from '@/hooks/useMemoItems';
import { useFormContext } from 'react-hook-form';
import { type FormValues } from '../base/SideNav';

const CalcInput: FC<{ index: number }> = ({ index }) => {
  const { register, getValues, reset } = useFormContext<FormValues>();
  const { setMemoArray, memoArray } = useMemoItems();

  const onSave = () => {
    memoArray[index].calc = getValues(`memo.${index}.calc`);
    setMemoArray(memoArray);
    reset({ memo: memoArray });
  };

  return (
    <input
      className="p-2 rounded-lg text-2xl text-right shadow-sm outline-none outline-2 caret-slate-400 focus:outline-slate-400"
      {...register(`memo.${index}.calc` as const)}
      onFocus={(e) => e.currentTarget.select()}
      onBlur={onSave}
    />
  );
};

export default CalcInput;
