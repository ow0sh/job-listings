export function New(props: { isHidden: boolean }) {
  if (props.isHidden) return <div className={"hidden"}></div>;
  return (
    <div
      className={
        "mr-[10px] flex w-[50px] h-[20px] bg-heading-primary text-white justify-center flex-col flex-wrap font-bold rounded-xl font-default text-xs content-center"
      }
    >
      NEW!
    </div>
  );
}

export function Features(props: { isHidden: boolean }) {
  if (props.isHidden) return <div className={"hidden"}></div>;

  return (
    <div
      className={
        "flex w-[80px] h-[20px] bg-text-primary justify-center text-white flex-col flex-wrap font-bold rounded-xl font-default text-xs content-center "
      }
    >
      FEATURED
    </div>
  );
}
