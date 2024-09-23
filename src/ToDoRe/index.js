import { useReducer, useRef } from "react"
import {setJob, addJob, removeJob} from './actions'
import redutor, {initState} from './reducer'

function ToDoRe(){



    const[state, dispatch] = useReducer(redutor, initState)
    const {job, jobs} = state
    const inputRef = useRef()
    // console.log(state)
    const handleSubmit = () =>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

return (
    <div>
        <h2>To do</h2>
        <input 
            placeholder="Enter todo...."
            ref={inputRef}
            value={job}
            onChange={(e=>{
                dispatch(setJob(e.target.value))
            })}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
            {jobs.map((job, index)=>(
                <li key={index}>
                    {job} 
                    <span onClick={()=>{dispatch(removeJob(index))}}> 
                        &times;
                    </span>
                </li>
            ))}
            
        </ul>
    </div>
)

}

export default ToDoRe;