import { Fragment } from "react";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useFieldArray, useFormContext } from "react-hook-form";
import { tv } from "tailwind-variants";

import { type FormValues } from "../base/SideNav";
import Memo from "./Memo";

const list = tv({
  slots: {
    root: "w-full flex flex-col items-center gap-2",
    addBtn:
      "md:absolute ml-auto w-10 h-10 p-1 bottom-0 right-4 rounded-full hover:scale-110 transition-transform duration-300",
  },
});

const MemoLists = () => {
  const { root, addBtn } = list();
  const { control, getValues } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "memo",
    control,
  });

  const addMemo = () => {
    append({ label: "No Title", calc: 0 });
    localStorage.setItem("memoValue", JSON.stringify(getValues("memo")));
  };

  return (
    <div className={root()}>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Memo field={field} index={index} remove={remove} />
        </Fragment>
      ))}

      <button className={addBtn()} onClick={() => addMemo()} type="button" aria-label="メモを追加">
        <PlusCircleIcon />
      </button>
    </div>
  );
};

export default MemoLists;
