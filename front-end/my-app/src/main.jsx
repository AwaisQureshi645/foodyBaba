import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import  MobxProvider  from 'mobx-react-lite';
// // import App from './App';
// import cartStore from './component/State_Management/Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
//   <MobxProvider cartStore={cartStore}>
//   <App />
// </MobxProvider>,
)
