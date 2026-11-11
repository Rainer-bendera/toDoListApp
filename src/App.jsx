import { useState } from "react";
import firstComponent from "./component/firstComponent";
function App() {

  const [x, setx] = useState(0);
  const btnClick = () => {
    setx(x+1);
    console.log(x);
    console.log("clicked");
  }
  return (
    <div>
      <firstComponent data ={x}/>
      <button onClick={() => {btnClick()}}>Click Me</button>
    </div>
  )
}
export default App