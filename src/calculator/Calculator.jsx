import { useState } from "react";

const Calculator = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);

    const handleChange1 = (e) => {
        setNumber1((e.target.value));
    }

    const handleChange2 = (e) => {
        setNumber2((e.target.vlaue));
    }

    handleAddition = () => {
        setResult(Number(number1) + Number(number2));
    }

    return (
        <div> 
            <h1>Calculator Component</h1>

            <input type="number" name="number1" id="number1" 
            onChange={handleChange1()}/>
            
            <button onClick={handleAddition()}>+</button>

            <input type="number" name="number2" id="number2" 
            onChange={handleChange2}/>

            result: {result}
            
        </div>
    )
}

export default Calculator; 