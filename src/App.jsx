import { useState } from "react"
import FirstComponent from "./component/firstComponent";


function App() {
  const [x, setx] = useState(0)
  const btnClick = () =>{
    setx(x+1);
    console.log("Clicked")
  }
  return (
    <div>
      <button onClick={() => {btnClick()}}>Click Me</button>
      <FirstComponent data ={x} fn={setx}/>
    </div>
  )
}

export default App