import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <CssBaseline />
      <Toaster />
      <App />
    </BrowserRouter>
  </HelmetProvider>

)
