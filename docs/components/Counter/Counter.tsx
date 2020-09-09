import React from "react";
import { useTrait, useTraitValue, SetterHelpers, WithSetter } from "temperjs";

function Counter() {
  const [count, setCount] = useTrait("counter.count") as WithSetter<number>;
  const isTargetReached = useTraitValue("counter.isTargetReached") as boolean;

  function incrementCounter() {
    setCount(({ value }: SetterHelpers<number>) => (value as number) + 1);
  }
  function decrementCounter() {
    setCount(({ value }: SetterHelpers<number>) => (value as number) - 1);
  }

  return (
    <div>
      <p>
        {count} {isTargetReached && <span>You've reached the target!</span>}
      </p>
      <button onClick={incrementCounter}>Increment</button>
      &nbsp;
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default Counter;
