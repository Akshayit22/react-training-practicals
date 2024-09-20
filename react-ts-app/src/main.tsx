// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './Dynamic_Item_Manager/Context/AppContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppContextProvider>
      <App/>  
    </AppContextProvider>
  </BrowserRouter>
)
