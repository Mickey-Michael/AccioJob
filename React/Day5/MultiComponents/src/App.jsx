import React, { useState } from "react";
import Left from "./Components/Left";
import Right from "./Components/Right";


const App = () => {

  const [text, setText] = useState("")

  return (
    <div style={{display : "flex", justifyContent : "space-between"}}>
      <Left setText={setText}/>
      <Right text={text}/>
    </div>
  )
}

export default App