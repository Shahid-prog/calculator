import React from 'react';
import Keypad from './components/Keypad/Keypad';
import Display from './components/Display/Display';
import {useState} from 'react';
import {evaluate} from 'mathjs';

const App = () => {
    const [expression,setExpression] = useState("");
    const [result,setResult] = useState();

    const handleClick = (event) => {
        let clickedButton = event.target;
        if(clickedButton.innerHTML === "="){
            evaluateResult()
        }else if(clickedButton.innerHTML === "del"){
            setExpression(prevState => prevState.slice(0,prevState.length-1));
        }else if(clickedButton.innerHTML === "C"){
            setExpression("");
            setResult();
        }else{
            setExpression(prevState => prevState + clickedButton.innerHTML);
        }
    }

    const evaluateResult = () =>{
        setResult(evaluate(expression));
    }

    return(
        <div>
            <Display result={result} expression={expression}/>
            <Keypad handleClick = {handleClick}/>
        </div>
    )
}

export default App;