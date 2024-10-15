import React from 'react'

function FormTask6() {
    let mycountry = []
    const handleChange=()=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target)
    }
  return (
    <div>
      <h2>Form Task 6</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <select id='country' name='country' onChange={handleChange} multiple>
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
    </div>
  )
}

export default FormTask6;
