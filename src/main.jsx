import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { AuthWrapper } from "./auth/AuthWrapper.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthWrapper />
    </BrowserRouter>    
  </React.StrictMode>,
)
