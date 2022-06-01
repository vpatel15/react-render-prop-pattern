import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <Child>
        {(count, handleCount) => (
          <>
            <h1>{count}</h1>
            <button onClick={handleCount}>Click</button>
          </>
        )}
      </Child>
    </>
  );
};

const Child = (props) => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return <>{props.children(count, handleCount)}</>;
};

ReactDOM.render(<App />, document.getElementById("container"));
