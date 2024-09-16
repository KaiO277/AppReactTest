import { useState } from "react";
import FakeChat from "./FakeChat";
// import Timer from "./Timer";
// import Avatar from "./Avatar";

function App() {
  
  const [toggle, setToggle] = useState(false)



  return (
    <div style={{padding:20}}>
      
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle && <FakeChat />}
    </div>
  );
}

export default App;
