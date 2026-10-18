import { createContext, useState } from "react";

export const MyContext = createContext()

export function AuthContext({children})
{

    const [log, setLog] = useState(false)
    
    return (
        <MyContext.Provider value={{log, setLog}}>
            {children}
        </MyContext.Provider>
    )
}