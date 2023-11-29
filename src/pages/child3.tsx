import React from "react";
let x: number = 0;
const child3 = () => {
  x++;
  console.log("child 3 : ", x);
  return <div>child3</div>;
};

export default child3;