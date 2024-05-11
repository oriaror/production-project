import { useState } from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(classes);
  return (
    <div>
      <button
        className={classes.btn}
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
};
