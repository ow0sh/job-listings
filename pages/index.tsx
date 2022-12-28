import Tablet from "../components/tablet";
import Data from "../components/types";
import FilterTag from "../components/filterTag";
import { useEffect, useState } from "react";
import filterTag from "../components/filterTag";

export default function Home() {
  const [dataList, setDataList] = useState<Data[]>([]);
  const [filteredList, setFilteredList] = useState<Data[]>([]);
  const [filterTray, setFilterTray] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => {
        setDataList(result);
        setFilteredList(result);
      });
  }, []);

  useEffect(() => {
    if (filterTray.length === 0) setFilteredList(dataList);

    setFilteredList(
      dataList.filter((job) =>
        filterTray.every((tag) => job.tags.includes(tag))
      )
    );
  }, [filterTray, dataList]);

  function addToFilterTray(tag: string) {
    if (filterTray.includes(tag)) return;
    setFilterTray([...filterTray, tag]);
  }

  function removeFromFilterTray(tag: string) {
    let arr = filterTray;
    arr.splice(filterTray.indexOf(tag), 1);
    setFilterTray([...arr]);
  }

  function resetFilterTray() {
    setFilterTray([]);
    setFilteredList(dataList);
  }

  return (
    <>
      <header className={"h-[150px] w-full bg-heading-primary"}>
        <img src={"bg-header-desktop.svg"} alt="" className="h-full w-full" />
      </header>

      {filterTray.length !== 0 ? (
        <div className={"w-full flex justify-center"}>
          <div
            className={
              "absolute flex content-center justify-between px-[30px] flex-wrap w-[1000px] top-[115px] h-[70px] bg-white shadow-xl"
            }
          >
            <section className={"flex"}>
              {filterTray.map((tag) => {
                return (
                  <FilterTag
                    key={tag + `${filterTray.length}`}
                    handler={removeFromFilterTray}
                  >
                    {tag}
                  </FilterTag>
                );
              })}
            </section>
            <button
              className={
                "font-default text-heading-primary font-bold hover:underline"
              }
              onClick={resetFilterTray}
            >
              Clear
            </button>
          </div>
        </div>
      ) : (
        <div className={"hidden"}></div>
      )}
      <ul
        className={
          "mt-[60px] flex flex-col justify-center content-center flex-wrap"
        }
      >
        {filteredList.map((data) => {
          return <Tablet key={data.id} data={data} handler={addToFilterTray} />;
        })}
      </ul>
    </>
  );
}
