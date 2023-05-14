import { FC, useEffect } from 'react';
import { useMemoItems } from '@/hooks/useMemoItems';
import { FormProvider, useForm } from 'react-hook-form';
import { VariantProps, tv } from 'tailwind-variants';
import MemoLists from '../memo/MemoLists';
import { MemoValue } from '@/types/memoValue';

export type FormValues = {
  memo: MemoValue[];
};
type SideNavVariants = VariantProps<typeof sideNav>;
type SideNavProps = {
  sideNavVariants: SideNavVariants;
};

const sideNav = tv({
  slots: {
    root: 'relative w-[400px] flex items-center justify-center flex-col gap-2 border-solid border-r-2 border-x-white',
  },

  variants: {
    root: {
      true: {
        root: 'border-r-2 border-l-0',
      },
      false: {
        root: 'border-l-2 border-r-0',
      },
    },
  },
});

const SideNav: FC<SideNavProps> = ({ sideNavVariants }) => {
  const { root } = sideNav({
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
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <MemoLists />
        </FormProvider>
      </form>
    </div>
  );
};

export default SideNav;
