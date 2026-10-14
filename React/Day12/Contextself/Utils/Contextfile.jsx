import { useState, createContext} from "react";


export const Mycontext = createContext()

export function ContextProviter({children})
{
    const [text , setText ] = useState([])

    return <Mycontext.Provider value={{text ,setText}}>
        {children}
    </Mycontext.Provider>
}
