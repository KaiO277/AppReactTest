import {ADD_JOBS,REMOVE_JOB,SET_JOB} from './constants'

export const initState = {
    job: '',
    jobs: []
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

export default redutor;