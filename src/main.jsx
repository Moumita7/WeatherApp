import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
      <BrowserRouter>
       {/* <MyContext.Provider value={{ city, setCity,searchVal,setSearchVal }}> */}
    <App />

       {/* </MyContext.Provider> */}
      </BrowserRouter>

  // </React.StrictMode>
  ,
)
