import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp'

import "./index.css"
import { UserProvider } from './context/UserContext'
import { Navbar } from './components/navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Navbar />
      <RouterApp />
    </UserProvider>
  </StrictMode>,
)

