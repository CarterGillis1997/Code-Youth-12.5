import React, { useState } from "react";

function FunctionalCounter(props){
    let [counter, setCounter] = useState(props.initial);

    function increase(){
        setCounter(counter + 1)
    }

    function decrease(){
        setCounter(counter - 1)
    }

    function reset(){
        setCounter(counter = props.initial)
    }

    return(
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <p>Counter: {counter}</p>
        </div>
    )
}
export default FunctionalCounter;