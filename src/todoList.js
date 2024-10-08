import { useState } from "react";

function App() {
  
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  
  // console.log(job)

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }

  return (
    <div style={{padding:20}}>
      <input 
      value={job}
      onChange={e =>setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {
        jobs.map((job, index) => (
            <li key={index}>{job}</li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
