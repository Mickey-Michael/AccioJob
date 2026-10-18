import { createContext, useState } from "react";

export const Mycontext = createContext()

export function Themecontext({children})
{
    const [thame, setThame] = useState(true)

    return (
        <Mycontext.Provider value={{thame,setThame}} >
            {children}
        </Mycontext.Provider>
    )
}
