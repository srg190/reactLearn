import React, {
  Dispatch,
  FC,
  useCallback,
  useState,
  SetStateAction,
} from "react";
let x: number = 0;
interface userName {
  name: string;
  fn: Dispatch<SetStateAction<string>>;
}
const Child2: FC<userName> = ({ name, fn }) => {
  const [newName, setNewName] = useState(name);
  x++;
  const fire = () => {
    fn("hello HardCoded");
  };
  console.log("child 2 : ", x);
  const fun = useCallback(() => {
    console.log("called this child: 2");
    // setNewName(name);
    fire()
  }, [newName]);
  return <div onClick={() => fun()}>{name}</div>;
};

export default Child2;
