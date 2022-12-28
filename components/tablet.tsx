import { New, Features } from "./states";
import Tag from "./tag";
import { PropsData } from "./types";

import { useEffect, useRef } from "react";

const Tablet = (props: PropsData) => {
  const { data } = props;
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data.featured) {
      if (element.current) {
        element.current.classList.add("border-l-4");
        element.current.classList.add("border-heading-primary");
      }
    }
  });

  return (
    <div
      className={
        "flex justify-between w-[1000px] h-[120px] bg-white rounded shadow-xl mb-[20px]"
      }
      ref={element}
    >
      <section className={"flex py-[15px] pl-[30px]"}>
        <div className={"mr-[20px]"}>
          <img src={data.logo} alt={""} />
        </div>
        <div className={"flex flex-col w-[250px] justify-between"}>
          <header className={"flex"}>
            <h1 className={"text-heading-primary font-bold text-sm mr-[15px]"}>
              {data.company}
            </h1>
            <New isHidden={!data.new} />
            <Features isHidden={!data.featured} />
          </header>
          <a
            href="#"
            className={"font-default font-black hover:text-heading-primary"}
          >
            {data.position}
          </a>
          <ul
            className={
              "flex justify-between text-sm text-tag-primary font-medium font-default"
            }
          >
            <li>{data.postedAt}</li>
            <li className={"font-black"}>&#183;</li>
            <li>{data.contract}</li>
            <li className={"font-black"}>&#183;</li>
            <li>{data.location}</li>
          </ul>
        </div>
      </section>
      <section className={"flex content-center flex-wrap py-[15px] pr-[30px]"}>
        {data.tags.map((tag) => {
          return (
            <Tag key={tag} handler={props.handler}>
              {tag}
            </Tag>
          );
        })}
      </section>
    </div>
  );
};

export default Tablet;
