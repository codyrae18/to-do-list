import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (!items) {
      fetch("")
        .then((response) => response.json())
        .then((todoItems) => {
          console.log(todoItems);
          if (todoItems) setItems(todoItems);
        });
    }
  }, [items]);

  return (
    <div className="min-h-full px-20 bg-bg">
      <nav className="bg-primary-clear  rounded">
        <div className="h-14 flex items-center">
          <div className="  ml-3 ">
            <h1>To do app LOGO</h1>
          </div>
        </div>
      </nav>

      <h1 className="mt-20">List: </h1>

      <div className="h-screen">
        <div className="flex flex-wrap justify-center items-center h-52 gap-1">
          {items ? (
            items.map((element) => {
              return (
                <div
                  className="flex justify-center items-center w-32 h-28 bg-primary-clear rounded-md shadow-2xl"
                  key={element.id}
                >
                  <input type="checkbox" checked={element.done} />
                  <span>{element?.task}</span>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center w-32 h-28 bg-primary-clear rounded-md shadow-2xl">
              loading data...
            </div>
          )}
        </div>
      </div>

      {/* <header className="App-header">
        TO DO NOTES:
        <div>
          {items ? (
            items.map((element) => {
              return (
                <div key={element.id}>
                  <input type="checkbox" checked={element.done} />
                  <span>{element?.task}</span>
                </div>
              );
            })
          ) : (
            <div>loading data...</div>
          )}
        </div>
      </header> */}
    </div>
  );
}

export default App;
