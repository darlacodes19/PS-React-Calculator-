import React, { useState } from 'react'



function Calculator () {
 
    
    // const [value, setValue] = useState ({
    //     first: "",
    //     second: "",
    // })
    const [value1, setValue1] = useState ('')
    // ({
    //     value1: '',
    //     value2: '',
    //     result: ' '

    // });

   

    const [value2, setValue2] = useState ('');
    const [result, setResult] = useState ('');


    // const cachedValue = useMemo(() =>setResult(),[value1, value2])
    // const cachedValue2 = useMemo(() =>multipyThemTogether(), [value1, value2])
    function addThemTogether (e) {
        e.preventDefault();
        setResult(value1 + value2)
       

    }
    function multipyThemTogether (e) {
        e.preventDefault();
        setResult( value1 * value2)
    


    }
   
    function subtract (e) {
        e.preventDefault();
        setResult(value1 - value2)

    
        }

  
    function divide (e) {
        e.preventDefault();
        setResult(value1/ value2)

    }


    // function handleChange(e) {
    //     setValue({ 
    //         first: e.target.value.first ,
    //         second:  e.target.value.second      
    //     });
    //   }

    return (

        <div className="container">

        <h1>React Calculator</h1>

 

        <form className="add">

          
            <div className='text-inputs'> 
                    <input 
                    type="text"  
                    onChange ={ (e) => setValue1(+e.target.value)}
                    />

                

                    

                    <input 
                    type="text" 
                    onChange ={ (e) => setValue2(+e.target.value)}
                    className = "second"
                    
                    />

                </div> 
       
                <div className='buttons'> 
                    <button name = 'addbutton' onClick={addThemTogether}> Add </button> 
                    <button name = 'subbutton' onClick={subtract}> Subtract </button> 
                    <button name = 'multiplybutton' onClick={multipyThemTogether}> Multiply </button> 
                    <button name = 'dividebutton'  onClick={divide}> Divide </button>  

                </div> 


           
            <span className='results'>{result} </span>

           
            


  </form>





</div>
    )
}


export default Calculator

// value={inputs.value1 || ""}
// value={inputs.value2 || ""}