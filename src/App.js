import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <div className="App">
      <Tarjeta
        titulo={"Hello world"}
        img={{
          src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          alt: "arbolito",
        }}
      />
    </div>
  );
}

export default App;
