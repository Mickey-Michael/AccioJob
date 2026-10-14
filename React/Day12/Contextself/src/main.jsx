import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProviter } from '../Utils/Contextfile.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProviter>
    <App />
  </ContextProviter>
    
)
