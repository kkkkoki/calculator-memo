import { FC } from "react";

import { useMemoItems } from "@/hooks/useMemoItems";
import { MinusCircleIcon } from "@heroicons/react/24/solid";
import { type FieldArrayWithId, type UseFieldArrayRemove } from "react-hook-form";
import { tv } from "tailwind-variants";

import { type FormValues } from "../base/SideNav";
import CalcInput from "./CalcInput";
import MemoLabel from "./MemoLabel";

const memo = tv({
  slots: {
    root: "flex flex-col gap-1",
    inputDeleteWrap: "flex items-center gap-2",
    deleteBtn: "w-10 h-10 p-1 rounded-full hover:scale-110 transition-transform duration-300",
  },
});

export type SectionProps = {
  field: FieldArrayWithId<FormValues, "memo", "id">;
  index: number;
  remove: UseFieldArrayRemove;
};

const Memo: FC<SectionProps> = ({ field, index, remove }) => {
  const { root, inputDeleteWrap, deleteBtn } = memo();
  const { setMemoArray, memoArray } = useMemoItems();

  const deleteMemo = () => {
    remove(index);
    memoArray.splice(index, 1);
    setMemoArray(memoArray);
  };

  return (
    <>
      <div className={root()}>
        <MemoLabel label={field.label} index={index} />

        <div className={inputDeleteWrap()}>
          <CalcInput index={index} />
          <button className={deleteBtn()} onClick={deleteMemo} type="button" aria-label="メモを削除">
            <MinusCircleIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Memo;
