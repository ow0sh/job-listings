import React from "react";

interface Props {
  handler: (params: any) => any;
  children: React.ReactNode | JSX.Element;
}
const Tag = ({ handler, children }: Props) => {
  return (
    <div
      onClick={() => handler(children)}
      className={
        "h-[25px] text-heading-primary font-bold font-default px-[10px] rounded ml-[10px] bg-background-primary hover:bg-heading-primary hover:text-white"
      }
    >
      {children}
    </div>
  );
};

export default Tag;
