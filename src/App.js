import { useState, useEffect } from 'react';

import "./App.css";

import Home from './components/HomePage';
import useWindowDimensions from './hooks/WindowDimensions';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Registro from './components/Registro';
import Sidebar from './components/Sidebar';
import Grid from './components/Grid';
import Pendientes from './components/Pendientes';

import db from './services/database';

import {
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const [items, setItems] = useState([]);
  const { width: windowWidth } = useWindowDimensions();

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
      <Routes>
        <Route path='/' element={<><Navbar /><Home /></>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Registro />}></Route>
        <Route path='/courses' element={<div style={{
          display: 'flex',
          flex: 'row wrap',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}>
          <Sidebar breakpoint={MidBreakpoint} />
          <Grid
            items={items}
            style={{
              height: '100%',
              overflow: 'auto'
            }}
          />
        </div>}></Route>
        <Route path='/pendientes' element={
          <div style={{
            display: 'flex',
            flex: 'row wrap',
            alignItems: 'center',
            height: '100%'
          }}>
            <Sidebar breakpoint={MidBreakpoint} />
            <div style={{
              display: 'flex',
              height: '100%',
              width: '75%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Pendientes />
            </div>
          </div>
        }>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
