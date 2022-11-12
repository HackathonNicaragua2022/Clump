import { useState, useEffect } from 'react';
import "./App.css";
//importacion de componentes
import Login from "./components/Login";
import Grid from './components/Grid';
import Sidebar from './components/Sidebar';

function App() {

  const [items, setItems] = useState([]);

  const ImageWidth = 350;
  const ImageHeight = 230;
  const RandomImageAPI = `https://picsum.photos/`;

  useEffect(() => {

    const titulos = [
      "Matematicas I",
      "Algebra I",
      "Geometria computacional",
      "Calculo I",
      "Calculo II",
      "Calculo III",
      "Fisica I",
      "Fisica II",
      "Algoritmizacion y estructuras de datos",
      "Ingenieria de software"
    ];

    (async () => {
      const newItems = [];
      for (let i = 0; i < 10; i++) {
        const response = await fetch(`${RandomImageAPI}${ImageWidth}/${ImageHeight}`);
        if (response.ok) {
          newItems.push({
            title: titulos[i % titulos.length],
            img: {
              src: response.url,
              alt: `image-${i}`
            }
          });
        }
        else {
          console.log('error de conexion');
        }
      }
      setItems(newItems);
    })();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Grid
        style={{
          height: '100vh',
          width: '75%',
          overflow: 'auto'
        }}
        items={items}
      />
    </div>
  );
}

export default App;
