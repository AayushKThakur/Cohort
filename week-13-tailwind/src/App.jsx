import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-4 bg-blue-200">
          hi there from the first div
        </div>
        <div className="col-span-12 sm:col-span-6 bg-yellow-300">
          hi there from the second div
        </div>
        <div className="col-span-12 sm:col-span-2 bg-green-300">
          hi there from the third div
        </div>
      </div>
    </>
  );
}

export default App;
