import { useState } from "react";
// import UReff from "./UReff";
// import UReducer from "./UReducer";
// import ToDoRe from "./ToDoRe";
import ToDoApp from './ToDoRe'
// import FakeChat from "./FakeChat";
// import Timer from "./Timer";
// import Avatar from "./Avatar";

function App() {
  
  const [toggle, setToggle] = useState(false)

  

  return (
    <div style={{padding:20}}>
      
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle && <ToDoApp/>}
    </div>
  );
}

export default App;
