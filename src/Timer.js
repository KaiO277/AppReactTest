import { useEffect, useState } from "react";

function Timer(){
    const [timer, setTimer] = useState(180)

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setTimer(prevStage => prevStage -1)
        }, 1000)

        return ()=>{
            clearInterval(timerId)
        }
    },[])

    return(
        <div>
            <h1>{timer}</h1>
        </div>
    )
}

export default Timer;