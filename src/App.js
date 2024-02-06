import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
  	// Add the code for the minus function 
    setResult((result) => result - Number(inputRef.current.value))
  };
 
  function times(e) { 
    e.preventDefault();
    // Add the code for the plus function 
    setResult((result) => result * Number(inputRef.current.value))
  }; 
 
  function divide(e) { 
    e.preventDefault();
    // Add the code for the divide function 
    setResult((result) => result / Number(inputRef.current.value))
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form className="calculator-body"> 
        <p className="calculator-visor" ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div className="btns">
          <div className="btns-operations">
            <div>
              <button onClick={plus}>+</button>
              <button onClick={minus}>-</button> 
            </div>
            <div>
              <button onClick={times}>x</button>
              <button onClick={divide}>÷</button> 
            </div>
          </div>
          <div className="btns-reset">
            <button onClick={resetInput}>CI</button>
            <button onClick={resetResult}>C</button> 
          </div>
        </div> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
