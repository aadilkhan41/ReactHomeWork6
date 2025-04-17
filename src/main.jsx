import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cart from "./pages/Cart/Cart";

createRoot(document.getElementById('root')).render(
  <Cart/>,
)
/*
  StrictMode>
    <Cart/>
  </StrictMode>
*/