import "./App.css";
//importacion de componentes
import Tarjeta from "./components/Tarjeta";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
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
