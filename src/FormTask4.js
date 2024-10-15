import React, { useEffect, useState } from 'react'

function FormTask4() {
    const [isHobbiesSelected, setIsHobbiesSelected] = useState(false)
    const [hobbies, setHobbies] = useState([])
    const handleChange=(e)=>{
        if(e.target.checked==true){
            hobbies.push(e.target.value)
            setHobbies(hobbies)
        }
        else if(e.target.checked==false){
            var index = hobbies.indexOf(e.target.value);
            if (index !== -1) {
              hobbies.splice(index, 1);
              setHobbies(hobbies)
            }
        }
        if(hobbies.length>0){
            console.log("length > 0")
            setIsHobbiesSelected(true)
        }
        else if(hobbies.length<=0){
            console.log('length<=0')
            setIsHobbiesSelected(false)
        }
        console.log(hobbies)
    }
  return (
    <div>
    <h2>Form Task 4</h2>
    <form>
        <input type='checkbox' name='hobbies' id='read' value='read' onChange={(e)=>handleChange(e)}/>Reading <br/>
        <input type='checkbox' name='hobbies' id='write' value='write' onChange={(e)=>handleChange(e)}/>Writing <br/>
        <input type='checkbox' name='hobbies' id='walk' value='walk' onChange={(e)=>handleChange(e)}/>Walking <br/>
        <input type='checkbox' name='hobbies' id='play' value='play' onChange={(e)=>handleChange(e)}/>Playing <br/>
        <br/>

        <button disabled={!isHobbiesSelected}>Submit</button>
    </form>
    </div>
  )
}

export default FormTask4;
