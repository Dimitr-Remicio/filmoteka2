import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import Headers from './additional/head/head.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/filmoteka2">
      <App />
    </BrowserRouter>
      <Headers/>
  </React.StrictMode>,
)
