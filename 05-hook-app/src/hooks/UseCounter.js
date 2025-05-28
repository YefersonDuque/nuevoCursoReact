import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter ( counter + 1);
    }

    const decrement = () => {
        //Para que no le deje restar si es cero, no puede estar por debajo del cero
        if(counter === 0) return;
        setCounter ( counter -1);
    }

    const reset = () => {
        setCounter (initialValue);
    }

    return {counter,increment,decrement,reset};
}
