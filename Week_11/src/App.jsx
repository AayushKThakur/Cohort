import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/use-prev";

// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finalData, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts/" + currentPost,
//     10
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <button onClick={() => setCurrentPost(1)}>1</button>
//       <button onClick={() => setCurrentPost(2)}>2</button>
//       <button onClick={() => setCurrentPost(3)}>3</button>
//       {JSON.stringify(finalData)}
//     </div>
//   );
// }

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click Me
      </button>
      <p>The previous value was {prev}</p>
    </>
  );
}

export default App;
