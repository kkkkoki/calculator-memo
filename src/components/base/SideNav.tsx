import { FC, useEffect } from "react";

import { useMemoItems } from "@/hooks/useMemoItems";
import { MemoValue } from "@/types/memoValue";
import { FormProvider, useForm } from "react-hook-form";
import { tv, VariantProps } from "tailwind-variants";

import MemoLists from "../memo/MemoLists";

export type FormValues = {
  memo: MemoValue[];
};
type SideNavVariants = VariantProps<typeof sideNav>;
type SideNavProps = {
  sideNavVariants: SideNavVariants;
};

const sideNav = tv({
  slots: {
    root: "relative md:w-2/5 flex items-center justify-center flex-col px-6 lg:px-8 gap-2 border-solid border-x-white",
    form: "w-full",
  },

  variants: {
    root: {
      true: {
        root: "md:border-r-2 border-l-0",
      },
      false: {
        root: "md:border-l-2 border-r-0",
      },
    },
  },
});

const SideNav: FC<SideNavProps> = ({ sideNavVariants }) => {
  const { root, form } = sideNav({
    root: sideNavVariants.root,
  });
  const methods = useForm<FormValues>();
  const { memoArray } = useMemoItems();

  const onSubmit = (value: FormValues) => {
    console.log(value);
  };

  useEffect(() => {
    methods.reset({
      memo: memoArray,
    });
  }, []);

  return (
    <div className={root()}>
      <form className={form()} onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <MemoLists />
        </FormProvider>
      </form>
    </div>
  );
};

export default SideNav;
