import { useState } from "react";
// import Timer from "./Timer";
import Avatar from "./Avatar";

function App() {
  
  const [toggle, setToggle] = useState(false)



  return (
    <div style={{padding:20}}>
      
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle && <Avatar />}
    </div>
  );
}

export default App;
