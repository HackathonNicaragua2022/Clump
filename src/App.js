import { useState, useEffect } from 'react';

import "./App.css";

import Grid from './components/Grid';
import Sidebar from './components/Sidebar';
import useWindowDimensions from './hooks/WindowDimensions';
import FloatingButton from './components/FloatingButton';

function App() {

  const [items, setItems] = useState([]);
  const { width: windowWidth  } = useWindowDimensions();

  const MidBreakpoint = 1000;

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

  const gridStyle = {
    height: '100vh',
    width: (windowWidth > MidBreakpoint) ? '75%' : '100%',
    overflow: 'auto'
  };

  return (
    <div className="App">
      <Sidebar breakpoint={MidBreakpoint} />
      <Grid
        style={gridStyle}
        items={items}
      />
    </div>
  );
}

export default App;
