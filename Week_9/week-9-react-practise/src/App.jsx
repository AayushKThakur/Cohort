import { useState, useEffect } from "react";

//conditional rendering
function App() {
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function () {
    setInterval(function () {
      setCounterVisible((c) => !c);
    }, 5000);
  }, []);

  return (
    <div>
      hi
      {counterVisible && <Counter></Counter>}
      hello
    </div>
  );
}

// mounting, re-rendering, unmounting
function Counter() {
  const [count, setCount] = useState(0);

  // console.log("counter");
  //you can't do this.
  // setInterval(function(){
  //   setCount(count + 1);
  // }, 1000)

  // clearInterval
  //it has to be hooked into the lifecycle events of react
  useEffect(function () {
    console.log("on mount");

    let clock = setInterval(function () {
      console.log("from inside setInterval");

      setCount((count) => count + 1);
    }, 1000);
    console.log("mounted");

    return function () {
      console.log("on unmount");

      clearInterval(clock);
    };
  }, []); //dependency array, cleanup

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
}

export default App;
