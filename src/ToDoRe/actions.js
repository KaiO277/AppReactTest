import {SET_JOB, ADD_JOBS, REMOVE_JOB} from './constants'

export const setJob = payload =>{
    return {
        type: SET_JOB,
        payload
    }
}
export const addJob = payload =>{
    return {
        type: ADD_JOBS,
        payload
    }
}

export const removeJob = payload =>{
    return {
        type: REMOVE_JOB,
        payload
    }
}