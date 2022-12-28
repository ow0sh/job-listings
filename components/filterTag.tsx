import React from "react";

interface Props {
  handler: (params: any) => any;
  children: React.ReactNode | JSX.Element;
}

const FilterTag = ({ handler, children }: Props) => {
  return (
    <div className={"h-[30px] rounded overflow-hidden flex ml-[10px]"}>
      <div
        className={
          "flex justify-center content-center flex-wrap text-heading-primary font-bold font-default px-[10px] bg-background-primary"
        }
      >
        {children}
      </div>
      <div
        className={
          "bg-heading-primary w-[30px] flex flex-col justify-center content-center flex-wrap hover:bg-black"
        }
        onClick={() => handler(children)}
      >
        <img src={"icon-remove.svg"} alt={""} />
      </div>
    </div>
  );
};

export default FilterTag;
