import { useRef, useState } from "react";

function UReff(){
    const [count, setCount] = useState(60)
    const timeId = useRef()

    const handleRun = () =>{
        timeId.current = setInterval(()=>{
            setCount(prevCount => prevCount -1)
        }, 500)
    }

    const handleStop = () =>{
        clearInterval(timeId.current  )
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )

}

export default UReff;