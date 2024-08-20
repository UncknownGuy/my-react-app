import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Img from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Img />
  </StrictMode>,
)
