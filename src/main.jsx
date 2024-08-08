import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCoustomHook } from './01-useState/CounterWithCoustomHook'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <CounterWithCoustomHook />
  </StrictMode>,
)
