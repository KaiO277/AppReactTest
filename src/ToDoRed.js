import { useReducer, useRef } from "react"

function ToDoRe(){

    const initState = {
        job: '',
        jobs: []
    }

    const SET_JOB = 'set_job'
    const ADD_JOBS = 'add_jobs'
    const REMOVE_JOB = 'remove_job'

    const setJob = payload =>{
        return {
            type: SET_JOB,
            payload
        }
    }
    const addJob = payload =>{
        return {
            type: ADD_JOBS,
            payload
        }
    }

    const removeJob = payload =>{
        return {
            type: REMOVE_JOB,
            payload
        }
    }

    const redutor = (state, action) =>{
        let  newState
        switch(action.type){
            case SET_JOB:
                newState = {
                    ...state,
                    job: action.payload
                }
                break
            case ADD_JOBS:
                newState = {
                    ...state,
                    jobs: [...state.jobs, action.payload]
                }
                break
            case REMOVE_JOB:
                const newJobs = [...state.jobs]
                newJobs.splice(action.payload, 1)
                newState = {
                    ...state,
                    jobs: newJobs
                }
                break
            default:
                throw new Error('invalib action')
        }
        return newState
    }

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