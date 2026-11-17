import { useState } from "react";
import  FirstComponent  from "./component/firstComponent";

function App() {

  const [X, setx] = useState(0);
  const btnClick = () => {
    setx(X+1);
    
    console.log("clicked");
  }
  return (
    <div>
      <FirstComponent data={X}/>
      <button onClick={() => {btnClick()}}>Click Me</button>
      
    </div>
  )
}
export default App