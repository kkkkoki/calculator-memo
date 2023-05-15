import { MemoValue } from "@/types/memoValue";

export const useMemoItems = () => {
  const setMemoArray = (newArray: MemoValue[]) => {
    localStorage.setItem("memoValue", JSON.stringify(newArray));
  };

  const memoArray: MemoValue[] = JSON.parse(localStorage.getItem("memoValue") as string);

  return {
    setMemoArray,
    memoArray,
  };
};
