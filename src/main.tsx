import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchNavProvider } from "@/contexts/SearchNavContext.tsx"
import Router from './Router.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchNavProvider>
      <Router />
    </SearchNavProvider>
  </StrictMode>,
)
