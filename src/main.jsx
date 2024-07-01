import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
