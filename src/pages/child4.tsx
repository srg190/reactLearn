import React from "react";
let x: number = 0;
const child4 = () => {
  x++;
  console.log("child 4 : ", x);
  return <div>child4</div>;
};

export default child4;
