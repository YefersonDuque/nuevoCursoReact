import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback(() => {
        setCounter((value) => value +1);
}, [],)

// const incrementFather = () => {
//     setCounter(counter + 1)
// }

return (
    <>
        <h1>CallbackHook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFather} />
    </>
)
}

