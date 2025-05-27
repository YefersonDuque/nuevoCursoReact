import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({ value }) => {
    //Contador
    const [counter, setCounter] = useState(value);

    const botonMas = () => { setCounter(counter + 1) };
    const botonMenos = () => { setCounter(counter - 1) };
    const botonReseat = () => { setCounter(value) };

    return (<> <h1> CounterApp </h1> <h2> {counter} </h2>
        <button onClick={botonMas}> +1 </button>
        <button onClick={botonMenos}> -1 </button>
        <button onClick={botonReseat}> Reseat </button>
    </>)
}

CounterApp.propTypes = {
    value: PropTypes.number
}