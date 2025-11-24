import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './assets/componentes/Contador';

function App() {
  let contador=0;

  return (
    <>
    <div>
      <p>Ejemplo de useState</p>
      <Contador contador={contador}></Contador>
    </div>
    </>
  )
}

export default App
