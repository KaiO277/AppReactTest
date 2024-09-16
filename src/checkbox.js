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


  const [checked, setChecked] = useState([])  
  console.log(checked);

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked){
        return checked.filter(item => item !== id)
      }else{
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    
    
  }

  return (
    <div style={{padding:20}}>
      {
        courses.map(course => (
          <div key={course.id}>
            <input 
              type="checkbox"
              checked = {checked.includes(course.id)}
              onChange={() =>handleCheck(course.id)}
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
