import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Root.jsx'
import ProviderData from './components/provider/ProviderData.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderData>
      <RouterProvider router={router}/>
    </ProviderData>
  </StrictMode>,
)
