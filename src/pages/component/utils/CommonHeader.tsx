import { ReactNode } from "react";

const CommonHeader = ({ text }: { text: ReactNode }) => {
  return (
    <h1 className="text-[38px] font-bold text-black text-center pb-2 border-b-[2px] border-primary-blue rounded-md w-full max-w-[450px] mx-auto mt-24 mb-16">
      {text}
    </h1>
  );
};

export default CommonHeader;
