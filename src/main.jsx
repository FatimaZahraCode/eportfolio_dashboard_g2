import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import tareasRA from './mocks/mock-tareasRA.js'
import TokenContext from './contextos/TokenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TokenContext.Provider value={tareasRA}>
      <App />
    </TokenContext.Provider>

  </StrictMode>,
)
