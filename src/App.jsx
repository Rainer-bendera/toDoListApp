import React, { useState } from 'react'
import FirstComponent from './component/firstComponent'

function App() {

  const [x, setx] = useState(0);
  const btnClick = () =>{
    setx(x + 1);
    console.log("Clicked")
  }


  return (
    <div>
      <FirstComponent data={x}/>
      <button onClick={() => {btnClick()}}>Click Me</button>
    </div>
  )
}

export default App