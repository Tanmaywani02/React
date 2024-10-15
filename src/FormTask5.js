import React, { useState } from 'react'
import India from '../src/images/indiaFlag.png'
import USA from '../src/images/usaFlag.png'
import Japan from '../src/images/japanFlag.png'
import Russia from '../src/images/russiaFlag.png'


function FormTask5() {
    let country={
        "india": India,
        "usa": USA,
        "japan": Japan,
        "russia": Russia
    }
    const[mycountry, setMyCountry] = useState(null)

    console.log(document.getElementById(country))
    const handleChange=(e)=>{
        setMyCountry(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById("countImg").src=country[mycountry];
    }

  return (
    <div>
      <h2>Form Task 5</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <select value={mycountry} id='country' name='country' onChange={handleChange}>
        <option value={null}>--Select--</option>
        <option value='india'>India</option>
        <option value='usa'>USA</option>
        <option value='japan'>Japan</option>
        <option value='russia'>Russia</option>
      </select>
      <br/>

      <input type='submit'/>
      </form>
      <br/>

      {mycountry!==null && <img id='countImg'/>}
      
    </div>
  )
}

export default FormTask5
