import React, { useState } from 'react'

function FormTask2() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [msg, setMsg] = useState('');
    const toggleTerms=(e)=>{
        setIsAgreed(e.target.checked)
        if(isAgreed==true){
            setIsAgreed(false)
            document.getElementById('msg').style.color="red";
            setMsg('Must read and accept terms before submission...')
        }
        else{
            setIsAgreed(true)
            document.getElementById('msg').style.color="green";
            setMsg('Thank You for accepting terms')   
        }
    }
  return (
    <div>
      <h2>Form Task 2</h2>
      <form>
        <input type='checkbox' checked={isAgreed} onChange={(e)=>toggleTerms(e)}/> Terms & Condition
        <br></br>
            <p id='msg'>{msg}</p>
      </form>
    </div>
  )
}

export default FormTask2;
