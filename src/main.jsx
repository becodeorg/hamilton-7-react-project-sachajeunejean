import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

document.querySelector('.filters').addEventListener('click', () => {
  console.log("pass");
  document.getElementById('root').style.overflowY = 'hidden';
});