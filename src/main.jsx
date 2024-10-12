import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataContext, { AppContext } from './Context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </StrictMode>,
)
