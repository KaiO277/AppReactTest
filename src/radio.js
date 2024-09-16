import { useState } from "react";

  const courses = [{
    id:1,
    name: "nghia"
  },
  {
    id:2,
    name: "nghia2"
  },
  {
    id:3,
    name:'Kaio'
  }
  ]
    

function App() {


  const [checked, setChecked] = useState()  
  console.log(checked);

  const handleSubmit = () => {
    
    
  }

  return (
    <div className="App" style={{padding:20}}>
      {
        courses.map(course => (
          <div key={course.id}>
            <input 
              type="radio"
              checked = {checked === course.id}
              onChange={() =>setChecked(course.id)}
            />
            {course.name}
          </div>
        ))    

      }
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
