import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css";
import App from './App.js'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento raíz. Asegúrate de que index.html tenga un <div id='root'></div>");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)