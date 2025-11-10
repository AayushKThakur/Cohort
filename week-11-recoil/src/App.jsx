import "./App.css";
import "./index.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}

function Counter() {
  // const [count, setCount] = useState(0); //used atom from recoil

  return (
    <div style={{ color: "black", fontSize: "20px" }}>
      <CurrentCount />
      <Increase />
      <Decrease />
      <IsEven />
    </div>
  );
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>{even ? "Even" : "Odd"}</div>;
}
function CurrentCount() {
  const count = useRecoilValue(counterAtom); //subscribed to the atom
  return <div>{count}</div>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom); //subscribed to the setter functions

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
