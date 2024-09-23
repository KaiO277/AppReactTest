import { useReducer } from "react"

function UReducer(){
    const InitState = 0
    const UP_ACTION = 'up'
    const DOWN_ACTION = 'down'

    const redutor = (state, action)=>{
        switch (action){
            case UP_ACTION:
                return state + 1
            case DOWN_ACTION:
                return state - 1
            default:
                return new Error('Inv')
        }
    }

    const [count, dispatch] = useReducer(redutor, InitState)

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(UP_ACTION)}>UP</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>

        </div>
    )
}

export default UReducer;