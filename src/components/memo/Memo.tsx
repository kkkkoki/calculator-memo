import { FC } from "react";

import { MinusCircleIcon } from "@heroicons/react/24/solid";
import { type FieldArrayWithId, type UseFieldArrayRemove } from "react-hook-form";

import { useMemoItems } from "@/hooks/useMemoItems";

import { type FormValues } from "../base/SideNav";
import CalcInput from "./CalcInput";
import MemoLabel from "./MemoLabel";

export type SectionProps = {
  field: FieldArrayWithId<FormValues, "memo", "id">;
  index: number;
  remove: UseFieldArrayRemove;
};

const Memo: FC<SectionProps> = ({ field, index, remove }) => {
  const { setMemoArray, memoArray } = useMemoItems();

  const deleteMemo = () => {
    remove(index);
    memoArray.splice(index, 1);
    setMemoArray(memoArray);
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <MemoLabel label={field.label} index={index} />

        <div className="flex items-center gap-2">
          <CalcInput index={index} />
          <button
            className="w-10 h-10 p-1 rounded-full hover:scale-110 transition-transform duration-300"
            onClick={deleteMemo}
            type="button"
            aria-label="メモを削除"
          >
            <MinusCircleIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Memo;
