import React, { useState } from 'react'
import './index.css'

const App = () => {
    const [result, setResult] = useState('')
    const [input, setInput] = useState('')
    const operators = ['+', '-', '*', '/']
    const updateInput = (value) => {
        if ((operators.includes(value) && input === '') || (operators.includes(value) && operators.includes(input.slice(-1)))) { 
            return 
        }
        
            setInput((prev) => prev + value)
        
        if (!operators.includes(value)) {
            setResult(eval(input+value).toString())
        }
    }
    const numbers = []
    for (let i = 0; i < 10; i++) {
        numbers[9 - i] = i;
    }
    const del=()=>{
        if (input==='') {
            return
        }
        else if (operators.includes(input.slice(-1))) {
            const newInput=input.slice(0,-1)
            setInput(newInput)
        }
        else{
            const newInput=input.slice(0,-1)
            setInput(newInput)
            setResult(newInput)
        }
    }
    return (
        <div className="app">
            <div className="calculator">
                <div className="result"><span className="result-span">({result||'0'})</span>{input || 0}</div>
                <div className="buttons">

                    <button onClick={() => { updateInput('+') }}>+</button>
                    <button onClick={() => { updateInput('-') }}>-</button>
                    <button onClick={() => { updateInput('*') }}>*</button>
                    <button onClick={() => { updateInput('/') }}>/</button>
                    <button onClick={() => { setInput('');setResult('') }}>C</button>
                    <button onClick={del}>DEL</button>


                    {numbers.map((num) => {
                        return <button key={num} onClick={() => { updateInput(num.toString()) }}>{num}</button>
                    })}
                    <button onClick={() => { updateInput('.') }}>.</button>
                    <button className="equal" onClick={()=>{setInput(result)}}>=</button>
                </div>

            </div>
        </div >
    )
}

export default App
