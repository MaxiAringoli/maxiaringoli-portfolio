import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { trackEvent } from './analytics'
import './styles.css'

trackEvent('page_view')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
