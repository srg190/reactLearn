import React, { FC, memo, useState } from "react";
import Child3 from "./child3";
import Child4 from "./child4";
import Parent from "./parent";

// memo lets you skip re-rendering a component when its props are unchanged.

let x: number = 0;
interface userName {
  name: string;
}

const child1: FC<userName> = memo(({ name }) => {
  const [info, setInfo] = useState("");
  x++;
  console.log("child 1 : ", x);
  return (
    <>
      <div>{name}</div>
      <div>{info}</div>
      <Parent information={setInfo} />
      <Child3 />
      <Child4 />
    </>
  );
});

export default child1;
