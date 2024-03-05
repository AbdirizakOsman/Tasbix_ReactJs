import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Tasbiix from './components/Tasbiix'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header />
    <Tasbiix />
  </React.StrictMode>,
)
