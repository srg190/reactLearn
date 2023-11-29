import React, {
  useReducer,
  useState,
  FC,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import Child1 from "./child1";
import Child2 from "./child2";

interface Information {
  information: Dispatch<SetStateAction<string>>;
}

const TodoList: FC<Information> = ({ information }) => {
  const [data, setData] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  console.log(data);
  return (
    <>
      <h1>Hello</h1>;
      <input type="text" value={data} onChange={handleChange} />
      <Child1 name="Child @=1" />
      <Child2 name={data} fn={information} />
    </>
  );
};

export default TodoList;
