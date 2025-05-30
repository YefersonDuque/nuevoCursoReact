import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"
export const Memorize = () => {
    const { counter, increment } = useCounter(0)
    const [show, setShow] = useState(true)
    return (
        <>
            <h1> Counter: <Small value={counter} /> </h1>
            <hr />
            <button className='btn btn-primary mt-2' onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-primary mt-2" onClick={ () => setShow(!show) }>Show/Hide {JSON.stringify(show)} </button>
        </> 
    )
}

