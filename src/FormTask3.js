import React, { useEffect, useState } from 'react'

function FormTask3() {
    const[isWorking, setIsWorking] = useState(false)
    useEffect(()=>{
        var h = new Date().getHours()
        if(h>=10 && h<13 || h>=14 && h<18){
            setIsWorking(true);
        }
        else{
            setIsWorking(false)
        }
    })
  return (
    <div>
      <h2>Form Task 3</h2>
      <form>
        {/* {isWorking} */}
        <button disabled={!isWorking}>Work now</button>
      </form>
    </div>
  )
}

export default FormTask3;
