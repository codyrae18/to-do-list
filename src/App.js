import "./App.css";
import Navbar from "./components/Navbar";
import Todobody from "./components/Todobody";

function App() {
  return (
    <div className="App">
      <p>Welcome to Mark, Vincent and Cody's TO DO APP App</p>
      <Navbar />
      <Todobody />
    </div>
  );
}

export default App;
