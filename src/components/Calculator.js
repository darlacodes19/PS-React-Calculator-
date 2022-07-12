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
    function addThemTogether () {
        setResult(value1 + value2)
       

    }
    function multipyThemTogether () {
        setResult( value1 * value2)
    


    }
   
    function subtract () {
        setResult(value1 - value2)

    
        }

  
    function divide () {
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

        <h1>React Calculator!</h1>

 

        <form className="add">

          
      
                <input 
                type="text" 
                name="first"  
                onChange ={ (e) => setValue1(+e.target.value)}
                />

            

                

                <input 
                type="text" 
                name="second" 
                onChange ={ (e) => setValue2(+e.target.value)}
                
                />
       

                <button name = 'addbutton' onClick={addThemTogether}> Add </button> 

                <button name = 'subbutton' onClick={subtract}> Subtract </button> 
                <button name = 'multiplybutton' onClick={multipyThemTogether}> Multiply </button> 
                <button name = 'dividebutton'  onClick={divide}> Divide </button>  


           
            <span>={result} </span>

           
            


  </form>





</div>
    )
}


export default Calculator

// value={inputs.value1 || ""}
// value={inputs.value2 || ""}