import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCoustomHook } from './01-useState/CounterWithCoustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './05-memos/Memorize'
// import { MemoHook } from './05-memos/MemoHook'
// import { CallbackHook } from './05-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <TodoApp />
  // </StrictMode>,
)
