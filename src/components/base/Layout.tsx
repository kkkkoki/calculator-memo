import { ReactNode, useEffect, useState } from "react";

import { tv } from "tailwind-variants";

import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";

type LayoutDirectionType = "RTL" | "LTR";

const layout = tv({
  slots: {
    root: "flex flex-col min-h-screen",
    container: "container",
    flex: "md:flex flex-1 items-stretch flex-row",
    contents: "flex items-center justify-center my-16 flex-1",
  },

  variants: {
    flex: {
      true: {
        flex: "flex-row-reverse",
      },
    },

    sideMemo: {
      true: {
        sideMemo: "border-r-2 border-l-0",
      },
      false: {
        sideMemo: "border-l-2 border-r-0",
      },
    },
  },
});

const Layout = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState<LayoutDirectionType | null>(null);
  const [isRendered, setIsRendered] = useState(false);
  const isLTR = direction === "LTR";
  const { root, container, flex, contents } = layout({
    flex: isLTR,
    sideMemo: isLTR,
  });

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (direction === null) {
      setDirection(JSON.parse(localStorage.getItem("directionState") + ""));
      return;
    }
    localStorage.setItem("directionState", JSON.stringify(direction));
  }, [direction]);

  return isRendered ? (
    <div className={root()}>
      <div className={container()}>
        <Header setDirection={() => setDirection(isLTR ? "RTL" : "LTR")} headerVariants={{ directionBtn: isLTR }} />
      </div>

      <div className={flex()}>
        <main className={contents()}>{children}</main>
        <SideNav sideNavVariants={{ root: isLTR }} />
      </div>

      <div className={container()}>
        <Footer />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Layout;
