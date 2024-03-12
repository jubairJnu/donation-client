import { currentTheme } from "@/redux/features/theme/themeSlice";
import { useAppSelector } from "@/redux/hooks/Hooks";
import { ReactNode } from "react";

const CommonHeader = ({ text }: { text: ReactNode }) => {
  const isDark = useAppSelector(currentTheme);
  return (
    <h1
      className={`text-[38px] font-bold ${
        isDark ? "bg-black text-white  " : ""
      } text-center pb-2 border-b-[2px] border-primary-blue rounded-md w-full max-w-[450px] mx-auto mt-24 mb-16`}
    >
      {text}
    </h1>
  );
};

export default CommonHeader;
