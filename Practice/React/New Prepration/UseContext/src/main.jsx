import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Themecontext } from './Utils/Context.jsx'
import { AuthContext } from './Utils/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <Themecontext>
        <AuthContext>
            <App />
        </AuthContext>
    </Themecontext>
    
)
