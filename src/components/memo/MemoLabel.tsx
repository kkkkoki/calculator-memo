import { FC, useState } from "react";

import { useMemoItems } from "@/hooks/useMemoItems";
import { CheckIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useFormContext } from "react-hook-form";
import { tv } from "tailwind-variants";

import { FormValues } from "../base/SideNav";

const memoLabel = tv({
  slots: {
    root: "h-8 flex flex-row items-center gap-5",
    formWrap: "flex flex-col gap-1",
    error: "text-red-400",
    input: "p-1 rounded-lg text-sm shadow-sm outline-none outline-1 caret-orange-8 focus:outline-orange-10",
    labelText: "text-lg",
    actions: "flex items-center gap-2",
    iconBtn: "p-1 rounded-full hover:scale-110 transition-transform duration-300",
    check: "w-6 h-6",
    xMark: "w-6 h-6",
    edit: "w-4 h-4",
  },
});

type Props = {
  label: string;
  index: number;
};

const MemoLabel: FC<Props> = ({ label, index }) => {
  const {
    register,
    getValues,
    reset,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { root, formWrap, error, input, labelText, actions, iconBtn, check, xMark, edit } = memoLabel();
  const { memoArray, setMemoArray } = useMemoItems();
  const [isEditMode, setIsEditMode] = useState(false);
  const LABEL_MAX_LENGTH = 20;

  const onSave = () => {
    memoArray[index].label = getValues(`memo.${index}.label`);
    setMemoArray(memoArray);
    reset({ memo: memoArray });
    setIsEditMode(!isEditMode);
  };

  const cancel = () => {
    reset();
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <div className={root()}>
        {isEditMode ? (
          <div className={formWrap()}>
            {errors.memo?.[index]?.label && <p className={error()}>{LABEL_MAX_LENGTH}文字以下です</p>}
            <input
              className={input()}
              type="text"
              {...register(`memo.${index}.label` as const, {
                maxLength: LABEL_MAX_LENGTH,
              })}
            />
          </div>
        ) : (
          <p className={labelText()}>{label}</p>
        )}

        {isEditMode ? (
          <div className={actions()}>
            <button className={iconBtn()} type="button" onClick={onSave}>
              <CheckIcon className={check()} />
            </button>

            <button className={iconBtn()} type="button" onClick={cancel}>
              <XMarkIcon className={xMark()} />
            </button>
          </div>
        ) : (
          <button className={iconBtn()} type="button" onClick={() => setIsEditMode(!isEditMode)}>
            <PencilIcon className={edit()} />
          </button>
        )}
      </div>
    </>
  );
};

export default MemoLabel;
