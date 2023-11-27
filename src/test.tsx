// import { useState } from "react";
import { useReducer } from "react";
import "./App.css";
let counter = 0;

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknwn Acion");
  }
}

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => {
    dispatch({
      type: "setCount",
      value: state.count + 5,
    });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
  console.log("counting re-renders", (counter += 1));
  return (
    <>
      {/* <Button text="Hello World" /> */}
      <div>
        <h1>Welcome to my counter</h1>

        <p>Count: {state.count}</p>
        <button onClick={addFive}>Add 5</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
